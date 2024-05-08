let currentIndex = 0;
const cards = document.querySelectorAll('.card');

function showCard(index) {
  cards.forEach(card => card.classList.remove('active'));
  cards[index].classList.add('active');
}

function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
}

function prevCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    nextCard();
  } else if (event.key === 'ArrowLeft') {
    prevCard();
  }
});

showCard(currentIndex); // Show the initial active card
