function initExpandingCards() {
  const cards = document.querySelectorAll(".panel");

  if (cards.length) {
    cards[0].classList.add("active");
    function expandingCard(event) {
      cards.forEach((card) => {
        card.classList.remove("active");
      });
      this.classList.add("active");
    }

    cards.forEach((card) => {
      card.addEventListener("click", expandingCard);
    });
  }
}

initExpandingCards();
