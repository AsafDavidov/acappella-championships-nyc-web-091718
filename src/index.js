const acaBody = document.getElementById('table-body')
const winner = document.getElementById('winner')
let currentWinner;

let acaGroups;
populateTable()
function populateTable(){
    fetch("http://localhost:3000/a_cappella_groups")
    .then(r=>r.json())
    .then(json=>{
      acaGroups = json
      acaBody.innerHTML += placeAcapellaRows(json)
    })
}
acaBody.addEventListener("click",(e)=>{
  if (e.target.localName == 'img'){


    // let formerWinner;
    // if (!!currentWinner){
    //     formerWinner = currentWinner;
    // }
    // currentWinner = acaGroups.find((group)=> group.id == e.target.parentElement.parentElement.dataset.id)
    // winner.innerText = winnerTag(currentWinner);
    //
    // e.target.parentElement.parentElement.remove();
    // if (!!formerWinner){
    //   acaBody.innerHTML += placeAcapellaRow(formerWinner)
    // }
    //not working

    currentWinner = acaGroups.find((group)=> group.id == e.target.parentElement.parentElement.dataset.id)
    winner.innerText = winnerTag(currentWinner);
    e.target.parentElement.parentElement.remove();
    acaBody.innerHTML += placeAcapellaRow(currentWinner)
    currentWinner = null
  }
})
// function checkForCurrentWinner(){
//   if (!!winner){
//
//   }
// }
function placeAcapellaRows(arr){
  return arr.map((aca)=>{
    return placeAcapellaRow(aca);
  }).join('')
}
function placeAcapellaRow(obj){
  return `<tr data-id="${obj.id}"><td>${obj.college.name}</td> <td>${obj.name}</td> <td>${obj.membership}</td> <td>${obj.college.division}</td> <td><img src='./assets/trophy.png'></td> </tr>`
}
function winnerTag(aca){
  return `Winner: ${aca.college.name} ${aca.name}`
}
