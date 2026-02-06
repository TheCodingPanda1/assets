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
                svgs[i].style.scale = parseFloat(window.getComputedStyle(svgs[i]).scale) * (width / 16);
            } else {
                svgs[i].style.scale = width / 16;
            }
            
        }
    }
    document.body.removeChild(div);
}
resizeSVG();
export const cssVar = function(variable){
    var div = document.createElement("div");
    div.style.height = `var(--${variable})`;
    document.body.appendChild(div);
    var height = div.clientHeight;
    document.body.removeChild(div);
    return height;
}
console.log(cssVar("rem"));