var btn1 = document.getElementById("truthbtn");
var ballin = document.getElementById("balltext");
var result = document.getElementById("resut");

btn1.addEventListener("click", theTruth);

function theTruth () {
    var meth = Math.random() 
    if (meth < 0.5) {
        result.innerHTML = "Without a Doubt"
    } else if (meth < 0.6) {
        result.innerHTML = "As I see it, yes."
    } else if (meth < 0.7) {
        result.innerHTML = "Concentrate and ask again."
    } else if (meth < 0.8) {
        result.innerHTML = "Don't count on it."
    } else {
        result.innerHTML = "Outlook not so good."
    }

    

}