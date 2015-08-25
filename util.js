//以下是task0002第二小节：数据类型及语言基础

// 判断arr是否是一个数组
function isArray(arr) {
    return Object.prototype.toString.call(arr) === "[object Array]";
}

//判断fn是否是一个函数，返回一个bool值
function isFuction(fn) {
    return Object.prototype.toString.call(fn) ==="[object Function]";
}

//使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    var newsrc;
    if(isArray(src) || typeof(src) == "object") {
        //?前条件满足执行[]，不满足执行{}
        newsrc = (isArray(src))?[]:{};
        for(var i in src) {
            newsrc[i] = cloneObject(src[i]);
        }
    }else {
        newsrc = src;
    }
    return newsrc;
}

//对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var b= [];
    if(!isArray(arr)) return false;
    arr.sort();
    for(var i=0; i<arr.length; i++) {
        if(arr[i] !== arr[i+1]) {
            b.push(arr[i]);
        }
    }
    return b;
}

// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    var i;
    for (i = 0; i < str.length; i++) {
        //从头部开始扫描，\t是tab
        if (str.charAt(i) != " " && str.charAt(i) != "\t") {
            break;
        }
    }
    //截取字符串第i位开始，长度为str.length
    str = str.substring(i, str.length);
    //从尾部开始扫描
    for (i = str.length - 1; i >= 0; i--) {
        if (str.charAt(i) != " " && str.charAt(i) != "\t") {
            break;
        }
    }
    str = str.substring(0, i + 1);
    return str;
}

// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // \s匹配空白符，^从头部开始匹配，$从尾部开始匹配，|或，g全局匹配，*匹配0次或多次，replace把逗号前的替换成逗号后的
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        fn(arr[i], i);
    }
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var count = 0;
    for (var i in obj) {
        count++;
    }
    return count;
}

// 判断是否为邮箱地址
function isEmail(emailStr) {
    //网上找的，自己写就崩溃了。。
    var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return emailReg.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    var phoneReg = /^1(3|5|7|8)\d{9}&/;
    return phoneReg.test(phone);
}







// 以下是task0002第三小节：DOM

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    if (!element.className) {
        element.className = newClassName;
    } else {
        //split(" ")将字符串根据空格切分成数组
        var classnames = element.className.split(" ");
            classnames.push(newClassName);
            //join(" ")将数组合成以空格分隔的字符串
            element.className = classnames.join(" ");
    }
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    var classnames = element.className.split(" ");
    //indexOf(string) 返回检索string在整个字符串或数组中的位置（计数从0开始）
    var oldposition = classnames.indexOf(oldClassName);
    if (oldposition > -1) {
        //splice(a,b,c1,c2...) 将数组中第a个后的元素开始删除，删除个数为b，并依次添加c1、c2等新元素
        //slice(a,b) 返回数组中第a个后到第b个前的元素，若没有b则默认到最后一个，若a为-1，则从最后一个元素开始，-2为倒数第二个元素
        classnames = classnames.splice(oldposition,1);
        classnames = classnames.join(" ");
    }
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    var p1=element.parentNode;
    var p2=silblingNode.parentNode;
    if(p1===p2) return true;
    else return false;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var obj = new Object();
    obj.x = element.offsetLeft;
    obj.y = element.offsetTop;
    return obj;
}


// 实现一个简单的Query

// 可以通过id获取DOM对象，通过#标示，例如
// $("#adom"); // 返回id为adom的DOM对象

// // 可以通过tagName获取DOM对象，例如
// $("a"); // 返回第一个<a>对象

// // 可以通过样式名称获取DOM对象，例如
// $(".classa"); // 返回第一个样式定义包含classa的对象

// // 可以通过attribute匹配获取DOM对象，例如
// $("[data-log]"); // 返回第一个包含属性data-log的对象

// $("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象

// // 可以通过简单的组合提高查询便利性，例如
// $("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象

function $(selector) {
    //值为-1为未检索到
    if (selector.search(" ") == -1) {
        //.charAt(a)索引到字符串第a位置处（从0开始计数）
        switch (selector.charAt(0)) {
            case "#": // id查询
                //.substring()方法同.slice()，区别在于.substring()不接受负参数
                return document.getElementById(selector.substring(1));
                break;
            case ".": // class查询
                return getByClass(selector.substring(1))[0];
                break;
            case "[": // attribute查询
                if (selector.search("=") == -1) {
                    return getByAttributeName(selector.replace(/^\[|\]$/g, ""))[0];
                } else {
                    var ateStr = selector.split("="),
                        ateName = ateStr[0].replace(/^\[|\]$/g, ""),
                        ateValue = ateStr[1].replace(/^\[|\]$/g, "");
                    return getByAttributeNameAndValue(ateName, ateValue)[0];
                }
                break;
            default: // tagName查询
                return document.getElementsByTagName(selector)[0];
        }
    } else { // 组合查询
        var psStr = selector.split(" "),
            pStr = psStr[0].replace(psStr[0].charAt(0), ""),
            sStr = psStr[1].replace(psStr[1].charAt(0), "");
        return getByClass(sStr, pStr)[0];
    }
}





//以下是task0002第四小节：事件

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    if(element.addEventListener) {
        //addEventListener是在 FireFox 上的用法，true和false是使用捕获
        element.addEventListener(event,listener,false);
    }else if(element.attachEvent) {
        element.attachEvent("on"+event,listener);
    }else {
        element["on" + event] = listener;
    }
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    if(element.removeEventListener) {
        element.removeEventListener(event, listener, false);
    } else if (element.detachEvent) {
        element.detachEvent("on" + event, listener);
    } else {
        element["on" + event] = null;
    }
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    addEvent(element,"click",listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    addEvent(element, "keydown", function(event) {
        event = event || window.event;
        if (event.keyCode == 13) {
            listener.call(this, event);
        } else return;
    });
}

function delegateEvent(element, tag, eventName, listener) {
     addEvent(element, eventName, function(event){
        //返回事件节点，srcElement是IE下的属性，target是Firefox下的属性
        var target = event.target || event.srcElement;
        if(target.tagName.toLowerCase() == tag.toLowerCase()) {
            listener.call(target, event);
        }
    });
}

//$.on = addEvent;
//$.un = removeEvent;
//$.click = addClickEvent;
//$.enter = addEnterEvent;
//$.delegate = delegateEvent;

$.on = function(selector, event, listener) {
    var nodeList = $(selector, false);
    each(nodeList, function (item, index) {
        addEvent(item, event, listener);
    });

}

$.un = function(selector, event, listener) {
    var nodeList = $(selector, false);
    each(nodeList, function (item, index) {
        removeEvent(item, event, listener);
    });
}

$.click = function(selector, listener) {
    var nodeList = $(selector, false);
    each(nodeList, function (item, index) {
        addClickEvent(item, listener);
    });
}

$.enter = function(selector, listener) {
    var nodeList = $(selector, false);
    each(nodeList, function (item, index) {
        addEnterEvent(item, listener);
    });
}

$.delegate = function(selector, tag, event, listener) {
    var nodeList = $(selector, false);
    each(nodeList, function (item, index) {
        delegateEvent(item, tag, event, listener);
    });
}