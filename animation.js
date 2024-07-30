document.querySelectorAll('.card').forEach(card => { // Pronađi sve elemente sa klasom 'card' i primeni funkciju na svaki od njih
  const overlay = card.querySelector('.overlay');   // Pronađi overlay (prekivač) unutar trenutne 'card'
  const img = card.querySelector('.card-image');   // Pronađi sliku (card-image) unutar trenutne 'card'
  
  img.addEventListener('mouseover', () => {   // Dodaj slušača događaja na sliku koji se aktivira kada kursor miša pređe preko slike
    overlay.textContent = img.getAttribute('data-text');
  });     // Prikazuje tekst koji je definisan u 'data-text' atributu slike na overlay-u

  img.addEventListener('mouseout', () => {   // Dodaj slušača događaja na sliku koji se aktivira kada kursor miša napusti sliku
    overlay.textContent = '';     // Sakriva tekst na overlay-u kada kursor miša napusti sliku
  });
});
