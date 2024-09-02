export default function activateDeleteListeners() {
 let deleteBtn = document.querySelectorAll(".deleteBtn")
 deleteBtn.forEach((dB, i) => {
  dB.addEventListener("click", () => {
   deleteItem(i)
  })
 })
}
