import Article from "./components/Article/Article";
import Banner_Black from "./components/Banner_Black/Banner_Black";
import Banner_Kitchen from "./components/Banner_Kitchen/Banner_Kitchen";
import Banner_Recipe from "./components/Banner_Recipe/Banner_Recipe";
import Card from "./components/Card/Card";
import Category from "./components/Category/Category";
import Copyright from "./components/Copyright/Copyright";
import Event from "./components/Event/Event";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import NavBar from "./components/NavBar/NavBar";
import Products_Bestseller from "./components/Products_Bestseller/Products_Bestseller";
import Products_Hotdeals from "./components/Products_Hotdeals/Products_Hotdeals";
import Products_HotdealsMore from "./components/Products_HotdealsMore/Products_HotdealsMore";
import Products_Lifestyle from "./components/Products_Lifestyle/Products_Lifestyle";
import Products_Shop from "./components/Products_Shop/Products_Shop";
import Products_Freshfood from "./components/Products_freshfood/Products_freshfood";
import Subscibe from "./components/Subscribe/Subscribe";
import Testimonial from "./components/Testimonial/Testimonial";



export default function App() {
  return (
      <div>
        <Header></Header>
        <NavBar></NavBar>
        <Hero></Hero>
        <Products_Bestseller></Products_Bestseller>
        <Products_Freshfood></Products_Freshfood>
       <Products_Hotdeals></Products_Hotdeals> 
       <Category></Category>
       <Banner_Recipe></Banner_Recipe>
       <Products_Lifestyle></Products_Lifestyle>
       <Card></Card>
       <Products_Shop></Products_Shop>
       <Banner_Kitchen></Banner_Kitchen>
       <Products_HotdealsMore></Products_HotdealsMore>
       <Banner_Black></Banner_Black>
       <Feature></Feature>
       <Article></Article>
       <Event></Event>
       <Testimonial></Testimonial>
       <Subscibe></Subscibe>
       <Info></Info>
       <Footer></Footer>
       <Copyright></Copyright>
      </div>
  )
}