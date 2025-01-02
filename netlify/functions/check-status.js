const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    const apiUrl = 'https://uptime.betterstack.com/api/v2/monitors/2887348/';
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer TchFg2LBzkmeZyDNtFM9nHSY'
        }
    });

    if (!response.ok) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch data' })
        };
    }

    const data = await response.json();
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};
