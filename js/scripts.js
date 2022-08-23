function ToDo() {
  this.toDos = {}; 
  this.currId = 0; 
} 

ToDo.prototype.assignId = function() { 
  this.currId += 1; 
  return this.currId; 
}; 

ToDo.prototype.addListItem = function(item) {
  item.id = this.assignId(); 
  this.toDos[item.id] = item; 
}; 

ToDo.prototype.findItem = function(id) { 
  if (this.toDos[id] !== undefined) { 
    return this.toDos[id]; 
  } 
  return false; 
}; 

ToDo.prototype.deleteItem = function(id) { 
  if (this.toDos[id] === undefined) { 
    return false; 
  } 
  delete this.toDos[id]; 
  return true; 
}; 


//Busniness logic for ListItem constructor ------- 
function ListItem(itemName, itemDesc) { 
  this.itemName = itemName; 
  this.itemDesc = itemDesc;   //('Desc' as in 'Description') 
} 

//UI Logic
let toDo = new ToDo();

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedTaskName = document.querySelector("input#itemName").value;
  const inputtedTaskDesc = document.querySelector("input#itemDesc").value;
  let newListItem = new ListItem (inputtedTaskName, inputtedTaskDesc);
  toDo.addListItem(newListItem);
  console.log(toDo.toDos);
}

window.addEventListener("load", function() {
  this.document.querySelector("form#new-todo").addEventListener("submit",handleFormSubmission)
});
