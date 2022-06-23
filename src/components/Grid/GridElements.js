import styled from "styled-components";
import { Link } from "react-router-dom";

export const GridContainer = styled.section`
  height: 100%;
  background: #e4e4ef;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 80%;
  height: 100%;
  justify-content: center;
`;

export const Gridcontent = styled.h1`
  font-size: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ProductContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: sans-serif;
  border: solid 1px rgba(0, 0, 0, 0.1);
  padding: 15px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;
  color:#fff;
`;
export const ProductName = styled.p`
  font-size: 20px;
  font-weight:bold;
  position: relative;
  top:0px;
  left:30px;
`;

export const ProductImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  position: relative;
  top: 10px;
  z-index: 1000;
`;
export const ProductCategory = styled.p`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
`;

export const ProductPrice = styled.p`
  font-size: 20px;
  position: relative;
  left:30px;
  color:#B7D6F7;
  font-weight:bold;
  bottom:67px;
`;
export const BuyButton = styled.a`
  font-size: 17px;
  position: relative;
  left:10px;
  color:#D7E9FE;
  bottom:110px;
  padding:5px;
  border-radius:10px;
  cursor:pointer;
  border: #D7E9FE 1px solid;
`;

export const MoreButton = styled(Link)`
  border: #000 1px solid;
  padding: 10px;
  border-radius:5px;
  cursor:pointer;
  margin-bottom:3rem;
  text-decoration:none;
  font-family:sans-serif;
  font-weight:700;
  text-transform:none;
  color:#000;
`
