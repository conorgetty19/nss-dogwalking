import { getWalkers, getCities, getWalkerCities } from "./database.js"

const walkerCities = getWalkerCities()
const cities = getCities()

/*
defined two separate functions (via instructions) that didn't work.
Found simpler way

let matchingWalkerCities = []
const getMatchingWalkerCities = (walkId) => {
    for (const walkerCity of walkerCities) {

        if (walkerCity.walkerId === parseInt(walkId)) {
            matchingWalkerCities.push(walkerCity)
        }
    }
    return matchingWalkerCities
}

let cityNames = []
let cityNamesString
const getMatchingCityNames = (matchedWalkerCities) => {
    for (const city of cities) {
        if (city.cityId === matchedWalkerCities.cityId){
            cityNames.push(city.name)
            cityNamesString = cityNames.join(" ,")
        }
    }
    return cityNamesString
}
*/

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target

        /*
            Only run the rest of the logic if a walker <li> was clicked
        */
        if (itemClicked.id.startsWith("walker")) {

            /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("walker--2" if you clicked on the second one).

                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `walkerId` variable.

                Splitting a string in JavaScript:
                    https://www.youtube.com/watch?v=u2ZocmM93yU

                Destructuring in JavaScript:
                    https://www.youtube.com/watch?v=UgEaJBz3bjY
            */
            const [, walkerId] = itemClicked.id.split("--")
            
            let matchingWalker = null
            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)){
                    matchingWalker = walker
                }
            }

            let matchingCities = []
            for (const walkerCity of walkerCities) {
                if (walkerCity.walkerId === matchingWalker.id){
                    matchingCities.push(walkerCity)
                }
            }

            let matchedCities = ""
            for (const matchCity of matchingCities){
                for (const city of cities) {
                    if (city.id === matchCity.cityId){
                        matchedCities += `${city.name}, `
                    }
                }
            }
            window.alert(`${matchingWalker.name} operates in ${matchedCities}`)
        }
    }
)

export const walkers = getWalkers()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}