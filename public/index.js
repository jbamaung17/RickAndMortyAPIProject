var locations;
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
  var characterDiv = document.querySelector('#character-div');
  
}


// create character item






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
  const url1 = "https://rickandmortyapi.com/api/character/?page=1";
  const url11 = "https://rickandmortyapi.com/api/character/?page=2";
  const url12 = "https://rickandmortyapi.com/api/character/?page=3";
  const url13 = "https://rickandmortyapi.com/api/character/?page=4";
  const url14 = "https://rickandmortyapi.com/api/character/?page=5";
  const url15 = "https://rickandmortyapi.com/api/character/?page=6";
  const url16 = "https://rickandmortyapi.com/api/character/?page=7";
  const url17 = "https://rickandmortyapi.com/api/character/?page=8";
  const url18 = "https://rickandmortyapi.com/api/character/?page=9";
  const url19 = "https://rickandmortyapi.com/api/character/?page=10";
  const url101 = "https://rickandmortyapi.com/api/character/?page=11";
  const url102 = "https://rickandmortyapi.com/api/character/?page=12";
  const url103 = "https://rickandmortyapi.com/api/character/?page=13";
  const url104 = "https://rickandmortyapi.com/api/character/?page=14";
  const url105 = "https://rickandmortyapi.com/api/character/?page=15";
  const url106 = "https://rickandmortyapi.com/api/character/?page=16";
  const url107 = "https://rickandmortyapi.com/api/character/?page=17";
  const url108 = "https://rickandmortyapi.com/api/character/?page=18";
  const url109 = "https://rickandmortyapi.com/api/character/?page=19";
  const url110 = "https://rickandmortyapi.com/api/character/?page20";

  const url2 = "https://rickandmortyapi.com/api/episode/?page=1";
  const url21 = "https://rickandmortyapi.com/api/episode/?page=2";

  const url3 = "https://rickandmortyapi.com/api/location/?page=1";
  const url31 = "https://rickandmortyapi.com/api/location/?page=2";
  const url32 = "https://rickandmortyapi.com/api/location/?page=3";
  const url33 = "https://rickandmortyapi.com/api/location/?page=4";

makeRequest(url1, characterRequestComplete);
makeRequest(url11, characterRequestComplete);
makeRequest(url12, characterRequestComplete);
makeRequest(url13, characterRequestComplete);
makeRequest(url14, characterRequestComplete);
makeRequest(url15, characterRequestComplete);
makeRequest(url16, characterRequestComplete);
makeRequest(url17, characterRequestComplete);
makeRequest(url18, characterRequestComplete);
makeRequest(url19, characterRequestComplete);
makeRequest(url101, characterRequestComplete);
makeRequest(url102, characterRequestComplete);
makeRequest(url103, characterRequestComplete);
makeRequest(url104, characterRequestComplete);
makeRequest(url105, characterRequestComplete);
makeRequest(url106, characterRequestComplete);
makeRequest(url107, characterRequestComplete);
makeRequest(url108, characterRequestComplete);
makeRequest(url109, characterRequestComplete);
makeRequest(url110, characterRequestComplete);

makeRequest(url2, episodeRequestComplete);
makeRequest(url21, episodeRequestComplete);



makeRequest(url3, locationRequestComplete);
makeRequest(url31, locationRequestComplete);
makeRequest(url32, locationRequestComplete);
makeRequest(url33, locationRequestComplete);





const select = document.getElementById('#selectcharacter');
selectcharacter.addEventListener("change", showCharacterInfo);
const select1 = document.getElementById('#episodeselector');
episodeselector.addEventListener("change", showEpisodeInfo);
const select2 = document.getElementById('#locationselector');
locationselector.addEventListener("change", showLocationInfo);
}

window.addEventListener('load', app);
