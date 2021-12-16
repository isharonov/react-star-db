class SwapiService {

  _apiBase = 'https://www.swapi.tech/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  async getPerson(id) {
    const res = await this.getResource(`/people/${id}`);
    return res.result.properties;
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  async getPlanet(id) {
    const res = await this.getResource(`/planets/${id}`);
    return res.result.properties;
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  async getStarship(id) {
    const res = await this.getResource(`/starships/${id}`);
    return res.result.properties;
  }
}

const swapi = new SwapiService();

swapi.getStarship(3).then((p) => {
    console.log(p.name);
});

swapi.getAllStarships().then((planets) => {
  planets.forEach((planet) => {
    console.log(planet.name)
  });
});
