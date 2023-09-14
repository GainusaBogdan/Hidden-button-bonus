generateButtons();

//Generate buttons!
function generateButtons() {
  const numberofbuttons = document.getElementById("imputvalue").value;
  const myprize= new Array("Winner !");
  for(i = 0; i < numberofbuttons; ++i) {
    const button = document.createElement('button');
    myprize.push("Loser !");
      button.className = "btn btn-warning btn-lg btn-block border-light text-dark";
      document.body.appendChild(button);
      button.addEventListener('click', () => {
        prize(myprize);
      }, {once : true});
  }
  myprize.pop();
}

//Find out the prize!
function prize(myprize) {
  this.myprize = myprize;
  const mesage = myprize.splice(Math.floor(Math.random() * myprize.length),1);
  alert(mesage);
}
