const initial={
    things:[],
    name:'ali'
};

const reducer=(state=initial,action)=>{
    switch(action.type){
        case "ADD":
        return {...state,things:action.Payload};
        break;
        case "DELETE":
       // console.log(action.Payload.splice(action.index,1));
        return{
           ...state, things: action.Payload.slice(0,action.index).concat(action.Payload.slice(action.index+1))
           
        };
        break;
        case "EDIT":
        return{
            ...state,things:action.Payload.slice(0,action.index).concat(action.item,action.Payload.slice(action.index+1))
        }
        default:
    return state;
    }
    
}

export default reducer;