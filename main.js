const container = document.getElementById("container");

container.addEventListener("click", function(event) {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  container.appendChild(circle);
});

