botao.onclick = function(){
	var a1 = document.getElementById("a1").value;
	if (a1 == 2){
		span1.innerHTML = "Certo";
	}else{
		span1.innerHTML = "errado";
	}
}