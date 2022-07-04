const body = document.querySelector("body");

const images = ["antelope-canyon_page-az-usa.jpg",
                "banff-national-park_ab-canada.jpg",
                "braies-trentino_alto-adige-italy.jpg", 
                "kras_primorsko-goranska županija_croatia.jpg",
                "moraine-lake_ab-canada.jpg", 
                "new-zealand.jpg",
                "waterfalls-iceland.jpg"];

const randomImage = images[(Math.floor(Math.random() * images.length))];
const img = document.createElement("img");
img.className = "bgImage";
img.src = `assets/images/${randomImage}`;

body.appendChild(img);