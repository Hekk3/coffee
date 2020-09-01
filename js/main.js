
// slider one
const track = document.querySelector('.track');
const btnPrev = document.querySelector('.btnPrev');
const btnNext = document.querySelector('.btnNext');
const item = document.querySelectorAll('.cart');
let position = 0;

let checkSize = () => {
	// check, when we need turn on the button(btnNext)
	const trackCheck1 = track.getBoundingClientRect();
	const doc1 = document.documentElement.getBoundingClientRect();
	let total1 = doc1.right - trackCheck1.right;
	return total1;
}


let width = item[0].clientWidth;
btnPrev.style.pointerEvents = "none";


let moveTrack = () => {
	track.style.transform = "translateX(" + position + "px)"; // When we click on the button, we move the "track" using translateX + position.
}

let checkBtn = () => { // check buttons - check when the button need stops
	position === 0 ? btnPrev.style.pointerEvents = "none" : btnPrev.style.pointerEvents = "auto" ;
	position === -width * 2 ? btnNext.style.pointerEvents = "none" : btnNext.style.pointerEvents = "auto" ;
}

if (checkSize() !== 0 || checkSize() < 0) {
	btnNext.addEventListener('click', () => {
		if (checkSize() >= 0) {
			btnNext.style.pointerEvents = "none";
		} else {
			position -= width; // take width the item;
			moveTrack();
			checkBtn();
		}
	});
} else {
	btnNext.style.pointerEvents = "none";
}

btnPrev.addEventListener('click', () => {
	position += width; // take width the item;

	moveTrack();
	checkBtn();
});


// tabs
const tabBtn = document.querySelector('.tab__button1');
const tabBtn2 = document.querySelector('.tab__button2');
const tabBtn3 = document.querySelector('.tab__button3');
const tabsBtn = document.querySelectorAll('.tab__button-slide');
const tabs = document.querySelectorAll('.tab');
const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector('.tab2');
const tab3 = document.querySelector('.tab3');

// add this class on default
tabBtn.classList.add('tab__button-slide_active');


let removeClassTab = () => {
	for (let i = 0; i < tabsBtn.length; i++) {
		tabsBtn[i].classList.remove('tab__button-slide_active');
	}

	for (let i = 0; i < tabs.length; i++) {
		tabs[i].style.zIndex = '1';
	}
}


tabBtn.addEventListener('click', () => {

	removeClassTab();

	tab1.style.zIndex = "10";
	tabBtn.classList.add('tab__button-slide_active');
});

tabBtn2.addEventListener('click', () => {

	removeClassTab();

	tab2.style.zIndex = "10";
	tabBtn2.classList.add('tab__button-slide_active');
});

tabBtn3.addEventListener('click', () => {

	removeClassTab();

	tab3.style.zIndex = "10";
	tabBtn3.classList.add('tab__button-slide_active');
});


// slider two
const track1 = document.querySelector('.track1');
const btnPrev1 = document.querySelector('.btnPrev1');
const btnNext1 = document.querySelector('.btnNext1');
const item1 = document.querySelectorAll('.cart1');
let position1 = 0;

let checkSize1 = () => {
	// check, when we need turn on the button(btnNext)
	const trackCheck = track1.getBoundingClientRect();
	const doc = document.documentElement.getBoundingClientRect();
	let total = doc.right - trackCheck.right;
	return total;
}


// a start positon the track
let width1 = item1[0].clientWidth;
btnPrev1.style.pointerEvents = "none";


let moveTrack1 = () => {
	track1.style.transform = "translateX(" + position1 + "px)"; // When we click on the button, we move the "track" using translateX + position.
}

let checkBtn1 = () => { // check buttons - check when the button need stops
	position1 === 0 ? btnPrev1.style.pointerEvents = "none" : btnPrev1.style.pointerEvents = "auto" ;
	position1 === -width1 * 2 ? btnNext1.style.pointerEvents = "none" : btnNext1.style.pointerEvents = "auto" ;
}

if (checkSize1() !== 0 || checkSize1() < 0) {
	btnNext1.addEventListener('click', () => {
		if (checkSize1() >= 0) {
			btnNext1.style.pointerEvents = "none";
		} else {
			position1 -= width1; // take width the item;

			moveTrack1();
			checkBtn1();
		}
	});
} else {
	btnNext1.style.pointerEvents = "none";
}

btnPrev1.addEventListener('click', () => {
	position1 += width1; // take width the item;

	moveTrack1();
	checkBtn1();
});