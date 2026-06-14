(function () {
  var STORAGE_KEY = 'glutis-pet-enabled';
  var PET_BUTTON_ID = 'pet-toggle-btn';

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  function getPetContainer() {
    return document.querySelector('.gif-container');
  }

  function createPetContainer() {
    var existing = getPetContainer();
    if (existing) return existing;

    var gifContainer = document.createElement('div');
    gifContainer.className = 'gif-container gif-hidden';

    var gifImage = document.createElement('img');
    gifImage.src = '/img/Capoo/nice.gif';
    gifImage.alt = 'Capoo pet';

    gifContainer.appendChild(gifImage);
    document.body.appendChild(gifContainer);

    return gifContainer;
  }

  function isPetEnabled() {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  }

  function setPetEnabled(enabled) {
    localStorage.setItem(STORAGE_KEY, enabled ? 'true' : 'false');
    updatePetState();
  }

  function updatePetState() {
    var pet = createPetContainer();
    var button = document.getElementById(PET_BUTTON_ID);
    var enabled = isPetEnabled() && !isMobile();

    pet.classList.toggle('gif-hidden', !enabled);
    if (button) {
      button.classList.toggle('active', enabled);
      button.setAttribute('aria-pressed', enabled ? 'true' : 'false');
      button.setAttribute('title', enabled ? 'Tat pet' : 'Bat pet');
    }
  }

  function ensurePetButton() {
    var rightside = document.getElementById('rightside-config-show');
    if (!rightside || document.getElementById(PET_BUTTON_ID)) return;

    var button = document.createElement('button');
    button.id = PET_BUTTON_ID;
    button.type = 'button';
    button.setAttribute('aria-label', 'Bat tat pet');
    button.innerHTML = '<i class="fas fa-paw"></i>';

    var chatButton = document.getElementById('chat-btn');
    rightside.insertBefore(button, chatButton || rightside.firstChild);

    button.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      setPetEnabled(!(isPetEnabled() && !isMobile()));
    });
  }

  function initPetToggle() {
    ensurePetButton();
    updatePetState();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPetToggle);
  } else {
    initPetToggle();
  }

  document.addEventListener('pjax:complete', initPetToggle);
})();
