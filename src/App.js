import {useEffect, useState} from "react";

import ProductCard from './ProductCard';

import './App.css';
import appLogo from './icon.svg'
import freeDelivery from './free-delivery.svg';
import support from './support247.svg';
import authentic from './authentic.svg';

const API_URL = 'https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=8'

const App = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async() => {
        const response  = await fetch(`${API_URL}`);
        const data = await response.json();

        setProducts(data.data.products);
    }

    useEffect(() => {
        getProducts();
    }, []);
            <div className="hero-content">

            </div>
    return (
        <div className="app">
            

            <header className="header">
                <div className="header-inner">
                    <img src={appLogo} alt="Logo" />
                </div>
            </header>

            <div className="hero">
                <div className="hero-content">
                    <div className="hero-content-inner">
                        <p className="hero-content-text mb-3">New Arrivals</p>
                        <h1 className="hero-content-heading mb-3">Discover Our <br></br> New Collection</h1>
                        <p className="hero-content-text mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis.
                        </p>

                        <button className="hero-content-button">BUY NOW</button>
                    </div>
                </div>
            </div>

            <div className="features">

                <div className="feature">
                    <div className="feature">
                        <img src={freeDelivery} alt="Free-Delivery"/>
                    </div>
                    <div>
                        <h2>Free-Delivery</h2>
                        <p>Lorem Ipsum dolor sit amet</p>
                    </div>
                </div>

                <div className="feature">
                    <div>
                        <img src={support} alt="Free-Delivery"/>
                    </div>
                    <div>
                        <h2>Support 24/7</h2>
                        <p>Lorem Ipsum dolor sit amet</p>
                    </div>
                </div>

                <div className="feature">
                    <div className="p-2">
                        <img src={authentic} alt="Free-Delivery"/>
                    </div>
                    <div>
                        <h2>100% Authentic</h2>
                        <p>Lorem Ipsum dolor sit amet</p>
                    </div>
                </div>

            </div>

            <div className="products">

                {products.map((product) => {
                    return (
                        <ProductCard product={product}/>
                    )
                })}


            </div>
        </div>
    );
}

export default App;
