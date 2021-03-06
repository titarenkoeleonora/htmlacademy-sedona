var link = document.querySelector(".modal-link");
var modalForm = document.querySelector(".modal-form");
var arrivalDate = modalForm.querySelector("[name=arrival-date]");

var adults = modalForm.querySelector("[name=adults]");
var children = modalForm.querySelector("[name=children]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adults");
  storage = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

function doFocus() {
  arrivalDate.focus();
};

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalForm.classList.toggle("modal-form-show");

  setTimeout(doFocus, 1500);
  if (storage) {
    adults.value = storage;
    children.value = storage;
  }
});

modalForm.addEventListener("submit", function (evt) {
  if (isStorageSupport) {
    localStorage.setItem("children", children.value);
    localStorage.setItem("adults", adults.value);
  }
});
