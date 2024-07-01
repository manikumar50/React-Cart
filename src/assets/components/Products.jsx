import Render from "./Render";

export default function products({values,cart,setcart})
{
    
    return(
        <>
            {
                values.map((prodt,key)=>(
                <Render key={key} prodt={prodt} cart={cart} setcart={setcart}/>
                ))
            }
        </>
        
    )
}