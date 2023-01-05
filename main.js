const circle = document.getElementById("circle");

circle.addEventListener("click", function() {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  circle.style.left = x + "px";
  circle.style.top = y + "px";
});
