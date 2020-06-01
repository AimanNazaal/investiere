let contacts = document.getElementById("contacts"); 
let firstname = document.getElementById("firstname");
let namesBook = document.getElementById("namesBook");

contacts.addEventListener("submit", (e) => {
    e.preventDefault()
    createContact(firstname.value)
  
})

// This saves the data locally. It takes a key and a value
localStorage.setItem("firstname", "lastname");

function createContact(x){
    let newContact = `<li>${x} <button onclick="deleteItem(this)">Delete</button></li>`
namesBook.insertAdjacentHTML("beforeend",newContact)
firstname.value = ""
firstname.focus()

}

function deleteItem(contactToDelete){
    contactToDelete.parentElement.remove()
}

// push() is used to insert new contact to an array.
//.map(){} to create a new array from a curren array - to list all contacts
//filter(){} to return an array with specific data for example, only Bern residents



