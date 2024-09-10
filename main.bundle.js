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
                 <i class='fa fa-edit editBtn' onclick="changeIcon(this)"></i>
                 <i class="fa fa-trash-o  deleteBtn"></i>
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

function changeIcon(icon) {
 if (icon.classList.contains("fa-edit")) {
  icon.classList.remove("fa-edit")
  icon.classList.add("fa-save")
  icon.id = "save"
 } else if (icon.classList.contains("fa-save")) {
  icon.classList.remove("fa-save")
  icon.classList.add("fa-edit")
  icon.id = ""
 }
}
function activateSaveListeners() {
 const saveBtn = document.querySelectorAll("#save")
 const inputs = document.querySelectorAll(".input-controller  textarea")
 saveBtn.forEach((sB, i) => {
  sB.addEventListener("click", () => {
   updateItem(inputs[i].value, i)
   inputs[i].disabled = true
  })
 })
}

var tasks = document.querySelectorAll(".items")
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
