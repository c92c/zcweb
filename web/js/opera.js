/**
 * Created by ma on 2017/9/5.
 */


function c() {
    // this.css('background-color','white')
    // this.css('color','rgb(42,138,255)')
    window.location.href='https://www.baidu.com/'
}


var date={
    'money':'9999',
    'kw':'99',
    'wind':'999',
    'num':'99999'
}




$('#money').html(date.money);
$('#kw').html(date.kw);
$('#wind').html(date.wind);
$('#num').html(date.num);

$(function () {
$('#foot_d').click(function () {
    window.location.href="xqy.html";
})
    $('#p11').click(function () {
        $('#p11').css('background-color','white').css('color','rgb(42,138,255)');
        $('#p22').css('background-color','rgb(42,138,255)').css('color','white');
        window.location.href='xiangmu2.html'
    })

    $('#p22').click(function () {
        $('#p22').css('background-color','white').css('color','rgb(42,138,255)');
        $('#p11').css('background-color','rgb(42,138,255)').css('color','white');
        window.location.href='compare.html'
    })
    $('#p3').click(function () {
        $('#p3').css('background-color','white').css('color','rgb(42,138,255)');
        $('#p4').css('background-color','rgb(42,138,255)').css('color','white');
        window.location.href='xiangmu2.html'
    })

    $('#p4').click(function () {
        $('#p4').css('background-color','white').css('color','rgb(42,138,255)');
        $('#p3').css('background-color','rgb(42,138,255)').css('color','white');
        window.location.href='compare.html'
    })

})

// $('.datagrid-cell').style.textAlign='center'

