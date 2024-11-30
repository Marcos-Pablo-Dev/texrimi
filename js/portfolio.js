const noJs = document.querySelectorAll('.no-js')
const portfolioItem = document.querySelectorAll('.portfolio-items');
let fullImg = 0;
let itemActive = '';

window.addEventListener('load', classRemove());
window.addEventListener('resize', classRemove());

function classRemove() {
    noJs.forEach(i => {
        i.classList.remove('no-js')
    })
}

portfolioItem.forEach( item => {
    let idItem = item.getAttribute('id');

    item.addEventListener('click', () => {
        if(fullImg == 0){
            document.querySelector('#'+ idItem).classList.add('port-active');
            fullImg = 1;
            itemActive = idItem;
        } else if(fullImg == 1) {
            if (idItem === itemActive) {
                document.querySelector('#'+ idItem).classList.remove('port-active');
                fullImg = 0;
            } else {
                document.querySelector('#'+ itemActive).classList.remove('port-active');
                document.querySelector('#'+ idItem).classList.add('port-active');
                itemActive = idItem;
            }
        }
    })

    item.addEventListener('mousemove', () => {
        item.classList.add('port-active')
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('port-active')
    });
})