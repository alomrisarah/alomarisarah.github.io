export default function createItem(item) {
 itemsArray.push(item.value)
 localStorage.setItem("items", JSON.stringify(itemsArray))
 location.reload()
}

