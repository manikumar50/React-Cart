import Products from './Products';
import Datas from '../sample Data/Myproducts.json'
export default function Home({cart,setcart})
{
    return(
       <>
       <div className="row my-4">
        <div className="col-12 d-flex justify-content-center">
            <div className="display-6">
                IOS Smart devices
            </div>
        </div>
       </div>
       <div className="row gap-4 justify-content-center">
        <Products values={Datas} cart={cart} setcart={setcart}/>
       </div>
       </>   
    )
}