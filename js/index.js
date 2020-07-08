// Your code goes here

const mouse = document.querySelector('.main-navigation')
mouse.addEventListener('mouseover', function ( event ) {
    event.target.style.color = 'green'
})
mouse.addEventListener('mouseout', function ( event ) {
    event.target.style.color = 'blue'
})

// DOESN'T DO ANYTHING????
// const navLink = document.querySelector('.nav-link');
// navLink.addEventListener('keydown', event => {
//     event.target.style.fontsize = 220;
// })

const el = document.querySelector('.content-destination');

let scale = 1;
el.onwheel = event => {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}


// Drag/drop
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}


const btn = document.querySelectorAll('.btn')
btn.forEach( event => event.setAttribute('draggable', true))
btn.forEach( event => event.setAttribute('ondragstart', "drag(event)"))


// Load
window.addEventListener('load', (event) => {
    console.log('Loaded!')
})

// // Focus
// function focusColor(event) {
//     event.target.style.background = 'red';
// }
// function blurColor(event) {
//     event.target.style.background = '';
// }

// btn.forEach( event => event.addEventListener('focus', focusColor))

// function getFocus(event) {
//     event.focus()
// }

// btn.forEach( event => event.setAttribute(tabindex="0") )
// // btn.forEach( event => event.onclick = function() {
// // 	event.target.style.backgroundColor = 'blue';
// //     }


const h4 = document.querySelectorAll('h4')
h4.forEach( element => element.setAttribute('tabindex',"0") )
h4.forEach( element => element.onclick = function() {
    element.style.backgroundColor = 'Green';
})


const div = document.querySelectorAll('div')
function onWindowResize() {
    h4.forEach( element => element.style.color = 'pink' )
}
window.onresize = onWindowResize()



let lastKnownScrollPosition = 0
let ticking = false
const body = document.querySelector('body')
function doSomething(scrollPos) {
    console.log('scrolling', lastKnownScrollPosition)
    body.style.backgroundColor = 'gray'
}

window.addEventListener('scroll', function(event) {
    lastKnownScrollPosition = window.scrollY;
    if (!ticking) {
	window.requestAnimationFrame(function() {
	    doSomething(lastKnownScrollPosition)
	    ticking = false
	})
	ticking = true
    }
});



// Select
function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(
	event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected it! It's a yes!`;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);




// dblclick
const click = document.querySelectorAll('img');
click.forEach( c => {
    c.addEventListener('dblclick', function () {
    c.height = 2;
    })
})



// preventDefault
const navAll = document.querySelectorAll('.nav-link')
navAll.forEach( c => {
    c.addEventListener('click', event => {
	console.log('here')
	event.preventDefault()
    });
});


// stopPropagation
const h2 = document.querySelectorAll('h2')
const textContent = document.querySelectorAll('.text-content')
h2.forEach( c => {
	c.addEventListener('click', function(event) {
	    event.stopPropagation();
	    alert('an h2 was clicked!');
	})
})
textContent.forEach( c => {
	c.addEventListener('click', function() {
	    alert('a textContent was clicked!');
	})
})
