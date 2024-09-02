export default function deleteItem(i) {
 itemsArray.splice(i, 1)
 localStorage.setItem("items", JSON.stringify(itemsArray))
 location.reload()
}
