export class AviasalesApi {
  _baseUrl = 'https://aviasales-test-api.kata.academy'

  async getResource(url: string) {
    const res = await fetch(`${this._baseUrl}${url}`)

    return await res.json()
  }

  getSearchId() {
    return this.getResource('/search').then((data) => data)
  }
}
