// Image input button //

let foodImage = document.getElementById('food-img');
let inputImage = document.getElementById('image-input');

inputImage.onchange = function(){
    foodImage.src = URL.createObjectURL(inputImage.files[0]);
}


// Dish title buttons //

let dishTitleDoc = document.getElementById('dish-title-edit');
let dishTitlebtn = document.getElementById('dish-title-bttn');
let dishEditor = document.getElementById('dish-edit');



let dishTitleVanish = dishTitlebtn.addEventListener('click',function (){

if(dishTitleDoc.style.display === 'none'){
dishTitleDoc.style.display = 'flex';
}
else{
dishTitleDoc.style.display = 'none';
}
});



function dishTitleText(){
// Gets the input value //
let inputText=document.getElementById('dish-title-input').value;
// Appends the text value to the appendTextEle //
let appendTextEle = document.getElementById("input-title");
if(inputText === ''){
document.getElementById('error-msg').innerHTML = 'Enter dish name';
}
else {
appendTextEle.innerHTML += "<p>" + inputText + "</p>" ;

document.getElementById("dish-title-input").style.display = "none";

document.getElementById("dish-title-post").style.display = "none";

document.getElementById("dish-title-bttn").style.display = "none";

document.getElementById("dish-edit").style.display = "flex";

document.getElementById('error-msg').textContent = '';
}
}

// Dish edit button // 

function dishEditText(){

document.getElementById("dish-edit").style.display = "none";
document.getElementById("dish-title-input").style.display = "flex";
document.getElementById("dish-title-post").style.display = "flex";

let removePara = document.getElementById("input-title");

if(removePara.children.length > 0){

    removePara.removeChild(removePara.lastChild);
}
};

// Preparation time section - Preparation time in minutes //

let prepTimeInput = document.getElementById("prep-time-input");
let prepButton= document.getElementById("prep-button");
let prepButtonEdit = document.getElementById("prep-button-edit");


prepButton.addEventListener('click', function(){
        if (prepTimeInput.value === ""){
        alert(" Please enter preparation time.");
    }
    else{
        addPrepTime();
    }
});

function addPrepTime(){

    let inputNum = prepTimeInput.value; // Gets the input value //

    let appendText = document.getElementById("prep-time-text");

    // If the user enters 1 min //
    if(prepTimeInput.value === "1"){
    appendText.textContent +=` :  ${inputNum} minute`; // Appends taken value //
    prepTimeInput.style.display = 'none'; // Removes input //
    prepButton.style.display = 'none'; // Removes input button // 
    prepButtonEdit.style.display = 'flex';
}
// If the user enters more than 1 min // 
else {
    appendText.textContent += ` :  ${inputNum} minutes`;
    prepTimeInput.style.display = 'none'; 
    prepButton.style.display = 'none'; 
    prepButtonEdit.style.display = 'flex'; 
}

prepButtonEdit.addEventListener('click', editPrepTime);

function editPrepTime(){

    prepTimeInput.style.display='flex';

    prepButton.style.display = 'flex';

    prepButtonEdit.style.display = 'none';

    document.getElementById("prep-time-text").textContent = "";// Sets value to '' //
    prepTimeInput.value = '';
}
}


// Preparation time section - Number of servings //

let servingsInput = document.getElementById("servings-input");
let servingsButton = document.getElementById("servings-button");

servingsButton.addEventListener('click',addServings);

function addServings(){
    let inputServings = servingsInput.value;

    let appendText = document.getElementById("servings-text");
    if(servingsInput.value === ''){
        alert('Please enter number of servings.')
    }
    else{
    appendText.textContent += ` : ${inputServings} people`;
    servingsInput.style.display = 'none';
    servingsButton.style.display = 'none';
    document.getElementById('servings-button-edit').style.display = 'flex';
    }

}

document.getElementById('servings-button-edit').addEventListener('click',editServings);

function editServings(){

    servingsInput.style.display= 'flex';
    servingsButton.style.display= 'flex';
    document.getElementById('servings-button-edit').style.display = 'none';
    document.getElementById('servings-text').textContent = '';
    servingsInput.value = '';
}

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
let txtContainer = document.getElementById('prep-text-container'); // Text append // 
let txtArea = document.getElementById('input-prep'); // Text area //
let errorMsg = document.getElementById('msg');

function textAreaVal(){

txtContainer.addEventListener('submit',function(e){
    e.preventDefault();
    formVal();
})};

let formVal = () =>{
    let recipeText = txtArea.value.trim();
    if(recipeText == ""){
        errorMsg.innerHTML ="Post cannot be blank";
    }
    else{
        inputData();
    }
};

let data = {};

let inputData = () => {
    data["text"] = txtArea.value.trim();
    createPrep();
}

let createPrep = () =>{
    txtContainer.innerHTML = `<p>${data.text}</p>`;
}

// When "DONE" button is clicked - Edit button appears instead //

let prepTextEdit = document.getElementById('preparation-button-edit')

let afterEditText = document.getElementById('after-edit-post-button');

let newTextArea = document.getElementById('shown-text-area');

prepText.addEventListener('click', prepEditButtonShow); // event listener for edit text button //


function prepEditButtonShow(){  // Shows preparation edit text button //
let recipeText = txtArea.value.trim();
if(recipeText == ''){
    prepTextEdit.style.display = 'none'; // If text area is empty , don't show edit button  //
}
else{
    prepTextEdit.style.display = 'flex';
    document.getElementById('prep-submt').style.display = 'none';
}
}

prepTextEdit.addEventListener('click', prepEditTextShow);

let textAreaCreated = false;

function prepEditTextShow(){
if (!textAreaCreated){
let textArea = document.createElement("textarea");
textArea.id = 'shown-text-area';
document.getElementById('preparation-container').appendChild(textArea);
txtContainer
let lastChild = txtContainer.lastElementChild;
lastChild.remove();
textAreaCreated = true;
prepTextEdit.style.display = "none";
afterEditText.style.display = 'flex';
}
}

// !! Fix this text edit area // 

function textEditArea(){

txtContainer.addEventListener('submit',function(e){
    e.preventDefault();
    formValue();
})};

let formValue = () =>{
    let recipeText = newTextArea.value.trim();
    if(recipeText == ""){
        errorMsg.innerHTML ="Post cannot be blank";
    }
    else{
        newInputData();
    }
};

let newData = {};

let newInputData = () => {
    newData["text"] = newTextArea.value.trim();
    newCreatePrep();
}

let newCreatePrep = () =>{
    txtContainer.innerHTML = `<p>${newData.text}</p>`;
};
























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