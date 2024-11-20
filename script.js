//mouse events to handle hover and hover end on a button
const hoverButton = document.getElementById('hoverButton');
const hoverMessage = document.getElementById('hoverMessage');

//when the button is hovered
hoverButton.addEventListener('mouseover', () => {
    hoverMessage.textContent = "You are hovering over the button!";
});

//when the hover ends
hoverButton.addEventListener('mouseout', () => {
    hoverMessage.textContent = "Mouse over or out to change this text.";
});

//keyboard events that capture the last key pressed in a text input
const keyInput = document.getElementById('keyInput');
const keyMessage = document.getElementById('keyMessage');

//displays the last key pressed
keyInput.addEventListener('keydown', (event) => {
    keyMessage.textContent = `You pressed: ${event.key}`;
});

//form events to handle form submission
const demoForm = document.getElementById('demoForm');
const formMessage = document.getElementById('formMessage');

//prevents default form submission and display a message
demoForm.addEventListener('submit', (event) => {
    //stop the form from reloading the page
    event.preventDefault(); 
    formMessage.textContent = "Form submitted successfully!";
});

//focus events to update a message when the input field gains or loses focus
const focusInput = document.getElementById('focusInput');
const focusMessage = document.getElementById('focusMessage');

//when the input gains focus
focusInput.addEventListener('focus', () => {
    focusMessage.textContent = "Input is focused!";
});

//when the input loses focus
focusInput.addEventListener('blur', () => {
    focusMessage.textContent = "Input lost focus!";
});

//event delegation to handle clicks on buttons inside a container
const buttonContainer = document.getElementById('buttonContainer');
const delegationMessage = document.getElementById('delegationMessage');

//using event delegation to identify which button was clicked
buttonContainer.addEventListener('click', (event) => {
    //check if the clicked element is a button
    if (event.target.tagName === 'BUTTON') { 
        delegationMessage.textContent = `You clicked: ${event.target.textContent}`;
    }
});