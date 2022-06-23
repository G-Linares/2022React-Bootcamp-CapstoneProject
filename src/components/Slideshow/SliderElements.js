import styled from "styled-components";

export const Titulo = styled.p` 
  text-transform: capitalize;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 35px;
  color: #323232;
 font-family: sans-serif;
 margin-bottom:2rem;
 &::after{
  display: inline-block;
  content: "";
  height: 1px;
  background: rgba(50, 50, 50, 0.2);
  position: relative;
  top:-33px;
  width: 100%;
  left:370px;
  margin-top: -2px;
  margin-left: 10px;
 }
`;

export const SlideContainer = styled.div`
  margin-top: 7rem;
  width: 100%;
  overflow: hidden;
  align-self: center;
  display: flex;
  justify-content:center;
  margin-bottom: 7rem;
`;
export const SliderWrapper = styled.div`
  width:1000px;
  height: 590px;
  overflow: hidden;
`;