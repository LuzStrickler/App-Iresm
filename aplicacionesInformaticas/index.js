const cambiarColorBoton = document.getElementById("cambiarColor");
const rectangulo = document.querySelector(".rectangulo");

cambiarColorBoton.addEventListener("click", () => {
  const nuevoColor = getRandomColor();
  rectangulo.style.backgroundColor = nuevoColor;
});

function getRandomColor() {
  const letras = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}
