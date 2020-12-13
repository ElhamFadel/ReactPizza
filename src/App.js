
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyle} from "./globalStyle";
import Hero from "./component/Hero";
import { productData, productData2} from "./component/products/data";
import Products from "./component/products";
import Feature from "./component/Feature";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Router>
    <GlobalStyle />
     <Hero />
     <Products heading="Choose your favorite" data={productData} />
     <Feature />
     <Products heading="Sweets Treats for you " data={productData2} />
     <Footer />
     </Router>
    </div>
  );
}

export default App;
