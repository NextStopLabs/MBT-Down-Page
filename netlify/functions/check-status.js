const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    const apiUrl = 'https://uptime.betterstack.com/api/v2/monitors/2887348/';
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer TchFg2LBzkmeZyDNtFM9nHSY',
            },
        });

        if (!response.ok) {
            return {
                statusCode: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*', // Allow all origins
                },
                body: JSON.stringify({ error: 'Failed to fetch data' }),
            };
        }

        const data = await response.json();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // Allow all origins
            },
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*', // Allow all origins
            },
            body: JSON.stringify({ error: error.message }),
        };
    }
};
