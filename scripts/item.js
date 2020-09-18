

function validateName(name){
    if(name === ''){
        throw new TypeError("Name must not be blank");
    }
}
function create(name){
    let obj = {
        id : cuid(),
        name : name,
        checked : false
    }
    return obj;
}

export default{
validateName,
create
}