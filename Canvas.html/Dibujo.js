var d = document.getElementById('dibujito');
var lienzo = d.getContext('2d');
var lineas = 50;
var yi, xf;
var colorcito = "#FAA";

for(l = 0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(colorcito, 300, yi, xf, 0);
  console.log ("Linea" +l);
}

dibujarLinea(colorcito, 1, 1, 1, 299);
dibujarLinea(colorcito, 1, 299, 299, 299);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) 
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
 
}