

function init() {
    var inputFile = document.getElementById('inputFile1');
    inputFile.addEventListener('change', showImage, false);
}

function showImage(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        var img = document.getElementById('img1');
        img.src = event.target.result;
    }
    reader.readAsDataURL(file);
}

window.addEventListener('load', init, false);
