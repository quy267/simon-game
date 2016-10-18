$(function() {

    //Initializing Audio
    var simon1 = new Audio('./assets/audio/simonSound1.mp3');
    var simon2 = new Audio('./assets/audio/simonSound2.mp3');
    var simon3 = new Audio('./assets/audio/simonSound3.mp3');
    var simon4 = new Audio('./assets/audio/simonSound4.mp3');

    //Button press effects
    $('.game > ul > li').on('mousedown', function() {
        if ($(this).is(':nth-child(1)')) {
            $(this).css('background-color', 'red');
            simon1.play();
        } else if ($(this).is(':nth-child(2)')) {
            $(this).css('background-color', 'yellow');
            simon2.play();
        } else if ($(this).is(':nth-child(3)')) {
            $(this).css('background-color', 'olive');
            simon3.play();
        } else {
            $(this).css('background-color', 'blue');
            simon4.play();
        }
    });
    $('.game > ul > li').on('mouseup', function() {
        if ($(this).is(':nth-child(1)')) $(this).css('background-color', 'brown');
        else if ($(this).is(':nth-child(2)')) $(this).css('background-color', 'gold');
        else if ($(this).is(':nth-child(3)')) $(this).css('background-color', 'green');
        else $(this).css('background-color', 'navy');
    });

    $('button').click(function() {
        simon4.play();
    });

});
