const APPID = '495ef49b355f17d9dc70dbf62f5b6e3c';
const host = 'http://api.openweathermap.org/data/2.5/forecast';


async function getCityForecast(city) {
  const res = await fetch(host + `?q=${city}&appid=${APPID}&units=metric`, {
    method: 'GET'
  });
  return await res.json();
}

export { getCityForecast };