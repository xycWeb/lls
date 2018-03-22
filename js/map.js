
	//创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
		addMarker();//向地图中添加marker
    }
    //创建地图函数需要的变量
	var mapX="111.390271";
	var mapY="36.523976";
	var mapB="5";
	var getMap=new Object();
	var getssts=new Object();
	$('.xyc-rq-js').hide();
	$('.xyc-ssjg-box').hide();
    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(mapX,mapY);//定义一个中心点坐标
        map.centerAndZoom(point,mapB);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
	//创建地图创建的AJAX请求
	function useAjaxtomap(){
		$.ajax({
			url:"data/index/map.php",
			type:"post",
			data:getMap,
			dataType:"json",
			success:function(data){
				mapX=data[0].wzX;
				mapY=data[0].wzY;
				mapB=20;
				//console.log(data);
				var html="";
				html=`<img src="${data[0].wzimg}" alt="1" class="xyc-map-img">
				<div class="xyc-rq-js-font1">${data[0].wzjs}</div>
				<div class="xyc-rq-js-font2">${data[0].wzname}</div>
				<div class="xyc-rq-js-font3">${data[0].wzdw}</div>
				<div style="margin-top:30px;">电话:${data[0].wzphone}</div>`;
				$('.xyc-rq-js').html(html);
				$('.xyc-rq-js').show();
				initMap();//创建和初始化地图
			},
			error:function(){
				console.log('网络连接错误');
			}
		});
	}
	//创建搜索提示的AJAX请求
	function useAjaxGetssts(){
		$.ajax({
			url:"data/index/mapssts.php",
			type:"post",
			data:getssts,
			dataType:"json",
			success:function(data){
				if(data[0]!=null){
					var html=`<div class="xyc-ssjg-font">${data[0].wzssts}</div>`;
					$('.xyc-ssjg-box').html(html);
					$('.xyc-ssjg-box').show();
					$('.xyc-ssjg-font').click(e=>{
						$('.xyc-sssr').val($(e.target).html());
						$('.xyc-ssjg-box').hide();
						$('.xyc-sssr').focus();
					});
				}else{
					$('.xyc-ssjg-box').html('本店小本经营，此处无店');
					$('.xyc-ssjg-box').show();
				}
			},
			error:function(data){
				console.log('网络连接错误');
			}
		});
	}
	//创建一个监听事件使按下enter键开始搜索
	$('.xyc-sssr').keydown(e=>{
		if(e.keyCode==13){
			$('.xyc-ssan').click();
		}
	});
    //创建从输入框中拿到输入的字符串的点击事件
	$('.xyc-ssan').click(e=>{
		var srxx=$(e.target).prev().val();
		getMap.getMap=srxx;
		//console.log(getMap);
		useAjaxtomap();
	});
	//当输入框字变化的时候产生的功能
	$('.xyc-sssr').keyup(e=>{
		var sval=$(e.target).val();
		getssts.getssts=sval;
		//console.log(getssts);
		if(getssts.getssts!=""){
			useAjaxGetssts();
		}else{
			$('.xyc-ssjg-box').hide();
		}
	});
    //地图事件设置函数：
    function setMapEvent(){
//        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
//        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
//        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
	map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
    }
    //标注点数组
    var markerArr = [{title:"我的标记",content:"我的备注",point:"120.166976|30.280139",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
		 ,{title:"我的标记",content:"我的备注",point:"116.380837|39.919282",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
		 ,{title:"我的标记",content:"我的备注",point:"121.483148|31.230602",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
		 ,{title:"我的标记",content:"我的备注",point:"113.330108|23.137913",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
		 ];
	
    //创建marker
    function addMarker(){
        for(var i=0;i<markerArr.length;i++){
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
			var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
			var iw = createInfoWindow(i);
			var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
			marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                        borderColor:"#808080",
                        color:"#333",
                        cursor:"pointer"
            });
			(function(){
				var index = i;
				var _iw = createInfoWindow(i);
				var _marker = marker;
				_marker.addEventListener("click",function(){
				    this.openInfoWindow(_iw);
			    });
			    _iw.addEventListener("open",function(){
				    _marker.getLabel().hide();
			    })
			    _iw.addEventListener("close",function(){
				    _marker.getLabel().show();
			    })
				label.addEventListener("click",function(){
				    _marker.openInfoWindow(_iw);
			    })
				if(!!json.isOpen){
					label.hide();
					_marker.openInfoWindow(_iw);
				}
			})()
        }
    }
    //创建InfoWindow
    function createInfoWindow(i){
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
    }
    //创建一个Icon
    function createIcon(json){
        var icon = new BMap.Icon("img/xyc-dwtb.jpg", 
			new BMap.Size(json.w,json.h),
			{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
        return icon;
    }
	initMap();