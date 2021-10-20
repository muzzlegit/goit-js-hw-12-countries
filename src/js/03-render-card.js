import countryCardTmp from '../templates/country-card.hbs';
import countryListTmp from '../templates/countries-list.hbs';
import Refs from './01-get-refs';

export default function renderCountriesCard(country) {
  console.log(country);
  if (country.length === 1) {
    const countryMarkup = countryCardTmp(country);
    Refs.cardContainer.innerHTML = countryMarkup;    
  } else if (country.length > 1 && country.length <= 10) {
      const countriesListMarkup = countryListTmp(country);
      Refs.cardContainer.innerHTML = countriesListMarkup; 
  }

}
