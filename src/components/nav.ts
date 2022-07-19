/**
 * Navigation
 */

const BUTTON_ID = 'nav-menu-button';
const MENU_ID = 'nav-menu';

const OPEN_BUTTON = 'is-open';
const OPEN_MENU = '-translate-x-full';

export const initNav = () => {
	const buttonElement = document.querySelector(`#${BUTTON_ID}`);
	const menuElement = document.querySelector(`#${MENU_ID}`);
	if (!buttonElement || !menuElement) return;

	const toggleMenu = () => {
		buttonElement.classList.toggle(OPEN_BUTTON);
		menuElement.classList.toggle(OPEN_MENU);
	};

	buttonElement.addEventListener('click', toggleMenu);
};
