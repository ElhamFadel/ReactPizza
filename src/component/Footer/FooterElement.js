import styled from "styled-components";
import {Link} from "react-router-dom";
export const FooterContainer = styled.div`
background:#0d0909;

`;
export const FooterWraper = styled.div`
display:flex;
flex-direction:column;
padding:16px 24px;
justify-content:center;
flex-direction:column;
max-width:1300px;
margin :0 auto;
align-items:center;
`;
export const SocialMedia = styled.section`
max-width:1300px;
width:100%;
`;
export const SocialMediaWraper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
max-width:1100px;
margin:16px auto 0 auto;
@media screen and (max-width:820px){
    flex-direction:column;
}
`;
export const SocialLogo = styled(Link)`
color:#fff;
justify-self:start;
cursor: pointer;
text-decoration:none;
font-size:1.5rem;
text-decoration:none;
font-weight:bold;
margin-bottom:16px;
align-items:center;
display:flex;


`;
export const SocialIcons = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:240px;

`;
export const SocialIconLink = styled.a`
color:#fff;
font-size:24px;
`;
