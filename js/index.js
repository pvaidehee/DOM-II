 // Your code goes here

// 1) nav will get big when mouseover it
const navAthing = document.querySelector('.nav');
navAthing.addEventListener('mouseover', (event) => {
navAthing.style.transform = 'scale(1.5)';
navAthing.style.transition = 'transform 2s';
});
navAthing.addEventListener('mouseleave',(event) => {
    navAthing.style.transform = 'scale(1)';
    navAthing.style.transition = 'transform s';
});

// 2) Keydown event
const movingDown = document.querySelector('body');
movingDown.addEventListener("keydown", (event) => {
	alert('How long are you gonna keep holding keydown?')
});

//3) Wheel event for scrolling the windows page
const scrollBar = document.querySelector('body');
scrollBar.addEventListener('wheel', (event) => {
alert('How long are you gonna keep scrolling me!')
});

// 4) drag event will give a alert 
const body = document.querySelector('body');
body.addEventListener("dragstart", event => {
	window.alert("Don't drag so much");
});


// 5) load event will pop a message evertime the page will get loaded
window.addEventListener("load", event => {
	window.alert("The page has been loaded.");
});

// 6) keypress event
body.addEventListener("keypress", event => {
	window.alert("God! Stop pushing my buttons now!!!");
});

// 7)  resize event will pop a message when the window is resized
window.addEventListener("resize", event => {
	window.alert("Now you have a problem with my size huh?");
});

// 8) Click event 
navAthing.addEventListener('click', (event) => {
alert("Aha don't disturb me now!") 
});
	
// 9) Scroll event will change the background colour of the page
window.addEventListener("scroll", event => {
	body.style.backgroundColor = "plum";
}); 

// 10) Click and Double Click event 
const h1 = document.querySelector('h1');
h1.addEventListener("click", event => {
	event.target.textContent = "Travel Guide";
});
h1.addEventListener("dblclick", event => {
	event.target.textContent = "Who doesn't love to travel?";
	event.preventDefault();
	event.stopPropagation();
});