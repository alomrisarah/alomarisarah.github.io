"use strict"

;(function () {
 // Check if the document is ready
 document.addEventListener("DOMContentLoaded", function () {
  // Your main JavaScript code here

  // Add event listener to add a new todo item
  const addTodoButton = document.getElementById("add-todo")
  if (addTodoButton) {
   addTodoButton.addEventListener("click", function () {
    const todoInput = document.getElementById("todo-input")
    if (todoInput && todoInput.value.trim() !== "") {
     addTodoItem(todoInput.value.trim())
     todoInput.value = ""
    }
   })
  }

  // Function to add a new todo item
  function addTodoItem(text) {
   const todoList = document.getElementById("todo-list")
   if (todoList) {
    const li = document.createElement("li")
    li.className = "todo-list-item"
    li.innerHTML = `
                    <input type="checkbox" class="select">
                    <span class="todo-item">${text}</span>
                    <img src="edit-icon.png" alt="Edit" class="edit-icon">
                    <img src="remove-icon.png" alt="Remove" class="remove-icon">
                `
    todoList.appendChild(li)
   }
  }

  // Add event listener to clear all todos
  const clearButton = document.getElementById("clear")
  if (clearButton) {
   clearButton.addEventListener("click", function () {
    const todoList = document.getElementById("todo-list")
    if (todoList) {
     todoList.innerHTML = ""
    }
   })
  }

  // Event delegation for todo list items (edit/remove)
  const todoContainer = document.getElementById("todo")
  if (todoContainer) {
   todoContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-icon")) {
     event.target.parentElement.remove()
    } else if (event.target.classList.contains("edit-icon")) {
     // Handle edit functionality here
     alert("Edit functionality not implemented yet.")
    }
   })
  }

  // Example of handling checkbox change
  const todoList = document.getElementById("todo-list")
  if (todoList) {
   todoList.addEventListener("change", function (event) {
    if (event.target.classList.contains("select")) {
     const todoItem = event.target.nextElementSibling
     if (event.target.checked) {
      todoItem.classList.add("checked")
     } else {
      todoItem.classList.remove("checked")
     }
    }
   })
  }
 })
})()
