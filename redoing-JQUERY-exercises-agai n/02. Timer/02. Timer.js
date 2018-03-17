function timer() {
    let timer = $('#timer');
    $('#start-timer').on('click', startTimer);
    $('#stop-timer').on('click', stopTimer);
    let seconds = 0;
    let startBtnClicked = 0;
    let time;

    function startTimer() {
        startBtnClicked ++;
        if(startBtnClicked > 1){
            return;
        }
        time = setInterval(function () {
            seconds++;
            let hours = Math.floor(seconds/ 3600);
            let minutes = Math.floor(seconds / 60);
            let second = Math.floor(seconds % 60);
            if(minutes>=60){
                minutes = minutes % 60;
            }
            if (second < 10) {
                second = '0' + second;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (hours < 10) {
                hours = '0' + hours;
            }
            $('#seconds').text(second);
            $('#minutes').text(minutes);
            $('#hours').text(hours);


        }, 1000);

    }

    function stopTimer() {
        clearInterval(time);
        startBtnClicked = 0;
    }
}