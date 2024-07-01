
import './product_view.css'
export default function Render({prodt,cart,setcart})
{
    const AddCart=()=>{
        setcart([...cart,prodt])
    }
    const RemveCart=()=>{
        setcart(cart.filter((c)=>c.id!==prodt.id))
    }
    return(
        <div className="col-md-2 col-sm-2 gap-3" id="pView">
            <div className="Myimg">
            <img src={prodt.imageUrl} alt={prodt.name}/>
            </div>
        <div className="display-6">
            {prodt.name}
        </div>
        <p className='fs-3'>{prodt.price}$</p>
        <p className='fw-light'>{prodt.description}</p>
        {
            cart.includes(prodt)?<button type="button" onClick={RemveCart} className='btn border btn-warning'>Remove from cart</button>:
            <button type="button" onClick={AddCart} className='btn border btn-success'>Add to cart</button>
        }
        </div>
    )
}