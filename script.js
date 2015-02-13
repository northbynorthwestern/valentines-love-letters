$(window).ready(function(){

  var letters = $('.letter');
  $(letters[0]).addClass('active');
  setButtonHeight();

  $('.forward p').click(function(){
    var active = $('.active').next();
    for (var i = letters.length - 1; i >= 0; i--) {
      $(letters[i]).removeClass('active');
    }

    if ($(active).hasClass('letter')) {
      $(active).addClass('active');
    } else {
      $(letters[0]).addClass('active');
    }

    // setButtonHeight();

  });

  $('.back p').click(function(){

    var active = $('.active').prev();
    for (var i = letters.length - 1; i >= 0; i--) {
      $(letters[i]).removeClass('active');
    }

    if ($(active).hasClass('letter')) {
      $(active).addClass('active');
    } else {
      $(letters[letters.length -1]).addClass('active');
    }

    // setButtonHeight();

  });

  function setButtonHeight() {
    var height = $('.letter-wrapper').height();
    $('div.back p').css({ top: height/2 + 'px' });
    $('div.forward p').css({ top: height/2 + 'px' });

  }

});
