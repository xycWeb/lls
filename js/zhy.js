var Ohref=window.location.href;
var arrhref=Ohref.split("?xqid=");
var xqid={};
xqid={xqid:arrhref[1]};
//console.log(xqid);
//为导航绑定点击事件
$('[data_dh=1]').click(()=>{
	location.href="index.html";
});
$('[data_dh=2]').click(()=>{
	location.href="search-xia.html";
});
$('[data_dh=3]').click(()=>{
	location.href="search-xia.html?xyc-tz=xyc";
});
function useajax(){
	$.ajax({
		url:"data/index/gettt.php",
		type:"post",
		data:xqid,
		dataType:"json",
		success:function(data){
			var html="";
			console.log(data);
			html+=`
				<div>
					<div class="zhy_q">
						<img src="${data[0].imag}" alt="">
					</div>
				
					<div class="zhy_w">
						<div class="zhy_e">
							<img src="${data[0].img}" alt="">
						</div>
						<div class="zhy_r">
							<div class="zhy_t">
								<h2>${data[0].tag}</h2>
								<h1>${data[0].title}</h1>
								<p>${data[0].details}</p>
							</div>
						</div>
					</div>
					<div class="zhy_y" style="background:url('${data[0].img1}') no-repeat;background-size:100% 100%;">
						<div class="zhy_u">
							<div class="zhy_t">
								<h2>${data[0].tag1}</h2>
								<h1>${data[0].title1}</h1>
								<p>${data[0].details1}</p>
							</div>
						</div>

					</div>
					<div class="zhy_i">
						<div class="zhy_e">
							<img src="${data[0].img3}" alt=""> 
						</div>
						<div class="zhy_r">
							<div class="zhy_t">
								<h2>${data[0].tag2}</h2>  
								<h1>${data[0].title2}</h1>
								<p>${data[0].details2}</p>
							</div>
						</div>
					</div>
					<div class="zhy_o" style="background:url('${data[0].img2}') no-repeat;background-size:100% 100%;">
						<div class="zhy_u">
							<div class="zhy_t">
								<h2>${data[0].tag3}</h2>
								<h1>${data[0].title3}</h1>
								<p>${data[0].details3}</p>
							</div>
						</div>
						
					</div>
					<div class="zhy_p">
						<div class="zhy_e">
							 <img src="${data[0].img4}" alt=""> 
						</div>
						<div class="zhy_r">
							<div class="zhy_t">
								<h2>${data[0].tag4}</h2>
								<h1>${data[0].title4}</h1>
								<p>${data[0].details4}</p>
							</div>
						</div>
					</div>
					<div class="zhy_a">
						<div class="zhy_r">
							<div class="zhy_t">
								<h2>${data[0].tag5}</h2>
								<h1>${data[0].title5}</h1>
								<p>${data[0].details5}</p>
							</div>
						</div>
						<div class="zhy_e">
							 <img src="${data[0].img5}" alt=""> 
						</div>
					</div>
					<div class="zhy_s">
						<div style="width:100%;height:255px;display:flex;
							justify-content: center;margin-bottom:40px;">
							<div class="zhy_d">
								<div class="zhy_f">
									<img src="${data[0].imge}">
								</div>
							</div>
						</div>
						<div style="width:100%;height:270px;display:flex;
							justify-content: center;">
							<div class="zhy_g">           
								<b>&nbsp;${data[0].titl}&nbsp;</b>
								<i>${data[0].subtitle}</i>
								${data[0].present} 
							</div>
						</div>
					</div>
					<div class="zhy_h" style="background:url('${data[0].img6}') no-repeat;background-size:100% 100%;">
						<div class="zhy_u">
							<div class="zhy_t">
								<h2>${data[0].tag6}</h2>
								<h1>${data[0].title6}</h1>
								<p>${data[0].details6}</p>
							</div>
						</div>
					
					</div>
					<div class="zhy_j" style="background:url('${data[0].img7}') no-repeat;background-size:100% 100%;">
						<div class="zhy_u zhy_n">
							<div class="zhy_t">
								<h2>${data[0].tag7}</h2>
								<h1>${data[0].title7}</h1>
								<p>${data[0].details7}</p>
							</div>
						</div>
						
					</div>
					<div class="zhy_k">
						<div class="zhy_l">
							<div class="zhy_z">
								<h2 style="text-align:center;">您希望了解更多有关星期日历型吗？</h2>
								<h1 style="text-align:center;">继续探索</h1>
							</div>
							<div class="zhy_x">
								<div>
									<div class="zhy_c">
										<img src="img/rolex.scene7.com.jpg" alt="">
									</div>
									<p>型号</p>
								</div>
								<div>
									<div class="zhy_c">
										<img src="img/spirit_of_milgauss_0002_364x200.jpg" alt="">
									</div>
									<p>腕表精神</p>
								</div>
							</div>
						</div>
					</div>
					<div class="zhy_b">
						<p>分享此页面</p>
					</div>
				</div>
			`;
			$("#dd").html(html);
		},
		error:function(){
			alert('网络链接错误');
		}
	});
}
useajax();