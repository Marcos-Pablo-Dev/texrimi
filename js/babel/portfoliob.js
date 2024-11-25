var portfolioItem = document.querySelectorAll('.portfolio-items');
portfolioItem.foreach(function (item) {
  item.addEventListener('mousemove', function () {
    item.classList.add('port-active');
  });
  item.addEventListener('mouseout', function () {
    item.classList.remove('port-active');
  });
  item.addEventListener('click', function () {
    var currentActive = document.querySelector('.portfolio-items.port-active');
    if (item.classList.contains('port-active')) {
      item.classList.remove('port-active');
    } else if (currentActive && currentActive !== item) {
      currentActive.classList.remove('port-active');
      item.classList.add('port-active');
    } else {
      item.classList.add('port-active');
    }
  });
});