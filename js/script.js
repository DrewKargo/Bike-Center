'use strict';

const search = document.querySelector('.search__input'),
		searchModal = document.querySelector('.search__modal'),
		signIn = document.querySelector('.sign-in'),
		icon = document.querySelector('.sign-in__icon'),
		body = document.querySelector('.body'),
		menu = document.querySelector('.menu'),
		catalogContainer = document.querySelector('.menu__container'),
		brands = document.querySelector('.menu__brands'),
		catalogToggle = document.querySelector('.menu__tabs-selector-mobile_toggle'),
		catalogButton = document.querySelector('#mobile-catalog-btn'),
		brandsButton = document.querySelector('#mobile-brands-btn'),
		burger = document.querySelector('.header__burger');
		
		

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
			searchModal.style.display = 'none';
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

	let showMenu = false;

	burger.addEventListener('click', () => {
		let categories = document.querySelectorAll('.menu__categories_item');
		categories.forEach(el => el.classList.remove('menu__categories_item-active'));
		categories[0].classList.add('menu__categories_item-active');
		
		if(showMenu == false){
			body.style.overflow = "hidden";
			menu.classList.add('menu__open');
			burger.classList.add('header__burger_close');

			if(window.innerWidth > 767){
				let firstCategory = document.querySelector("#Bicycles"),
					tabcontent = document.querySelectorAll(".menu__subcategories");

				for (let i = 0; i < tabcontent.length; i++) {
		 			tabcontent[i].style.display = "none";
				}
				
				firstCategory.style.display = "block";
		
				
				const msnry = new Masonry( firstCategory,{
					itemSelector: '.menu__subcategories_item',
					columnWidth: 313,
					gutter: 100
				})
			}

			return showMenu = true;
		} else {
			body.style.overflow = "";
			menu.classList.remove('menu__open');
			burger.classList.remove('header__burger_close');

			return showMenu = false;
		}
		

	})
	
	let toggleInCatalogPosition = true;

	brandsButton.addEventListener('click', () => {
		if(toggleInCatalogPosition == true){
			catalogToggle.classList.add('menu__tabs-selector-mobile_toggle-to-brands');
			catalogContainer.style.display = "none";
			brands.style.display = "block";
			return toggleInCatalogPosition = false;
		}
	})
	catalogButton.addEventListener('click', () => {
		if(toggleInCatalogPosition == false){
			catalogToggle.classList.remove('menu__tabs-selector-mobile_toggle-to-brands');
			catalogContainer.style.display = "flex";
			brands.style.display = "none";
			return toggleInCatalogPosition = true;
		}
	})

	

	function openSubcategory(event, categoryName) {
		
		if(window.innerWidth > 767){
			
			let categories = document.querySelectorAll('.menu__categories_item'),
				currentCategory = document.getElementById(categoryName), 
				tabcontent = document.querySelectorAll(".menu__subcategories");
			
			for (let i = 0; i < tabcontent.length; i++) {
		 		tabcontent[i].style.display = "none";
			}

			currentCategory.style.display = "block";
			
			categories.forEach(el => el.classList.remove('menu__categories_item-active'));
			event.currentTarget.classList.add('menu__categories_item-active');
			
			
			
			const msnry = new Masonry( currentCategory,{
				itemSelector: '.menu__subcategories_item',
				columnWidth: 313,
				gutter: 100
			})
		}
	  
	}
	