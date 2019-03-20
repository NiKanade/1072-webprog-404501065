$(document).ready(function(){
    let turn = 0; //


    $('#board li').on('click',function(){
        if($(this).hasClass('disable')){
            alert('Already filled');
        }else if(turn%2==0){
            $(this).text('O');
            $(this).addClass('o');
            $(this).addClass('disable');
            turn++;
        }else{
            $(this).text('X');
            $(this).addClass('x');
            $(this).addClass('disable');
            turn++;
        }
        
    })

    $.fn.reset = function(){
        $('#board li').text('+');
        $('#board li').removeClass('x');
        $('#board li').removeClass('o');
        $('#board li').removeClass('disable');
        turn=0;
    }

    $('#reset').on('click',function(){
        $.fn.reset();
    })
})