$(function() {

    //Initializing Audio
    var simon1 = new Audio('./assets/audio/simonSound1.mp3');
    var simon2 = new Audio('./assets/audio/simonSound2.mp3');
    var simon3 = new Audio('./assets/audio/simonSound3.mp3');
    var simon4 = new Audio('./assets/audio/simonSound4.mp3');

    //Initializing Game object
    var gameObj = {
        gameArr: [],
        inputArr: [],
        mode: 'normal',
        level: 0,
        record: false,
        init: function(mode) {
            $('button').prop('disabled', true);
            setTimeout(function() {
                $('button').prop('disabled', false);
            }, 3000);
            this.mode = mode;
            this.level = 0;
            this.gameArr = [];
            this.inputArr = [];
            this.play();
        },
        play: function(repeat) {
            this.record = false;
            if (this.level < 5 || repeat) {
                if (!repeat) {
                    this.level++;
                    $('.level').text("Level " + this.level);
                    this.gameArr.push(rand(1, 4));
                    $('.msg').text("Playing Sequence...");
                }
                this.gameArr.forEach(function(e, i, a) {
                    setTimeout(function() {
                        $('.game > ul > li:nth-child(' + e + ')').trigger("mousedown");
                        console.log(e);
                        setTimeout(function() {
                            $('.game > ul > li:nth-child(' + e + ')').trigger("mouseup");
                            if (i === a.length - 1) {
                                console.log("Record");
                                $('.msg').text("Listening for Playback...");
                                gameObj.record = true;
                            }
                        }, 500);
                    }, (i + 1) * 1500);

                });
            } else {
                $('.msg').text("You Win ! Well Done !!");
            }
        },
        chkInput: function(n) {
            this.inputArr.push(n);
            if (this.inputArr.toString() === this.gameArr.toString()) {
                console.log("well done! moving on...");
                this.inputArr = [];
                this.play();
            } else if (n !== this.gameArr[this.inputArr.length - 1]) {
                console.log('That was a mistake!');
                if (this.mode == 'normal') {
                    $('.msg').text("Mistake! Replaying Sequence...");
                    this.inputArr = [];
                    this.record = false;
                    this.play(true);
                } else if (this.mode == 'strict') {
                    console.log('You lose!');
                    $('.msg').text("Sorry ! You Lose !!");
                }
            }
        }
    };

    //Button press effects
    $('.game > ul > li').on('mousedown', function() {
        if (1 == 1) {
            if ($(this).is(':nth-child(1)')) {
                $(this).css('background-color', 'red');
                simon1.pause();
                simon1.currentTime = 0;
                simon1.play();
            } else if ($(this).is(':nth-child(2)')) {
                $(this).css('background-color', 'yellow');
                simon2.pause();
                simon2.currentTime = 0;
                simon2.play();
            } else if ($(this).is(':nth-child(3)')) {
                $(this).css('background-color', 'olive');
                simon3.pause();
                simon3.currentTime = 0;
                simon3.play();
            } else {
                $(this).css('background-color', 'blue');
                simon4.pause();
                simon4.currentTime = 0;
                simon4.play();
            }
        }
    });
    $('.game > ul > li').on('mouseup', function() {
        if ($(this).is(':nth-child(1)')) $(this).css('background-color', 'brown');
        else if ($(this).is(':nth-child(2)')) $(this).css('background-color', 'gold');
        else if ($(this).is(':nth-child(3)')) $(this).css('background-color', 'green');
        else $(this).css('background-color', 'navy');
        if (gameObj.record) {
            console.log($(this).index() + 1);
            gameObj.chkInput($(this).index() + 1);
        }
    });


    //Get a random integer between and including min and max.
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $('button.normal').on('click', function() {
        $(this).text('Restart Normal');
        gameObj.init('normal');
    });

    $('button.strict').on('click', function() {
        $(this).text('Restart Strict');
        gameObj.init('strict');
    });


});
