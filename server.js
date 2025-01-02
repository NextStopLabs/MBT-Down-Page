const express = require('express');
const fetch = require('node-fetch');
const app = express();

// Define your API route
app.get('/check-status', async (req, res) => {
    const apiUrl = 'https://uptime.betterstack.com/api/v2/monitors/123456789/response-times';
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer TchFg2LBzkmeZyDNtFM9nHSY'
            }
        });

        const data = await response.json();
        res.json(data); // Send the API response back to the client
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
