import React from 'react';
import {
    ProductContainer,
    ProductHeading,
    ProductCard,
    ProductImg,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton,
    ProductInfo,
    ProductWrapper
} from "./elementProducts";

function Products({data,heading}) {
    return (
        <ProductContainer>
            <ProductHeading>
               { heading}
            </ProductHeading>
            <ProductWrapper>
                {
                    data.map((product,index)=>{
                        return(
                            <ProductCard key={index}>
                                <ProductImg src={product.img} alt={product.alt} />
                                <ProductInfo>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductDesc>{product.desc}</ProductDesc>
                        <ProductPrice>{product.price}</ProductPrice>
                        <ProductButton>{product.button}</ProductButton>
                                </ProductInfo>
                                
                            </ProductCard>
                        )
                    })
                }
            </ProductWrapper>
        </ProductContainer>
    )
}

export default Products
