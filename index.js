
// Numbers
const numberiNPUT = document.querySelector('#numbersinput');
numberiNPUT.addEventListener('input', (e) =>{

    let number = numberiNPUT.value;

    let xhttp = new XMLHttpRequest();

   xhttp.onload = function() {
    if(this.status == 200 && number !=''){
        document.querySelector('#numfactdisplay').textContent = this.responseText;
    }
   }
   xhttp.open('GET','http://numbersapi.com/'+number);
    xhttp.send();
})


// YEARS
const yearInput = document.querySelector('#yearsinput')
yearInput.addEventListener('input', (e) =>{
    let year = yearInput.value;

    fetch('http://numbersapi.com/'+year+'/year')
    .then(response => response.text())
    .then(data => {
        document.querySelector('#yearfactdisplay').textContent = data;
    })
    .catch(err => console.log(err))
})