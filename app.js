const panels = document.querySelectorAll('.panel');
const body =document.querySelector('body');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});



body.addEventListener('click', (e) => {
    if(!e.target.classList.contains('glass')){
        removeActiveClasses();
        console.log('clicked');
    }
});

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}