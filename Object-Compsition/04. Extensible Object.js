function objExtension() {
    let obj = {};
     obj = Object.create(obj);
     obj.extend = function (template) {
         for(let key in template){
             if(typeof template[key] === "function"){
                 obj.__proto__[key] = template[key]
             }else{
                obj[key] = template[key]
             }
         }
     };
     return obj;
}
let template = {
    extensionMethod: function (){
        console.log('asdsa');
    },
    extensionProperty: 'someString'
};
let object = objExtension();
object.extend(template);
