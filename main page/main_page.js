// Image input button //

let foodImage = document.getElementById('food-img');
let inputImage = document.getElementById('image-input');

inputImage.onchange = function(){
    foodImage.src = URL.createObjectURL(inputImage.files[0]);
}


// Dish title button //

let dishTitleDoc = document.getElementById('dish-title-input');
let dishTitlebtn = document.getElementById('dish-title-bttn');


dishTitlebtn.addEventListener('click',function (){

if(dishTitleDoc.style.display === 'none'){
dishTitleDoc.style.display = 'flex';
}
else{
dishTitleDoc.style.display = 'none';
}

})


// Ingredients button and input //

let postIng = document.getElementById('ing-btn');

postIng.addEventListener('click', function(){

    let inputValue = document.getElementById('input-ingredients').value;
    let li = document.createElement('li');
    let text = document.createTextNode("- "+ inputValue);
    li.appendChild(text);
    document.getElementById('ing-list').appendChild(li);
});


// Preparation button and text area //



function showInputPrep (){ // Shows text area on button click

    document.getElementById('input-prep').style = 'display: flex;margin-inline: auto;width: 100%;height: 25vh ;margin-top: 10px;text-align: start;font-family:"Rubik",sans-serif;font-size: 20px;padding: 10px 10px 10px 10px;line-height:22px;'
}

let prepText = document.getElementById('prep-submt'); // Submit
let txtContainer = document.getElementById('preparation-container'); // Text append // 
let txtArea = document.getElementById('input-prep'); // Text area //
let errorMsg = document.getElementById('msg');


txtContainer.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("button clicked");
    formVal();
})

let formVal = () =>{
    if(txtArea.value == ""){
        errorMsg.innerHTML ="Post cannot be blank";
        console.log('failure')
    }
    else{
        console.log('succsess')
        inputData();
    }
};

let data = {};

let inputData = () => {
    data["text"] = txtArea.value; 
    console.log(data);
    createPrep();
}

let createPrep = () =>{
    txtContainer.innerHTML = data.text;
}

// Back to top button//

function topFunction() {
    
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

// Show/hide the back to top button based on scroll position
    window.onscroll = function() {
scrollFunction();
};

function scrollFunction() {
if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("backToTopBtn").style = "display:block;"
} else {
    document.getElementById("backToTopBtn").style.display = "none";
}
}