const bestOffersButton = document.querySelectorAll(".bestOffers-individual");
const modal = document.querySelector(".modal");
const modalBackBtn = document.querySelector(".modalBackBtn");
const modalControls = document.querySelector(".modalControls");

//Amenities Modal
const amenitiesModal = document.querySelector(".property-amenities-modal");
const showAmenittiesBtn = document.querySelector(".property_amenities_button");
const closeAmenitiesBtn = document.querySelector(".amenitiesmodalBackBtn");

const modalState = {
  mainModalOpen: false,
  amenitiesModalOpen: false,
};

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
  modalState.mainModalOpen = true;
  console.log(`modal is open ?`, modalState);
};

const closeModal = function closeModal() {
  modal.classList.remove("open");
  modalState.mainModalOpen = false;
  console.log(`modal is open ?`, modalState);
};

modalBackBtn.addEventListener("click", () => {
  closeModal();
});

//property amenities modal
const openAmenitiesModal = function openModal() {
  amenitiesModal.classList.add("open");
  modalControls.classList.add("hidden");
};

const closeAmenitiesModal = function closeModal() {
  amenitiesModal.classList.remove("open");
  modalControls.classList.remove("hidden");
};

showAmenittiesBtn.addEventListener("click", () => {
  openAmenitiesModal();
  modalState.amenitiesModalOpen = true;
  console.log(`modal is open ?`, modalState);
});

closeAmenitiesBtn.addEventListener("click", () => {
  closeAmenitiesModal();
  modalState.amenitiesModalOpen = false;
  console.log(`modal is open ?`, modalState);
});



//Buttton eventListteners

const setEventListeners = function setEventListeners(button){
  
}