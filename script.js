document.addEventListener("DOMContentLoaded", () => {
    fetch("data.txt")
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            let content = '';
            lines.forEach(line => {
                if (line.startsWith('# ')) {
                    content += `<h1>${line.substring(2)}</h1>`;
                } else if (line.startsWith('## ')) {
                    content += `<h2>${line.substring(3)}</h2>`;
                } else if (line.startsWith('- ')) {
                    content += `<li>${line.substring(2)}</li>`;
                } else {
                    content += `<p>${line}</p>`;
                }
            });
            document.getElementById('content').innerHTML = content;
        })
        .catch(error => console.error('Error fetching the data:', error));
});
