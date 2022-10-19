// function loadComments() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(json => displayComments(json))
// }

// loadComments();

// function displayComments(comments) {
//     // console.log(comments);
//     const commentContainer = document.getElementById('albums');
//     for (const comment of comments) {
//         const p = document.createElement('p')
//         p.innerText = comment.userId;
//         commentContainer.appendChild(p);
//     }
// }