'use strict';

function addDeleteEventListener(elem){
    elem.addEventListener('click', event => {
        //add delete logic here
    });
}

function handleDeleteItemClicked() {
  // add a click event listener to each delete button
  // HINT: You will need to loop through all the delete buttons
  // You must call the addDeleteEventListener passing the delete button to add a event listener to that
}

function addCheckEventListener(elem){
    elem.addEventListener('click', event => {
        // add check logic here
    });
}

function handleCheckItemClicked() {
  // add a click event listener to each delete button
  // HINT: You will need to loop through all the toggle buttons
  // You must call the addDeleteEventListener passing the delete button to add a event listener to that
}

function handleSubmitEvent(){
    let form = document.querySelector('#js-shopping-list-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
         /*
          
          Add code for adding a new li in the ul
         
         */
        //event listeners for newly added items
        
       // addDeleteEventListener(/*pass the delete button dom element here*/)
       // addCheckEventListener(/*pass the toggle button dom element here*/)
    })
}

window.addEventListener('load', function(){
    // event listeners for already present items
    // handleSubmitEvent();
    // handleDeleteItemClicked();
    // handleCheckItemClicked();
})
