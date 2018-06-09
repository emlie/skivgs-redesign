// Get HTML elements
var aUprogram = document.querySelector('#aUprogram');
var aAktuelt = document.querySelector('#aAktuelt');
var aForElever = document.querySelector('#aForElever');
var aOmOss = document.querySelector('#aOmOss');

var uprogram = document.querySelector('#uprogram');
var aktuelt = document.querySelector('#aktuelt');
var forElever = document.querySelector('#forElever');
var omOss = document.querySelector('#omOss');





// Main nav functions
function showUprogram() {
  if (uprogram.style.display === "none") {
    uprogram.style.display = "block";
    aUprogram.style.color = "var(--ski-blue-lighter)";
  }
  else {
    uprogram.style.display = "none";
    aUprogram.style.color = "var(--almost-black)";
  }
  aAktuelt.style.color = "var(--almost-black)";
  aktuelt.style.display = "none";
  aForElever.style.color = "var(--almost-black)";
  forElever.style.display = "none";
  aOmOss.style.color = "var(--almost-black)";
  omOss.style.display = "none";
};


function showAktuelt() {
  if (aktuelt.style.display === "none") {
    aktuelt.style.display = "block";
    aAktuelt.style.color = "var(--ski-blue-lighter)";
  }
  else {
    aktuelt.style.display = "none";
    aAktuelt.style.color = "var(--almost-black)";
  }
  uprogram.style.display = "none";
  aUprogram.style.color = "var(--almost-black)";
  aForElever.style.color = "var(--almost-black)";
  forElever.style.display = "none";
  aOmOss.style.color = "var(--almost-black)";
  omOss.style.display = "none";
};


function showForElever() {
  if (forElever.style.display === "none") {
    forElever.style.display = "block";
    aForElever.style.color = "var(--ski-blue-lighter)";
  }
  else {
    forElever.style.display = "none";
    aForElever.style.color = "var(--almost-black)";
  }
  aUprogram.style.color = "var(--almost-black)";
  uprogram.style.display = "none";
  aAktuelt.style.color = "var(--almost-black)";
  aktuelt.style.display = "none";
  aOmOss.style.color = "var(--almost-black)";
  omOss.style.display = "none";
};


function showOmOss() {
  if (omOss.style.display === "none") {
    omOss.style.display = "block";
    aOmOss.style.color = "var(--ski-blue-lighter)";
  }
  else {
    omOss.style.display = "none";
    aOmOss.style.color = "var(--almost-black)";
  }
  aUprogram.style.color = "var(--almost-black)";
  uprogram.style.display = "none";
  aAktuelt.style.color = "var(--almost-black)";
  aktuelt.style.display = "none";
  aForElever.style.color = "var(--almost-black)";
  forElever.style.display = "none";
};
