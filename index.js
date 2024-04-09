import inquirer from 'inquirer';
var qr_png = qr.image(url);
import qr from 'qr-image';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Gebe eine URL hier ein: ",
        name: "URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL
    console.log(url)
  })
  
  var  qr_png  = qr.image (url) ;    
qr_png . pipe ( require ('fs').createWriteStream (' qr_code.png') ) ;

fs.writeFile('url.txt', url, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
})
  
  ch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });