let myImage = document.querySelector ("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute ("src");
    if (mySrc === "images/small-cat-breeds.webp") {
        myImage.setAttribute ("src", "images/a-cat-with-big-eyes.jpg");
    } else {
        myImage.setAttribute ("src", "images/small-cat-breeds.webp");
    }
}
