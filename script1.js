const main = async () => {
  // xml-http request to a web-server to fetch data, here web-server name is restcountries.eu
  const fetchCountriesList = async () => {
    // fetch('https://restcountries.eu/rest/v2/all')
    const response = await fetch('https://restcountries.eu/rest/v2/region/asia')
    const data = await response.json()
    
    return data;
  }

  const countriesList = await fetchCountriesList();
  console.log('countriesList -> ', countriesList)

  const rootDOMElement = document.getElementById('root')

  countriesList.forEach((country) => {
    console.log('country -> ', country);

    // create div to display country-information
    const countryCard = document.createElement('div');
    countryCard.className = 'country-card'

    // create div to display country-name.
    const countryName = document.createElement("h1")
    countryName.className = "country-name"
    countryName.innerHTML = country.name;

    // create img to display country-flag.
    const countryFlag = document.createElement('img')
    countryFlag.className = 'country-flag'
    countryFlag.src = country.flag;


    // create div to display country-capital <p class="country-capital">text</p>
    const countryCapital = document.createElement('p');
    countryCapital.className = 'country-capital'
    // <span class="country-capital-title">text</span>
    // const countryCapitalTitle = document.createElement('span')
    // countryCapitalTitle.className = 'country-capital-title'
    // countryCapitalTitle.innerHTML = 'Country Capital City: '

    // using appencChild & append
    // countryCapital.appendChild(countryCapitalTitle)
    // countryCapital.append(country.capital)

    // countryCapital.innerHTML = countryCapitalTitle.concat(country.capital);
    // countryCapital.innerHTML = 'Country Capital City: '.concat(country.capital);
    // countryCapital.innerHTML = 'Country Capital City: ' + country.capital;
    countryCapital.innerHTML = `<span class="country-capital-title">Country Capital City </span> ${country.capital}`;


    //create div to display country-timezone
    const countryTimeZones = document.createElement('div')
    countryTimeZones.className = 'country-timezones'
    // countryTimeZones.innerHTML = country.timezones[0];
    countryTimeZones.innerHTML = `<span class="country-timezone-title">Country Timezone :</span> ${country.timezones[0]}`; // Template-String syntax


    // ToDo: create div/span/p/h1/h2/h3/h4/h5 to display country-capital

    // ToDo: create div/span/p/h1/h2/h3/h4/h5 to display country-timezone

    countryCard.appendChild(countryName)
    countryCard.appendChild(countryFlag)
    countryCard.appendChild(countryCapital)
    countryCard.appendChild(countryTimeZones)
    
    rootDOMElement.appendChild(countryCard)


  })
}

main()
