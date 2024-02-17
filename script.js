function searchImages() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const imageContainer = document.getElementById('imageContainer');

    // Hapus gambar sebelumnya
    imageContainer.innerHTML = '';

    // Tentukan daftar nama gambar
    const imageNames = ['test.jpg', 'test1.jpg'];

    // Tampilkan gambar hasil pencarian jika kata kunci adalah "bidadari"
    if (searchTerm === 'bidadari') {
        // Loop untuk menampilkan gambar
        for (const imageName of imageNames) {
            const imagePath = `./${imageName}`;

            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            imgElement.alt = `Gambar ${imageName.replace('.jpg', '')}`; // Tambahkan teks alternatif (alt) untuk aksesibilitas
            imageContainer.appendChild(imgElement);
        }
    }
}
