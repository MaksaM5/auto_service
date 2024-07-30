function openModal(imageSrc) {
  var modal = document.getElementById('modal');
  var modalImg = document.getElementById('modal-image');

  modal.style.display = 'block';
  modalImg.src = imageSrc;
}

function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}

window.onclick = function (event) {
  var modal = document.getElementById('modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
