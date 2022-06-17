import React from "react";
import {
  GridContainer,
  GridWrapper,
  Gridcontent,
  ProductContainer,
  ProductName,
  ProductImage,
  ProductCategory,
  ProductPrice,
  BuyButton,
} from "./GridElements";

const Grid = ({ products }) => {
  const displayedAmount = 9;
  return (
    <GridContainer>
      <GridWrapper>
        <h1
          style={{
            fontFamily: "sans-serif",
            fontSize: "50px",
            textAlign: "center"
          }}
        >
          {" "}
          Featured Products
        </h1>
        <Gridcontent>
          {products.slice(0, displayedAmount).map((product, index) => {
            return (
              <ProductContainer key={new Date() + index}>
                <ProductCategory> {product.data.category.slug}</ProductCategory>
                <ProductImage
                  src={product.data.images[0].image.url}
                  alt="product picture"
                />
                <ProductName>
                  {product.data.name.length < 20
                    ? product.data.name
                    : product.data.name.slice(0,20) + "..." }
                </ProductName>
                <ProductPrice>${product.data.price.toLocaleString('en') } </ProductPrice>
                  <BuyButton> Buy Here</BuyButton>
              </ProductContainer>
            );
          })}
        </Gridcontent>
      </GridWrapper>
    </GridContainer>
  );
};

export default Grid;
