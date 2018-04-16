var characters;
var episodes;

// make request
const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();

  request.open("GET", url);

  request.addEventListener('load', callback);

  request.send();
};


// character request complete
const characterRequestComplete = function(){
if(this.status !== 200) return;

const jsonString = this.responseText;

characters = JSON.parse(jsonString);

populateCharactersSelector(characters);

};

// episode request complete
const episodeRequestComplete = function(){
if(this.status !== 200) return;

const jsonString = this.responseText;

episodes = JSON.parse(jsonString);

populateEpisodeSelector(episodes);

};

// location request complete
const locationRequestComplete = function(){
if(this.status !== 200) return;

const jsonString = this.responseText;

locations = JSON.parse(jsonString);

populateLocationSelector(locations);

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
const showCharacterInfo = function(event){
  const indexNumber = event.target.selectedIndex;
  var pTag = document.querySelector('#character-info');
  pTag.innerText = "this is working"
}


// create character image



// populate location selector
const populateLocationSelector = function(locations){
  const select = document.querySelector('#locationselector');
  locations.results.forEach(function(location){
    const option = document.createElement("option");
    option.innerText = location.name;
    select.appendChild(option);

  })
}


// populate episode selector
const populateEpisodeSelector = function(episodes){
  const select = document.querySelector('#episodeselector');
  episodes.results.forEach(function(episode){
    const option = document.createElement("option");
    option.innerText = episode.name;
    select.appendChild(option);

  })
}

// show episode info
const showEpisodeInfo = function(event){
  const indexNumber = event.target.selectedIndex;
  var pTag = document.querySelector('#episode-info');
  pTag.innerText = "this is working"
}

// show location info
const showLocationInfo = function(event){
  const indexNumber = event.target.selectedIndex;
  var pTag = document.querySelector('#location-info');
  pTag.innerText = "this is working"
}

//run app
const app = function(){
  const url1 = "https://rickandmortyapi.com/api/character/";
  const url2 = "https://rickandmortyapi.com/api/episode/";
  const url3 = "https://rickandmortyapi.com/api/location/";

makeRequest(url1, characterRequestComplete);
makeRequest(url2, episodeRequestComplete);
makeRequest(url3, locationRequestComplete)


const select = document.getElementById('#selectcharacter');
selectcharacter.addEventListener("change", showCharacterInfo);
const select1 = document.getElementById('#episodeselector');
episodeselector.addEventListener("change", showEpisodeInfo);
const select2 = document.getElementById('#locationselector');
locationselector.addEventListener("change", showLocationInfo);
}

window.addEventListener('load', app);
