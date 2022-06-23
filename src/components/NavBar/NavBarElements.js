import { FaBars, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #84BCF3;
  height: 80px;
  display: flex;
  justify-content: space-around;
  width:100%;
  z-index: 10;
  position:fixed;
  top:0;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content:center;
  width:300px;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  width:300px;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 5px;
    right:0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
display:flex;
  align-items: center;
  justify-content:center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SearchBar = styled.input` 
  width:400px;
  height:20px;
  float: left;
  border: 1px solid #D7E9FE;
  padding-left: 15px;
  border-radius: 25px;
  outline: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SearchIcon = styled(FaSearch)`
  color: #201E45;
  font-size:1rem;
  position:relative;
  right:30px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content:center;
  width:300px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(FaShoppingCart)`
  color: #201E45;
  background-color:#D7E9FE;
 padding:5px;
 margin:0;
  border-radius:10px;
  font-size:1.6rem;
`;