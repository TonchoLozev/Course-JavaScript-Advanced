function validate() {

    let userName = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyNumber = $('#companyNumber');

    let companyCheckBox = $('#company').on('change', showBoxFunc);

    let userNameRegex = /^[A-Za-z0-9]{3,20}$/;
    let passwordRegex = /^[A-Za-z0-9_]{5,15}$/;
    let emailRegex = /^.*@+.*\..*$/;
    let companyNumRegex = /^[1-9][0-9][0-9][0-9]$/;

    let submit = $('#submit');
    $(submit).on('click', function (e) {
        e.preventDefault();
        validateFunc();
    });

    function validateFunc() {
        let isValid = true;
        if (!userNameRegex.test(userName.val())) {
            $(userName).css('border', '2px solid red');
            $(userName).css('border-color', 'red');
            isValid = false;
        } else {
            $(userName).css('border', 'none');
        }

        if (!emailRegex.test(email.val())) {
            $(email).css('border', '2px solid red');
            $(email).css('border-color', 'red');
            isValid = false;
        } else {
            $(email).css('border', 'none');
        }

        if (!passwordRegex.test(password.val())) {
            $(password).css('border', '2px solid red');
            $(password).css('border-color', 'red');
            isValid = false;
        } else {
            $(password).css('border', 'none');
        }
        if (!passwordRegex.test(confirmPassword.val()) || confirmPassword.val() !== password.val()) {
            $(confirmPassword).css('border', '2px solid red');
            $(confirmPassword).css('border-color', 'red');
            isValid = false;
        } else {
            $(confirmPassword).css('border', 'none');
        }
        if ($(companyCheckBox).is(':checked')) {
            if (!companyNumRegex.test(companyNumber.val())) {
                $(companyNumber).css('border', '2px solid red');
                $(companyNumber).css('border-color', 'red');
                isValid = false;
            } else {
                $(companyNumber).css('border', 'none');
            }
        }
        if (isValid === true) {
                $('#valid').css('display', 'block');
        }else{
            $('#valid').css('display', 'none');
        }
    }

    function showBoxFunc() {
        if ($('#companyInfo').css('display') === 'block') {
            $('#companyInfo').css('display', 'none');
        } else {
            $('#companyInfo').css('display', 'block');
        }
    }
}
