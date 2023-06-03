const startButton = document.getElementById("startButton");
const messageContainer = document.getElementById("messageContainer");

startButton.addEventListener("click", function () {
  for (let i = 1; i <= 15; i++) {
    setTimeout(function () {
      messageContainer.textContent = i;
    }, i * 200);
  }

  setTimeout(function () {
    messageContainer.textContent = "Let's get started!";
  }, 3200);
});
