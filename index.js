'use strict';

const getImages = function(num) {
  //searchbox.val === search number in url? 
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData);
    })
    .catch(error => console.log (error));
};


function verifyInput(num) {
  //if typeOf num !== number 
  //coerce to number
  if (num > 50) {
    throw new TypeError('Not a valid number. Choose a number between 1 and 50.');
  }
}

function submitHandle() {
  $('#dog-form').on('submit', function(event) {
    event.preventDefault();
    console.log('ran');
    let num = $('.searchbox').val();
    verifyInput(num);
    console.log(num);
    getImages(num);
  });
}

function main () {
  submitHandle();
}

$(main);