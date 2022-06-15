const init = function(){
   
  const inputForm = document.querrySelector('form');

inputForm.addEventListener('submit',function(event){
    event.preventDefault();
    const input = document.querySelector('input#searchByID');

    fetch (`http://localhost:3000/movies/${input.value}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        title.innerText = data.title;
        summary.innerText = data.summary;
        console.log(data)
    })

})
}

document.addEventListener('DOMContentLoaded', init);




