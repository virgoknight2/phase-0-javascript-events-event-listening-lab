//grabs the input field
const input =document.getElementById(`input`)
//adds a pop up alert when something is clicked
//function addingEventListener() {
//    alert(`click clack click clack`)
//}
//teaches the computer what event it's looking for as an input method
//input.addEventListener(`click`,addingEventListener)
 
//above code but all in one function
//input.addEventListener(`click`, function addingEventListener(){
//    alert(`click clack click clack`)
//});
function addingEventListener(){
    input.addEventListener(`click`,function (){
     return alert(`I was clicked`)
    });
}
