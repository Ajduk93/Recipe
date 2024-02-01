// Image input button //

let foodImage = document.getElementById("food-img");
let inputImage = document.getElementById("image-input");


function imageInput(){
inputImage.addEventListener('change',function () {
  foodImage.src = URL.createObjectURL(inputImage.files[0]);
})};



// Dish title buttons //

let dishTitleDoc = document.getElementById("dish-title-edit");
let dishTitlebtn = document.getElementById("dish-title-bttn");
let dishEditor = document.getElementById("dish-edit");

document.querySelectorAll('.common-button-class').forEach(function(button){button.addEventListener('click', dishTitleVanish)});


function dishTitleVanish(event){
  let button = event.currentTarget;

  if (dishTitleDoc.style.display === "none") {
    dishTitleDoc.style.display = "flex";
  } else {
    dishTitleDoc.style.display = "none";
  }

};

function dishTitleText() {
  // Gets the input value //
  let inputText = document.getElementById("dish-title-input").value;
  
  // Appends the text value to the appendTextEle //
  let appendTextEle = document.getElementById("input-title");
  if (inputText === "") {
    document.getElementById("error-msg").innerHTML = "Enter dish name";
  } else {
    appendTextEle.innerHTML += "<p>" + inputText + "</p>";

    document.getElementById("dish-title-input").style.display = "none";

    document.getElementById("dish-title-post").style.display = "none";

    document.getElementById("dish-title-bttn").style.display = "none";

    document.getElementById("dish-edit").style.display = "flex";

    document.getElementById("error-msg").textContent = "";
  }
  event.currentTarget;
}

// Dish edit button //

function dishEditText() {
  document.getElementById("dish-edit").style.display = "none";
  document.getElementById("dish-title-input").style.display = "flex";
  document.getElementById("dish-title-post").style.display = "flex";

  let removePara = document.getElementById("input-title");

  if (removePara.children.length > 0) {
    removePara.removeChild(removePara.lastChild);
  }
}

// Preparation time section - Preparation time in minutes //

let prepTimeInput = document.getElementById("prep-time-input");
let prepButton = document.getElementById("prep-button");
let prepButtonEdit = document.getElementById("prep-button-edit");

prepButton.addEventListener("click", function () {
  if (prepTimeInput.value === "") {
    alert(" Please enter preparation time.");
  } else {
    addPrepTime();
  }
});

function addPrepTime() {
  let inputNum = prepTimeInput.value; // Gets the input value //

  let appendText = document.getElementById("prep-time-text");

  // If the user enters 1 min //
  if (prepTimeInput.value === "1") {
    appendText.textContent += ` :  ${inputNum} minute`; // Appends taken value //
    prepTimeInput.style.display = "none"; // Removes input //
    prepButton.style.display = "none"; // Removes input button //
    prepButtonEdit.style.display = "flex";
  }
  // If the user enters more than 1 min //
  else {
    appendText.textContent += ` :  ${inputNum} minutes`;
    prepTimeInput.style.display = "none";
    prepButton.style.display = "none";
    prepButtonEdit.style.display = "flex";
  }

  prepButtonEdit.addEventListener("click", editPrepTime);

  function editPrepTime() {
    prepTimeInput.style.display = "flex";

    prepButton.style.display = "flex";

    prepButtonEdit.style.display = "none";

    document.getElementById("prep-time-text").textContent = ""; // Sets value to '' //
    prepTimeInput.value = "";
  }
}

// Preparation time section - Number of servings //

let servingsInput = document.getElementById("servings-input");
let servingsButton = document.getElementById("servings-button");

servingsButton.addEventListener("click", addServings);

function addServings() {
  let inputServings = servingsInput.value;

  let appendText = document.getElementById("servings-text");
  if (servingsInput.value === "") {
    alert("Please enter number of servings.");
  } else {
    appendText.textContent += ` : ${inputServings} people`;
    servingsInput.style.display = "none";
    servingsButton.style.display = "none";
    document.getElementById("servings-button-edit").style.display = "flex";
  }
}

document
  .getElementById("servings-button-edit")
  .addEventListener("click", editServings);

function editServings() {
  servingsInput.style.display = "flex";
  servingsButton.style.display = "flex";
  document.getElementById("servings-button-edit").style.display = "none";
  document.getElementById("servings-text").textContent = "";
  servingsInput.value = "";
}

// **Ingredients button and input** //

let postIng = document.getElementById("ing-btn");

function ingredientsButton(){
postIng.addEventListener("click", handleButtonClick);} // Key press for input when ENTER is pressed //

document
  .getElementById("input-ingredients")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleButtonClick();
      document.getElementById("input-ingredients").value = "";
    }
  });

function handleButtonClick() {
  // Function for input ingredients this can add value for ingredients also with a delete list button , which deletes list input //
  if (document.getElementById("input-ingredients").value.trim() == "") {
    alert(
      "Ingredients are empty , please tell us what ingredients are you using."
    ); // Alert if input is empty //
  } else {
    let deleteButton = document.createElement("button"); // Creating delete button element //
    deleteButton.style =
      "background-color: rgba(2, 2, 2, 0); color: rgb(218, 220, 103);  font-size: 1rem;cursor: pointer; animation: fadeIn 0.5s ease-in-out forwards; border:none;padding-top:11px";
    // Button styling //

    deleteButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
    deleteButton.addEventListener("click", function () {
      li.remove(); // Event for removing list element //
    });
    let inputValue = document.getElementById("input-ingredients").value; // Getting input text value //
    let li = document.createElement("li"); // Creating list element //
    li.style = "animation: fadeIn 0.5s ease-in-out forwards;";
    let text = document.createTextNode("- " + inputValue); // Creating text from extracted input value added - at start for readability and style //
    li.appendChild(deleteButton);
    li.appendChild(text);
    document.getElementById("ing-list").appendChild(li); // Appending both text and button element to the list //
    document.getElementById('input-ingredients').value =''
  }
}

// **Preparation button and text area** //

function showInputPrep() {
  // Shows text area on button click
  document.getElementById("input-prep").style =
    'display: flex;margin-inline: auto;width: 93%;height: 23vh ;margin-top: 10px;text-align: start;font-family:"Rubik",sans-serif;font-size: 20px;padding: 10px 10px 10px 10px;line-height:22px;';
  document.getElementById("input-prep").style.animation =
    "stretchAnimation 1s ease-in-out";
}

let prepText = document.getElementById("prep-submt"); // Submit

let txtContainer = document.getElementById("prep-text-container");

let txtArea = document.getElementById("input-prep"); // Text area //

let errorMsg = document.getElementById("msg");

function textAreaVal() {
  txtContainer.addEventListener("submit", function (e) {
    e.preventDefault();
    formVal();
  });
}

let formVal = () => {
  let recipeText = txtArea.value.trim();
  if (recipeText == "") {
    errorMsg.innerHTML = "Post cannot be blank";
  } else {
    inputData();
  }
};

let data = {};

let inputData = () => {
  data["text"] = txtArea.value.trim();
  createPrep(data);
};

let createPrep = () => {
  txtContainer.innerHTML = `<p>${data.text}</p>`;
};

// When "DONE" button is clicked - Edit button appears instead //

let prepTextEdit = document.getElementById("preparation-button-edit");

let afterEditButton = document.getElementById("after-edit-post-button");

let newTextArea = document.getElementById("shown-text-area");

let newTextContainer = document.getElementById("preparation-container");

let newTxtContainer = document.getElementById("txt-Container");

prepText.addEventListener("click", prepEditButtonShow); // event listener for edit text button //

function prepEditButtonShow() {
  // Shows edit text button //
  let recipeText = txtArea.value.trim();
  if (recipeText == "") {
    prepTextEdit.style.display = "none"; // If text area is empty , don't show edit button  //
  } else {
    prepTextEdit.style.display = "flex";
    document.getElementById("prep-submt").style.display = "none";
  }
}

// ** A new text area for editing posted text ** //

prepTextEdit.addEventListener("click", prepEditTextShow);

let textAreaCreated = false; // Sets text area so that no duplicates can be made. //
function prepEditTextShow() {
  // Creates a new text area for editing paragraph text. //
  if (!textAreaCreated) {
    newTextArea.style.display = "flex";
    document.getElementById("preparation-container").appendChild(newTextArea);
    textAreaCreated = true;
    prepTextEdit.style.display = "none";
    afterEditButton.style.display = "flex";
    txtArea.style.display = "flex";
    document.getElementById("delete-prep-post").style.display = "flex";
  }
}

// ** Text Area input edit ** //

function textAreaValue() {
  if (document.getElementById("shown-text-area").value === "") {
    alert("Please edit post first"); // Declines empty input //
  } else {
    // Inputs text from text area to paragraph //
    document.querySelector("#prep-text-container p").textContent = "";
    let getNewText = document.getElementById("shown-text-area").value;
    document.querySelector("#prep-text-container p").textContent += getNewText;
    document.getElementById("shown-text-area").style.display = "none";
    document.getElementById("after-edit-post-button").style.display = "none";
    if (
      (document.getElementById("preparation-button-edit").style.display =
        "block")
    ) {
      document.getElementById("preparation-button-edit").style =
        "margin-left: 30%;";
      document.getElementById("preparation-button-edit").style.display =
        "block";
    }
    textAreaCreated = false;
  }
}

function deletePost() {
  // Deletes post for preparation paragraph //

  document.querySelector("#prep-text-container p").textContent = "";
}

function openDeleteOverlay() {
  // Summons an overlay with Yes / No options //
  let getText = document
    .querySelector("#prep-text-container p")
    .textContent.trim();
  if (getText === "") {
    // Checks if post is empty , if it is , returns empty //
    return;
  } else {
    // Else returns overplay and question modals section //
    document.getElementById("delete-overlay").style.display = "block";
    document.getElementById("delete-modal").style.display = "block";
  }
}
function confirmDelete(isConfirmed) {
  // Is confirmed set to true or false / depending on the button that was interacted with. And removes overlay and modal.
  document.getElementById("delete-overlay").style.display = "none";
  document.getElementById("delete-modal").style.display = "none";
  if (isConfirmed) {
    // If button selected was Yes , deletes post by setting its value to '' //
    deletePost();
  }
}

// **Back to top button** //
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide the back to top button based on scroll position
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    document.getElementById("backToTopBtn").style = "display:block;";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

// Duplicate dish card //

const mainContainer = document.getElementById('contentContainer');
const originalMainDiv = document.querySelector('.content-container');
const duplicateButton = document.getElementById('duplicate-card-button');

duplicateButton.addEventListener('click',duplicateMainDiv);

function duplicateMainDiv() {

  const newMainDiv = originalMainDiv.cloneNode(true);

    mainContainer.appendChild(newMainDiv);

};