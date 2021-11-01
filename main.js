
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


// CHART JS

const red = 'rgba(255, 99, 132, 0.2)'

const ctx = $('#myChart');

// SIMULAÇÃO DE API
const arrayNumber = [];

// GERA NUMEROS ALEATORIOS E ADD NO ARRAY DE VALORES
function getRandomInt(min, max) {

    for (let index = 0; index < 5; index++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        arrayNumber.push(Math.floor(Math.random() * (max - min)) + min)
        
    }
    console.log(arrayNumber)
    return arrayNumber;
    

  }



const value = getRandomInt(1,20)


// Função para ordenar em ordem descrecente
value.sort(function(a,b){
    if(a >b) return -1;

    if (a<b) return 1;

    return 0;
});

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Produto danificado', 'NF incorreta', 'Pedido incorreto', 'Entrega atrasada', 'Estabelecimento fechado'],
        datasets: [{
            label: 'Números de ocorrência',
            data: value,
            backgroundColor: [
                red,
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        align: 'start',
        display: 'false',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

