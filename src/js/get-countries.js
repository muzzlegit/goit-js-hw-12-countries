import Refs from './01-get-refs';
import fetchCountries from './02-fetch-countries.js';
import renderCountriesCard from './03-render-card.js';
const debounce = require('lodash.debounce');
console.log(debounce);
Refs.searchInput.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  if (!e.target.value) {
    clearMarkup();
    return;
    //тут нужно написать функцию проверки инпута
  }
  fetchCountries(e.target.value)
    .then(renderCountriesCard)
    // .catch(onFetchError)
}

function onFetchError(error) {

 console.log('ERROR! Enter valid name of contry');
}

function clearMarkup() {
  Refs.cardContainer.innerHTML = '';
 }






