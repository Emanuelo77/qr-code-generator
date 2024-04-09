let promise = new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve('Operation abgeschlossen.');
  },2000);      
})

let myObiject = {
    eigenchaft1: "string Eigenschaft",
    eigenschaft2: 2
 myPromise.then((message) => {
    console.log(message);
 }).catch((error) => {
    console.error(error);
 });