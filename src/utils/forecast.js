const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const latitudeStr = latitude.toString();
  const longitudeStr = longitude.toString();
  const url = "https://api.darksky.net/forecast/bd3c40e053226d472f7a2b33026e4bab/" + latitudeStr + "," + longitudeStr + "?units=si&lang=it"
  request({ url, json: true}, (error, { body } ) => {
    if (error) {
      callback("Unable to connect with weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find input. Try another research". undefined);
    } else {
      callback(undefined, {
        temperature: body.currently.temperature,
        precipProbability: body.currently.precipProbability,
        daily: body.daily.summary
      });
    }
  });
};

module.exports = forecast;