getAdvice();

function getAdvice() {
  fetch("https://api.adviceslip.com/advice").then((response) =>
    response
      .json()
      .then((response) => outAdvice(response.slip.advice, response.slip.id))
  );
}

function outAdvice(advice, id) {
  document.querySelector(".card__title").innerHTML = "Advice #" + id;
  document.querySelector(".card__advice-text").innerHTML = advice;
}
