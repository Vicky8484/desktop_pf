/*dialog boks på links der ikke virker*/
const secretTags = document.querySelectorAll(".secret-tag");
secretTags.forEach(function (secretTag) {
  secretTag.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Den er i papirkurven af en grund...");
  });
});

const secretTags1 = document.querySelectorAll(".secret-tag1");
secretTags1.forEach(function (secretTag1) {
  secretTag1.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Ikke længere god nok til at blive vist frem...");
  });
});

const secretTags2 = document.querySelectorAll(".secret-tag2");
secretTags2.forEach(function (secretTag2) {
  secretTag2.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Denne side er en hemmelighed nu, desværre!");
  });
});

const secretTag3 = document.querySelector("#secret-tag3");
secretTag3.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Top secret gruppe projekt for virksomhed.");
});