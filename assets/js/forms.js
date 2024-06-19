let cardData = JSON.parse(localStorage.getItem('cardData')) || [];
let currentImageUrl = '';

function submitForm() {
    const name = document.getElementById('name').value;
    const genre = document.querySelector('input[name="genre"]:checked')?.value;
    const anime = document.querySelector('input[name="anime"]:checked')?.value;
    const favoriteAlbum = document.getElementById('favoriteAlbum').value;
    const favoriteArtist = document.getElementById('favoriteArtist').value;
    const favoriteSeries = document.getElementById('favoriteSeries').value;
    const favoriteCharacter = document.getElementById('favoriteCharacter').value;
    const description = document.getElementById('description').value;
    const imageInput = document.getElementById('image');
    const imageFile = imageInput.files[0];

    if (name && genre && anime && description) {
        const reader = new FileReader();
        reader.onload = function (e) {
            currentImageUrl = e.target.result;

            const card = {
                id: Date.now(),
                name,
                genre,
                anime,
                favoriteAlbum,
                favoriteArtist,
                favoriteSeries,
                favoriteCharacter,
                description,
                imageUrl: currentImageUrl
            };

            cardData.push(card);
            localStorage.setItem('cardData', JSON.stringify(cardData));
            displayCards();
            document.getElementById('musicAnimeForm').reset();

            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Form berhasil ditambahkan.'
            });
        };

        if (imageFile) {
            reader.readAsDataURL(imageFile);
        } else {
            currentImageUrl = '';
            const card = {
                id: Date.now(),
                name,
                genre,
                anime,
                favoriteAlbum,
                favoriteArtist,
                favoriteSeries,
                favoriteCharacter,
                description,
                imageUrl: currentImageUrl
            };

            cardData.push(card);
            localStorage.setItem('cardData', JSON.stringify(cardData));
            displayCards();
            document.getElementById('musicAnimeForm').reset();

            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Form berhasil ditambahkan.'
            });
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Mohon isi semua field yang wajib diisi!'
        });
    }
}

function displayCards() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
    cardData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            ${card.imageUrl ? `<img src="${card.imageUrl}" alt="Gambar" class="card-img">` : ''}
            <h3>${card.name}</h3>
            <p><strong>Genre Musik Favorit:</strong> ${card.genre}</p>
            <p><strong>Anime Favorit:</strong> ${card.anime}</p>
            <p><strong>Album Musik Favorit:</strong> ${card.favoriteAlbum}</p>
            <p><strong>Artis Musik Favorit:</strong> ${card.favoriteArtist}</p>
            <p><strong>Serial Anime Lain Favorit:</strong> ${card.favoriteSeries}</p>
            <p><strong>Karakter Anime Favorit:</strong> ${card.favoriteCharacter}</p>
            <p>${card.description}</p>
            <button class="delete-btn" onclick="deleteCard(${card.id})">Hapus</button>
        `;
        cardContainer.appendChild(cardElement);
    });
}

function deleteCard(id) {
    cardData = cardData.filter(card => card.id !== id);
    localStorage.setItem('cardData', JSON.stringify(cardData));
    displayCards();
}

function printCards() {
    window.print();
}

window.onload = function() {
    displayCards();
};
