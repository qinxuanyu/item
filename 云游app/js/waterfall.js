/*在文档加载完毕之后调用数据加载函数*/
$(function () {
	loadDate();
});
/*如果滚动条滚动到页面底部150像素的时候，去请求加载新的内容*/
$(window).scroll(function () {
	//滚动时触发
	//文档总高度减去当前已经滚动过去的距离，再减去window的高度
	var loadHeight = $(document).height()-$(this).scrollTop()-$(this).height();
	//如果剩余的高度在150以内，则进行数据的加载
	if (loadHeight<150) {
		loadDate();
	}
})
/*注意：可以更改为点击触发加载功能*/
function loadDate() {
	$.ajax({
		url : 'data.php',
		dataType : 'json',
		success : function (data) {
			//如果返回的json为object类型则进行数据处理
			if (typeof (data) == 'object') {
				var datas;//定义变量用于存储返回的json数据
				var newDiv;//定义变量用于存放创建的新div标签
				var newPos;//定义需要将新块放置到的新位置
				var newHeight;//用于检测最小高度
				var nowColHeight;//用于存储新块的高度
				//进行获取到数组的值
				for (var i=0; i<data.length; i++) {
					//用变量存储data的数据(data[i]对象包括image、title、inf三种方法)
					datas = data[i];
					/*确定newPos是什么，即将新的div放置在哪里*/
					//找到高度最小的列，将这个新的块放置在这个列下面
					newHeight = -1;
					$('#main .column').each(function () {
						//用each遍历数组。对jQuery对象进行迭代，为每个匹配元素执行函数
						//首先获取每一个列的高度
						nowColHeight = Number($(this).height());
						//比较四个列的高度
						if (newHeight==-1 || newHeight>nowColHeight) {
							//保证newHeight永远存储的是最小列的高度
							newHeight = nowColHeight;
							//利用this选中高度最小的那个列（newHeight）
							newPos = $(this);
						}
					});
					newDiv = $('<div class="con"><div class="pic"><img src="'+datas.image+'" /></div><h3>'+datas.title+'</h3><p>'+datas.inf+'</p></div>');
					//将创建的标签插入到相应的位置中
					newPos.append(newDiv);
					//以缓动的方式进入
					newDiv.fadeIn();
				}
			}
		}
	})
}