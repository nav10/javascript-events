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