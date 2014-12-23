$(document).ready(function(){
	var $topMain = $(".top-main");
	var $topUl = $topMain.find('ul');
	var $topUlLi = $topUl.find('li');
	var $Wrap = $("#wrap");
	$topUlLi.each(function() {
		var $that = $(this);
		var $i = $that.index()+1;

		$that.on("click",function() {
			switch($i){
				case 0:
					goTop(0);
					break;
				case 1:
				     goTop();
				     break;
				case 2:
				      goTop();
				      break;
				case 3:
				     goTop();
				     break;
				case 4:
				     goTop();
				     break;
				case 5:
				     goTop();
				     break;
				case 6:
					goTop();
					break;
				case 7:
					goTop();
					break;
			}
		});

		function goTop(){
			$topUlLi.removeClass("nav-hover-a").eq($i-1).addClass("nav-hover-a")
			if($i==1){
				$topMain.stop().css('top', '0');//顶部的导航回到顶部;
				$Wrap.stop().css("top","0")
			}else{
				$topMain.stop().css('top', '-748px');//顶部的导航回到顶部;
				$Wrap.stop().animate({"top":-($i*822)+75}, "slow")
			}
		}

		





	});

	

})