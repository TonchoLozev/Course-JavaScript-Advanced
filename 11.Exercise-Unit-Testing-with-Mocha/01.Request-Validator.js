function result(obj) {

    if (!obj.hasOwnProperty('method') || obj.method !== 'GET' && obj.method !== 'POST' &&
        obj.method !== 'DELETE' && obj.method !== 'CONNECT') {
        throw new Error('Invalid request header: Invalid Method')
    }
    let uriRegex = /^(\*|[a-zA-Z0-9\.]+)$/g;
    if (!obj.hasOwnProperty('uri') || !uriRegex.exec(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI')
    }
    if (!obj.hasOwnProperty('version') || obj.version !== 'HTTP/0.9' && obj.version !== 'HTTP/1.0' &&
        obj.version !== 'HTTP/1.1' && obj.version !== 'HTTP/2.0') {
        throw new Error('Invalid request header: Invalid Version')
    }
    let msgRegex = /^([^\<\>\\\&\'\"]*)$/g;
    if (!obj.hasOwnProperty('message') || !obj.message.match(msgRegex)) {
        throw new Error('Invalid request header: Invalid Message')
    }
    return obj;
}
let obj = result({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'qwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^*()-=_+[]{};:|,./? '
});
result(obj);