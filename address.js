const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

let addressFunction = (location) => {
geocode.geocodeAddress(location, (errorMessage, results) => {
    if (errorMessage) {
      console.log(errorMessage);
    } else {
      console.log(results.address);

      weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log("Weather Information ::")
          console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
          console.log(`Today's lowTemperature ${weatherResults.lowTemperature}`);
          console.log(`Today's highTemperature ${weatherResults.highTemperature}`);
          console.log(`Today's humidity ${weatherResults.humidity}`);
          console.log(`Today's windspeed ${weatherResults.windspeed}`);
         // console.log(`lowHumidity ${weatherResults.lowHumidity}`);
        }
      });
    }
  });
}

module.exports.addressFunction = addressFunction;