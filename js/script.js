// Creation of variables
const thumbnails = document.querySelectorAll(".thumbnail");
const largeImg = document.querySelector("#largeImage");
const caption = document.getElementById("caption");
const descriptionText = document.getElementById("descriptionText");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const descriptionTexts = [
    "Cartes principales",
    "Première tournée de cartes",
    "Début de la fresque du premier groupe",
    "Deuxième tournée de cartes",
    "Avancée de la fresque du premier groupe",
    "Troisième paquet de cartes",
    "Fresque complète",
    "Repère pour le deuxième atelier",
    "Fin du deuxième atelier"
];

// Default image
largeImg.src = thumbnails[0].src;

// Default description text
descriptionText.textContent = descriptionTexts[0];

let currentIndex = 0;

function updateImage(index) {
    largeImg.src = thumbnails[index].src;
    descriptionText.textContent = descriptionTexts[index]; // Display description text
}

// Add event listeners on thumbnails
for (let i = 0; i < thumbnails.length; i++) {

    thumbnails[i].addEventListener("click", () => {
        currentIndex = i;
        updateImage(currentIndex);
    });
}


// Previous navigation
prev.addEventListener("click", () => {

    currentIndex = (currentIndex === 0) ? thumbnails.length - 1 : currentIndex - 1;

    updateImage(currentIndex);

});

// Next navigation
next.addEventListener("click", () => {

    currentIndex = (currentIndex === thumbnails.length - 1) ? 0 : currentIndex + 1;

    updateImage(currentIndex);

});
