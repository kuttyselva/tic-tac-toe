//restart game
var restart=document.querySelector("#b");


//grab sqr
var sqr=document.querySelectorAll('td');

//clr all sqr
function clrB(){
  for (var i = 0; i < sqr.length; i++) {
  sqr[i].textContent='';
  }
}
restart.addEventListener('click',clrB);
//chk sq markr
function changeMarker(){
    if(this.textContent === ''){
      this.textContent = 'X';
      // console.log(marker)
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
};

// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < sqr.length; i++) {
    sqr[i].addEventListener('click', changeMarker);
}
