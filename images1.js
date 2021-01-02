var main = async () => {

var image = document.createElement("imgage");
image.src = await fetch("https://restcountries.eu/rest/v2/region/asia")
var src = document.getElementById("container");
src.appendChild(image);
return image;


}

var imagesList = await image();
console.log('flagslist ->',imagesList)




