
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("mrc").addEventListener("click", function() { c("")});
	document.getElementById("m-").addEventListener("click", function() { c("")});
	document.getElementById("m+").addEventListener("click", function() { c("")});
	document.getElementById("/").addEventListener("click", function() { v("/")});
	document.getElementById("7").addEventListener("click", function() { v("7")});
	document.getElementById("8").addEventListener("click", function() { v("8")});
	document.getElementById("9").addEventListener("click", function() { v("9")});
	document.getElementById("*").addEventListener("click", function() { v("*")});
	document.getElementById("4").addEventListener("click", function() { v("4")});
	document.getElementById("5").addEventListener("click", function() { v("5")});
	document.getElementById("6").addEventListener("click", function() { v("6")});
	document.getElementById("-").addEventListener("click", function() { v("-")});
	document.getElementById("1").addEventListener("click", function() { v("1")});
	document.getElementById("2").addEventListener("click", function() { v("2")});
	document.getElementById("3").addEventListener("click", function() { v("3")});
	document.getElementById("+").addEventListener("click", function() { v("+")});
	document.getElementById("0").addEventListener("click", function() { v("0")});
	document.getElementById("C").addEventListener("click", function() { c("")});
	document.getElementById("=").addEventListener("click", function() { e()});
});
function c(val){
	document.getElementById("d").value = val;
}

function v(val){
	document.getElementById("d").value += val;
}

function e(){
	try{
		c(eval(document.getElementById("d").value))
	} catch(e) {
		c("Error")
	}
}