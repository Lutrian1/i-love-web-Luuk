let webPageRefresh = document.querySelector('.redo');
let imgLoad = document.querySelector('img')
    
// toevoegen van class na delay (2000 milliseconden)
setTimeout(function() {
    imgLoad.classList.add("img-size");
}, 2000);

webPageRefresh.addEventListener('click', function() {
    location.reload();
});