console.log('BoNjOuR lez AmiS')


changeTitle();

function changeTitle() {
    const title = document.getElementById('title');
    title.innerText += " from JS";
    title.style.color = 'red';
}
