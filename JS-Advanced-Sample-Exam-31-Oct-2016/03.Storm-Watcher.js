let Record = (function () {
    let id = 0;
    return class {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
            this.id = id++;
        }

        toString() {
            let text = `Reading ID: ${this.id}\n`;
            text += `Temperature: ${this.temperature}*C\n`;
            text += `Relative Humidity: ${this.humidity}%\n`;
            text += `Pressure: ${this.pressure}hpa\n`;
            text += `Wind Speed: ${this.windSpeed}m/s\n`;
            if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) {
                text += `Weather: Stormy`
            } else {
                text += `Weather: Not stormy`
            }
            return text;
        }
    }
})();


let record1 = new Record();
console.log(record1.toString());

