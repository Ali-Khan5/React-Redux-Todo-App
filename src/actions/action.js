export function ADD(value){
    return{
        type:'ADD',
        Payload:value
    }
}
export function Delete(value,index){
    return{
        type:'DELETE',
        Payload:value,
        index
    }
}
export function EDIT(value,index,item){
    return{
        type:'EDIT',
        Payload:value,
        index,
        item
    }
}

