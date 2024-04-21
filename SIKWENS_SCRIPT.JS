function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function boardEffects() {
       
    const squares = document.querySelectorAll('.row:nth-child(4) .square:nth-child(5), .row:nth-child(4) .square:nth-child(8), .row:nth-child(5) .square:nth-child(5), .row:nth-child(5) .square:nth-child(8)');
    const squares4 = document.querySelectorAll('.row:nth-child(4) .square:nth-child(5), .row:nth-child(4) .square:nth-child(8)');
    const squares5 = document.querySelectorAll('.row:nth-child(5) .square:nth-child(5), .row:nth-child(5) .square:nth-child(8)');

    const fillSquare5 = (square) => {
        const randomNumber1 = [30, 75, 75, 34, 75][Math.floor(Math.random() * 5)];
        if (square) {
            square.textContent = randomNumber1;
        }
    };

    const fillSquare8 = (square) => {
        const randomNumber2 = [48, 34][Math.floor(Math.random() * 2)];
        if (square) {
            square.textContent = randomNumber2;
        }
    };

    const fillRow5 = (square, number) => {
        if (square) {
            square.textContent = number;
        }
    };

    const square45 = document.querySelector('.row:nth-child(4) .square:nth-child(5)');
    const square48 = document.querySelector('.row:nth-child(4) .square:nth-child(8)');
    const square55 = document.querySelector('.row:nth-child(5) .square:nth-child(5)');
    const square58 = document.querySelector('.row:nth-child(5) .square:nth-child(8)');

    fillSquare5(square45);
    setTimeout(() => {
        fillSquare8(square48);

        // Fill square55 with 75 if square45 is 75, else leave it empty
        if (square45 && square45.textContent === '75') {
            fillRow5(square55, '75');
        }

        // Fill square58 with 48 if square48 is 48, else leave it empty
        if (square48 && square48.textContent === '48') {
            fillRow5(square58, '48');
        }
    }, 1000);

  const flipAndStyle4 = (squares4) => {
    squares4.forEach(square => {
        square.classList.add('flip');
        square.style.borderColor = 'white';
        square.style.color = 'white';
    });
};

  setTimeout(() => { flipAndStyle4(squares4); }, 2000);

setTimeout(() => {
    if (square45.textContent === '75') {
        square45.style.backgroundColor = 'green';
        square55.classList.toggle('flip');
        square55.style.backgroundColor = 'green';
        square55.style.borderColor = 'white';
    } else {
        square45.style.backgroundColor = 'red';
    }

    if (square48.textContent === '48') {
        square48.style.backgroundColor = 'green';
        square58.classList.toggle('flip');
        square58.style.backgroundColor = 'green';
        square58.style.borderColor = 'white';
    } else {
        square48.style.backgroundColor = 'red'; // Corrected from square55 to square48
    }
}, 3000);


const uniquesItems = document.getElementsByClassName('Uniques'); 
const animate = (items) => {
    for (const item of items) { 
            item.style.display = 'flex';
    }
}

const unanimate = (items) => {
    for (const item of items) { 
            item.style.display = 'none';
    }
}

 setTimeout(() => { 
 if (square55.textContent === '75' && square58.textContent === '48') {
            animate(uniquesItems) ;
        }
 }, 3500);

const clearSquares = (squares, uniquesItems) => {
    squares.forEach(square => {
        square.textContent = '';
        square.style.backgroundColor = 'white';
        square.style.color = 'green'; // Corrected "Color" to "color"
	square.classList.remove('flip');
        square.classList.add('square');
        console.log('done...'); // Corrected the console.log statement
        square.style.borderColor = '#FFBF00';
        unanimate(uniquesItems);
    });
};
setTimeout(() => { 
    clearSquares(squares, uniquesItems); // Assuming clearSquares is a defined function
    squares5.forEach(square => {
        square.style.color = 'white'; // Make sure 'white' is a string in quotes
    });
}, 15000); // 15000 milliseconds delay (15 seconds)

}

document.addEventListener('DOMContentLoaded', boardEffects);

setInterval(boardEffects, 31000); 

let sections = gsap.utils.toArray("section:not(footer)");

sections.forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: () =>
      section.offsetHeight < window.innerHeight
        ? "top top"
        : "bottom bottom",
        snap: 1
  });
});