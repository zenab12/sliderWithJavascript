

let images = Array.from(document.querySelectorAll('.slidercontainer img'));

//console.table(slideriItiems);

// Get Numbers of Slides 

let imagesCount = images.length;
console.log(imagesCount);

// set current Slide 

let currentSlide = 5;

//slideNymber String 

let slideNumberElement = document.getElementById('slideNumber');

// previous and next button

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');



nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//create main ul element 


let paganitionElement = document.createElement('ul');

// set id 

paganitionElement.setAttribute('id', 'pagination-ul');

// create listitiem through loop take  number of sliders 

let i;

for (i = 1; i <= imagesCount; i += 1) {
    let pagination = document.createElement('li');
    pagination.setAttribute('dataindex', i);
    pagination.appendChild(document.createTextNode(i));
        
// append itiems to the ul 
    paganitionElement.appendChild(pagination);
        
}

// add the created ul element to the page 

document.getElementById('indicitor').appendChild(paganitionElement);

// get the new created ul 

let paginationNewUl = document.getElementById('pagination-ul');



// get pagination itiems 
let paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// loop through bulets itiem
let j;
for (j = 0; j < paginationBullets.length; j += 1) {
    paginationBullets[j].onclick = function () {
        'use strict';
        currentSlide = parseInt(this.getAttribute('dataindex'));
        theChecker();
    };
}
// try check function

theChecker();
//next slidefunction 

function nextSlide() {
    'use strict';
if (nextButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide += 1;
        theChecker();
    }
}


function prevSlide() {
    'use strict';
    if (prevButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide -= 1;
        theChecker();
    }
}



function theChecker() {
    'use strict';
    //set the slide number 
    
    slideNumberElement.textContent = 'slide # ' + (currentSlide) + ' of ' + (imagesCount);
    
       removeAllClass();
    
    //set active class in current slide 
    
    images[currentSlide - 1].classList.add('active');
    
    // set active class on current pagination itiem 
    paginationNewUl.children[currentSlide - 1].classList.add('active');
    

    // check if the  current slide is the first 
    
if (currentSlide === 1) {
        // add disabled class on the previous button 
        prevButton.classList.add('disabled');
    
    } else {
        
        prevButton.classList.remove('disabled');
    }
    
    
    // check if the  current slide is the last 
    
    if (currentSlide === imagesCount) {
        // add disabled class on the previous button 
        nextButton.classList.add('disabled');
    
    } else {
        
        nextButton.classList.remove('disabled');
    }
    
    
}


// removwe all active classes active from images and pagination
function removeAllClass() {
    'use strict';
    //loop through images
    images.forEach(function (image) {
     
        image.classList.remove('active');
     
    });
    
    paginationBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
}

