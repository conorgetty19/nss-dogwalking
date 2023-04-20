import { getCities } from "./database.js"


export const CityList = () => {
    let cities = getCities()
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

