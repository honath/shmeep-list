const morning = document.querySelector(".morning");
const evening = document.querySelector(".evening");

const today = new Date();

if (today.getHours() > 12) {
  morning.style.display = "none";
} else {
  evening.style.display = "none";
}
