function revealSurprise() {
  var surprise = document.getElementById('surprise');
  surprise.classList.remove('hidden');
  document.querySelector('.surprise-button').disabled = true; // Disables the button after it's clicked
  document.querySelector('.surprise-button').innerText = 'Surprise Revealed!';
}
