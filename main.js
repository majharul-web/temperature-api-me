const API_KEY = `d5e5517caaffb7ac6756e17c815769d7`;

const loadData = () => {
  const searchInput = document.getElementById('searchInput');
  const searchText = searchInput.value;
  searchInput.value = '';

  //   fetch data
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayData = (data) => {
  setInnerText('city', data.name);
  setInnerText('temp', data.main.temp);
  setInnerText('status', data.weather[0].main);

  //   set icon
  const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  const imgIcon = document.getElementById('img');
  imgIcon.setAttribute('src', url);
};
