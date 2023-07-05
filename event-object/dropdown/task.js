let dropdownValue = document.querySelector('div.dropdown__value');
let dropdownLinks = Array.from(document.querySelectorAll('a.dropdown__link'));

function closeOpenMenu() {
    let dropdownList = document.querySelector('ul.dropdown__list')
    dropdownList.classList.contains('dropdown__list_active') ? dropdownList.classList.remove('dropdown__list_active') : dropdownList.classList.add('dropdown__list_active');
};

dropdownValue.addEventListener('click', closeOpenMenu);

dropdownLinks.forEach(function (item) {
    item.onclick = function () {
        document.querySelector('div.dropdown__value').textContent = item.textContent;
        return false;
    };
    item.addEventListener('click', closeOpenMenu);
})

