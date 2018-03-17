class Dialog {
    constructor(message, callback) {
        this.message = message;
        this.callback = callback;
        this.dialogs = [];
    }

    addInput(label, name, type) {
        let obj = {label: label, name: name, type: type};
        this.dialogs.push(obj);
    }

    render() {
        let that = this;
        let overlayDiv = $('<div>').addClass('overlay');
        let dialogDiv = $('<div>').addClass('dialog');

        let titleP = $(`<p>${this.message}</p>`);
        dialogDiv.append(titleP);
        for (let dialog of this.dialogs) {
            let label = $(`<label>${dialog.label}</label>`);
            let input = $(`<input name="${dialog.name}" type="${dialog.type}">`);
            dialogDiv.append(label).append(input);
        }
        let okBtn = $('<button>OK</button>').on('click', function () {

            let objForCallBack = {};
            for (let input of $('.dialog input')) {
                objForCallBack[input.name] = $(input).val();
            }
            that.callback(objForCallBack);

            $(this).parent().parent().remove();
        });
        let cancelBtn = $('<button>Cancel</button>').on('click', function () {
            $(this).parent().parent().remove();
        });
        dialogDiv.append(okBtn).append(cancelBtn);
        overlayDiv.append(dialogDiv);
        $('body').append(overlayDiv);
    }
}