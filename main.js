function Calculate() {
	var value1 = document.getElementById("Value1").value;
	var value2 = document.getElementById("Value2").value;
	var x;
	x = parseFloat(value1)+parseFloat(value2);
    document.getElementById('show').innerHTML = "Result: " +x;


	var a = document.createElement("p");
	var b = document.createTextNode(value1 + " + " + value2 +  " = "  + x );
	a.appendChild(b);
    document.body.appendChild(a);
}


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("topnav").style.top = "0";
//   } else {
//     document.getElementById("topnav").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }



