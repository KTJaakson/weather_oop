
const ls = new LS()

const weatherLocation = ls.getLocationData()
console.log(ls)


//weather object
const weather = new Weather('Tallinn')

const ui = new UI()

document.addEventListener('DOMContentLoaded', cityWeather)

const form = document.querySelector('#change-city')
form.addEventListener('submit', changeCityWeather)

function changeCityWeather(event){
	const city = document.querySelector('#city-name').value
	weather.changeCity(city)
	getWeather()
	document.querySelector('#city-name').value = ''
	event.preventDefault()
}

weather.changeCity('Helsinki')

/*
function getWeather() {
	weather.getWeather()
	.then(data => {
		ui.drawWeather(data)
	})
	.catch(error => console.log(error));
}
*/

getWeather();