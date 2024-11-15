const portfolioItem = document.querySelectorAll('.portfolio-items');

portfolioItem.forEach( item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('active')
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('active')
    });

    item.addEventListener('click', () => {
        const currentActive = document.querySelector('.portfolio-items.active');
        if (currentActive && currentActive !== item){
            currentActive.classList.remove('active');
        }
        item.classList.toggle('active')
    });
});