document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    console.log('hi')
  });
var bindImages = function () {    
    var objectImages = document.querySelectorAll('.object-image');
    for (var i = 0; i < objectImages.length; i++) {
        objectImages[i].addEventListener('onclick', function (e) {
            console.log('hi')
            console.log(this)
            this.classList.toggle('test')
        })
    }
}

bindImages();