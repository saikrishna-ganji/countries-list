
const main = async () => {
  const fetchCountriesFlag = async () =>{
    const response = await  fetch('https://restcountries.eu/rest/v2/region/asia/flag')
    const data = await response.json()
    return data;

  }
  const countriesFlag = await fetchCountriesFlag();
  console.log('countriesFlag ->',countriesFlag)
  
  const rootDOMElement = document.getElementById('container')

  countriesFlag.foreach((flag) => {
    console.log('countries ->',flag);

    const countryFlag = document.createElement("div")
    countriesFlag.className = "country-flag"
    countryFlag.innerHTML = flag.flag;

    var image = new Image();
    image.src = data;
    document.getElementById('container').appendChild(image);

  })

   

}






















