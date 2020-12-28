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

    const countryCard = document.createElement("div")
    countryCard.className = "country-card"
    countryCard.innerHTML = country.name;

    rootDOMElement.appendChild(countryCard)
  })
}

main()
