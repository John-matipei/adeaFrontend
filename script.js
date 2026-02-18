function loadPosts() {
  fetch("/api/posts")
    .then(res => res.json())
    .then(posts => {
      const container = document.getElementById("stories");
      container.innerHTML = ""; // Clear old content

      posts.forEach(post => {
        container.innerHTML += `
          <div class="card">
            ${post.media ? `<img src="${post.media}" alt="${post.title}">` : ""}
            <h3>${post.title}</h3>
            <p>${post.content.substring(0, 100)}...</p>
            <a href="story.html?id=${post.id}">Read More</a>
          </div>
        `;
      });
    })
    .catch(err => console.error(err));
}

// Load posts on page load
document.addEventListener("DOMContentLoaded", loadPosts);

// Make globally accessible for admin.html to refresh
window.loadPosts = loadPosts;
