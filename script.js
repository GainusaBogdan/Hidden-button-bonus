(function(){
  GenerateButtons();
})();
//Generate buttons with prize!
function GenerateButtons() {
  const numberofbuttons = document.getElementById("imputvalue").value;
  const myprize= new Array("Winner !");
  for(i = 0; i < numberofbuttons - 1; ++i) {
    const button = document.createElement('button');
      myprize.push("Loser !");
      const message = myprize.splice(Math.floor(Math.random() * myprize.length),1);
      button.innerHTML = message;
      button.className = "btn btn-warning btn-lg btn-block border-light text-dark";
      document.body.appendChild(button);
      button.addEventListener('click', () => {
        alert(message);
      });
  }
  if (numberofbuttons > 1) {
    const button = document.createElement('button');
      const message = myprize.splice(Math.floor(Math.random() * myprize.length),1);
      button.innerHTML = message;
      button.className = "btn btn-warning btn-lg btn-block border-light text-dark";
      document.body.appendChild(button);
      button.addEventListener('click', () => {
        alert(message);
      });
    }
}