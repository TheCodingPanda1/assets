//Resizing svgs
export const resizeSVG = function () {
    var svgs = document.getElementsByClassName("resizable");
    console.log(svgs);
    var div = document.createElement("div");
    div.style.width = "1rem";
    document.body.appendChild(div);
    if(div.clientWidth == 16){
        return;
    } else {
        var width = div.clientWidth;
        svgs.foreach((el)=>{
            el.style.scale = width / 16;
        });
    }
    document.body.removeChild(div);
}