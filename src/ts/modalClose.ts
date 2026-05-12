import { unlockBackground, restoreFocus, trapFocus } from './a11yFocus.js';

type Modals = {
  backdrops: NodeListOf<HTMLElement>;
  team: HTMLElement | null;
  details: HTMLElement | null;
  login: HTMLElement | null;
  register: HTMLElement | null;
  trailer: HTMLElement | null;
  player: HTMLIFrameElement | null;
  forgotPassword: HTMLElement | null;
  rules: HTMLElement | null;
};

type Buttons = {
  login: HTMLButtonElement | null;
  registerCancel: HTMLButtonElement | null;
  registerXButton: HTMLButtonElement | null;
  team: HTMLButtonElement | null;
  details: HTMLButtonElement | null;
  trailer: HTMLButtonElement | null;
  forgotPasswordCancel: HTMLButtonElement | null;
  forgotPasswordXButton: HTMLButtonElement | null;
  rules: HTMLButtonElement | null;
};

const modals: Modals = {
  backdrops: document.querySelectorAll<HTMLElement>('.backdrop-modal'),
  team: document.querySelector<HTMLElement>('.modal-team-box'),
  details: document.querySelector<HTMLElement>('.details'),
  login: document.querySelector<HTMLElement>('.login'),
  register: document.querySelector<HTMLElement>('.register'),
  trailer: document.querySelector<HTMLElement>('#trailer'),
  player: document.querySelector<HTMLIFrameElement>('#trailerPlayer'),
  forgotPassword: document.querySelector<HTMLElement>('#forgotPasswordModal'),
  rules: document.querySelector<HTMLElement>('.rules'),
};

const buttons: Buttons = {
  login: document.querySelector<HTMLButtonElement>('#loginCloseButton'),
  registerCancel: document.querySelector<HTMLButtonElement>('#registerCancel'),
  registerXButton: document.querySelector<HTMLButtonElement>('#registerCloseButton'),
  team: document.querySelector<HTMLButtonElement>('.team__modal--close'),
  details: document.querySelector<HTMLButtonElement>('#detailsModalClose'),
  trailer: document.querySelector<HTMLButtonElement>('#trailerModalClose'),
  forgotPasswordCancel: document.querySelector<HTMLButtonElement>('#forgot-passwordCancel'),
  forgotPasswordXButton: document.querySelector<HTMLButtonElement>('#forgot-passwordCloseButton'),
  rules: document.querySelector<HTMLButtonElement>('#rulesCloseButton'),
};

function ensureModalFocusable(modal: HTMLElement | null | undefined) {
  if (modal && !modal.hasAttribute('tabindex')) {
    modal.setAttribute('tabindex', '-1');
  }
}

function isOpen(modal: HTMLElement | null | undefined) {
  return !!modal && !modal.classList.contains('hidden');
}

function hideModal(modal: HTMLElement | null | undefined) {
  modal?.classList.add('hidden');
}

function getOpenModal(): HTMLElement | null {
  // order is important, upper goes first
  // eg. register -> rules so rules checked first
  if (isOpen(modals.trailer)) return modals.trailer;
  if (isOpen(modals.rules)) return modals.rules;
  if (isOpen(modals.register)) return modals.register;
  if (isOpen(modals.forgotPassword)) return modals.forgotPassword;
  if (isOpen(modals.team)) return modals.team;
  if (isOpen(modals.details)) return modals.details;
  if (isOpen(modals.login)) return modals.login;

  return null;
}

[
  buttons.login,
  buttons.registerCancel,
  buttons.registerXButton,
  buttons.team,
  buttons.details,
  buttons.trailer,
  buttons.forgotPasswordCancel,
  buttons.forgotPasswordXButton,
  buttons.rules,
].forEach(button => button?.addEventListener('click', closeModal));

export function setupModalClose() {
  [
    modals.team,
    modals.details,
    modals.login,
    modals.register,
    modals.trailer,
    modals.forgotPassword,
    modals.rules,
  ].forEach(ensureModalFocusable);
  modals.backdrops.forEach(backdrop => {
    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) closeModal();
    });
  });

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
      return;
    }

    const activeModal = getOpenModal();
    if (!activeModal) return;

    trapFocus(activeModal, e);
  });
}

export function closeModal() {
  const activeModal = getOpenModal();
  if (!activeModal) return;

  hideModal(activeModal);

  if (activeModal === modals.trailer && modals.player) {
    modals.player.src = '';
  }

  if (
    activeModal === modals.team ||
    activeModal === modals.details ||
    activeModal === modals.login
  ) {
    document.body.style.overflow = 'auto';
    unlockBackground();
  }

  restoreFocus();
}
