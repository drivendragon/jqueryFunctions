//.hide
$('button.pressAddClass').click(function(){
    $('h5#red').css("color", "red");
    $('h6#hide').hide();
});


//.slideToggle
$('button.pressSlideToggle').click(function() {
    $("h5#slideToggle").slideToggle();
    $('p').show();
});

//.append
$('button.pressAppend').click(function() {
    $("h5#append").append("<p>This has been appended after clicking the Button.</p>");
});

//.toggle
$( "#clickmeToggle").click(function() {
    $("#bookToggle").toggle( "slow", function() {
      // Animation complete.
    });
  });

  /* slide down
  $( "#clickmeSlide").click(function() {
    $( "#bookSlide" ).slideDown( "slow", function() {
      // Animation complete.
    });
  });
*/

//.slideUp
$( "#clickmeSlideUp" ).click(function() {
    $( "#book" ).slideUp( "slow", function() {
      // Animation complete.
    });
  });

 /* fade in
  $("#clickmeFade").click(function() {
    $( "div:hidden" ).first().fadeIn( "slow" );
  });
*/

//.fadeOut
$( "#clickmeFadeOut" ).click(function() {
    $( "#book" ).fadeOut( "slow", function() {
      // Animation complete.
    });
  });
  
//.before
$( "p" ).before( $( "b" ) );


//.after
$( "p" ).after( "<b>You are beautiful!</b>" );

//.html
$( "div.demo-container" ).html(function() {
    var emphasis = "<em>" + $( "p" ).length + " paragraphs!</em>";
    return "<p>All new content for " + emphasis + "</p>";
  });

  // .attr


  //.val
  $( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p.valExample" ).text( value );
  })
  .keyup();


  //.text
  var str = $( "p.textExample" ).first().text();
$( "p.textExample" ).last().html( str );