$(document).ready(function(){

	var data = ['百度','腾讯','阿里','谷歌'];

	//搜索提示
	$('input').keyup(function(event){
		if(event.keyCode != 40 && event.keyCode != 38){
			var htmlStr = "";
			for(var i=0; i<data.length; i++) { 
				htmlStr += "<li>" + data[i] +"</li>"
			} 
			if (htmlStr != '') {
				$('.info ul').html(htmlStr);
				$('.info').show();
			}
		}
	});

    //鼠标移动和点击选择
	$(document).on('mouseover','ul li',function() {
		$('ul li').removeClass('active');
		$(this).addClass('active');
	});

	$(document).on('click','ul li',function() {
		$('ul li').removeClass('active');
		$(this).addClass('active');

		var select = $(this).html();
		$('input').val(select);
	});

	//键盘移动和enter选择
	$(document).keydown(function(event) {
		var temp = $('ul li.active');
		if(event.keyCode == 40) {
			$('ul li').removeClass('active');
			if(temp.next().length != 0) {
				temp.next().addClass('active');
			} else {
				$('ul li:first-child').addClass('active');
			}
		}
		if(event.keyCode == 38) {
			$('ul li').removeClass('active');
			if(temp.prev().length != 0) {
				temp.prev().addClass('active');
			} else {
				$('ul li:last-child').addClass('active');
			}
		}
		if(event.keyCode == 13) {
			var select = temp.html();
			$('input').val(select);
		}
	});
});