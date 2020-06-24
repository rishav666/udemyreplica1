export function addToCart(image,price,title,id){
  return {type:'addToCart',image,price,title,id}
}
export function deleteitem(id){
  return {type:'deleteitem',id}
}
