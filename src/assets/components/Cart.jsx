import { useEffect, useState } from 'react';
import './cart.css';

export default function Cart({ cart, setcart }) {
  const [Total, setTotal] = useState(0);
  const [Quantities, setQuantities] = useState(cart.map(() => 1));

  useEffect(() => {
    setTotal(cart.reduce((sum, product, index) => sum + Quantities[index] * product.price, 0));
  }, [cart, Quantities]);

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...Quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const handleRemove = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    const newQuantities = Quantities.filter((_, i) => i !== index);
    setcart(newCart);
    setQuantities(newQuantities);
  };

  const AddCart = (product) => {
    setcart([...cart, product]);
    setQuantities([...Quantities, 1]); // Default quantity to 1 for new product
  };

  return (
    <>
      <div className="display-5">Purchase Now</div>
      <div className="row cart">
        {//dynamic rendering for each product from home using props and useState
        //thank you for watching...
        cart.map((product, index) => (
          <div className="row border my-3" key={product.id}>
            <div className="prdView d-flex">
              <div className="img m-5">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className="disc m-5">
                <h3>{product.name}</h3>
                <div className="d-flex">
                  <div className="display-6">{product.price}</div>
                  <p className="fs-3 m-1"><b>$</b></p>
                </div>
                <div className='d-flex align-item-center'>
                  <p>{product.description}</p>
                  <b>Add Quantity</b>
                  <input
                    type="number"
                    className='form-control'
                    placeholder="Enter Quantity"
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    min={1}
                    max={10}
                    value={Quantities[index]}
                  />
                </div>
                <button className="btn btn-danger mt-3" onClick={() => handleRemove(index)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
        <div className="row border total">
          <div className="d-flex justify-content-between">
            <p className="fs-3 fw-light py-1">Total Amount</p>
            <p className="fs-3 fw-light py-1">{Total}<b>$</b></p>
          </div>
        </div>
      </div>
    </>
  );
}
