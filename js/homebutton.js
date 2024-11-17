const btnHome = document.querySelector('.btn-home');

btnHome.addEventListener('click', () => {
    btnHome.classList.add('btn-active');

    setTimeout(() => {
        btnHome.classList.remove('btn-active');
    }, 200)
})

btnHome.addEventListener('mousemove', () => {
    btnHome.classList.add('btn-active');
})

btnHome.addEventListener('mouseout', () => {
    btnHome.classList.remove('btn-active');
})