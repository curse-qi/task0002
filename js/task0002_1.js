//获取下一个span，可以通过这个对象给状态 (做一个方法使得nextSibing不受空格影响)
function gspan(cobj){
    while(true){
        if(cobj.nextSibling.nodeName!=="SPAN"){
            cobj=cobj.nextSibling;
        }else{
            return cobj.nextSibling;
        }
    } 
}

/*通用检查方法
    第一个参数：obj,是用来检查的对象
    第二个参数：fun,是一个回调函数，用来检查值是否按条件输入
*/
var sp;

function check(obj,fun){
    sp=gspan(obj);

    obj.onfocus=function(){
        sp.innerHTML="可用换行、空格、逗号、顿号、分号分隔"
        sp.className="prompt2";
    }

    obj.onblur=function(){
        if(fun(this.value)){
            sp.innerHTML=" ";
        }else{
            sp.innerHTML="多个爱好之间请用指定符号分隔";
            sp.className="prompt3";
        }
    }
}

//页面加载完自动调用执行onload
//此处代表整个函数，不能加括号，加括号为调用
onload=regs   

var status;

function regs(){
    var stat=true;

    var hobby=document.getElementsByName('hobby')[0];

    check(hobby,function(val){
        if(val.indexOf("。") == -1 && val.indexOf("/") == -1){
            status=1;
            return true;
        } else{
            status=0;
            stat=false;
            return false;
        }
    });

    return stat;
}

function sorthobby() {
    var hobbylist;
    var hobbyvalue=document.getElementsByName('hobby')[0].value;
    var newhobby=document.getElementById('newhobby');

    if(hobbyvalue.length == 0) {
        status=1;
    }

    if (status == 1) {
        
        if(hobbyvalue.indexOf("，") !== -1) {
            hobbylist=hobbyvalue.split('，');
            if (hobbylist.length <= 10 && hobbylist.length >0) {
                newhobby.innerHTML = tocheckbox(hobbylist);
            } else {
                sp.innerHTML="爱好不能为空，且数量不能超过10个"
                sp.className="prompt3";
            }
        } else if(hobbyvalue.indexOf(",") !== -1) {
            hobbylist=hobbyvalue.split(',');
            if (hobbylist.length <= 10 && hobbylist.length >0) {
                newhobby.innerHTML = tocheckbox(hobbylist);
            } else {
                sp.innerHTML="爱好不能为空，且数量不能超过10个"
                sp.className="prompt3";
            }
        } else if(hobbyvalue.indexOf(" ") !== -1) {
            hobbylist=hobbyvalue.split(' ');
            if (hobbylist.length <= 10 && hobbylist.length >0) {
                newhobby.innerHTML = tocheckbox(hobbylist);
            } else {
                sp.innerHTML="爱好不能为空，且数量不能超过10个"
                sp.className="prompt3";
            }
        } else if(hobbyvalue.indexOf("、") !== -1) {
            hobbylist=hobbyvalue.split('、');
            if (hobbylist.length <= 10 && hobbylist.length >0) {
                newhobby.innerHTML = tocheckbox(hobbylist);
            } else {
                sp.innerHTML="爱好不能为空，且数量不能超过10个"
                sp.className="prompt3";
            }
        } else if(hobbyvalue.indexOf("；") !== -1) {
            hobbylist=hobbyvalue.split('；');
            if (hobbylist.length <= 10 && hobbylist.length >0) {
                newhobby.innerHTML = tocheckbox(hobbylist);
            } else {
                sp.innerHTML="爱好不能为空，且数量不能超过10个"
            }
        } else if(hobbyvalue.indexOf(";") !== -1) {
            hobbylist=hobbyvalue.split(';');
            if (hobbylist.length <= 10 && hobbylist.length >0) {
                newhobby.innerHTML = tocheckbox(hobbylist);
            } else {
                sp.innerHTML="爱好不能为空，且数量不能超过10个"
                sp.className="prompt3";
            }
        } else if(hobbyvalue.indexOf("\n") !== -1) {
            hobbylist=hobbyvalue.split('\n');
            if (hobbylist.length <= 10 && hobbylist.length >0) {
                newhobby.innerHTML = tocheckbox(hobbylist);
            } else {
                sp.innerHTML="爱好不能为空，且数量不能超过10个"
                sp.className="prompt3";
            }
        } else {
            if (hobbyvalue.length !== 0) {
                newhobby.innerHTML = hobbyvalue;
            } else {
                sp.innerHTML="爱好不能为空，且数量不能超过10个"
                sp.className="prompt3";
            }
        }
    } else return;
}

//数组去重
function unique(arr) {
    var n = []; //一个新的临时数组
    for(var i = 0; i < arr.length; i++) //遍历当前数组 
    {
        //如果当前数组的第i已经保存进了临时数组，那么跳过，
        //否则把当前项push到临时数组里面
        if (n.indexOf(arr[i]) == -1) n.push(arr[i]);
        console.log(arr[i]);
    }
    return n;
}

function tocheckbox(arr){
    var newArray = unique(arr);
    var checkBoxes = "";
    for(var i=0; i<newArray.length; i++){
        checkBoxes += "<label><input type='checkbox'>" + newArray[i] + "</label>" + "<br>";
    }
    return checkBoxes;
}