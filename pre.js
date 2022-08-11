if (window.innerWidth&&window.innerWidth<=480) {

  $(document).ready(function(){ // 여기서 html이 준비된 후에 자바 스크립트가 실행되도록 한다//
    $('#utility ul').addClass('hide');
    //$('header').append('<div #>')//
  });

  functiontoHome() {
    $('#utility ul').toggleClass('hide');
    $('#home').toggleClass('pressed');
  }

  functionsH() {
    $('#koo').text('wellcome');
  }

}
