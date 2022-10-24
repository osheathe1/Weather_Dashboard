var now = dayjs();
var currentDate = (now.format("MM/DD/YYYY"));
var city = "";
var citySearch = $("#city-search");
var citySearchButton = $("#city-search-button");
var APIkey = 106f018c06ef8c4abe7f053a113d9c75

// Variables created
var inputValue = document.querySelector('.inputValue');
var button = document.querySelector('button');
var city = document.querySelector('.name');
var temp = document.querySelector('.temp');
var info = document.querySelector('.info');

//My API Key 106f018c06ef8c4abe7f053a113d9c75
// API link: api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

//fetch link data
fetch("http://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=106f018c06ef8c4abe7f053a113d9c75")
.then(response => response.json())
.then (data => {
    var cityValue = data['name'];
    var tempValue = data['main']['temp'];
    var infoValue = data['weather'][0]['description'];

    city.innerHTML = cityValue;
    temp.innerHTML = tempValue;
    info.innerHTML = infoValue; 
  })
.catch(err => alert("An error has occured"))
localStorage.setItem('history', inputValue.value)




