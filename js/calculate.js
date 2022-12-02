// document.getElementById('btn-calculator').addEventListener('click', function(){
//     const perPlayerField = document.getElementById('per-player-field');
//     const newPerPlayerString = perPlayerField.value;
//     const perPlayer = parseFloat(newPerPlayerString);
// })


const items = document.getElementsByClassName('item');
for (const item of items){
    item.addEventListener('click', function(event){
   event.target.parentNode.removechild(event.target);
})
}
document.getElementById('btn-add-item').addEventListener('click', function(){
       const listContainer = document.getElementById('list-container');

       const li = document.createElement('li');
       li.innerText = 'messi'
       listContainer.appendChild(li);
})


document.getElementById('total-cal').addEventListener('click', function(){
    const playerExpElement = document.getElementById('player-exp');
    const playerExpString = playerExpElement.innerText;
    const playerExpTotal = parseFloat(playerExpString);

    const managerExpField = document.getElementById('manager-exp');
    const managerExpString = managerExpField.value;
    const managerExpTotal = parseFloat(managerExpString);

    const coachExpField = document.getElementById('coach-exp');
    const coachExpString = coachExpField.value;
    const coachExpTotal = parseFloat(coachExpString);

    const totalExp = playerExpTotal + managerExpTotal + coachExpTotal;
    return totalExp;


});

function addListener(name, id) {
    document.getElementById(id).addEventListener("click", function () {
      addPlayer(name);
      document.getElementById(id).classList.add("disabled");
    });
  }

  // call function from common function
addListener("sakib", "select");

function addPlayer(playerName) {
    const nodeList = document.querySelectorAll("ol li");
    const nodeLength = nodeList.length;
    if (nodeLength > 4) {
      alert("You cannot add more than 5");
    } else if (nodeLength <= 5) {
      const ol = document.getElementById("select-five");
      const li = document.createElement("li");
      const user = document.getElementById(playerName).innerText;
      li.innerText = user;
      ol.appendChild(li);
    }
  }

