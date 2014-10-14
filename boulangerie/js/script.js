//更新履歴とか
var frag = false;
function contents(){
	var status;
	frag = !frag;
	if(frag){
		status = "block";
	}else{
		status = "none";
	}
	document.getElementById("hidden").style.display = status;
}

//smint
$(document).ready( function() {
	$('.subMenu').smint({
		'scrollSpeed' : 1000
	});
});

//スライド
$(document).ready(function(){
         $('.bxslider').bxSlider({
          auto: true,
          autoControls: true
        });
});

//マップ
//mapオブジェクト
var map;

//map初期化
function initialize(){
	//座標用変数
	var access = new google.maps.LatLng(35.647701, 139.701158);

            //スタイル設定
            var mapStyles =
            [
                {
                    featureType: "all", //省略可
                    elementType: "all", //省略可
                    stylers: [
                        { hue: "#000055" }, //色   #000000〜#ffffff
                        { saturation: 50 },  //彩度 -100～100
                        { lightness: 50 }, //明度 -100～100
                        { gamma: 1.0 },    //コントラスト 高い(<1) 低い(>1)
                    ]
                }
            ];

            var mapOptions = {
                //地図の中心地
                center: access,
                //ズーム
                zoom: 18,

                //マップの表示方法の設定
                mapTypeId: google.maps.MapTypeId.ROADMAP,

                //各種オプション設定
                panControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT
                },
            };
	
	//マップ表示
	map = new google.maps.Map(document.getElementById("map"),mapOptions);

	var marker = new google.maps.Marker({
		position:access,
		map:map,
	});

	google.maps.event.addListener(marker,'click',function(){
		var info1 = new google.maps.InfoWindow({
			content:"<h5 style='color:#000;'>BoulangerieHAL</h5><p>東京都渋谷区袁楽町29-18</p>"
		});
		info1.open(map,marker);	
	});
}
   //ページが準備できたら（ロードされたら）上に書いてある initialize関数を実行
    window.onload = initialize;

//フォーム
function cText(obj){
	if(obj.value==obj.defaultValue){
		obj.value="";
		obj.style.color="#000";
	}
}
function sText(obj){
	if(obj.value==""){
		obj.value=obj.defaultValue;
		obj.style.color="#999";
	}
}