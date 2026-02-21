const express = require('express');
const path = require('path');

const app = express();

// Parse JSON bodies
app.use(express.json());

// Serve static files from the project root
app.use(express.static(path.join(__dirname, '..')));

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'file.html'));
});

app.post('/generate-quiz', async (req, res) => {
    try {
        const { prompt } = req.body;
        //const apiKey = process.env.GOOGLE_API_KEY;
        const apiKey = "AIzaSyBEzyosrMi4cNVG7ymcfLhCD7QkwNJUBQM";

        if (!apiKey) return res.status(500).json({ error: 'Server missing GOOGLE_API_KEY' });

        const MODEL = 'gemini-3-flash-preview';
        const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;

        const requestBody = {
            contents: [{
                parts: [{ text: prompt }]
            }]
        };

        const response = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        if (!response.ok) return res.status(response.status).json(data);

        return res.json(data);
    } catch (err) {
        console.error('generate-quiz error', err);
        return res.status(500).json({ error: String(err) });
    }
});

// Export the app for Vercel
module.exports = app;