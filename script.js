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
        for(var i = 0; i < svgs.length; i ++){
            if(window.getComputedStyle(svgs[i]).scale){
                svgs[i].style.scale = parseInt(window.getComputedStyle(svgs[i]).scale) * (width / 16);
            }
            svgs[i].style.scale = width / 16;
        }
    }
    document.body.removeChild(div);
}
resizeSVG();