'use strict';

var votesRemaining = 10;

var busContainerEl = document.getElementById('bus-container');
var resultsEl = document.getElementById('results');
var busOneEl = document.getElementById('bus-one');
var busTwoel = document.getElementById('bus-two');
var busThreeel = document.getElementById('bus-three');

var allBus = [];

function Bus(name){
  this.name = name;
  this.filepath = 'img/${name}.jpg';
  this.votes = 0;
  this.views = 0;

  allBus.push(this);
}

new Bus('bag');
new Bus('banana');
new Bus('bathroom');
new Bus('boots');
new Bus('breakfast');
new Bus('bubblegum');
new Bus('chair');
new Bus('cthulhu');
new Bus('dog-duck');
new Bus('dragon');
new Bus('dragon');
new Bus('pen');
new Bus('pet-sweep');
new Bus('scissors');
new Bus('shark');
new Bus('sweep');
new Bus('tauntaun');
new Bus('unicorn');
new Bus('usb');
new Bus('water-can');
new Bus('wine-glass');

var recentRandomNumbers = [];

fucntion render(){
  var randomIndex = random(0, allBus.length-1);

  while(recentRandomNumbers.includes(randomIndex)){
    randomIndex = random(0, allBus.length-1);
  }
  if(recentRandomNumbers.length > 3){
    recentRandomNumbers.shift();
  }
  recentRandomNumbers.push(randomIndex);

  busOneEl.src = allBus[randomIndex].filepath;
  busOneEl.alt = allBus[randomIndex].name;
  busOneEl.title = allBus[randomIndex].name;

  var randomIndex = random(0, allBus.length-1);

  while(recentRandomNumbers.includes(randomIndex)){
    randomIndex = random(0, allBus.length-1);
  }
  if(recentRandomNumbers.length > 3){
    recentRandomNumbers.shift();
  }

  allBus[randomIndex].views++;

  busTwoEl.src = allBus[randomIndex].filepath;
  busTwoEl.alt = allBus[randomIndex].name;
  busTwoEl.title = allBus[randomIndex].name;
}
function random(min, max){
  return Math.floor(Math.random() * (max -min +1) +min);
}
function renderBestBus(){
  var bestBus;
  for(var i = 0; i < allBus.length;i++){
    if(allBus[i].votes > temp){
      temp = allBus[i].votes;
      bestBus = allBus[i];
    }
  }

  var h2El =document.createElement('h2');
  h2El.textContent = 'The Best Bus is ${bestBus.name} with ${bestBus.votes} votes.';
  resultsEl.appendChild(h2El);
}

busContainerEl.addEventListener('click', handleClick);

function handleClick(e){
  var busName = e.target.title;

  if(e.target.id === 'bus-container'){
    alert('click a bus!');
  }

  if(votesRemaining === 0){
    busContainerEl.removeEventListener ('click', handleClick);
    renderBestBus();
  }

  for (var i = 0; i < allCats.length; i++){
    if(busName === allBus[i].name){
      allBus[i].votes++;
      votesRemaining--;
    }
    render();
  }
}
}