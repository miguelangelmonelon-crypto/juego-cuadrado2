let square = document.getElementById("square");
let score = document.getElementById("score");
let points = 0;

function moveSquare() {
  // Posiciones aleatorias dentro del área de juego
  let x = Math.floor(Math.random() * 350);
  let y = Math.floor(Math.random() * 350);
  square.style.left = x + "px";
  square.style.top = y + "px";
}

// Cada vez que el cuadrado se pulsa, suma puntos
square.addEventListener("click", function() {
  points++;
  score.textContent = points;
  moveSquare();
});

// Mueve el cuadrado cada 2 segundos automáticamente
setInterval(moveSquare, 2000);
