/**
 * Links
 *  https://wiki.openstreetmap.org/wiki/OpenLayers_Simple_Example
 *  https://restcountries.eu/rest/v2/region/asia
 */
const main = async () => {
  const API_KEY = 'AIzaSyAq3WKVwUzBZovzuiCo-VsP1bX1uih6Dag';

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

  countriesList.forEach((country, key) => {
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
    const countryCapital = document.createElement('h1');
    countryCapital.className = 'country-capital'
    // <span class="country-capital-title">text</span>
    // const countryCapitalTitle = document.createElement('span')
    // countryCapitalTitle.className = 'country-capital-title'
    // countryCapitalTitle.innerHTML = 'Country Capital City: '

    // using appencChild & append
    // countryCapital.appendChild(countryCapitalTitle)
    // countryCapital.append(country.capital)

    // countryCapital.innerHTML = countryCapitalTitle.concat(country.capital);
    // countryCapital.innerHTML = 'Country Capital City: '. (country.capital);
    // countryCapital.innerHTML = 'Country Capital City: ' + country.capital;
    countryCapital.innerHTML = `<span class="country-capital-title">Country Capital City : </span> ${country.capital}`;


    //create div to display country-timezone
    const countryTimeZones = document.createElement('div')
    countryTimeZones.className = 'country-timezones'
    // countryTimeZones.innerHTML = country.timezones[0];
    countryTimeZones.innerHTML = `<span class="country-timezone-title">Country Timezone :</span> ${country.timezones[0]}`; // Template-String syntax

    //create div to display country-population
    const countryPopulation = document.createElement('div')
    countryPopulation.className = 'country-population'
    countryPopulation.innerHTML= `<span class="country-popolation-title">Country Population : </span>${(country.population).toLocaleString()}`; // Template-String syntax

    //create div to display currency-symbol
    const countryCurrencySymbol = document.createElement('h3')
    countryCurrencySymbol.className = 'country-currencies'
    countryCurrencySymbol.innerHTML = `<span class="Country-currency-title">Country Currency Symbol : </span>${country.currencies[0].symbol || country.currencies[0].code}`; // Template-String syntax

    // create div to display location (lat-lng)
    const countryLocation = document.createElement('div')
    countryLocation.className = 'country-location'
    countryLocation.innerHTML = `<span class="country-location-title">Country Location : </span>${country.latlng}`;

    // append to country-card.
    countryCard.appendChild(countryName)
    countryCard.appendChild(countryFlag)
    countryCard.appendChild(countryCapital)
    countryCard.appendChild(countryTimeZones)
    countryCard.appendChild(countryPopulation)
    countryCard.appendChild(countryCurrencySymbol)
    countryCard.appendChild(countryLocation)
  

    const countryMap = document.createElement('div')
    const id = `country-map-${key}`;
    countryMap.id = id;
    countryMap.className = 'country-map'
    countryMap.style = "height: 400px;"

    // append to country-card & append to root-element.
    countryCard.appendChild(countryMap)
    rootDOMElement.appendChild(countryCard)

    // creating map-object with lat-lang to append to country-map div.
    map = new OpenLayers.Map(id);
    const mapnik         = new OpenLayers.Layer.OSM();
    const fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
    const toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
    const position       = new OpenLayers.LonLat(country.latlng[1], country.latlng[0]).transform(fromProjection, toProjection);
    const zoom           = 4;
    map.addLayer(mapnik);
    const markers = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(markers);
    markers.addMarker(new OpenLayers.Marker(position));
    map.setCenter(position, zoom);

    // ToDo: create div/span/p/h1/h2/h3/h4/h5 to display country-capital

    // ToDo: create div/span/p/h1/h2/h3/h4/h5 to display country-timezone

  })
}

main()
