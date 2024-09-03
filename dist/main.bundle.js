"use strict"

// Function to run when the document is fully loaded
const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
document.getElementById("add").addEventListener("click", (e) => {
 if (item.value.length == 0) {
  alert("Please Enter A Task")
 } else {
  const item = document.querySelector("#item")
  createItem(item)
 }
})
function displayItems() {
 let items = ""
 for (let i = 0; i < itemsArray.length; i++) {
  items += `<div class="item">
                <div class="input-controller disabled">
                  <textarea disabled  name="newtask" >${itemsArray[i]}</textarea>
                  <div class="edit-controller">
                    <i class="fa fa-trash deleteBtn"></i>
                 <img id="icon" src="edit-246.png"  class="editBtn" onclick="changeIcon()">
    
                  </div>
                </div>
              </div>`
 }
 document.querySelector(".to-do-list").innerHTML = items
 activateDeleteListeners()
 activateEditListeners()
 activateSaveListeners()
}

function activateDeleteListeners() {
 let deleteBtn = document.querySelectorAll(".deleteBtn")
 deleteBtn.forEach((dB, i) => {
  dB.addEventListener("click", () => {
   deleteItem(i)
  })
 })
}
function changeIcon() {
 const icon = document.getElementById("icon")

 if (icon.src.includes("edit-246.png")) {
  icon.src = "clipart.jpg"
  icon.id = "save"
 }
}
function changeIcon1() {
 const icon = document.getElementById("icon")

 if (icon.src.includes("clipart.jpg")) {
  icon.src = "edit-246.png"
 }
}

function activateEditListeners() {
 const editBtn = document.querySelectorAll(".editBtn")
 const inputs = document.querySelectorAll(".input-controller   textarea")
 editBtn.forEach((eB, i) => {
  eB.addEventListener("click", () => {
   inputs[i].disabled = false
   activateSaveListeners()
  })
 })
}

function activateSaveListeners() {
 const saveBtn = document.querySelectorAll("#save")
 const inputs = document.querySelectorAll(".input-controller  textarea")
 saveBtn.forEach((sB, i) => {
  sB.addEventListener("click", () => {
   updateItem(inputs[i].value, i)
   inputs[i].disabled = true
  })
  changeIcon1()
 })
}

var tasks = document.querySelectorAll(".item")
for (var i = 0; i < tasks.length; i++) {
 tasks[i].onclick = function () {
  this.classList.toggle("completed")
 }
}

function createItem(item) {
 itemsArray.push(item.value)
 localStorage.setItem("items", JSON.stringify(itemsArray))
 location.reload()
}

function deleteItem(i) {
 itemsArray.splice(i, 1)
 localStorage.setItem("items", JSON.stringify(itemsArray))
 location.reload()
}

function updateItem(text, i) {
 itemsArray[i] = text
 localStorage.setItem("items", JSON.stringify(itemsArray))
 location.reload()
}

window.onload = function () {
 displayItems()
}
