const noJs = document.querySelectorAll('.no-js')
const portfolioItem = document.querySelectorAll('.portfolio-items');

window.addEventListener('load', classRemove());
window.addEventListener('resize', classRemove());

function classRemove() {
    noJs.forEach(item => {
        item.classList.remove('no-js')
    })
}

portfolioItem.forEach( item => {
    item.addEventListener('mousemove', () => {
        item.classList.add('port-active')
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('port-active')
    });

    item.addEventListener('click', () => {
        const currentActive = document.querySelector('.portfolio-items.port-active')

        if (item.classList.contains('port-active')) {
            item.classList.remove('port-active')
        } else if (currentActive && currentActive !== item){
            currentActive.classList.remove('port-active');
            item.classList.add('port-active')
        } else {
            item.classList.add('port-active')
        }
    });
});