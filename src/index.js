const baseURL = "https://json-server-blog-backend.onrender.com/posts"; 

document.addEventListener("DOMContentLoaded", main);

function main() {
  display_Posts_from_render_server();
  addNewPostListener();
}

function display_Posts_from_render_server() {
  fetch(baseURL)
    .then((res) => res.json())
    .then((posts) => {
      const postList = document.getElementById("post-list");
      postList.innerHTML = "";

      posts.forEach((post) => {
        const div = document.createElement("div");
        div.textContent = post.title;
        div.addEventListener("click", () => handlePostClick(post.id));
        postList.appendChild(div);
      });

      if (posts.length > 0) {
        handlePostClick(posts[0].id);
      }
    })
    .catch((err) => {
      console.error("Failed to fetch posts:", err);
    });
}

function handlePostClick(id) {
  fetch(`${baseURL}/${id}`)
    .then((res) => res.json())
    .then((post) => {
      const detail = document.getElementById("post-detail");
      detail.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p><strong>Author:</strong> ${post.author}</p>
        <button onclick="showEditForm(${post.id})">Edit</button>
        <button onclick="deletePost(${post.id})">Delete</button>
      `;

      document.getElementById("edit-title").value = post.title;
      document.getElementById("edit-content").value = post.content;

      document.getElementById("edit-post-form").dataset.id = post.id;
    })
    .catch((err) => {
      console.error(`Failed to fetch post ${id}:`, err);
    });
}

function addNewPostListener() {
  const form = document.getElementById("new-post-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newPost = {
      title: document.getElementById("new-title").value,
      content: document.getElementById("new-content").value,
      author: document.getElementById("new-author").value,
    };

    fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then(() => {
        display_Posts_from_render_server();
        form.reset();
      })
      .catch((err) => {
        console.error("Failed to add new post:", err);
      });
  });
}

function showEditForm(id) {
  document.getElementById("edit-post-form").classList.remove("hidden");
}

document.getElementById("cancel-edit").addEventListener("click", () => {
  document.getElementById("edit-post-form").classList.add("hidden");
});

document.getElementById("edit-post-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const id = e.target.dataset.id;

  const updatedPost = {
    title: document.getElementById("edit-title").value,
    content: document.getElementById("edit-content").value,
  };

  fetch(`${baseURL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedPost),
  })
    .then((res) => res.json())
    .then(() => {
      display_Posts_from_render_server();
      document.getElementById("edit-post-form").classList.add("hidden");
    })
    .catch((err) => {
      console.error(`Failed to update post ${id}:`, err);
    });
});

function deletePost(id) {
  fetch(`${baseURL}/${id}`, { method: "DELETE" })
    .then(() => {
      display_Posts_from_render_server();
      document.getElementById("post-detail").innerHTML = `<h2>Select a post to view details</h2>`;
    })
    .catch((err) => {
      console.error(`Failed to delete post ${id}:`, err);
    });
}
