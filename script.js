//Resizing svgs
function resizeSVG () {
    var svgs = document.getElementsByClassName("resizable");
    var div = document.createElement("div");
    div.style.width = "1rem";
    document.body.appendChild(div);
    if(div.clientWidth == 16){
        return;
    } else {
        var width = div.clientWidth;
        for(let svg in svgs){
            svg.style.scale = width / 16;
        }
    }
    document.body.removeChild(div);
}