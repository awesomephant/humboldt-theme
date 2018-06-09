var gri = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomiseCards = function () {
    var objectImages = document.querySelectorAll('.object-list .card');
    for (var i = 0; i < objectImages.length; i++) {
        let obj = objectImages[i];
        obj.style.maxWidth = gri(70, 100) + '%';
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var objects = "{{objects|join(',')}}";
    objects = objects.split(',')
    var searchField = document.querySelector('.search-field');
    searchField.setAttribute('placeholder', 'Suche "' + objects[gri(0, objects.length)] + '"')
    console.log(objects);
    // Handler when the DOM is fully loaded
    randomiseCards();
});
