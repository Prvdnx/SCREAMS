import { interplanetaryDestinationsArr, shortSpaceTripsArr } from '/data.js'
import getMatchingTripsArr from '/getMatchingTripsArr.js'
// import filterFunction from '/getMatchingTripsArr.js'     // it can be named anything but that's not adviced

console.log(getMatchingTripsArr(interplanetaryDestinationsArr, 'exotic'))