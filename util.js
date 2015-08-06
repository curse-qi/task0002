//以下是task0002第二小节

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