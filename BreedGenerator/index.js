'use strict';

const getImage = function(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(jsonData => {
      extractData(jsonData);
    })
    .catch(error => console.log(error));
};


const extractData = function(data) {
  if (data.code === 404) {
    $('body').append(notFound());
  }
  else{ 
    $('body').append(createTemplate(data.message));
  }
};


const notFound = function() {
  return '<section class ="notFound"><h2>Breed Not Found</h2></section>';
}

const createTemplate = function(message) {
  console.log('ran');
  let template = `<section class ="dogs"><img src="${message}"></section>`;
  return template;
};

function clearDogs() {
  $('.dogs').remove();
}

function submitHandle() {
  $('#get-dog').on('submit', function(event) {
    event.preventDefault();
    let breed = $('.searchbox').val();
    console.log(breed);
    $('.searchbox').val('');
    clearDogs();
    getImage(breed);
  });
}

function main() {
  submitHandle();
}

$(main);