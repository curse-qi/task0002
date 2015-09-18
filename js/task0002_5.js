onload=drag;

function drag() {
    var dragbox = document.getElementsByName('boxes');
    
    for (var i=0; i<dragbox.length-7; i++) {

        
        var drag = dragbox[i];
        var down = false;
        var dx=0;
        var dy=0;
        var sx=0;
        var sy=0;

        drag.onmousedown=function(e){

            var ev=e || window.event;

            dx=ev.clientX;
            dy=ev.clientY;
            sx=checkStyle(drag).left;
            sy=checkStyle(drag).top;

            if(!down){
                down=true;
            }
        }

        drag.onmouseup=function(){
            if(down){
                down=false;
            }
            drag.style.zIndex=100;
        }

        document.onmousemove=function(e) {

            var ev=e || window.event;

            if(down) {
                drag.style.top=ev.clientY-(dy-(sy.slice(0,sy.length-2)))+ "px";
                drag.style.left=ev.clientX-(dx-(sx.slice(0,sx.length-2))) + "px";
            }
        }
    }
}

//drag.style只能获取内部样式表或者行内样式，外联样式需要通过以下方法获取，currentStyle为IE获取方法，getComputedStyle为非IE
function checkStyle(o) {
    if(o.currentStyle) {
        var cur = o.currentStyle;
    } else {
        var cur = document.defaultView.getComputedStyle(o,null);
    }
    return cur;
}

//对象类型转化为数组类型
// function transform(obj){
//     var arr = [];
//     for(var item in obj){
//         arr.push(obj[item]);
//     }
//     return arr;
// }