export default class SwapiService {
    _apiBase = 'https://swapi.co/api'
    _imageBase = 'https://starwars-visualguide.com/assets/img'

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/
        return item.url.match(idRegExp)[1]
    }

    getResource = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`)
        if (!response.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url}, received ${response.status}`)
        }
        return await response.json()
    }
    // People
    getAllPeople = async () => {
        const res = await this.getResource(`/people/`)
        return res.results.map(this._transformPerson)
    }
    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`)
        return this._transformPerson(person)
    }
    getPersonImage = ({
                          id
                      }) => {
        return `${this._imageBase}/characters/${id}.jpg`
    }
    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
    // Planets
    getALlPlanets = async () => {
        const res = await this.getResource(`/planets/`)
        return res.results.map(this._transformPlanet)
    }
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`)
        return this._transformPlanet(planet)
    }
    getPlanetImage = ({
                          id
                      }) => {
        return `${this._imageBase}/planes/${id}.jpg`
    }
    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
    // Starships
    getALlStarships = async () => {
        const res = await this.getResource(`/starships/`)
        return res.results.map(this._transformStarship)
    }
    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`)
        return this._transformStarship(starship)
    }
    getStarshipImage = ({
                            id
                        }) => {
        return `${this._imageBase}/starships/${id}.jpg`
    }
    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer
        }
    }
}