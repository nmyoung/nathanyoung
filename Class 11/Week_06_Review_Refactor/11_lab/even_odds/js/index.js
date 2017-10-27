$(document).ready(function() {
    $('input').click(function() {
        var playerA = Number($('input[name=playerA]:checked').val());
        var playerB = Number($('input[name=playerB]:checked').val());

        if (playerA && playerB) {
            var total = playerA + playerB;
            console.log(total);
            if(total == "3") {
               $('body').css("background-color", "black");
            }
        }
    })
});


