import { Experience } from "./Experience/Experience";
import { Modal } from "./Experience/Modal";
import "./style.css";

const experience = new Experience();

const infoModal = new Modal();
const infoBtn = document.getElementById("info-btn");

infoBtn.addEventListener("mouseenter", () => {
  experience.world.raycaster?.showHitboxMarkers();
});

infoBtn.addEventListener("mouseleave", () => {
  experience.world.raycaster?.hideHitboxMarkers();
});

infoBtn.addEventListener("click", () => {
  infoModal.openHTML(
    "Information & Credits",
    `Diorama Abode WFF - A beautiful interactive 3D digital sanctuary made with love for Fatih & Farah.`,
  );
});

const btn = document.getElementById("day-night-toggle");
const icon = btn.querySelector(".day-night-btn__icon");

btn.addEventListener("click", () => {
  experience.world.room?.toggleDayNight();
  const goingNight = experience.world.room?.isNight ?? false;
  icon.innerHTML = goingNight ? "&#9728;" : "&#9790;";
  experience.world.raycaster?.setDayNightVolume(goingNight);
});
