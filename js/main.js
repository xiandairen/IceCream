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
					goTop();
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
			$topUlLi.removeClass("nav-hover-a").eq($i-1).addClass("nav-hover-a");
			if($i == 1){
				$topMain.removeClass("top-main-pis");
				$(window).scrollTop(0)
			}else{
				$topMain.addClass("top-main-pis");
				switch ($i){
					case 2:
						$(window).scrollTop(800);
						break;
					case 3:
						$(window).scrollTop(1622);
						break;
					case 4:
						$(window).scrollTop(2445);
						break;
					case 5:
						$(window).scrollTop(3270);
						break;
					case 6:
						$(window).scrollTop(4090);
						break;
					case 7:
						$(window).scrollTop(4910);
						break;
				}
			}
		}

		$(window).scroll(function() {
			var $topVal= $(window).scrollTop();
			console.log($topVal)
			if($topVal>740 && $topVal<753 || $topVal>753){
				$topMain.addClass("top-main-pis");
				$("#goUp").show();
			}else if($topVal == 0){
				$topMain.removeClass("top-main-pis");
				$("#goUp").hide();
			}

		});

		//回到顶部
		$("#goUp").click(function(){
			$topMain.removeClass("top-main-pis");
			$(window).scrollTop(0);

		})
		





	});

	

})