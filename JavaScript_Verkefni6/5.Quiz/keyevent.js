var colors = ['white', 'blue', 'red', 'pink', 'yellow', 'orange', 'black', 'gray', 'green']; //array containing css colors

document.addEventListener('keydown', (event) => {                         //add a event listener for keydown event
  if (event.keyCode === 32) {                                             //keyCode 32 = spacebar, check if spacebar is pressed
    var color = colors[Math.floor(Math.random() * colors.length)];        //get a random color from array,
    document.body.style.backgroundColor = color;                          //set the color as the background color of the page body
  }
}, false);
