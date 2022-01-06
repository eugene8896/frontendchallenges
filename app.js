const showList = document.querySelector('.showList')
const open = document.querySelector('#menuBar')
const close = document.querySelector('#closebars')


open.addEventListener('click', () => {
    showList.classList.add('active')
})
close.addEventListener('click', () => {
    showList.classList.remove('active');
})


