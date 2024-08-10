document.getElementById('fetch').addEventListener('click', () => {
    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = "<h2>Loading...</h2>";

    const fetchData = new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            fetch('https://dummyjson.com/posts')
                .then(response => response.json())
                .then(data => {
                    clearTimeout(timer);
                    resolve(data.posts);
                })
                .catch(error => reject(error));
        }, 5000);
    });

    fetchData
        .then(posts => {
            let output = '<h2>Posts:</h2>';
            output += posts.map(post => `<p>${post.title}</p>`).join('');
            statusDiv.innerHTML = output;
        })
        .catch(error => {
            statusDiv.innerHTML = `<h2>Error:</h2><p>${error.message}</p>`;
        });
});
