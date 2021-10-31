import Refs from './01-get-refs';
import fetchCountries from './02-fetch-countries.js';
import { renderCountries } from './03-render-countries.js';

const debounce = require('lodash.debounce');

Refs.searchInput.addEventListener('input', debounce(onInput, 1000));

function onInput(e) {
  if (!e.target.value) {
    clearMarkup();
    return;
  }
  fetchCountries(e.target.value)
    .then(renderCountries)
    .catch(error => console.log(error))
}

function clearMarkup() {
  Refs.cardContainer.innerHTML = '';
}






