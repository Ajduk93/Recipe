// Display overlay for recipe and ingredients //

// function overlayDisplay(){
//     document.getElementById(`show-recipe`).addEventListener('click',()=>{
//     document.getElementById(`overlay-display`).style.display = 'flex';
// });
// }
// overlayDisplay();


function showOverlay(event){
    let targetElement = event.target.closest('.view-recipe-overlay');

    if (targetElement){
        let overlay = document.querySelector('.overlay-container');

        overlay.style.display='flex';
        console.log(targetElement);
    }
}

function overlayButtons(){
    let showOverlayButtons = document.querySelectorAll('.view-recipe-button');

    showOverlayButtons.forEach(function(button){
        button.addEventListener('click',showOverlay);
    })
};

overlayButtons();
// Close overlay - closes recipe and ingredients overlay //

function closeOverlay(){

    let closeOverlay = document.getElementById('overlay-display');

    closeOverlay.style.display = 'none';

};


