function timer() {
    let btnStart = $('#start-timer').on('click', startTimer);
    let btnStop = $('#stop-timer').on('click', stopTimer);
    let timer;
    let secondsTimer = 0;
    let startBtnClickedTimes = 0;
    function startTimer() {
        startBtnClickedTimes++;
        if(startBtnClickedTimes>1){
            return;
        }
        timer = setInterval(() => {
            secondsTimer++;
            let hours = Math.floor(secondsTimer / 3600);
            let minutes = Math.floor(secondsTimer / 60);
            let seconds = Math.floor(secondsTimer % 60);
            if (minutes >= 60) {
                minutes %= 60;
            }
            if (hours < 10) {
                hours = '0' + hours;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            $('#hours').text(hours);
            $('#minutes').text(minutes);
            $('#seconds').text(seconds);

        }, 1000)//
    }

    function stopTimer() {
        startBtnClickedTimes = 0;
        clearInterval(timer);
    }
}