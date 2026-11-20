



// let mylogo = document.getElementById('toToggle');

// mylogo.onmouseover = function(){
    
//     mylogo.classList.toggle('toggle-off')
//     mylogo.classList.toggle('toggle-on')
// }

// mylogo.onmouseout = function(){
    
//     mylogo.classList.toggle('toggle-off')
//     mylogo.classList.toggle('toggle-on')
// }

// document.getElementById('animationToggler').onclick = function(){
//     // console.log("quack");
    
//     mylogo.classList.toggle('toggle-off')
//     mylogo.classList.toggle('toggle-on')
// }
console.log("JavaScript file OPENED");

const fullImageDisplay = document.getElementsByClassName('full-image-display')[0];
fullImageDisplay.style.display = 'none';


fullImageDisplay.onclick = function(){
    console.log("quack");
    fullImageDisplay.style.display = 'none';
}

const gallery2 = document.getElementsByClassName('gallery2')[0];
const gallery2Elements = gallery2.getElementsByTagName('li');
for (let i = 0; i < gallery2Elements.length; i++) {
    console.log('element found');
    const hoverBox = gallery2Elements[i].getElementsByClassName('image-content')[0]
    const galleryImg = gallery2Elements[i].getElementsByTagName('img')[0];
    const galleryImgSrc = galleryImg.getAttribute('src');
    hoverBox.onmouseover = function(){
        hoverBox.style.opacity = 1
    }
    hoverBox.onmouseout = function(){
        hoverBox.style.opacity = 0
    }
    hoverBox.onclick = function() {
        fullImageDisplay.style.display = 'flex';
        const img = fullImageDisplay.getElementsByTagName('img')[0];
        img.setAttribute('src', galleryImgSrc)
    }
}

// const collection = document.getElementsByClassName('image-content');

// for (let i = 0; i < collection.length; i++) {
//     collection[i].onmouseover = function(){
//         collection[i].style.opacity = 1
//     }
//     collection[i].onmouseout = function(){
//         collection[i].style.opacity = 0
//     }
//     collection[i].onclick = function() {
//         fullImageDisplay.style.display = 'flex';
//         const img = fullImageDisplay.getElementsByTagName('img')[0];
//         img.setAttribute('src', )
//     }
// }



// for (var myElement in collection) {
//     console.log('quack 2');
//     myElement.onmouseover = function(){
    //     collection[i].classList.toggle('toggle-off')
    //     collection[i].classList.toggle('toggle-on')
    // }

//     myElement.onmouseout = function(){
        
//         myElement.classList.toggle('toggle-off')
//         myElement.classList.toggle('toggle-on')
//     }
// }

