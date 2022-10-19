function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
loadPosts();

function displayPosts(posts) {
    const postContainer = document.getElementById('posts')
    for (const post of posts) {
        const div = document.createElement('div')
        div.classList.add('post');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);

    }
}



function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringigy({
            title: 'My new post',
            body: 'This is my posts',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

// function loadPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => displayPosts(data));

// }
// loadPosts();

// function displayPosts(posts) {
//     const postContainer = document.getElementById('posts')
//     for (const post of posts) {
//         const div = document.createElement('div')
//         div.classList.add('post')
//         div.innerHTML = `
//         <h3>${post.title}</>
//         <p>${post.body}</p>
//         `;
//         postContainer.appendChild(div);
//     }
// };




// ende class


