fetch('https://uptime.betterstack.com/api/v2/monitors/123456789/response-times', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer TchFg2LBzkmeZyDNtFM9nHSY'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));