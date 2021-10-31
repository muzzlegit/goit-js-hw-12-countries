const URL = `https://restcountris.com/v2`;

export default function fetchCountries(searchQuery) {
  return fetch(`${URL}/name/${searchQuery}`)
    .then(response => response.json());
}