function expandImageMedium(element) {
    element.classList.toggle("medium");
}

function showImageText(container) {
    container.querySelector('.hover-text').style.opacity = 1;
}

function hideImageText(container) {
    container.querySelector('.hover-text').style.opacity = 0;
}

function toggleTextView() {
    var textElement = document.getElementById("funFactText");
    if (textElement.style.display === "none" || textElement.style.display === "") {
        textElement.style.display = "block"; 
    } else {
        textElement.style.display = "none"; 
    }
}