const profileOpenPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.form__close');

function openPopup(evt) {
    evt.preventDefault()
    popup.classList.add('popup_opened')
}

function closePopup(evt) {
    evt.preventDefault()
    popup.classList.remove('popup_opened')
}

profileOpenPopupButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

// Открытие и закрытие попап

let nameInput = document.querySelector('.name-input');
let jobInput =  document.querySelector('.job-input');
let saveFormButton = document.querySelector('.form__button');
let profileInfo = document.querySelector('.profile__info');

let profileName = document.querySelector('.profile__name');
let profileText = document.querySelector('.profile__text');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
    popup.classList.remove('popup_opened')
}

saveFormButton.addEventListener('click', formSubmitHandler);
