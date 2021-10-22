import Refs from './01-get-refs';
import fetchCountries from './02-fetch-countries.js';
import renderCountries from './03-render-countries.js';

const debounce = require('lodash.debounce');

Refs.searchInput.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  if (!e.target.value) {
    clearMarkup();
    return;
  }
  fetchCountries(e.target.value)
    .then(renderCountries)
    // .catch(onFetchError)
}

function onFetchError(error) {
 console.log('ERROR! Enter valid name of contry');
}

function clearMarkup() {
  Refs.cardContainer.innerHTML = '';
}






