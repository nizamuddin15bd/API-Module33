function loadDate() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(Data => console.log(Data))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}
// loadPosts();

function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        console.log(user);
        const li = document.createElement('li');
        li.innerText = `name: ${user.name}. email: ${user.email}`;
        ul.appendChild(li);
    }
}


// my pactice
// function loadUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(date => displayUsers(date))
// };
// function displayUsers(nizam) {
//     const ul = document.getElementById('users')
//     for (const user of nizam) {
//         const li = document.createElement('li')
//         li.innerText = `naem:${user.name}. email:${user.email}`;
//         ul.appendChild(li);
//     }
// }