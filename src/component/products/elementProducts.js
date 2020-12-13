import styled from "styled-components";
export const ProductContainer = styled.div`

min-height:100vh;
padding:5rem calc((100px-1300px)/2);
background:#150f0f;
color:#fff;
`;
export const ProductWrapper = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
margin:0 auto;
`;
export const ProductCard = styled.div`
margin:0 2rem;
line-height:2;
width: 260px;
`;
export const ProductImg = styled.img`
max-width:100%;
box-shadow:8px 8px #fdc500;
height: 250px;
min-width: 250px;
position:relative;
&::after{
    position:absolute;
    content:" ";
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#fdc500;
    
}

`;
export const ProductHeading = styled.h1`
font-size:clamp(2rem,2.5vw,3rem);
text-align:center;
margin-bottom:5rem;
`;
export const ProductTitle = styled.h2`
font-weight:400;
font-size:1.5rem;
`;
export const ProductInfo = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:2rem;
text-align:center;
`;
export const ProductDesc = styled.p`
margin-bottom:1rem;
`;
export const ProductPrice = styled.p`
margin-bottom:1rem;
font-size:2rem;
`;
export const ProductButton = styled.button`
font-size:1rem;
padding: .7rem 2rem;
border:none;
background:#e31837;
color:#fff;
transition:0.2 ease-out;

&:hover{
    background:#ffc500;
    transition:0.2s ease-out;
    cursor: pointer;
    color:#000;
}
`;



