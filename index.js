import inquirer from 'inquirer';
import  qr_code = require (' qr-image ');


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

  
  
  ch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });