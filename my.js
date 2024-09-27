// function filterBlogs(category) {
//     fetch(`get_blogs.php?category=${category}`)
//         .then(response => response.json())
//         .then(data => displayBlogs(data));
// }

// function displayBlogs(blogs) {
//     const blogList = document.getElementById('blogList');
//     blogList.innerHTML = '';

//     blogs.forEach(blog => {
//         const card = document.createElement('div');
//         card.classList.add('card');

//         const img = document.createElement('img');
//         img.src = blog.background_img;

//         const title = document.createElement('h2');
//         title.textContent = blog.title;

//         const content = document.createElement('p');
//         content.textContent = blog.content;

//         card.appendChild(img);
//         card.appendChild(title);
//         card.appendChild(content);

//         blogList.appendChild(card);
//     });
// }

function filterBlogs(category) {
  fetch(`get_blogs.php?category=${category}`)
    .then(response => response.json())
    .then(data => displayBlogs(data));
}
function displayBlogs(blogs) {
    const blogList = document.getElementById('blogList');
    blogList.innerHTML = '';

    blogs.forEach(blog => {
        const card = document.createElement('div');
        card.classList.add('card');

        // Set background image for the card
        card.style.backgroundImage = `url(${blog.background_img})`;

        const title = document.createElement('h2');
        title.textContent = blog.title;

        const content = document.createElement('div');
        content.innerHTML = blog.content; // Use innerHTML to display formatting

        card.appendChild(title);
        card.appendChild(content);

        blogList.appendChild(card);
    });
}
