fetch("https://striveschool-api.herokuapp.com/books")
.then((res) => {
    if (res.ok) {
     
      return res.json()
    } 
  })
  .catch((err) => {
    console.log(err)})
.then((booksData)=>{
 console.log("bookData",booksData);

//  IMMAGINE1
//  sezione per l'immagine
const currentImg=document.getElementById("image1")
currentImg.src=booksData[0].img;
//  sezione per il titolo
const currentTitle=document.getElementById("titolo1")
currentTitle.innerText=booksData[0].title
// sezione per il prezzo
const currentPrice=document.getElementById("price1")
currentPrice.innerText=booksData[0].price;

//  sezione per l'immagine
const currentImg2=document.getElementById("image2")
currentImg2.src=booksData[1].img;
//  sezione per il titolo
const currentTitle2=document.getElementById("titolo2")
currentTitle2.innerText=booksData[1].title
// sezione per il prezzo
const currentPrice2=document.getElementById("price2")
currentPrice2.innerText=booksData[1].price;

const currentImg3=document.getElementById("image3")
currentImg3.src=booksData[2].img;
//  sezione per il titolo
const currentTitle3=document.getElementById("titolo3")
currentTitle3.innerText=booksData[2].title
// sezione per il prezzo
const currentPrice3=document.getElementById("price3")
currentPrice3.innerText=booksData[2].price;

const currentImg4=document.getElementById("image4")
currentImg4.src=booksData[3].img;
//  sezione per il titolo
const currentTitle4=document.getElementById("titolo4")
currentTitle4.innerText=booksData[3].title
// sezione per il prezzo
const currentPrice4=document.getElementById("price4")
currentPrice4.innerText=booksData[3].price;

// booksData.forEach((book) => {
 

})
