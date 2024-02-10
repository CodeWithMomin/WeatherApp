<div align='center'>

<h1>Weather Updates</h1>
<p>This weather application allows users to enter the name of a city and retrieve the current weather conditions for that city. The application uses the OpenWeatherMap API to fetch the weather data. When a user enters a city name and clicks the search button, the application sends a request to the OpenWeatherMap API with the city name and an API key. The API returns a JSON object containing the weather data for the specified city. The application then extracts the necessary information from the JSON object, such as the temperature, weather description, and city name. This information is then displayed in the application's user interface. If the user enters an incorrect city name, the application will display an error message and reload the page after 5 seconds.The application's user interface consists of an input field for the city name, a search button, and a box to display the weather data.    to Use it :  cityweatheronline.netlify.app </p>

<h4> <span> · </span> <a href="https://github.com/CodeWithMomin/WeatherApp/blob/master/README.md"> Documentation </a> <span> · </span> <a href="https://github.com/CodeWithMomin/WeatherApp/issues"> Report Bug </a> <span> · </span> <a href="https://github.com/CodeWithMomin/WeatherApp/issues"> Request Feature </a> </h4>


</div>

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
- [Contributing](#wave-contributing)
- [Contact](#handshake-contact)


## :star2: About the Project

### :dart: Features
- The application displays the current temperature for the specified city.
- The application displays a brief description of the current weather conditions for the specified city.
- The application handles errors that may occur during the API call, such as invalid city names or network errors.
- The application is designed to be responsive and look good on different screen sizes.
- The application is easy to use and requires minimal user input.
- The application retrieves real-time weather data from OpenWeatherMap, ensuring that the information displayed is up-to-date.


### :key: Environment Variables
To run this project, you will need to add the following environment variables to your .env file
`API_KEY: This variable stores the API key for OpenWeatherMap, which is required to make API calls to retrieve weather data. 2 BASE_URL: variable stores the base URL for OpenWeatherMap API calls, such as https://api.openweathermap.org/data/2.5/weather. UNITS: This variable stores the units of measurement for the weather data, such as metric for Celsius or imperial for Fahrenheit. LANG: This variable stores the language for the weather data, such as en for English. EXCLUDE: This variable stores any additional parameters that should be excluded from the API call, such as minutely or hourly forecasts. APPID: This variable stores the API key for any additional APIs that may be used in the application, such as a geolocation API.`

`BASE_URL_GEO: This variable stores the base URL for the geolocation API, such as https://api.ipgeolocation.io/ipgeo. API_KEY_GEO: This variable stores the API key for the geolocation API. TIMEOUT: This variable stores the timeout duration for API calls, in milliseconds. RETRY: This variable stores the number of times the application should retry an API call if it failsBASE_URL_GEO: This variable stores the base URL for the geolocation API, such as https://api.ipgeolocation.io/ipgeo. API_KEY_GEO: This variable stores the API key for the geolocation API. TIMEOUT: This variable stores the timeout duration for API calls, in milliseconds. RETRY: This variable stores the number of times the application should retry an API call if it fails..`



## :wave: Contributing

<a href="https://github.com/CodeWithMomin/WeatherApp/graphs/contributors"> <img src="https://contrib.rocks/image?repo=Louis3797/awesome-readme-template" /> </a>

Contributions are always welcome!

see `contributing.md` for ways to get started

## :handshake: Contact

Momin Zahoor - [@twitter_handle](_mominzahoor_) - mominzahoor11@gmail.com

Project Link: [https://github.com/CodeWithMomin/WeatherApp](https://github.com/CodeWithMomin/WeatherApp)
