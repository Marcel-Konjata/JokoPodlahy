$('#left_showcase').change(function(){
    if($(this).is(":checked")) {
        $('.showcase_cards').addClass("left-animate");
    } else {
        $('.showcase_cards').removeClass("left-animate");
    }
});
$('#right_showcase').change(function(){
    if($(this).is(":checked")) {
        $('.showcase_cards').addClass("right-animate");
    } else {
        $('.showcase_cards').removeClass("right-animate");
    }
});

$.scrollify({
    section : ".example-classname",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: ".contact",
    setHeights: false,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });

  $(function() {
    $.scrollify({
      section : ".panel",
      before: function(section){
          if(section===1){
              $(".about").removeClass("hidden");
          }
          if(section===2){
              $(".offer").removeClass("hidden");
          }
          if(section===3){
              $(".showcase").removeClass("hidden");
          }
          if(section===4){
              $(".contact").removeClass("hidden");
          }
    }
    });
  });

  $('.scroll-to').click(function(){
    var moveTo = $(this).attr('href');
    $.scrollify.move(moveTo);
  });