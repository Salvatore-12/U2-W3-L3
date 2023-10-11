const renderBooks=function(books){
books.forEach(book =>{
const newCol=document.createElement("div")
newCol.classList.add("col","col-4")

const newCard=document.createElement("div")
newCard.classList.add("card")
newCard.innerHTML=`<div class="card" style="width: 18rem;">
<img src="${book.img}" class="card-img-top" alt="${book.title}">
<div class="card-body">
  <h5 class="card-title">${book.title}</h5>
  <p class="card-text">${book.price}</p>
  <button class="btn btn-primary" oneclick="deleteMe(event)">Scarta</button>
</div>
</div>`
newCol.appendChild(newCard)
const row=document.getElementById("bookRow")
row.appendChild(newCol)
})
}
const deleteMe=function(e){
console.log(e.target.closest(".col"))
e.target.closest(".col").remove()
}



fetch("https://striveschool-api.herokuapp.com/books")
.then((res) => {
    if (res.ok) {
     
      return res.json()
    } 
  })
  .catch((err) => {
    console.log("errore",err)})
.then((booksData)=>{
 console.log("bookData",booksData);
renderBooks(booksData)


// booksData.forEach((book) => {
  // per ogni book
  // const col=document.createElement("div")
  // crea una col
  // col.className="col-md-3 mb-3"

  // crea una card

  // appendi la card alla col
  // appendi la col alla row

})
