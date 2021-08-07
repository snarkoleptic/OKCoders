
const possible = {
	days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	outlook: ["Sunny", "Cloudy", "Rainy"],
	windDirection: ["N", "S", "E", "W", "NE", "NW", "SE", "SW"],
	conditionalBands: {
		"Sunny": {tempMin: 75, tempMax: 95, windSpeed: [0, 10]},
		"Cloudy": {tempMin: 60, tempMax: 80, windSpeed: [0, 30]},
		"Rainy": {tempMin: 55, tempMax: 63, windSpeed: [20, 45]},
	},
}

function pickRandom(arr) {
	const choiceIDX = Math.floor(Math.random() * arr.length)
	const choice = arr[choiceIDX]
	return choice
}

export function getForecastData(days) {
	const data = Array.from({length: days}).map((item, idx) => {
		const day = possible.days[idx]
		const outlook = pickRandom(possible.outlook)
		
		const conditional = possible.conditionalBands[outlook]
		const tempDiff = (conditional.tempMax - conditional.tempMin)
		
		const tempLow = conditional.tempMin + ((tempDiff / 2) * Math.random())
		const tempHigh = conditional.tempMax - ((tempDiff / 2) * Math.random())
		
		const windSpeedRange = (conditional.windSpeed[1] - conditional.windSpeed[0])
		const windSpeed = conditional.windSpeed[0] + (windSpeedRange * Math.random())
		const windDirection = pickRandom(possible.windDirection)
		
		return {day, outlook, tempLow, tempHigh, windSpeed, windDirection,}
	})
	return data
}
