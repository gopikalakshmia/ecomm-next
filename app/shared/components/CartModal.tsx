export default function CartModal(){
    const cart=false;
    return(
        <div className="absolute shadow-2xl bg-white p-4 rounded-md">
         {!cart && <p>Cart is Empty!!!</p>}
        </div>
    )
}