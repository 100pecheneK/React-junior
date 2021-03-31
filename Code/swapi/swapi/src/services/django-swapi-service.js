export default class DjangoSwapiService {
    _apiBase = 'http://localhost:8000/api/v1'
    _imageBase = 'http://localhost:8000/media/image'
    _transformData = ({id, ...items}) => {
        return {
            id: id.toString(),
            ...items
        }
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
        return res.map(this._transformData)
    }
    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`)
        return this._transformData(person)
    }
    getPersonImage = ({id}) => {
        return `${this._imageBase}/people/${id}.jpg`
    }
    // Planets
    getALlPlanets = async () => {
        const res = await this.getResource(`/planets/`)
        return res.map(this._transformData)
    }
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`)
        return this._transformData(planet)
    }
    getPlanetImage = ({id}) => {
        return `${this._imageBase}/planets/${id}.jpg`
    }
    // Starships
    getALlStarships = async () => {
        const res = await this.getResource(`/starships/`)
        return res.map(this._transformData)
    }
    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`)
        return this._transformData(starship)
    }
    getStarshipImage = ({id}) => {
        return `${this._imageBase}/starships/${id}.jpg`
    }
}