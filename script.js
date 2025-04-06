document.getElementById('checkRedirect').addEventListener('click', function() {
    fetch('https://mybustimes.cc', { method: 'HEAD', redirect: 'follow' })
        .then(response => {
            if (response.url === 'https://down.mybustimes.cc/') {
                document.getElementById('result').innerText = 'Redirected to https://down.mybustimes.cc';
            } else {
                document.getElementById('result').innerText = 'No redirection to https://down.mybustimes.cc';
            }
        })
        .catch(error => {
            document.getElementById('result').innerText = 'Error: ' + error;
        });
});