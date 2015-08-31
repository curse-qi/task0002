function gspan(cobj){
    while(true){
        if(cobj.nextSibling.nodeName!=="SPAN"){
            cobj=cobj.nextSibling;
        }else{
            return cobj.nextSibling;
        }
    } 
}

function check(obj,fun){
    var sp=gspan(obj);

    obj.onblur=function(){
        if(fun(this.value)){
            sp.innerHTML="";
        }else{
            sp.innerHTML="输入格式有误，请按照指定格式输入";
            sp.className="prompt";
        }
    }
}

onload=regs 

function regs(){
    var stat=true;

    var fixdate=document.getElementsByName('fixdate')[0];

    check(fixdate,function(val){
        if(val.indexOf("-") !== -1 && val.length == 10){
            return true;
        } else{
            stat=false;
            return false;
        }
    });

    return stat;
}

function btn() {
    var nowtime = new Date().valueOf();

    var dateArray = document.getElementsByName('fixdate')[0].value.split('-');
    var year = dateArray[0];
    var month1 = dateArray[1];
    var day = dateArray[2];
    var month;
  
    switch(dateArray[1]){
        case '01':
            month="January";
            break;
        case '02':
            month="February";
            break;
        case '03':
            month="March";
            break;
        case '04':
            month="April";
            break;
        case '05':
            month="May";
            break;
        case '06':
            month="June";
            break;
        case '07':
            month="July";
            break;
        case '08':
            month="August";
            break;
        case '09':
            month="September";
            break;
        case '10':
            month="October";
            break;
        case '11':
            month="November";
            break;
        case '12':
            month="December";
            break;
    }

    var timestamp = new Date(month + " " + day + ", " + year + " " + "00:00:00").valueOf();
    var timedistance = timestamp-nowtime;
    
    var days = parseInt(timedistance/86400000);
    var hours = parseInt((timedistance%86400000)/3600000);
    var minutes = parseInt(((timedistance%86400000)%3600000)/60000);
    var seconds = parseInt((((timedistance%86400000)%3600000)%60000)/1000);

    var daotime = document.getElementById('daotime');
    daotime.innerHTML = "距离 " + year + " 年 " + month1 + " 月 " + day + " 日还有 " + days + " 天 " + hours + " 小时 " + minutes + " 分 " + seconds + " 秒"; 

    if( timedistance==0 ) {
        return;
    } else {
        setInterval("btn()",1000);
    }

}