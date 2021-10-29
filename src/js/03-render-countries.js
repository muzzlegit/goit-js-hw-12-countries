import countryCardTmp from '../templates/country-card.hbs';
import countryListTmp from '../templates/countries-list.hbs';
import Refs from './01-get-refs';

import {notice, defaultModules} from '@pnotify/core';
import * as PNotifyAnimate from '@pnotify/animate';

export function renderCountries(country) {
   if (country.length === 1) {
     renderCountryCard(country);
  } else if (country.length > 1 && country.length <= 10) {
     renderCountryList(country);
  } else if (country.length > 10) {
    notice({
      title: 'WARNING!',
      text: 'Too many matches found. Please enter a more specific query',
      hide: true,
      delay: 3000,
      modules: new Map([
        ...defaultModules,
        [PNotifyAnimate, {
          inClass: 'slideInRight',
          outClass: 'slideOutRight'
        }]
      ]),
    });
  }
}

export function renderCountryCard(country) {
  const countryMarkup = countryCardTmp(country);
  Refs.cardContainer.innerHTML = countryMarkup;  
}

export function renderCountryList(country) {
  const countriesListMarkup = countryListTmp(country);
  Refs.cardContainer.innerHTML = countriesListMarkup;  
}
