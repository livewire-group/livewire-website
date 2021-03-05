/**
 * Navigation
 */

const BUTTON_ID = 'nav-menu-button';
const MENU_ID = 'nav-menu';

const OPEN_BUTTON = 'is-open';
const OPEN_MENU = '-translate-x-full';

export const initNav = () => {
	const buttonEl = document.getElementById(BUTTON_ID);
	const menuEl = document.getElementById(MENU_ID);
	if (!buttonEl || !menuEl) return;

	const toggleMenu = () => {
		buttonEl.classList.toggle(OPEN_BUTTON);
		menuEl.classList.toggle(OPEN_MENU);
	};

	buttonEl.addEventListener('click', toggleMenu);
};
