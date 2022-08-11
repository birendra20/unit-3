let dataDiv = document.getElementById("data");
async function getWeather() {
  try {
    let city = document.getElementById("city").value;

    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b3dfaeaf2defd23abad8ac8117387f27&units=metric`
    );
    let data = await response.json();
    showWeather(data);
    //map(city);
    console.log("data:", data);
  } catch (err) {
    console.log("err:", err);
  }
}

function showWeather(weather) {
  let leftDiv = document.createElement("div");
  leftDiv.setAttribute = ("class", "x");
  //let rightDiv = document.createElement("div");
  let temp = document.createElement("p");
  temp.innerText = `Temp-${weather.main.temp}°C`;

  let pressure = document.createElement("p");
  pressure.innerText = `pressure-${weather.main.pressure}`;

  let humidity = document.createElement("p");
  humidity.innerText = `humidity-${weather.main.humidity}`;

  let map = document.createElement("iframe");

  leftDiv.append(temp, pressure, humidity);

  dataDiv.append(leftDiv);
}
// ............................................................................
