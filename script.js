
// Modif dans la branche 1

console.log('BoNjOuR lez AmiS')


changeTitle();

function changeTitle() {
    const title = document.getElementById('title');
    title.innerText += " from JS";
    title.style.color = 'red';
}

const h2 = document.createElement("h2");
h2.id = "sous-titre";
h2.innerText = "Welcome to the javascript world";
document.querySelector("h1").after(h2);

const h3 = document.createElement("h3");
h3.innerText = new Date().toLocaleTimeString();
document.querySelector("#sous-titre").after(h3);

// Change the time every second
setInterval(() => {
    document.querySelector("h3").innerText = new Date().toLocaleTimeString();
}, 1000);


/**
 * Shake an element
 * @param {*} element 
 */
const shake = (element) => {
    // only shake if the element is not already shaking
    if (!element.classList.contains("shake")) {
        console.log("Shake the element", element);
        element.classList.add("shake");
    }
}

// Unshake an element
const unshake = (element) => {
    // only unshake if the element is shaking
    if (element.classList.contains("shake")) {
        console.log("Unshake the element", element);
        element.classList.remove("shake");
    }
}

// add a button to shake the image after the image
const buttonShakeImage = document.createElement("button");
buttonShakeImage.innerText = "Shake the image";
document.querySelector("img").after(buttonShakeImage);
buttonShakeImage.addEventListener("click", () => {
    shake(document.querySelector("img"));
});

// add a button to remove the shake class after the new button
const buttonUnShakeImage = document.createElement("button");
buttonUnShakeImage.innerText = "Stop shaking the image";
buttonShakeImage.after(buttonUnShakeImage);
buttonUnShakeImage.addEventListener("click", () => {
    unshake(document.querySelector("img"));
});

// add a button to shake the table
const buttonShakeTable = document.createElement("button");
buttonShakeTable.innerText = "Shake the table";
document.querySelector("table").after(buttonShakeTable);
buttonShakeTable.addEventListener("click", () => {
    shake(document.querySelector("table"));
});

// add a button to remove the shake class
const buttonUnshakeTable = document.createElement("button");
buttonUnshakeTable.innerText = "Stop shaking the table";
buttonShakeTable.after(buttonUnshakeTable);
buttonUnshakeTable.addEventListener("click", () => {
    unshake(document.querySelector("table"));
});