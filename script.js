var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength(){
	return input.value.length;
}

function createListELement(){
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}


function addAfterClick(){
	if(inputLength() > 0){
		createListELement();
	}
}

function addAfterKeypress(event){
	if(inputLength() > 0 && event.which === 13){
		createListELement();
	}
}



button.addEventListener ("click", addAfterClick);
input.addEventListener("keypress", addAfterKeypress);
