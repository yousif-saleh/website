function fillMessage()
{

 	let words = [];

	var N = document.getElementById("number").value;

var output="Triangles: ";

  for (let c = 1; c <= n; c++) {
  for (let b = 1; b < c; b++) {
  for (let a = 1; a < b; a++) {
  if (a * a + b * b === c * c) {
    output = output + (`${a}, ${b}, ${c}` + "</br>");
  }
  }
  }
  }

	document.getElementById('output').innerHTML = msg[0];

}
