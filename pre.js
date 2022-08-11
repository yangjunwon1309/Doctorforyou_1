if (window.innerWidth) {

  $(document).ready(function(){ // 여기서 html이 준비된 후에 자바 스크립트가 실행되도록 한다//
    $('#utility ul').addClass('hide');
    $('#header').append('<div id="home" onClick="toHome()"> home </div>');
  });

  function toHome() {
    $('#utility ul').toggleClass('hide');
    $('#home').toggleClass('pressed');
  }

  function sH() {
    $('#koo').text('wellcome');
  }

}
