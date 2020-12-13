import styled from "styled-components";
import {Feature3} from "../../images";
export const FeatureContainer = styled.div`
background:linear-gradient(to right ,rgba(0,0,0,.7),rgba(0,0,0,0.1)),url(${Feature3});
height:100vh;
max-height:500px;
display:flex;
justify-content:center;
align-items:center;
background-position:center;
padding:0 1rem;
text-align:center;
color:#fff;
flex-direction:column;
background-size:cover;
h1{
    font-size:clamp(3rem,5vw,5rem);

}
p{
    margin-bottom:1rem;
    font-size:clamp(1rem,3vw,2rem);
}


`;
export const FeatureButton = styled.button`
padding:.6rem 3rem;
font-size:1.4rem;
border:none;
background:#ffc500;
color:#000;
transition:0.2s ease-out;
&:hover{
    color:#fff;
    background:#e31837;
    transition:0.2s ease-out;
    cursor: pointer;
}
`;

