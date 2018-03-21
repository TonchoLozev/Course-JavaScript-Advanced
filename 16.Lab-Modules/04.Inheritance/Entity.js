class Entity{
    constructor(name){
        if(this.constructor === Entity){
            throw new Error('This is an abstract class');
        }
        this.name = name;
    }
}
module.exports = Entity;