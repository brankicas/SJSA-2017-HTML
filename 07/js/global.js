//local Storage info do 5gb- ne moze da komunicara so storage-ot samo pomegu JS i browser  cookies moze i so server

// localStorage.setItem("name", "Brankica");

// var name = localStorage.getItem("name");
//  console.log(name);

//  localStorage.removeItem("name");

//  var person = {firstName:"Brankica", lastName:"Stankovska"};
//  localStorage.setItem("person", JSON.stringify(person));

//  var data = JSON.parse(localStorage.getItem("person"));
//  // console.log(data);

// for( var x in data) {
// 	console.log(data[x])
// }

//  localStorage.removeItem("person");

/////////////////////////////////////////////////////////////////////////////////////

//to do app



/*function getTodos() {
	var todos = [];
	var todos_value = localStorage.getItem("todo");
	if(todos_value!== null) {
		todos = JSON.parse (todos_value);
	}
	return todos;

}

function AddToDo () {
	var todo = document.getElementById("todo_src").value;
	var todos = getTodos();
	todos.push(todo);

	localStorage.setItem("todo", JSON.stringify(todos));

	show();
}

function show(){
	var todos =getTodos();
	var html = '<ul>';

for (var i=0; i <todos.length;i++){
	html+='<li>' + todos[i] + '<button class="remove" id="'+ i +'">X</button>';
};

html += '</ul>';

document.getElementById("todos").innerHTML=html;

var buttons = document.querySelectorAll(".remove");

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", remove);

};



};

function remove () {
	var id = this.getAttribute("id");
	var todos = getTodos();
	todos.splice(id, 1);
	localStorage.setItem("todo", JSON.stringify(todos));
	show();

}


document.getElementById("button_src").addEventListener("click",AddToDo);
show();*/




//session storage  ako go izgasime browserot se gasi/lokal se cuva

// sessionStorage.setItem("name", "Brankica");

/////////////////////////////////////////////////////

// IndexedDB  data base direktiva vo browser

