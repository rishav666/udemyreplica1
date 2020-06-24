export default function addToWishlist(state=[],action){
  let {type}=action;
  if(type=='addToWishlist')
  {
    let {image}=action;
    let {price}=action;
   let {title}=action;
   let {id}=action;

    var add=true;

   state.map(x=>{
     if(x.id===id){
       add=false;
     }
   })
   if(add==true){
     var temp={'image':image,'price':price,'title':title,'id':id};
     return [...state,temp];
   }
   else{
     return state;
   }


  }
  return state;
}
