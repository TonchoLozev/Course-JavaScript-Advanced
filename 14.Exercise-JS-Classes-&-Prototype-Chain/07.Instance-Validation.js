class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(cId) {
        if (!isNaN(Number(cId)) && cId.length === 6) {
            this._clientId = cId;
        } else {
            throw  new TypeError('Client ID must be a 6-digit number');
        }
    }

    get email() {
        return this._email;
    }

    set email(em) {
        let regex = /[A-Za-z0-9]+@[A-Za-z\.]+/g;
        if(regex.exec(em)){
            this._email = em;
        }else{
            throw new TypeError('Invalid e-mail')
        }
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(fName){
        if(fName.length <3 || fName.length > 20){
            throw new TypeError('First name must be between 3 and 20 characters long')
        }
        if (/[^a-zA-Z]/.test(fName)){
            throw new TypeError('First name must contain only Latin characters')
        }
        this._firstName = fName;
    }
    get lastName(){
        return this._firstName;
    }
    set lastName(lName){
        if(lName.length <3 || lName.length > 20){
            throw new TypeError('Last name must be between 3 and 20 characters long')
        }
        if (/[^a-zA-Z]/.test(lName)){
            throw new TypeError('Last name must contain only Latin characters')
        }
        this._firstName = lName;
    }
}
let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')