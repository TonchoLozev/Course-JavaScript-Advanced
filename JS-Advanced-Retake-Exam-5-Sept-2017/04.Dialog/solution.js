class Dialog {
    constructor(message, callback) {
        this.message = message;
        this.callback = callback;
        this.array = [];
        this.element = null;
    }

    addInput(label, name, type) {
        this.array.push({label, name, type});
    }

    render() {
        this.element = $('<div class="overlay">');
        let dialog = $('<div class="dialog">');
        dialog.append(`<p>${this.message}</p>`);
        for (let obj of this.array) {
            dialog.append(`<label>${obj.label}</label>`);
            dialog.append(`<input name="${obj.name}" type="${obj.type}">`)
        }
        dialog.append($('<button>OK</button>').on('click', this._okay.bind(this)));
        dialog.append($('<button>Cancel</button>').on('click', this._cancel.bind(this)));
        this.element.append(dialog);
        $('body').append(this.element);
    }

    _cancel(){
        $(this.element).remove();
    }
    _okay(){
        let obj = {};
        let inputs = $(this.element).find('input').toArray();
        inputs.forEach(i => obj[$(i).attr('name')] = $(i).val());
        this.callback(obj);
        this._cancel();
    }
}