import styled from "styled-components";

export const CardSliderContainer = styled.div`
    width:100%;
    height:400px;
    font-family:sans-serif;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const CardSliderWrapper = styled.div`
    width:1000px;

`

export const CardSliderTitle = styled.h3`
    font-weight: bold;
    font-size: 35px;
    color: #323232;
    &::after{
  display: inline-block;
  content: "";
  height: 1px;
  background: rgba(50, 50, 50, 0.2);
  position: relative;
  top:-8px;
  width: 64%;
  left:10px;
  margin-top: -2px;
  margin-left: 10px;
 }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;

`

export const CardImage = styled.img`
    width:270px;
    height:auto;
`