/* eslint-disable no-console */
'use strict';

const getImages = function(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(jsonData => {
      extractData(jsonData);  
    })
    .catch(error => console.log (error));
};



const extractData = function(data) {
  data.message.forEach(img => {
    let message = img;
    $('body').append(createTemplate(message));
  });
};


const createTemplate = function(message) {
  console.log('ran');
  let template = `<section class ="dogs"><img src="${message}"></section>`;
  return template;
};



function clearDogs() {
  $('.dogs').remove();
}

function submitHandle() {
  $('#dog-form').on('submit', function(event) {
    event.preventDefault();
    let num = $('.searchbox').val();
    $('.searchbox').val('3');
    clearDogs();
    getImages(num);
  });
}

function main () {
  submitHandle();
}

$(main);