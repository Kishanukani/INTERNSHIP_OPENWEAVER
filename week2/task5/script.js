let toggleButton = document.getElementById("toggleButton");
let hiddenParagraph = document.getElementById("hiddenParagraph");

toggleButton.addEventListener("click", function () {
    if (hiddenParagraph.style.display === "none") {
        hiddenParagraph.style.display = "block";
    } else {
        hiddenParagraph.style.display = "none";
    }
});