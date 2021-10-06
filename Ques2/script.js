document.addEventListener("DOMContentLoaded",function(event) {
    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {

            var j = Math.floor(Math.random() * (i + 1));
                        
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
     }

    var images = [1,2,3,4,5,6,7];
    var names = ["Tokyo ghoul","Ash","Arrow","emma watson","joker","Naruto","pikachu"];
    var d = new Date();
    var day = d.getDay();
    for (var i=0; i<day; i++) {
        var temp = images[0];
        for (var j=0; j<6; j++) {
            images[j] = images[j+1];
        }
        images[6] = temp;
    }
    var figures = document.querySelectorAll("figure img");
    var captions = document.querySelectorAll("figure figcaption");
    names = shuffle(names);
    for (var i=0; i<figures.length; i++) {
        figures[i].src = images[i] + ".jpg";
        captions[i].textContent = names[i];
    }
});