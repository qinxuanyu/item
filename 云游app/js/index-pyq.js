$(function(){
		loadData();
	})
	$(window).scroll(function(){
		// 当滚动条与网页底部的距离小于50时
		// 网页文档的高度-上滚距离-当前window的高度
//		console.log("$(document).height():"+$(document).height());
//		console.log("$(window).scrollTop():"+$(window).scrollTop());
//		console.log("$(window).height():"+$(window).height());
		var loadHeight = $(document).height()-$(window).scrollTop()-$(window).height();
		if (loadHeight < 50) {		
			setTimeout(loadData,1200);
		};
	})
	
	
	// 该函数功能是加载数据
function loadData(){
// 申请数据——异步加载——AJAX
		var data =
			[
				{img1:"img/pyq_03.jpg",img2:"img/pyq_03.png",name:"用户名",ganxiang:"初春在马尔大夫看海，看花，吃零食，逛街，购物，想不到的惊喜，看不完......"},
				{img1:"img/pyq_06.jpg",img2:"img/pyq_03.png",name:"用户名",ganxiang:"初春在马尔大夫看海，看花，吃零食，逛街，购物，想不到的惊喜，看不完......"},
				{img1:"img/pyq_10.jpg",img2:"img/pyq_03.png",name:"用户名",ganxiang:"初春在马尔大夫看海，看花，吃零食，逛街，购物，想不到的惊喜，看不完......"},
				{img1:"img/pyq_11.jpg",img2:"img/pyq_03.png",name:"用户名",ganxiang:"初春在马尔大夫看海，看花，吃零食，逛街，购物，想不到的惊喜，看不完......"}
			];
		//alert(JSON.stringify(data));
		var datas;			// 存储返回的JSON数据
							// 要么要文档、要么自己打印console出来看例子
		var newDiv; 		//用于存放新创建的div元素
		var newPos; 		// 用于确定新块放置到的位置
		var nowColHeight; 	// 用于检测块的高度
		var minHeight; 		// 检测最小高度
		// 一次从后台获取8条数据，每一条的数据均需要进行处理
		for (var i = 0; i < data.length; i++) {
			datas = data[i];
			minHeight = -1;
			$('.column').each(function(){
				nowColHeight = Number($(this).height());
				if (minHeight == -1 || nowColHeight < minHeight) {
					minHeight = nowColHeight;
					newPos = $(this);
				};
			});
			newDiv = $('<div class="dyna"><div><div class="img"><img src="'+datas.img1+'" alt="" /><img class="hdimg" src="'+datas.img2+'" alt="" /></div><div class="name">'+datas.name+'</div><p class="ganxiang">'+datas.ganxiang+'</p><div class="con-tu"><span class="toright"><i class="iconfont">&#x3432;</i><span class="num">999</span></span><span class="toright"><i class="iconfont">&#xe6ac;</i><span class="num">999</span></span><span><i class="iconfont">&#xe60b;</i><span class="num">999</span></span></div></div></div>');
			newPos.append(newDiv);
			newDiv.fadeIn();
		};
		// 当数据加载成功之后，需要进行每个列高度的判断，找到最小高度的列
		// 创建新节点，并将内容、节点放置到相应位置


}
