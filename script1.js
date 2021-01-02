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

    // ToDo: create div/span/p/h1/h2/h3/h4/h5 to display country-capital

    // ToDo: create div/span/p/h1/h2/h3/h4/h5 to display country-timezone

    countryCard.appendChild(countryName)
    countryCard.appendChild(countryFlag)
    
    rootDOMElement.appendChild(countryCard)


  })
}

main()
