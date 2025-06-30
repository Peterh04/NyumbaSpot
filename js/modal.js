const bestOffersButton = document.querySelectorAll(".bestOffers-individual");
const modal = document.querySelector(".modal");
const modalBackBtn = document.querySelector(".modalBackBtn");
const modalControls = document.querySelector(".modalControls");

//Amenities Modal
const amenitiesModal = document.querySelector(".property-amenities-modal");
const showAmenitiesBtn = document.querySelector(".property_amenities_button");
const closeAmenitiesBtn = document.querySelector(".amenitiesmodalBackBtn");

//comment modal
const reviewBtn = document.querySelector(".reviewBtn");
const commentsModal = document.querySelector(".comments-modal");
const comentsModalBackBtn = document.querySelector(".comment-modal-back");

const modalState = {
  mainModalOpen: false,
  amenitiesModalOpen: false,
  commentsModalOpen: false,
};

bestOffersButton.forEach((button) => {
  button.addEventListener("click", () => {
    openMainModal();
    setMainModalContent(button);
  });
});

//Sets the main modal contentt
const setMainModalContent = function setMainModalContent(button) {
  document.querySelector(".modal-img").src = button.dataset["image"];
  document.querySelector(".property_rent").textContent =
    button.dataset["price"];
  document.querySelector(".property_location").textContent =
    button.dataset["location"];
};

//modalopen and close functions
const openMainModal = function openMainModal() {
  showElement(modal);
  modalState.mainModalOpen = true;
};

const closeMainModal = function closeMainModal() {
  hideElement(modal);
  modalState.mainModalOpen = false;
};

modalBackBtn.addEventListener("click", () => {
  closeMainModal();
});

//sync modal controls with whattever modal is opem
const syncUIWithState = function syncUIWithState() {
  modalState.amenitiesModalOpen === true ||
  modalState.commentsModalOpen === true
    ? modalControls.classList.add("hidden")
    : modalControls.classList.remove("hidden");
};
//property amenities modal
const openAmenitiesModal = function openAmenitiesMainModal() {
  showElement(amenitiesModal);
  modalState.amenitiesModalOpen = true;
  syncUIWithState();
};

const closeAmenitiesModal = function closeAmenitiesMainModal() {
  hideElement(amenitiesModal);
  modalState.amenitiesModalOpen = false;
  syncUIWithState();
};

showAmenitiesBtn.addEventListener("click", () => {
  openAmenitiesModal();
  modalState.amenitiesModalOpen = true;
});

closeAmenitiesBtn.addEventListener("click", () => {
  closeAmenitiesModal();
  modalState.amenitiesModalOpen = false;
});

////comment modal
const openCommentModal = function openCommentModal() {
  showElement(commentsModal);
  modalState.commentsModalOpen = true;
  syncUIWithState();
};

const closeCommentModal = function closeCommentModal() {
  hideElement(commentsModal);
  modalState.commentsModalOpen = false;
  syncUIWithState();
};

reviewBtn.addEventListener("click", () => {
  openCommentModal();
});

comentsModalBackBtn.addEventListener("click", () => {
  closeCommentModal();
});

//Buttton eventListteners

//show an Element
const showElement = function showElement(element) {
  element.classList.add("open");
};

//hide an element
const hideElement = function hideElement(element) {
  element.classList.remove("open");
};
