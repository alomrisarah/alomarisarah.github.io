export default function changeIcon() {
 const icon = document.getElementById("icon")

 if (icon.src.includes("edit-246.png")) {
  icon.src = "clipart.jpg"
  icon.id = "save"
 }
}
export default function changeIcon1() {
 const icon = document.getElementById("icon")

 if (icon.src.includes("clipart.jpg")) {
  icon.src = "edit-246.png"
 }
}
