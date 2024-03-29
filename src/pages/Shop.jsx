import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";

const Shop = () => {
 const [productsData, setProductsData] = useState(products);
 //  filtering
 const handleFitler = (e) => {
  const filterValue = e.target.value;
  if (filterValue === "stickers") {
   const filteredProducts = products.filter(
    (item) => item.category === "stickers"
   );
   setProductsData(filteredProducts);
  }
  if (filterValue === "figures") {
   const filteredProducts = products.filter(
    (item) => item.category === "figures"
   );
   setProductsData(filteredProducts);
  }
  if (filterValue === "posters") {
   const filteredProducts = products.filter(
    (item) => item.category === "posters"
   );
   setProductsData(filteredProducts);
  }
  if (filterValue === "Fitler By Category") {
   setProductsData(products);
  }
  //
  if (filterValue === "ascending") {
   const filteredProducts = [...productsData].sort((a, b) =>
    a.productName.localeCompare(b.productName)
   );
   setProductsData(filteredProducts);
  }

  if (filterValue === "descending") {
   const filteredProducts = [...productsData].sort((a, b) =>
    b.productName.localeCompare(a.productName)
   );
   setProductsData(filteredProducts);
  }

  //
  if (filterValue === "price-ascending") {
   const filteredProducts = [...productsData].sort((a, b) => a.price - b.price);
   setProductsData(filteredProducts);
  }

  if (filterValue === "price-descending") {
   const filteredProducts = [...productsData].sort((a, b) => b.price - a.price);
   setProductsData(filteredProducts);
  }
 };

 //  search
 const handleSearch = (e) => {
  const searchTerm = e.target.value;

  const searchedProducts = products.filter((item) =>
   item.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setProductsData(searchedProducts);
 };
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);
 return (
  <Helmet title="Shop">
   <CommonSection title={"Products"} />
   <div className="product-page">
    <Container>
     <Row>
      <Col lg="3" sm="12" className="filter-widget">
       <select onChange={handleFitler}>
        <option>Fitler By Category</option>
        <option value="stickers">Stickers</option>
        <option value="figures">Figures</option>
        <option value="posters">Posters</option>
       </select>
      </Col>
      <Col lg="3">
       <div className="filter-widget">
        <select onChange={handleFitler}>
         <option>Fitler By</option>
         <option value="ascending">Name Ascending</option>
         <option value="descending">Name Descending</option>
         <option value="price-ascending">Price Ascending</option>
         <option value="price-descending">Price Descending</option>
        </select>
       </div>
      </Col>
      <Col lg="3" md="3">
       <div className="search-box">
        <input type="text" placeholder="Search..." onChange={handleSearch} />
        <span>
         <i className="fas fa-search"></i>
        </span>
       </div>
      </Col>
     </Row>
    </Container>
   </div>
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
 );
};

export default Shop;
