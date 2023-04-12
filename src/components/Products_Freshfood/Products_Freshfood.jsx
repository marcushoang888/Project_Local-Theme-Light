import Button from "../function/Button";
import Items from "../function/CardItem/Items";
import ItemsContainer from "../function/CardItem/ItemsContainer";
import ContainerWrapper from "../function/ContainerWrapper";
import Title from "../function/Title";

export default function Products_Freshfood() {
  const items = [
    {
      id: 1,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/45-a.jpg?v=1655796227&width=480",
      price: "From $6.00",
      name: "Neapolitan Pizza",
      stars: 5,
    },

    {
      id: 2,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/48-a.jpg?v=1655797897&width=480",
      price: "From $6.00",
      name: "Noodle Salad",
      stars: 5,
    },

    {
      id: 3,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/43-a.jpg?v=1655710682&width=480",
      price: 3.5,
      discount: 4.2,
      name: "Mega Sandwich",
    },

    {
      id: 4,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/46-a.jpg?v=1655796848&width=480",
      price: "From $6.00",
      name: "Greek Salad",
      stars: 5,
    },

    {
      id: 5,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/44-a.jpg?v=1655795707&width=480",
      price: "On Sale from $3.50",
      name: "Hamburger",
      stars: 5,
      hasDiscount: 22,
    },

    {
      id: 6,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/47-a.jpg?v=1655797591&width=480",
      price: "From $2.00",
      name: "Pomegranate",
      stars: 3,
    },
  ];
  return (
    <section>
      <ContainerWrapper>
        <div>
          <Title title="Shop Fresh Food"></Title>
          <div className="rounded-[10px] md:grid md:grid-cols-2 overflow-hidden lg:relative lg:flex lg:pl-[33%] xl:pl-[0] xl:grid xl:grid-cols-2 ">
            {/* IMG */}

            <img
              className=" h-[412px] w-full object-cover md:h-full lg:w-1/2 lg:absolute lg:left-0 lg:top-0 xl:static xl:w-full "
              src="//cdn.shopify.com/s/files/1/0572/4146/8989/files/fresh_food_5ed4c2ea-d46c-4d9d-9e25-6cd9a62119d5.jpg?v=1655966780"
              alt=""
            />

            {/* CARD ITEM */}
            <div className=" [&>div]:h-full [&>div]:flex [&>div>div]:w-full  [&>div>div]:shrink-0  [&>div]:overflow-scroll-x [&>div]:bg-[#efefef] [&>div]:py-[26px] [&>div>div]:px-[13px] sm:[&>div]:flex  sm:[&>div>div]:basis-1/2 md:[&>div>div]:basis-full lg:[&>div>div]:basis-1/2 ">
              <ItemsContainer items={items}>
                <Button>Buy now</Button>{" "}
              </ItemsContainer>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
