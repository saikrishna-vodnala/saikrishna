const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const address = require('./address');

const argv = yargs
  .options({
    a: {
      //demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;
  
if (argv.address === '') {
     argv.address = 19187;
  address.addressFunction(argv.address);
} else {
  address.addressFunction(argv.address);
}










//   geocode.geocodeAddress(hyderbad, (errorMessage, results) => {
//     if (errorMessage) {
//       console.log(errorMessage);
//     } else {
//       console.log(results.address);
//       weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
//         if (errorMessage) {
//           console.log(errorMessage);
//         } else {
//           console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
//           console.log(`lowTemperature ${weatherResults.lowTemperature}`);
//           console.log(`highTemperature ${weatherResults.highTemperature}`);
//           console.log(`humidity ${weatherResults.humidity}`);
//           console.log(`windspeed ${weatherResults.windspeed}`);
//         }
//       });
//     }
//   });
// } else {
//   geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//       console.log(errorMessage);
//     } else {
//       console.log(results.address);
//       weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
//         if (errorMessage) {
//           console.log(errorMessage);
//         } else {
//           console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
//           console.log(`lowTemperature ${weatherResults.lowTemperature}`);
//           console.log(`highTemperature ${weatherResults.highTemperature}`);
//           console.log(`humidity ${weatherResults.humidity}`);
//           console.log(`windspeed ${weatherResults.windspeed}`);
//         }
//       });
//     }
//   });
// }



// const request = require('request');
// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');
// const weather = require('./weather/weather');

// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   //.alias('address','a')
//   .argv;

//   geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     //console.log(JSON.stringify(results, undefined, 2));
//     console.log(results.address);
//     weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(`Its currently ${weatherResults.temperature}, It feels like ${weatherResults.apparentTemperature}`);

//     console.log(`lowTemperature ${weatherResults.lowTemperature}`);
//     console.log(`hoghTemperature ${weatherResults.highTemperature}`);
//     console.log(`humidity ${weatherResults.humidity}`);
//     console.log(`windspeed ${weatherResults.windspeed}`);
//   }
// });
//   }
// });

//lat, lng, callback we r giving dynamic values to the url in weather.js
// weather.getWeather(39.9396284, -75.18663959999999, (errorMessage, weatherResults) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(weatherResults, undefined, 2));
//   }
// });

// const request = require('request'); // address 19146

// request({
//   url: 'https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/39.9396284,-75.18663959999999',
//   json: true
// }, (error, response, body) => {
//   if (error) {
//     console.log('Unable to connect to Forecast.io server.');
//   } else if (response.statusCode === 400) {
//     console.log('Unable to fetch weather.');
//   } else if (response.statusCode === 200) {
//     console.log(body.currently.temperature);
//   }
// });