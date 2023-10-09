import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import { useSelector } from "react-redux";

function Favorites() {

  // 
  const favoriteItems = useSelector((state) => state.cart.favoriteItems);
  const [productsData, setProductsData] = useState(favoriteItems);
  //  filtering
 
  useEffect(() => {
   window.scrollTo(0, 0);
  }, []);
  // 
  return (
    <Helmet title='Favorites'>
        <CommonSection title='Favorites'/>
   <section>
    <Container>
     {productsData.length === 0 ? (
      <h1 className="text-center no-items">No Products Are Found !</h1>
     ) : (
      <ProductList data={productsData} />
     )}
    </Container>
   </section>
    </Helmet>
  )
}

export default Favorites