const rowContainer = document.querySelector('.row');

for (i=1; i<=100; i++){

    if (i % 5 === 0 && i % 3 === 0){
        rowContainer.innerHTML += '<span>FizzBuzz</span>';
    }
    else if (i % 5 === 0){
        rowContainer.innerHTML += '<span>Fizz</span>';
    } else if (i % 3 === 0){
        rowContainer.innerHTML += '<span>Buzz</span>';
    } else{
        rowContainer.innerHTML += `<span>${i}</span>`;
    }
    
}