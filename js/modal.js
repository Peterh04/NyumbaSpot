const bestOffersButton = document.querySelectorAll(".bestOffers-individual");
const modal = document.querySelector(".modal");
const modalBackBtn = document.querySelector(".modalBackBtn");

let isModalOpen = false;

bestOffersButton.forEach((button) => {
  button.addEventListener("click", () => {
    openModal();
    document.querySelector(".modal-img").src = button.dataset["image"];
    document.querySelector(".property_rent").textContent =
      button.dataset["price"];
    document.querySelector(".property_location").textContent =
      button.dataset["location"];
    console.log(button.dataset["image"]);
  });
});

//modalopen and close functions

const openModal = function openModal() {
  modal.classList.add("open");
  isModalOpen = true;
  console.log(`modal is open ?`, isModalOpen);
};

const closeModal = function closeModal() {
  modal.classList.remove("open");
  isModalOpen = false;
  console.log(`modal is open ?`, isModalOpen);
};

modalBackBtn.addEventListener("click", () => {
  closeModal();
});
