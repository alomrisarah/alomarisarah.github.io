export default function activateSaveListeners() {
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
