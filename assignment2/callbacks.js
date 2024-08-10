document.getElementById('execute').addEventListener('click', () => {
    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = "<h2>Loading...</h2>";

    function fetchData(callback) {
        setTimeout(() => {
            fetch('https://dummyjson.com/posts')
                .then(response => response.json())
                .then(data => {
                    callback(data.posts);
                });
        }, 5000);
    }

    fetchData(posts => {
        let output = '<h2>Posts:</h2>';
        output += posts.map(post => `<p>${post.title}</p>`).join('');
        statusDiv.innerHTML = output;
    });
});
