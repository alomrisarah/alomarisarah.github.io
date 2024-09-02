

export default function updateItem(text, i) {
 itemsArray[i] = text
 localStorage.setItem("items", JSON.stringify(itemsArray))
 location.reload()
}
