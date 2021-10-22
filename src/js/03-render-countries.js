import countryCardTmp from '../templates/country-card.hbs';
import countryListTmp from '../templates/countries-list.hbs';
import Refs from './01-get-refs';

import {notice, defaultModules} from '@pnotify/core';
import * as PNotifyAnimate from '@pnotify/animate';


   
  console.dir(defaultModules);



 function renderCountries(country) {
  if (country.length === 1) {
    renderCountryCard(country);
  } else if (country.length > 1 && country.length <= 10) {
    renderCountryList(country);
  } else if (country.length > 10) {
    notice({
      title: 'Animate.css Effect',
      text: 'I use effects from Animate.css. Such smooth CSS3 transitions make me feel like butter.',
      hide: true,
      delay: 2000,
      modules: new Map([
        ...defaultModules,
        [PNotifyAnimate, {
          inClass: 'bounceInDown',
          outClass: 'hinge'
        }]
      ]),
    });

  }
}

function renderCountryCard(country) {
  const countryMarkup = countryCardTmp(country);
  Refs.cardContainer.innerHTML = countryMarkup;  
}

function renderCountryList(country) {
  const countriesListMarkup = countryListTmp(country);
  Refs.cardContainer.innerHTML = countriesListMarkup;  
}

export default  renderCountries;