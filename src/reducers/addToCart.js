



export default function addToCart(state=[],action){
  let {type}=action;
  if(type=='addToCart')
  {

let add=true;

            let {id}=action;
            state.map(x=>{
              if(x.id===id){
                add=false;
              }
            })


            if(add){
              return [
                ...state,
                {
                  image:action.image,
                  price:action.price,
                  title:action.title,
                  id:action.id
                }
              ];
            }
              else{
                return state;
              }
            }
else if (type=='deleteitem') {

  var newstate =  state.filter(function(x) {
  	return x.id !== action.id;
  })
return newstate
}


return state;
  }
