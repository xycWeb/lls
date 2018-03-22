//创建需要的变量
	var cc='';
	var cz='';
	var wq='';
	var gn='';
	var bd='';
	var bp='';
	var zdbjfg='';
	var xlid='';
	var count=0;
//页面载入时执行的自调函数导入页面信息
(()=>{
	$.ajax({
		url:"data/index/get.php",
		type:"get",
		dataType:"json",
		success:function(data){
			//console.log(data);
			var html='';
			var html1='';
			for(i=1;i<data.length;i++){
				html+=`<div class="xyc_ssjg_1" data_bdlj=${i}>
				<img src="${data[i].xlimg}" class="xyc_ssjg_img" alt="1">
				<div class="xyc_ssjg_font">
				<span class="xyc_ssjg_font1">${data[i].xlname}</span>
				</div></div>`;
			}
			html1=data[0].xlxjs;
			$('.xyc_two_header').html(html1);
			html1=data[0].xlname;
			$('.xyc_one_header').html(html1);
			html1=data[0].xldjs;
			$('.xyc_xlsm').html(html1);
			$('.xyc_ssjg_box').html(html);
			//为系列表创建连接到该系列的点击事件
			for(var i=1;i<data.length;i++){
				(function(i){
					$('[data_bdlj="'+i+'"]').click(function(){
						html1=data[i].xlxjs;
						$('.xyc_two_header').html(html1);
						html1=data[i].xlname;
						$('.xyc_one_header').html(html1);
						html1=data[i].xldjs;
						$('.xyc_xlsm').html(html1);
						xlid=data[i].xlid;
						//添加导航栏2
						var html2=`<span data_dh=1 class="xyc-dh-font">首页</span>
						<span data_dh=2 class="xyc-dh-font">>劳力士腕表</span>
						<span class="xyc-dh-font">>${data[i].xlname}</span>`;
						$('.xyc-dh').html(html2);
						$('[data_dh=1]').click(()=>{
							location.href="index.html";
						});
						$('[data_dh=2]').click(()=>{
							location.href="search-xia.html";
						});
						useAjax();
					})
				})(i);
			}
			//添加导航栏1
			var html2=`<span data_dh=1 class="xyc-dh-font">主页</span><span class="xyc-dh-font" data_dh=2>>劳力士腕表</span>`;
			$('.xyc-dh').html(html2);
			//为导航添加点击事件
			$('[data_dh=1]').click(()=>{
				location.href="index.html";
			});
			//为从详情页切换添加点击事件模拟触发
			var Ohref=window.location.href;
			var arrhref=Ohref.split("?xyc-tz=");
			//console.log(arrhref[1]);
			if(arrhref[1]=="xyc"){
				$("[data_bdlj=1]").click();
			}
		},
		error:function(){
			alert("网络连接错误请检查");
		}
	})
}	
)();
//页面加载时自动为各种任何选项添加黑色背景
$('.xyc_cccz').children().addClass('xyc_bg_b');
$('.xyc_czcz').children().addClass('xyc_bg_b');
$('.xyc_wqcz').children().addClass('xyc_bg_b');
$('.xyc_bdcz').children().addClass('xyc_bg_b');
$('.xyc_bpcz').children().addClass('xyc_bg_b');
$('.xyc_gncz').children().addClass('xyc_bg_b');
$('.xyc_zdbjfgcz').children().addClass('xyc_bg_b');
//用选择来得到搜索结果
	//隐藏分页栏
	$('.xyc_fy_box').hide();
	$('.xyc_fy_left').hide();
	//为元素添加点击事件
	//1.1创建点击后需要用到的ajax函数
	function useAjax(){
		var chooseArray=new Object();
		if(cc!=''){
			chooseArray.cc=cc;
		}
		if(cz!=''){
			chooseArray.cz=cz;
		}
		if(wq!=''){
			chooseArray.wq=wq;
		}
		if(gn!=''){
			chooseArray.gn=gn;
		}
		if(bd!=''){
			chooseArray.bd=bd;
		}
		if(bp!=''){
			chooseArray.bp=bp;
		}
		if(zdbjfg!=''){
			chooseArray.zdbjfg=zdbjfg;
		}
		if(xlid!=''){
			chooseArray.xlid=xlid;
		}
		console.log(chooseArray);
		$.ajax({
			url:"data/index/getsb.php",
			type:"post",
			data:chooseArray,
			dataType:"json",
			success:function(data){
				var onece=18;
				var data_=[];
				for(var i=0;i<18;i++){
					var y=i+count*18;
					if(data[y]==undefined){
						break;
					}else{
						data_[i]=data[y]
					}
				}
				//console.log(data_);
				if(data.length>18){
					$('.xyc_fy_box').show();
				}else{
					$('.xyc_fy_box').hide();
				}
				if(count==0){
					$('.xyc_fy_left').hide();
				}else{
					$('.xyc_fy_left').show();
				}
				if(data_.length<18||data.length/18==count+1){
					$('.xyc_fy_right').hide();
				}else{
					$('.xyc_fy_right').show();
				}
				var html='';
				for(i=0;i<data_.length;i++){
					html+=`<div class="xyc_ssjg_1" data_tzlj=${i+1}>
					<img src="${data_[i].xqimg}" class="xyc_ssjg_img" alt="1">
					<div class="xyc_ssjg_font">
					<span class="xyc_ssjg_font1">${data_[i].xqname}</span><br>
					<span class="xyc_ssjg_font2">${data_[i].xqbd},${data_[i].xqhm}毫米
					<br>${data_[i].xqcz}
					</div></div>`;
					$('.xyc_ssjg_box').html(html);
				}
				//为每个xq绑定跳转
				for(var i=1;i<data.length;i++){
					(function(i){
						var j=i-1;
						var xqid=data[j].xqid;
						$('[data_tzlj="'+i+'"]').click(function(){
							location.href="details.html?"+"xqid="+xqid;
						})
					})(i);
				}
				//为符合继续搜索条件的选项去掉opacity
				//得到所有选项的内容并保存在数组中
				for(var i=0;i<data.length;i++){
					var x=data[i].xqcc;
					for(var j=1;j<4;j++){
						if($("[data_cc='"+j+"']").html()==x){
							$("[data_cc='"+j+"']").parent().removeClass('xyc_choose_js');
							break;
						}
					}
				}
				for(var i=0;i<data.length;i++){
					var x=data[i].xqcz;
					for(var j=1;j<7;j++){
						if($("[data_cz='"+j+"']").html()==x){
							$("[data_cz='"+j+"']").parent().removeClass('xyc_choose_js');
							break;
						}
					}
				}
				for(var i=0;i<data.length;i++){
					var x=data[i].xqwq;
					for(var j=1;j<6;j++){
						if($("[data_wq='"+j+"']").html()==x){
							$("[data_wq='"+j+"']").parent().removeClass('xyc_choose_js');
							break;
						}
					}
				}
				for(var i=0;i<data.length;i++){
					var x=data[i].xqgn;
					for(var j=1;j<8;j++){
						if($("[data_gn='"+j+"']").html()==x){
							$("[data_gn='"+j+"']").parent().removeClass('xyc_choose_js');
							break;
						}
					}
				}
				for(var i=0;i<data.length;i++){
					var x=data[i].xqbd;
					for(var j=1;j<7;j++){
						if($("[data_bd='"+j+"']").html()==x){
							$("[data_bd='"+j+"']").parent().removeClass('xyc_choose_js');
							break;
						}
					}
				}
				for(var i=0;i<data.length;i++){
					var x=data[i].xqbp;
					for(var j=1;j<5;j++){
						if($("[data_bp='"+j+"']").html()==x){
							$("[data_bp='"+j+"']").parent().removeClass('xyc_choose_js');
							break;
						}
					}
				}
				for(var i=0;i<data.length;i++){
					var x=data[i].xqzdbjfg;
					for(var j=1;j<5;j++){
						if($("[data_zdbjfg='"+j+"']").html()==x){
							$("[data_zdbjfg='"+j+"']").parent().removeClass('xyc_choose_js');
							break;
						}
					}
				}
			},
			error:function(){
				alert("网络连接错误请检查");
			}
		});
	}
	//1.2获取页码的函数
	function getCount(){
		var xyc_str=$('.xyc_fy').html();
		var Count=parseInt(xyc_str.slice(1));
		return Count;
	}
	//1.3给选项添加颜色变浅的样式的函数
	function addStyle(){
		$('.xyc_cc').addClass('xyc_choose_js');
		$('.xyc_cz').addClass('xyc_choose_js');
		$('.xyc_wq').addClass('xyc_choose_js');
		$('.xyc_gn').addClass('xyc_choose_js');
		$('.xyc_bd').addClass('xyc_choose_js');
		$('.xyc_bp').addClass('xyc_choose_js');
		$('.xyc_zdbjfg').addClass('xyc_choose_js');
	}
	//2.1为变量添加需要的值的点击事件
	$(".xyc_cc").click(function(){
		if(!$(this).hasClass('xyc_choose_js')){
			cc=$(this).children('.xyc_wz').html();
			$('.xyc_cccz').children().removeClass('xyc_bg_b');
			$(this).children('.xyc_yq').addClass('xyc_bg_b');
			addStyle();
			useAjax();
		}
	});
	$(".xyc_cz").click(function(){
		if(!$(this).hasClass('xyc_choose_js')){
			cz=$(this).children('.xyc_wz').html();
			$('.xyc_czcz').children().removeClass('xyc_bg_b');
			$(this).children('.xyc_yq').addClass('xyc_bg_b');
			addStyle();
			useAjax();
		}
	});
	$(".xyc_wq").click(function(){
		if(!$(this).hasClass('xyc_choose_js')){
			wq=$(this).children('.xyc_wz').html();
			$('.xyc_wqcz').children().removeClass('xyc_bg_b');
			$(this).children('.xyc_yq').addClass('xyc_bg_b');
			addStyle();
			useAjax();
		}
	});
	$(".xyc_gn").click(function(){
		if(!$(this).hasClass('xyc_choose_js')){
			gn=$(this).children('.xyc_wz').html();
			$('.xyc_gncz').children().removeClass('xyc_bg_b');
			$(this).children('.xyc_yq').addClass('xyc_bg_b');
			addStyle();
			useAjax();
		}
	});
	$(".xyc_bd").click(function(){
		if(!$(this).hasClass('xyc_choose_js')){
			bd=$(this).children('.xyc_wz').html();
			$('.xyc_bdcz').children().removeClass('xyc_bg_b');
			$(this).children('.xyc_yq').addClass('xyc_bg_b');
			addStyle();
			useAjax();
		}
	});
	$(".xyc_bp").click(function(){
		if(!$(this).hasClass('xyc_choose_js')){
			bp=$(this).children('.xyc_wz').html();
			$('.xyc_bpcz').children().removeClass('xyc_bg_b');
			$(this).children('.xyc_yq').addClass('xyc_bg_b');
			addStyle();
			useAjax();
		}
	});
	$(".xyc_zdbjfg").click(function(){
		if(!$(this).hasClass('xyc_choose_js')){
			zdbjfg=$(this).children('.xyc_wz').html();
			$('.xyc_zdbjfgcz').children().removeClass('xyc_bg_b');
			$(this).children('.xyc_yq').addClass('xyc_bg_b');
			addStyle();
			useAjax();
		}
	});
	$(".xyc_cccz").click(e=>{
		cc='';
		$(e.target).parent().find('.xyc_bg_b').removeClass('xyc_bg_b');
		$(e.target).children('.xyc_yq').addClass('xyc_bg_b');
		useAjax();
	});
	$(".xyc_czcz").click(e=>{
		cz='';
		$(e.target).parent().find('.xyc_bg_b').removeClass('xyc_bg_b');
		$(e.target).children('.xyc_yq').addClass('xyc_bg_b');
		useAjax();
	});
	$(".xyc_wqcz").click(e=>{
		wq='';
		$(e.target).parent().find('.xyc_bg_b').removeClass('xyc_bg_b');
		$(e.target).children('.xyc_yq').addClass('xyc_bg_b');
		useAjax();
	});
	$(".xyc_gncz").click(e=>{
		gn='';
		$(e.target).parent().find('.xyc_bg_b').removeClass('xyc_bg_b');
		$(e.target).children('.xyc_yq').addClass('xyc_bg_b');
		useAjax();
	});
	$(".xyc_bdcz").click(e=>{
		bd='';
		$(e.target).parent().find('.xyc_bg_b').removeClass('xyc_bg_b');
		$(e.target).children('.xyc_yq').addClass('xyc_bg_b');
		useAjax();
	});
	$(".xyc_bpcz").click(e=>{
		bp='';
		$(e.target).parent().find('.xyc_bg_b').removeClass('xyc_bg_b');
		$(e.target).children('.xyc_yq').addClass('xyc_bg_b');
		useAjax();
	});
	$(".xyc_zdbjfgcz").click(e=>{
		zdbjfg='';
		$(e.target).parent().find('.xyc_bg_b').removeClass('xyc_bg_b');
		$(e.target).children('.xyc_yq').addClass('xyc_bg_b');
		useAjax();
	});
	//分页栏点击事件
	$('.xyc_fy_kz').on('click','.xyc_fy_left',e=>{
		var Count=getCount();
		count=Count-1;
		count-=1;
		$('.xyc_fy').html("页"+(count+1));
		useAjax();
	});
	$('.xyc_fy_kz').on('click','.xyc_fy_right',e=>{
		var Count=getCount();
		count=Count-1;
		count+=1;
		$('.xyc_fy').html("页"+(count+1));
		useAjax();
	});
//	关闭选项
	$('.xyc_cp').on('click','.xyc_cp_click',e=>{
		if($(e.target).html()=="关闭"){
			$('.xyc_choose_box').addClass('xyc_height_z');
			$(e.target).html("筛选");
			$('.xyc_left').hide();
			$('.xyc_right').hide();
			$('.xyc_cp_tb').addClass('xyc_cp_tb_c');
			$('.xyc_cp_tb').removeClass('xyc_cp_tb');
		}else{
			$('.xyc_choose_box').removeClass('xyc_height_z');
			$(e.target).html("关闭");
			$('.xyc_left').show();
			$('.xyc_right').show();
			$('.xyc_cp_tb_c').addClass('xyc_cp_tb');
			$('.xyc_cp_tb_c').removeClass('xyc_cp_tb_c');
		}
	});