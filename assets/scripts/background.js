const body = document.querySelector("body");

const images = [
    {
        src: "0.jpg",
        description: "Poon Hill, Nepal",
        photographer: "Joffrey Persia"
    },
    {
        src: "1.jpg",
        description: "Lake Brienz, Switzerland",
        photographer: "Andreas Gucklhorn"
    },
    {
        src: "2.jpg",
        description: "Alhorines Valley, Spain",
        photographer: "Pepe Gandia"
    },
    {
        src: "3.jpg",
        description: "Wallowa, OR, United States",
        photographer: "Cody Wilson"
    },
    {
        src: "4.jpg",
        description: "BlankenBurg, Germany",
        photographer: "Olli Henze"
    },
    {
        src: "5.jpg",
        description: "Salto Grande, Chile",
        photographer: "Thomos Fuhrmann"
    },
    {
        src: "6.jpg",
        description: "Above Cape Town, South Africa",
        photographer: "Tim Johnson"
    },
    {
        src: "7.jpg",
        description: "Kalalau, HI, United STates",
        photographer: "Romain Guy"
    }
];

const img = document.createElement("img");
const description = document.querySelector(".img-desc");
const photographer = document.querySelector(".photographer");

const randomImage = images[(Math.floor(Math.random() * images.length))];

img.className = "bgImage";
img.src = `assets/images/${randomImage.src}`;

description.textContent = randomImage.description;
photographer.textContent = randomImage.photographer;

body.appendChild(img);