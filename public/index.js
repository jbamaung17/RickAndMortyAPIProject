var characters;

// make request
const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();

  request.open("GET", url);

  request.addEventListener('load', callback);

  request.send();
};


// request complete
const requestComplete = function(){
if(this.status !== 200) return;

const jsonString = this.responseText;

characters = JSON.parse(jsonString);

populateCharactersSelector(characters);

};


// populate character selector
const populateCharactersSelector = function(characters){
  const select = document.querySelector('select');
  characters.results.forEach(function(character){
    const option = document.createElement("option");
    option.innerText = character.name;
    select.appendChild(option);

  })
}

// create listed item
const showInfo = function(event){
  const indexNumber = event.target.selectedIndex;
  var pTag = document.querySelector('#character-info');
  pTag.innerText = "this is working"
}


// create character image



// populate location selector



// populate episode selector


//run app
const app = function(){
  const url1 = "https://rickandmortyapi.com/api/character/";

makeRequest(url1, requestComplete);


const select = document.querySelector('select');
select.addEventListener("change", showInfo);
}

window.addEventListener('load', app);
