var listText = new Array(8);
listText[0] = "吃了新配的药方，就会变得越来越开心的！";
listText[1] = "拯救不开心！灌一耳俏皮小调";
listText[2] = "史上最全古风歌曲合集";
listText[3] = "我对自己开了一枪";
listText[4] = "纯音乐";
listText[5] = "相忘忘不了 想联系又怕打扰";
listText[6] = "愿(Cover: AI辰)";
listText[7] = "别熬了，夜早就熟了";

var bsb = new Array(10);
bsb[0]="这一生关于你的风景";
bsb[1]="江山美人";
bsb[2]="Mine";
bsb[3]="IM OUT YA";
bsb[4]="把孤独当作晚餐";
bsb[5]="Hey KONG";
bsb[6]="渺无音信";
bsb[7]="耿";
bsb[8]="闻妖";
bsb[9]="去见你";

var xgb = new Array(10);
xgb[0]="无名之辈";
xgb[1]="四块五";
xgb[2]="多想在平庸的生活拥抱你";
xgb[3]="把孤独当作晚餐";
xgb[4]="离岸";
xgb[5]="我曾";
xgb[6]="这么久没见";
xgb[7]="牛奶面包";
xgb[8]="关于孤独我想说的话";
xgb[9]="都走了";

var ycb = new Array(10);
ycb[0]="嘿";
ycb[1]="安眠咒";
ycb[2]="镇世";
ycb[3]="Hey KONG";
ycb[4]="渺无音信";
ycb[5]="由于时间与地域的关系";
ycb[6]="乌合之众";
ycb[7]="蓉城往事";
ycb[8]="在你的婚礼我多喝了两杯";
ycb[9]="如果你存在的话";

var playBtn = "<span class='glyphicon glyphicon-play-circle'aria-hidden='true'></span>";
var music = document.getElementById("musicplay");

function addImg(num) {

	for(var i = 1; i <= num; i++) {
		$("#hot_ul .hot_img" + i).css({
			"background": "url(img/hot/hot" + i + ".jpg) no-repeat",
			"width": "100%",
			"top": 0,
			"float": "right",
		});

		$("#hot_ul .dec"+i).html(listText[i - 1]);
	}
}

function addLiAndA(num) {
	
	var index = 1;
	
	for(var i = 1; i <= num; i++) {

		if(i>=1&&i<=4){
			index=1;
		}else{
			index=2;
		}
		$("#hot_ul").append(
			"<li><div class='hotImg hot_img" + i + "'><div class='bottom'></div></div><a href='#'><p class='dec"+i+"'></p></a></li>"
			);
		$("#hot_ul .bottom").append(
			"<span class='glyphicon glyphicon-play-circle' aria-hidden='true'></span>"
		);
	}
}

function BdUpdate(obj,arr,txt){
	for(var i=0;i<arr.length;i++){
		$(obj).append("<li><a href=''>"+(i+1)+" "+arr[i]+"</a><span class='glyphicon glyphicon-play-circle'aria-hidden='true' id='bdSong_"+txt+(i+1)+"'></span></li>");
	}
}

addLiAndA(8);
addImg(8);
BdUpdate("#Rangking_bsb",bsb,"bsb");
BdUpdate("#Rangking_xgb",xgb,"xgb");
BdUpdate("#Rangking_ycb",ycb,"ycb");

$("#Rangking_bsb #bdSong_bsb1").click(function(){
	music.src = "music/music1.mp3";
	music.play();
}) 
$("#Rangking_xgb #bdSong_xgb1").click(function(){
	music.src = "music/music2.mp3";
	music.play();
})

//榜单行颜色的改变
function changeColor(obj){
	var index = 0;
	$(obj).each(function(){
		$(this).find("li").each(function(){

			index++;

			if(index%2!=0){
				$(this).css({
					"background":"rgb(232,232,232)"
				})
			}
		})
	})
}

changeColor("#Rangking_bsb");
changeColor("#Rangking_xgb");
changeColor("#Rangking_ycb");

