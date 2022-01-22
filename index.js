$(document).ready(function(){

  var $arrImg = [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
  ]

var $checkInterval;
  $('.c-button-play').click(function(){
    $('.c-button-play').addClass('is-disable');
    $('.c-item--img').addClass('is-disable');
    $('.c-button-pause').removeClass('is-disable');
    if(!$checkInterval){
        $checkInterval = setInterval(function(){
            $('.c-item img').each(function() {
                var $random_index = Math.floor(Math.random() * $arrImg.length);
                $selectedImg = $arrImg[$random_index];
                $imgSrc = './img/'+$selectedImg;
                $(this).attr('src',$imgSrc);
            });
        },0)
    }
  })

  $('.c-button-pause').click(function(){
    $('.c-button-play').removeClass('is-disable');
    $('.c-item--img').removeClass('is-disable');
    $('.c-button-pause').addClass('is-disable');
    clearInterval($checkInterval); 
    $checkInterval = null;
  })

});
