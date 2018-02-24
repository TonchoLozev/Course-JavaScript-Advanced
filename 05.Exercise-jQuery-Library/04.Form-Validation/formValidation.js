function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let company = $('#company').on('change', isChecked);
    let companyInfo = $('#companyInfo');
    let isCompanyInfoVisible = false;

    let usernameRegex = /^[A-Za-z0-9]{3,20}$/;
    let passwordRegex = /^[A-Za-z0-9_]{5,15}$/;
    let emailRegex = /.*@.*\..*/;
    let companyNumRegex = /^[1-9][0-9][0-9][0-9]$/;

    let submit = $('#submit').on('click', function (e) {
        e.preventDefault();
        checkForm();
    });

    function isChecked() {
        if (this.checked === true) {
            companyInfo.css('display', 'inline');
            isCompanyInfoVisible = true;
        } else {
            companyInfo.css('display', 'none');
            isCompanyInfoVisible = false;
        }
    }

    function checkForm() {
        let isValid = true;
        if (!usernameRegex.test(username.val())) {
            username.css('border', '2px solid red');
            isValid = false;
        } else {
            username.css('border', 'none');
        }
        if (!passwordRegex.test(password.val())) {
            password.css('border', '2px solid red');
            isValid = false;
        } else {
            password.css('border', 'none');
        }
        if (!passwordRegex.test(confirmPassword.val())) {
            confirmPassword.css('border', '2px solid red');
            isValid = false;
        } else {
            if (confirmPassword.val() !== password.val()) {
                confirmPassword.css('border', '2px solid red');
                isValid = false;
                password.css('border', '2px solid red');
                isValid = false;
            } else {
                confirmPassword.css('border', 'none');
            }
        }

        if (!emailRegex.test(email.val())) {
            email.css('border', '2px solid red');
            isValid = false;
        } else {
            email.css('border', 'none');
        }
        if (isCompanyInfoVisible === true) {
            let companyNumber = $('#companyNumber');
            if (!companyNumRegex.test(companyNumber.val())) {
                isValid = false;
                companyNumber.css('border', '2px solid red');
            } else {
                companyNumber.css('border', 'none');
            }
        }
        if (isValid === true) {
            $('#valid').css('display', 'inline');
        }else{
            $('#valid').css('display', 'none');
        }
    }
}

