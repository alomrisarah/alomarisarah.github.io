import './src/style.css';

import saveIcon from './assets/icons/clipart.jpj';
import editIcon from './assets/icons/edit-246.png';

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
