const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, cvData } = req.body;
    
    // Create the system prompt with CV data on the backend
    const systemPrompt = `You are a specialized AI assistant for Zakariae El Mernissi, a Data Scientist & AI Engineer. 
    Your ONLY purpose is to provide accurate information about Zakariae's professional background, skills, education, 
    projects, and achievements. If asked about anything unrelated to Zakariae's professional information, 
    politely redirect the conversation back to Zakariae's qualifications and experience.
    
    Here is Zakariae information in JSON format that you should use to answer questions:
    ${JSON.stringify(cvData, null, 2)}
    
    IMPORTANT FORMATTING INSTRUCTIONS:
    1. Format your responses using Markdown syntax for better readability
    2. Use **bold** for emphasis on important terms and skills
    3. Use bullet points (*) or numbered lists when listing multiple items
    4. Use headings (##) for clear section separation when appropriate
    5. Format code or technical terms with backticks (\`code\`)
    6. Organize information in a visually appealing way with proper spacing
    
    Be concise, professional, and helpful. Do not make up information that is not in the CV.
    NB: Also answer in the same language as the user asks you in.`;
    
    // Keep only user and assistant messages
    const userMessages = messages.filter(m => m.role !== 'system');

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': req.headers.origin || '',
        'X-Title': 'Zakariae El Mernissi Portfolio'
      },
      body: JSON.stringify({
        model: 'google/gemma-3-4b-it:free',
        messages: [
          { role: 'system', content: systemPrompt },
          ...userMessages
        ],
        temperature: 0,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch from OpenRouter', details: await response.text() });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));