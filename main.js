// search for enter button press

const searchBtn = document.getElementById('search');
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keypress', function (event) {
  event.preventDefault();

  if (event.key == 'Enter') {
    searchBtn.click();
  }
});

// api key
const API_KEY = `d5e5517caaffb7ac6756e17c815769d7`;

// load function
const loadData = () => {
  const searchText = searchInput.value;
  searchInput.value = '';

  //   fetch data
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

// set inner text function
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

// display ui
const displayData = (data) => {
  setInnerText('city', data.name);
  setInnerText('temp', data.main.temp);
  setInnerText('status', data.weather[0].main);

  //   set icon
  const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  const imgIcon = document.getElementById('img');
  imgIcon.setAttribute('src', url);
};
