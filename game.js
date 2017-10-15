
function setPosition(id, axis, pixels){

document.getElementById(id).style[axis] = (pixels + 'px')
  /* sets the position of the DOM element with specified id (string) along specified axis 'top' or 'left' */
}

function setCubePositions(){
  /* sets the initial position of the elements hole, ball1, ball2 */
  let w = window.innerWidth;
  let h = window.innerHeight;
  setPosition('hole', 'top', h / 2 - 50);
  setPosition('ball1', 'top', 20);
  setPosition('ball2', 'top', h - 100);
  setPosition('hole', 'left', w / 2 - 50);
  setPosition('ball1', 'left', 20);
  setPosition('ball2', 'left', w - 100);
}

function getPosition(id, axis){
  /* returns the pixel distance (number) along the specified axis (string) 'top' or 'left' of the DOM element with specified id (string) */
  let str = document.getElementById(id).style[axis].match(/\d+/g);  // ****  ????  ****
  let integer = parseInt(str);
  return integer;
}

function moveBall(id, pixels, axis){
  let currentPosition = getPosition(id, axis);  
  let newPosition = currentPosition + pixels;
  setPosition(id, axis, newPosition);
  /* moves DOM element with specified id (string) by x (number) pixels to the right */
}

function didWin(id){
  let hole = {
    x: getPosition('hole', 'left'), 
    y: getPosition('hole', 'top')
  };
  let ball = {
    x: getPosition(id, 'left'), 
    y: getPosition(id, 'top')
  };

  let result = false;

  if (ball.x > hole.x && ball.x < (hole.x +25) && ball.y > hole.y && ball.y < (hole.y +25)) {
    result = true;
  };

  return result;
  /* returns true if DOM element with id (string) is inside the 'hole' element otherwise returns false */
}

function onKeyPress(e) {
  /*
  this function will be triggered every time a player presses a key
  it checks if either player has won and if so it alerts a winning message otherwise
  it will call the moveBall functions according to the key which was pressed
  */
  if( didWin('ball1') ){
    alert('Congratulation Player 1! \nYou won!');
    return;
  }
  if( didWin('ball2') ){
    alert('Congratulation Player 2! \nYou won!');
    return;
  }

console.log(e.keyCode); //It will show which Key you pressed.

  switch(e.keyCode){
    case 65:
      moveBall('ball1', -10, 'left');
      break;
    case 68:
      moveBall('ball1', 10, 'left');
      break;
    case 87:
      moveBall('ball1', -10, 'top');
      break;
    case 83:
      moveBall('ball1', 10, 'top');
      break;
    case 37:
      moveBall('ball2', -10, 'left');
      break;
    case 39:
      moveBall('ball2', 10, 'left');
      break;
    case 38:
      moveBall('ball2', -10, 'top');
      break;
    case 40:
      moveBall('ball2', 10, 'top');
      break;          
  };
};

window.onload = function(){
  document.body.setAttribute('onkeydown', 'onKeyPress(event)');
  setCubePositions()
}