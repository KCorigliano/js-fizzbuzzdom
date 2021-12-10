const rowContainer = document.querySelector('.row');

for (i=1; i<=100; i++){

    if (i % 5 === 0 && i % 3 === 0){
        rowContainer.innerHTML += '<div class="box box-aqua mb-2">FizzBuzz</div>';
    } else if (i % 5 === 0){
        rowContainer.innerHTML += '<div class="box box-green mb-2">Fizz</div>';
    } else if (i % 3 === 0){
        rowContainer.innerHTML += '<div class="box box-blue mb-2">Buzz</div>';
    } else{
        rowContainer.innerHTML += `<div class="box box-yellow mb-2">${i}</div>`;
    }
    
}