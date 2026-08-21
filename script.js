



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
console.log("quack 1");
const collection = document.getElementsByClassName('image-content');

for (let i = 0; i < collection.length; i++) {
    collection[i].onmouseover = function(){
        collection[i].style.opacity = 1
    }
    collection[i].onmouseout = function(){
        collection[i].style.opacity = 0
    }
}

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

