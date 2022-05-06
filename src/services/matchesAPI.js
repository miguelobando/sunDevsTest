const API_URL = 'https://jsonmock.hackerrank.com/api/football_competitions?year'

export async function getMatchesByYear (year) {
    try {
        const response = await fetch(`${API_URL}=${year}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}