SET NAMES UTF8;
DROP DATABASE IF EXISTS map;
CREATE DATABASE map  CHARSET=UTF8 ;
USE map;
CREATE TABLE wzb(
	wzid INT,
	wzname VARCHAR(128),
	wzimg VARCHAR(128),
	wzjs VARCHAR(128), 
	wzdw VARCHAR(128),
	wzphone VARCHAR(128),
	wzX VARCHAR(128),
	wzY VARCHAR(128),
	wzssts VARCHAR(128)
);
INSERT INTO wzb VALUES('1','劳力士/帝舵-杭州大厦店<br>(冠亚名表城 - 浙江乾鼎商贸有限公司)','img/xyc-pp.jpg','劳力士零售商','中国<br>杭州市<br>环城北路258号<br>杭州大厦购物城D座首层','(0571) 8515-8989','120.166374','30.279437','杭州市');
INSERT INTO wzb VALUES('2','东方表行<br>上海东方商厦店','img/xyc-pp.jpg','劳力士零售商','中国<br>上海市<br>漕溪北路8号<br>徐汇区<br>东方商厦一层','(021) 6487-0000*1339','121.464832','31.2211','上海市');
INSERT INTO wzb VALUES('3','亨吉利世界名表中心<br>(北京西单商场)','img/xyc-pp.jpg','劳力士零售商','中国<br>北京市<br>西单北大街<br>西城区<br>西单商场<br>亨吉利世界名表中心一层',' (010) 6601-1216','116.38099','39.918715','北京市');
INSERT INTO wzb VALUES('4','东方表行<br>广州天河城店（劳力士）','img/xyc-pp.jpg','劳力士零售商','中国<br>广州市<br>天河路208号<br>天河区<br>天河城购物中心首层','(020) 8523-9810','113.329219','23.138096','广州市');