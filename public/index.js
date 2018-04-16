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

}

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

  let character = window.characters.results[indexNumber-1];

  const characterDiv = document.querySelector('#character-div');

  const list = document.createElement('ul');

  let li = createCharacterItem(character);

  list.appendChild(li);

  characterDiv.appendChild(list);
}


// create character item
const createCharacterItem = function(character){
  var ul = document.createElement('ul');

  var li = document.createElement('li');
    li.innerText = "Name: " + character.name;
    ul.appendChild(li);

  var li2 = document.createElement('li');
    li2.innerText = "Planet of Origin: " + character.origin.name;
    ul.appendChild(li2);

  var li3 =document.createElement('li');
    li3.innerText = "Last Known Location: " + character.location.name;
    ul.appendChild(li3);

  var li4 = document.createElement('li');
    li4.innerText = "Status: " + character.status;
    ul.appendChild(li4);

  var img = createCharacterImage(character);
    ul.appendChild(img);

    return ul;}


// create character image
const createCharacterImage = function(character){
  var image = document.createElement('img');
  image.src = character.image;
  image.alt = character.name;
  return image;
}

// get character location
const getCharacterLocation = function(character){
  var location = document.createElement('ul');
  location.innerText = character.location;
  return location;
}

// populate location selector
const populateLocationSelector = function(locations){
  const select = document.querySelector('#locationselector');

  locations.results.forEach(function(location){
    const option = document.createElement("option");
    option.innerText = location.name;
    select.appendChild(option);
  })
}

// create location item
const createLocationItem = function(location){
  const ul = document.createElement('ul');

  const li = document.createElement('li');
  li.innerText = "Name: " + location.name;
  ul.appendChild(li);

  const li2 = document.createElement('li');
  li2.innerText = "Dimension: " + location.dimension;
  ul.appendChild(li2);

  const li3 = document.createElement('li');
  li3.innerText = "Type: " + location.type;
  ul.appendChild(li3);

  return ul;
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

  var location = window.locations.results[indexNumber-1];

  var characterDiv = document.querySelector('#location-div');

  var list = document.createElement('ul');

  var li = createLocationItem(location);

  list.appendChild(li);

  locationDiv.appendChild(list);
}

// show location info
const showLocationInfo = function(event){
  const indexNumber = event.target.selectedIndex;

  var location = window.locations.results[indexNumber-1];

  var locationDiv = document.querySelector('#location-div');

  var list = document.createElement('ul');

  var li = createLocationItem(location);

  list.appendChild(li);

  locationDiv.appendChild(list);
}

//run app
const app = function(){
  const url1 = "https://rickandmortyapi.com/api/character/?page=1";
  const url2 = "https://rickandmortyapi.com/api/character/?page=2";
  const url3 = "https://rickandmortyapi.com/api/character/?page=3";
  const url4 = "https://rickandmortyapi.com/api/character/?page=4";
  const url5 = "https://rickandmortyapi.com/api/character/?page=5";
  const url6 = "https://rickandmortyapi.com/api/character/?page=6";
  const url7 = "https://rickandmortyapi.com/api/character/?page=7";
  const url8 = "https://rickandmortyapi.com/api/character/?page=8";
  const url9 = "https://rickandmortyapi.com/api/character/?page=9";
  const url10 = "https://rickandmortyapi.com/api/character/?page=10";
  const url11 = "https://rickandmortyapi.com/api/character/?page=11";
  const url12 = "https://rickandmortyapi.com/api/character/?page=12";
  const url13 = "https://rickandmortyapi.com/api/character/?page=13";
  const url14 = "https://rickandmortyapi.com/api/character/?page=14";
  const url15 = "https://rickandmortyapi.com/api/character/?page=15";
  const url16 = "https://rickandmortyapi.com/api/character/?page=16";
  const url17 = "https://rickandmortyapi.com/api/character/?page=17";
  const url18 = "https://rickandmortyapi.com/api/character/?page=18";
  const url19 = "https://rickandmortyapi.com/api/character/?page=19";
  const url20 = "https://rickandmortyapi.com/api/character/?page20";

  const url21 = "https://rickandmortyapi.com/api/episode/?page=1";
  const url22 = "https://rickandmortyapi.com/api/episode/?page=2";

  const url23 = "https://rickandmortyapi.com/api/location/?page=1";
  const url24 = "https://rickandmortyapi.com/api/location/?page=2";
  const url25 = "https://rickandmortyapi.com/api/location/?page=3";
  const url26 = "https://rickandmortyapi.com/api/location/?page=4";

makeRequest(url1, characterRequestComplete);
makeRequest(url2, characterRequestComplete);
makeRequest(url3, characterRequestComplete);
makeRequest(url4, characterRequestComplete);
makeRequest(url5, characterRequestComplete);
makeRequest(url6, characterRequestComplete);
makeRequest(url7, characterRequestComplete);
makeRequest(url8, characterRequestComplete);
makeRequest(url9, characterRequestComplete);
makeRequest(url10, characterRequestComplete);
makeRequest(url11, characterRequestComplete);
makeRequest(url12, characterRequestComplete);
makeRequest(url13, characterRequestComplete);
makeRequest(url14, characterRequestComplete);
makeRequest(url15, characterRequestComplete);
makeRequest(url16, characterRequestComplete);
makeRequest(url17, characterRequestComplete);
makeRequest(url18, characterRequestComplete);
makeRequest(url19, characterRequestComplete);
makeRequest(url20, characterRequestComplete);

makeRequest(url21, episodeRequestComplete);
makeRequest(url22, episodeRequestComplete);



makeRequest(url23, locationRequestComplete);
makeRequest(url24, locationRequestComplete);
makeRequest(url25, locationRequestComplete);
makeRequest(url26, locationRequestComplete);





const select = document.getElementById('#selectcharacter');
selectcharacter.addEventListener("change", showCharacterInfo);
const select1 = document.getElementById('#episodeselector');
episodeselector.addEventListener("change", showEpisodeInfo);
const select2 = document.getElementById('#locationselector');
locationselector.addEventListener("change", showLocationInfo);
}

window.addEventListener('load', app);
