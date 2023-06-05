// Get dialog element
var langDialog = document.getElementById("lang-dialog");

// Get language switch buttons
var langEnButton = document.getElementById("lang-en");
var langKoButton = document.getElementById("lang-ko");
var langCloseButton = document.getElementById("lang-close");

// Get content elements
var contentEn = document.querySelectorAll("#content [lang='en']");
var contentKo = document.querySelectorAll("#content [lang='ko']");

// Set default language (English)
var currentLang = "en";
for (var i = 0; i < contentEn.length; i++) {
    contentEn[i].style.display = "block";
}

// Show language switch dialog if no language preference is set
if (!localStorage.getItem("language")) {
    langDialog.style.display = "block";
}

// Add event listeners to language switch buttons
langEnButton.addEventListener("click", function() {
    localStorage.setItem("language", "en");
    for (var i = 0; i < contentEn.length; i++) {
        contentEn[i].style.display = "block";
    }
    for (var i = 0; i < contentKo.length; i++) {
        contentKo[i].style.display = "none";
    }
    langDialog.style.display = "none";
});

langKoButton.addEventListener("click", function() {
    localStorage.setItem("language", "ko");
    for (var i = 0; i < contentEn.length; i++) {
        contentEn[i].style.display = "none";
    }
    for (var i = 0; i < contentKo.length; i++) {
        contentKo[i].style.display = "block";
    }
    langDialog.style.display = "none";
});

langCloseButton.addEventListener("click", function() {
    langDialog.style.display = "none";
});

// Set content language based on user preference
if (localStorage.getItem("language") === "ko") {
    currentLang = "ko";
    for (var i = 0; i < contentEn.length; i++) {
        contentEn[i].style.display = "none";
    }
    for (var i = 0; i < contentKo.length; i++) {
        contentKo[i].style.display = "block";
    }
}
