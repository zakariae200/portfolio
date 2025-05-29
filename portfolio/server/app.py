from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import json
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get API key from environment variable
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
if OPENROUTER_API_KEY:
    print(f"[DEBUG] OpenRouter API Key loaded: Bearer {OPENROUTER_API_KEY[:8]}...{OPENROUTER_API_KEY[-4:]}")
else:
    print("[DEBUG] OpenRouter API Key NOT loaded!")
SITE_URL = os.getenv("SITE_URL", "https://zakariae.live")
SITE_NAME = os.getenv("SITE_NAME", "Zakariae's Portfolio")

app = Flask(__name__)
# Enable CORS for all routes
CORS(app)

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        
        if not data or 'messages' not in data:
            return jsonify({"error": "Invalid request data"}), 400
        
        # Extract messages from the request
        messages = data['messages']
        
        # Extract CV data if provided
        cv_data = data.get('cvData', {})
        
        # Create a system message with the user's specialized instructions and CV data in JSON
        system_message = {
            "role": "system",
            "content": f"""You are a specialized AI assistant for Zakariae El Mernissi, a Data Scientist & AI Engineer. 
        Your ONLY purpose is to provide accurate information about Zakariae's professional background, skills, education, 
        projects, and achievements. If asked about anything unrelated to Zakariae's professional information, 
        politely redirect the conversation back to Zakariae's qualifications and experience.
        
        Here is Zakariae information in JSON format that you should use to answer questions:
        {json.dumps(cv_data, ensure_ascii=False)}
        Be concise, professional, and helpful. Do not make up information that is not in the CV.
        Do not answer with table format.
        NB: Also answer in the same language as the user asks you in."""
        }
        
        # Prepare messages for the API call
        api_messages = [system_message] + messages
        
        # Prepare headers for OpenRouter API
        headers = {
            "Authorization": f"Bearer {OPENROUTER_API_KEY}",
            "Content-Type": "application/json",
            "HTTP-Referer": SITE_URL,
            "X-Title": SITE_NAME,
        }
        payload = {
            "model": "nvidia/llama-3.3-nemotron-super-49b-v1:free",
            "messages": api_messages
        }
        response = requests.post(
            url="https://openrouter.ai/api/v1/chat/completions",
            headers=headers,
            data=json.dumps(payload)
        )
        if response.status_code != 200:
            print(f"OpenRouter API error: {response.status_code} {response.text}")
            return jsonify({"error": "OpenRouter API error", "details": response.text}), 500
        return jsonify(response.json())
        
    except Exception as e:
        print(f"Error in chat endpoint: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # Check if API key is set
    if not OPENROUTER_API_KEY:
        print("Warning: OPENROUTER_API_KEY environment variable not set!")
        
    # Run the Flask app
    app.run(host='0.0.0.0', port=5000, debug=True)