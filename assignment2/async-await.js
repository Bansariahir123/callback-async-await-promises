document.getElementById('fetch').addEventListener('click', async () => {
    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = "<h2>Loading...</h2>";

    const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Operation timed out")), 5000)
    );

    try {
        const response = await Promise.race([
            fetch('https://dummyjson.com/posts'),
            timeout
        ]);
        const data = await response.json();
        let output = '<h2>Posts:</h2>';
        output += data.posts.map(post => `<p>${post.title}</p>`).join('');
        statusDiv.innerHTML = output;
    } catch (error) {
        statusDiv.innerHTML = `<h2>Error:</h2><p>${error.message}</p>`;
    }
});
