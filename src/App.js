
import {useState} from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import React from 'react';
import { Rating } from '@mui/material';

function App() {
    // using state function
  let [count,setCount] = useState(0);
  let [toggle,setToggle] = useState(true);
  let [toggle1,setToggle1] = useState(true);
  let [toggle2,setToggle2] = useState(true);
  let [toggle3,setToggle3] = useState(true);
  let [toggle4,setToggle4] = useState(true);
  let [toggle5,setToggle5] = useState(true);
  let [toggle6,setToggle6] = useState(true);
  let [toggle7,setToggle7] = useState(true);
  
  return <>
     {/* <!-- Calling Navbar--> */}
     <Navbar data={{count,setCount}}/>

     {/* <!-- Calling Header--> */}
     <Header/>
   
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                          
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    {/* <!-- Product price--> */}
                                    $40
                                </div>
                                <div className="text-center">
                                    {/* <!-- Product Rating--> */}
                                    <Rating name="half-rating" defaultValue={3} precision={1} />
                                </div>
                            </div>
        
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCount(++count);
                                setToggle(!toggle)
                                }}>Add to Cart</button>
                                :
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCount(--count);
                                setToggle(!toggle)
                                }}>Remove</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute"
                            style={{top: "0.5rem", right: "0.5rem"}}
                            >
                             Sale
                            </div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Gift Product</h5>
                                    {/* <!-- Product price--> */}
                                    $20
                                </div>
                                <div className="text-center">
                                    {/* <!-- Product Rating--> */}
                                    <Rating name="half-rating" defaultValue={2} precision={1} />
                                </div>
                            </div>
                         
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                toggle1? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCount(++count);
                                setToggle1(!toggle1)
                                }}>Add to Cart</button>
                                :
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCount(--count);
                                setToggle1(!toggle1)
                                }}>Remove</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute"
                            style={{top: "0.5rem", right: "0.5rem"}}
                            >
                             Sale
                            </div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Dress Product</h5>
                                    {/* <!-- Product price--> */}
                                    <span class="text-muted text-decoration-line-through p-2">$70</span>
                                    $50
                                </div>
                                <div className="text-center">
                                    {/* <!-- Product Rating--> */}
                                    <Rating name="half-rating" defaultValue={4} precision={1} />
                                </div>
                            </div>
                          
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                toggle2? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCount(++count);
                                setToggle2(!toggle2)
                                }}>Add to Cart</button>
                                :
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCount(--count);
                                setToggle2(!toggle2)
                                }}>Remove</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Dairy Product</h5>
                                    {/* <!-- Product price--> */}
                                    $20
                                </div>
                                <div className="text-center">
                                    {/* <!-- Product Rating--> */}
                                    <Rating name="half-rating" defaultValue={1} precision={1} />
                                </div>
                            </div>
                          
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                toggle3? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCount(++count);
                                setToggle3(!toggle3)
                                }}>Add to Cart</button>
                                :
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCount(--count);
                                setToggle3(!toggle3)
                                }}>Remove</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                         {/* <!-- Sale badge--> */}
                         <div className="badge bg-dark text-white position-absolute"
                            style={{top: "0.5rem", right: "0.5rem"}}
                            >
                             Sale
                            </div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Sports Product</h5>
                                    {/* <!-- Product price--> */}
                                    <span class="text-muted text-decoration-line-through p-2">$80</span>
                                      $70
                                </div>
                                <div className="text-center">
                                    {/* <!-- Product Rating--> */}
                                    <Rating name="half-rating" defaultValue={3} precision={1} />
                                </div>
                            </div>
                          
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                toggle4? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCount(++count);
                                setToggle4(!toggle4)
                                }}>Add to Cart</button>
                                :
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCount(--count);
                                setToggle4(!toggle4)
                                }}>Remove</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Book Product</h5>
                                    {/* <!-- Product price--> */}
                                    $10
                                </div>
                                <div className="text-center">
                                    {/* <!-- Product Rating--> */}
                                    <Rating name="half-rating" defaultValue={3} precision={1} />
                                </div>
                            </div>
                          
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                toggle5? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCount(++count);
                                setToggle5(!toggle5)
                                }}>Add to Cart</button>
                                :
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCount(--count);
                                setToggle5(!toggle5)
                                }}>Remove</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute"
                            style={{top: "0.5rem", right: "0.5rem"}}
                            >
                             Sale
                            </div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Cookies Product</h5>
                                    {/* <!-- Product price--> */}
                                    $25
                                </div>
                                <div className="text-center">
                                    {/* <!-- Product Rating--> */}
                                    <Rating name="half-rating" defaultValue={2} precision={1} />
                                </div>
                            </div>
                          
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                toggle6? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCount(++count);
                                setToggle6(!toggle6)
                                }}>Add to Cart</button>
                                :
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCount(--count);
                                setToggle6(!toggle6)
                                }}>Remove</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Special Product</h5>
                                    {/* <!-- Product price--> */}
                                    <span class="text-muted text-decoration-line-through p-2">$40</span>
                                    $35
                                </div>
                                <div className="text-center">
                                    {/* <!-- Product Rating--> */}
                                    <Rating name="half-rating" defaultValue={4} precision={1} />
                                </div>
                            </div>
                          
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                toggle7? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCount(++count);
                                setToggle7(!toggle7)
                                }}>Add to Cart</button>
                                :
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCount(--count);
                                setToggle7(!toggle7)
                                }}>Remove</button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
           </div>
        </section>
    </>
}

export default App;
