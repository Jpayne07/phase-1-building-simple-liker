// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById('modal')
errorModal.classList.add("hidden");

//invode mimicServerCall on heart click
const liked = document.querySelectorAll(".like-glyph")
console.log(liked)
document.addEventListener('DOMContentLoaded', function() {

liked.forEach(button => {
button.addEventListener("click", function(){
  mimicServerCall()
  .then(() => {
    // Handle successful response
    button.textContent = FULL_HEART
    button.classList.add('activated-heart')
  })
  .catch(() => {
    // Handle error
    setTimeout(() => {
      errorModal.classList.add('hidden');
    }, 3000);
  });

})
});
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
