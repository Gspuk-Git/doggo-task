const DOG_URL = 'https://dog.ceo/api/breeds/image/random';

//const promise = fetch(DOG_URL);
let doggos = document.querySelector('.doggos');


//way to do singular dog as soon as page loads
//promise
    //.then(function(response){
        //const processingPromise = response.json();
        //return processingPromise;
    //})
    //.then(function(processedResponse){
        //let img = document.createElement('img');
        //img.src = processedResponse.message;
        //img.alt = 'Cute Doggo';
        //doggos.appendChild(img);
        //console.log('Success');
    //});


//way to load dog on button click
function addNewDog(){
    let promise = fetch(DOG_URL);


    promise
        .then(function(response){
            let processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse){
            let img = document.createElement('img');
            img.src = processedResponse.message;
            img.alt = 'Cute Dog';
            doggos.appendChild(img);
            console.log('Dog load success');
        });
}

document.querySelector('.new-dog').addEventListener('click', addNewDog);