import Article from "./components/Article";
import Banner_Black from "./components/Banner_Black";
import Banner_Kitchen from "./components/Banner_Kitchen";
import Banner_Recipe from "./components/Banner_Recipe";
import Card from "./components/Card";
import Category from "./components/Category";
import Copyright from "./components/Copyright";
import Event from "./components/Event";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import NavBar from "./components/NavBar";
import Products_Bestseller from "./components/Products_Bestseller";
import Products_Hotdeals from "./components/Products_Hotdeals";
import Products_HotdealsMore from "./components/Products_HotdealsMore";
import Products_Lifestyle from "./components/Products_Lifestyle";
import Products_Shop from "./components/Products_Shopping";
import Products_Freshfood from "./components/Products_freshfood";
import Subscibe from "./components/Subscribe";
import Testimonial from "./components/Testimonial";



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