class Weather{
	constructor(city){
		this.key = '87dea71911a94f4e284d8bb0b86ff779';
		this.city = city;
	}

	async getWeather(){
		const response = await fetch(`
			https://api.openweathermap.org/data/2.5/weather?q=${city},CA&appid=${key}`)
		const responseData = await response.json()
		
	}
}