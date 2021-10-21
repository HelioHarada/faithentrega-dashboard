
// ### SLICK SLIDER ###

$(window).resize(function(){
    $('.fs-slider')[0].slick.refresh();
  });



$(document).ready(function(){
    $('.fs-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    infinite: true,
    speed: 300,
    mobileFirst:true,//add this one


    });
  });

  if($(window).width() < 600){

 
$('.fs-slider').slick({
    mobileFirst:true,
    responsive: [
        {
            breakpoint: 12024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 360,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },

        

        ]
})

$('.fs-slider')[0].slick.refresh();
}


// ### DATATABLE.JS

$(document).ready( function () {
    $('#table_id').DataTable();
 
} );


// TOGGLE MAP

$('.btn-detalhes').click(function() {
    $('.map-container').hide(1);
    $('#container-detalhes').show(1);
    
    
});


$( "#back-map" ).click(function() {
    $('#container-detalhes').hide(1);
    $('.map-container').show(1);

});
