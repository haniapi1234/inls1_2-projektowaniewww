const buttons = document.querySelectorAll(".accordionbutton");
const arrows = document.querySelectorAll(".fa-chevron-down");


function openItem (){
    if (this.nextElementSibling.classList.contains('active_accordionbox')) {
        this.nextElementSibling.classList.remove('active_accordionbox');
        this.lastElementChild.classList.remove('active_accordionbutton')
    } else {
        closeItem();
        this.nextElementSibling.classList.toggle('active_accordionbox');
        this.lastElementChild.classList.toggle('active_accordionbutton')
    }
}

const closeItem = () => {
    const allActiveItems = document.querySelectorAll(".info");
    allActiveItems.forEach(item => {
        item.classList.remove('active_accordionbox')
    })
    arrows.forEach(arrow => {
        arrow.classList.remove('active_accordionbutton')
    })
}

buttons.forEach(btn => {
    btn.addEventListener('click', openItem)
})