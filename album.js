function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data));
}

loadAlbum();

function displayAlbums(albums) {
    console.log(albums)
    const albumContainer = document.getElementById('albums')
    for (const album of albums) {
        const p = document.createElement('p')
        p.style.textAlign = 'center'
        p.innerText = `
        album:${album.title}.id: ${album.id}
        `;
        albumContainer.appendChild(p)

    }
}

