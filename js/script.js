var btnToCatalog = document.querySelector('.btn-to-catalog');
var form = document.querySelector('.form');

form.classList.remove('form--nojs');

btnToCatalog.addEventListener('click', function () {
	form.classList.toggle('form--opened')
});
