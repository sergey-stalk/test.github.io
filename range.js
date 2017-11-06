/*function fun1 (){
	var rng = document.getElementById('r1');
	var i1 = document.getElementById('i1');
	i1.value = rng.value;
}*/
function fun1 () {
	var rng = document.getElementById('r1');
	var div = document.getElementById('test');
	div.style.width = rng.value+'px';
	div.style.height = rng.value+ 'px';
}