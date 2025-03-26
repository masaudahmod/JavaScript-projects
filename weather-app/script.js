// select dom
const cityNameElement = document.querySelector("#cityName");
const cityCodeElement = document.querySelector("#cityCode");
const localDateElement = document.querySelector("#localDate");
const localTimeElement = document.querySelector("#localTime");
const weatherImgElement = document.querySelector("#weather_img");
const mainTemperatureElement = document.querySelector("#mainTemperature");
const tempDescriptionElement = document.querySelector("#tempDescription");
const celsiusElement = document.querySelector("#celsius");
const fahrenheitElement = document.querySelector("#fahrenheit");
const humidityElement = document.querySelector("#humidity");
const windElement = document.querySelector("#wind");
const pressureElement = document.querySelector("#pressure");
const feelLikeElement = document.querySelector("#feelLike");
const queryElement = document.querySelector("#query");
const searchElement = document.querySelector("#search");

// initial data
const apiKey = "126688fe7925400d81763c4bb6265bba";
let cityName = "Dhaka";
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// allow to get your location weather
window.onload = () => {
  navigator.geolocation.getCurrentPosition(
    (success) => {
      let lat = success.coords.latitude;
      let lon = success.coords.longitude;
      waitForResponse(lat, lon, "", apiKey).catch((err) => err);
    },
    function errorCallback(error) {
      if (error.code == error.PERMISSION_DENIED) {
        waitForResponse("", "", cityName, apiKey).catch((err) => err);
      }
    }
  );
};
// search weather
searchElement.addEventListener("click", function (e) {
  e.preventDefault();
  if (queryElement.value) {
    cityName = queryElement.value;
    queryElement.value = "";
    waitForResponse("", "", cityName, apiKey).catch((err) => {
      queryElement.placeholder = "not a valid country or city name";
      queryElement.classList.add("error");
      setTimeout(() => {
        queryElement.placeholder = "search by city name";
        queryElement.classList.remove("error");
      }, 2000);
    });
  } else {
    queryElement.placeholder = "please enter a valid city name";
    queryElement.classList.add("error");
    if (queryElement.classList.contains("error")) {
      setTimeout(() => {
        queryElement.placeholder = "search by city name";
        queryElement.classList.remove("error");
      }, 2000);
    }
  }
});
// get time and date
const setTimeAndDate = () => {
  let dateObj = new Date();
  let day = dayList[dateObj.getDay()];
  let month = monthList[dateObj.getMonth()];
  let date =
    dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate();
  let year = dateObj.getFullYear();
  localDateElement.innerHTML = `${day} ${month} ${date} ${year}`;
  return function setTime() {
    let hour = dateObj.getHours() % 12 === 0 ? "12" : dateObj.getHours() % 12;
    let minute = dateObj.getMinutes();
    let seconds = dateObj.getSeconds();
    let am_pm = hour > 12 ? "am" : "pm";
    return (localTimeElement.innerHTML = `${hour}:${minute}:${seconds} ${am_pm}`);
  };
};
// set time
setInterval(() => {
  setTimeAndDate()();
}, 1000);
// call api
let linkApi = async (lat, lon, cityName, apiKey) => {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&q=${cityName}&units=imperial&appid=${apiKey}`
  );
  return await response.json();
};

let waitForResponse = async (lat, lon, cityName, apiKey) => {
  let getData = await linkApi(lat, lon, cityName, apiKey);
  // set data
  cityCodeElement.innerText = getData.sys.country;
  cityNameElement.innerText =
    getData.name === "Sāmāir" ? "Dhaka" : getData.name;
  humidityElement.innerText = getData.main.humidity;
  windElement.innerText = getData.wind.speed;
  pressureElement.innerText = getData.main.pressure;
  tempDescriptionElement.innerText = getData.weather[0].description;
  // celsius to fahrenheit
  fahrenheitElement.addEventListener("click", function () {
    feelLikeElement.innerText = Math.round(getData.main.feels_like);
    mainTemperatureElement.innerText = Math.round(getData.main.temp);
    // add and remove active class
    celsiusElement.classList.remove("active");
    fahrenheitElement.classList.add("active");
  });
  // fahrenheit to celsius
  celsiusElement.addEventListener("click", function () {
    feelLikeElement.innerText = Math.round(
      (getData.main.feels_like - 32) * 0.5556
    );
    mainTemperatureElement.innerText = Math.round(
      (getData.main.temp - 32) * 0.5556
    );
    // add and remove active class
    celsiusElement.classList.add("active");
    fahrenheitElement.classList.remove("active");
  });
  feelLikeElement.innerText = Math.round(
    (getData.main.feels_like - 32) * 0.5556
  );
  mainTemperatureElement.innerText = Math.round(
    (getData.main.temp - 32) * 0.5556
  );
  weatherImgElement.setAttribute(
    "src",
    `http://openweathermap.org/img/w/${getData.weather[0].icon}.png`
  );
};
