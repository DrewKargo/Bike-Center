'use strict';

const search = document.querySelector('.search__input'),
		searchModal = document.querySelector('.search__modal'),
		signIn = document.querySelector('.sign-in'),
		icon = document.querySelector('.sign-in__icon');


	let showModal = false,
		auth = false;
	search.addEventListener('click',() => {
		if(showModal == false){
			searchModal.style.display = 'flex';
			showModal = true;
		} else{
			searchModal.style.display = 'none';
			showModal = false;
		}
	})
	document.addEventListener( 'click', (e) => {
		const withinBoundaries = e.composedPath().includes(search);
	 
		if ( ! withinBoundaries ) {
			showModal = false;
			searchModal.style.display = 'none'; // скрываем элемент т к клик был за его пределами
		}
	})

	signIn.addEventListener('click', () => {
		if(auth == false){
		icon.classList.add('sign-in__icon_false');
		signIn.classList.add('header__sign-in_out');
		auth = true;
		} else{
			icon.classList.remove('sign-in__icon_false');
			signIn.classList.remove('header__sign-in_out');
			auth = false;
		}
	})