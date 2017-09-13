/**
 * Created by big_nose on 2017/9/8.
 */
window.onload = function () {
    $("#container").highcharts({
        chart:{
            type: 'areaspline'
        },
        title:{
            text:null
        },
        xAxis:{
            categories:[
                '1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月'
            ],
            tickLength: 0,
            style:{
                fontSize:20,
                color:"#bfbfbf"
            }
        },
        yAxis:{
          title:{
              text:null
          },
          labels:{
              enabled:false
          }
        },
        tooltip:{
            enabled:false
        },
        legend:{
            enabled:false
        },
        credits:{
            enabled:false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.3
            },
            area:{
                marker:{
                    enabled:false
                }
            }

        },
        series:[{
            data:[8,7.6,3.5,3.8,4.2,6,7.2,3.3,4,8.1,4.2,5.3],
            color:"#2a8aff"
        }]
    });

    $(".not-show").click(function () {
        $(".popup").hide(500);
        $(".target").css("margin-top",0);
    })

};