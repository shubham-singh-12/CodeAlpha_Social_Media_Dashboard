document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById('loginBtn');
    const contentDiv = document.getElementById('content');

    loginBtn.addEventListener('click', function () {
        // Simulate login process
        const username = prompt('Enter your username:');
        if (username) {
            // Assuming user logged in successfully
            renderDashboard(username);
        }
    });

    function renderDashboard(username) {
        contentDiv.innerHTML = `<h2>Welcome, ${username}!</h2>`;

        // Fetch and display content from various social media platforms
        fetchTwitterFeed(username);
        fetchFacebookFeed(username);
        fetchInstagramFeed(username);
    }

    function fetchTwitterFeed(username) {
        // Simulated fetch call
        setTimeout(function () {
            const tweets = ['Tweet 1', 'Tweet 2', 'Tweet 3']; // Simulated tweets
            const tweetsHTML = tweets.map(tweet => `<p>${tweet}</p>`).join('');
            contentDiv.innerHTML += `<h3>Twitter Feed:</h3>${tweetsHTML}`;
        }, 1000);
    }

    function fetchFacebookFeed(username) {
        // Simulated fetch call
        setTimeout(function () {
            const posts = ['Post 1', 'Post 2', 'Post 3']; // Simulated Facebook posts
            const postsHTML = posts.map(post => `<p>${post}</p>`).join('');
            contentDiv.innerHTML += `<h3>Facebook Feed:</h3>${postsHTML}`;
        }, 1500);
    }

    function fetchInstagramFeed(username) {
        // Simulated fetch call
        setTimeout(function () {
            const photos = ['Photo 1', 'Photo 2', 'Photo 3']; // Simulated Instagram photos
            const photosHTML = photos.map(photo => `<img src="${photo}.jpg" alt="${photo}">`).join('');
            contentDiv.innerHTML += `<h3>Instagram Feed:</h3>${photosHTML}`;
        }, 2000);
    }
});
