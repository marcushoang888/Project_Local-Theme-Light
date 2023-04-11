import Button from "../function/Button";
import Items from "../function/CardItem/Items";
import ContainerWrapper from "../function/ContainerWrapper";
import Title from "../function/Title";
import Description from "./Description";
import Icon from "./Icon";

import Star from "./Star";
import Sub from "./Sub";

export default function Products_Bestseller() {
  const items = [
    {
      id: 1,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/34-a.jpg?v=1655373960&width=480",
      price: 0.8,
      name: "Chocolate Cookie",
      description: "No added sugar!",
      stars: 5,
      icons: {
        "Gluten-free":
          "//cdn.shopify.com/s/files/1/0572/4146/8989/files/Gluten-free_3dfe337a-e8e6-4535-a988-e237511cca0d.png?crop=center&height=32&v=1655374031&width=32",
        Eggs: "//cdn.shopify.com/s/files/1/0572/4146/8989/files/Eggs.png?crop=center&height=32&v=1655368519&width=32",
      },
      isNew: true,
    },

    {
      id: 2,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/2-a.jpg?v=1653626304&width=480",
      price: 4.99,
      discount: 6,
      name: "Keto Crunch",
      description: "Keto-friendly combination",
      stars: 5,
      icons: {
        Corn: "//cdn.shopify.com/s/files/1/0572/4146/8989/files/Corn.png?crop=center&height=32&v=1660649013&width=32",
        Gluten:
          "//cdn.shopify.com/s/files/1/0572/4146/8989/files/Gluten_0cd5b727-d9fe-4595-953b-44d39dba88ee.png?crop=center&height=32&v=1660649125&width=32",
        Nuts: "//cdn.shopify.com/s/files/1/0572/4146/8989/files/Nuts.png?crop=center&height=32&v=1660649060&width=32",
        Peanuts:
          "//cdn.shopify.com/s/files/1/0572/4146/8989/files/Peanuts.png?crop=center&height=32&v=1660649081&width=32",
        Celery:
          "//cdn.shopify.com/s/files/1/0572/4146/8989/files/Celery_4187368e-801a-492b-b78b-fc78ff14577f.png?crop=center&height=32&v=1660649172&width=32",
      },
    },

    {
      id: 3,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/7-b.jpg?v=1653635299&width=480",
      price: 0.99,
      name: "Watermelon",
      description: "Excellent source of Vitamin A",
      stars: 3,
    },

    {
      id: 4,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/47-a.jpg?v=1655797591&width=480",
      price: "From $2.00",
      name: "Power Breakfast",
      description: "Protein bomb!",
      stars: 3,
      icons: {
        "Gluten-free":
          "//cdn.shopify.com/s/files/1/0572/4146/8989/files/Gluten-free_3dfe337a-e8e6-4535-a988-e237511cca0d.png?crop=center&height=32&v=1655374031&width=32",
        "Soya-free":
          "//cdn.shopify.com/s/files/1/0572/4146/8989/files/Soya-free_28429413-b9fa-41da-bb09-53785688b1e0.png?crop=center&height=32&v=1655796596&width=32",
        Organic:
          "//cdn.shopify.com/s/files/1/0572/4146/8989/files/Organic_7e1deabb-4002-4a38-aedc-4f5febec3a72.png?crop=center&height=32&v=1655795934&width=32",
      },
    },

    {
      id: 5,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/1-a.jpg?v=1653626228&width=480",
      price: 3,
      name: "Coconut Water",
      description: "Rich taste",
      stars: 5,
      icons: {
        "Gluten-free":
          "//cdn.shopify.com/s/files/1/0572/4146/8989/files/Gluten-free_3dfe337a-e8e6-4535-a988-e237511cca0d.png?crop=center&height=32&v=1655374031&width=32",
        Ecologic:
          "//cdn.shopify.com/s/files/1/0572/4146/8989/files/Eco_f7523587-bd10-46a8-9311-a125db925258.png?crop=center&height=32&v=1654250639&width=32",
      },
      isNew: true,
    },

    {
      id: 6,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/13-b.jpg?v=1653637435&width=480",
      price: 4.99,
      discount: 6.99,
      name: "Pomegranate",
      description: "High contents of polyphenols",
      stars: 4,
      icons: {
        Organic:
          "//cdn.shopify.com/s/files/1/0572/4146/8989/files/Organic_7e1deabb-4002-4a38-aedc-4f5febec3a72.png?crop=center&height=32&v=1655795934&width=32",
        "Sustainable farm":
          "//cdn.shopify.com/s/files/1/0572/4146/8989/files/apple-1069_1662a7dc-9d78-40f0-ad21-0d60d427a65d.png?crop=center&height=32&v=1656493437&width=32",
      },
    },

    {
      id: 7,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/29-a.jpg?v=1655367914&width=480",
      price: 2.5,
      name: "Sourdough Perth",
      description: "100% rye flour",
      stars: 0,
      icons: {
        Gluten:
          "//cdn.shopify.com/s/files/1/0572/4146/8989/files/Gluten.png?crop=center&height=32&v=1655368537&width=32",
        Eggs: "//cdn.shopify.com/s/files/1/0572/4146/8989/files/Gluten-free_3dfe337a-e8e6-4535-a988-e237511cca0d.png?crop=center&height=32&v=1655374031&width=32",
      },
      isNew: true,
    },

    {
      id: 8,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/5-a.jpg?v=1653637901&width=480",
      price: "From $5.00",
      name: "BBQ Sauce",
      description: "Fat free, sweet and tangy",
      stars: 5,
      icons: {
        "Gluten free":
          "//cdn.shopify.com/s/files/1/0572/4146/8989/files/Gluten-free_3dfe337a-e8e6-4535-a988-e237511cca0d.png?crop=center&height=32&v=1655374031&width=32",
        "Eggs free":
          "//cdn.shopify.com/s/files/1/0572/4146/8989/files/eggs-free.png?crop=center&height=32&v=1654693369&width=32",
        "Milk free":
          "//cdn.shopify.com/s/files/1/0572/4146/8989/files/milk-free.png?crop=center&height=32&v=1654693369&width=32",
      },
    },
  ];
  return (
    <section>
      <ContainerWrapper>
        <Title title="Best Sellers" view="View all products"></Title>

        <div className="flex overflow-hidden   justify-between [&>div]:basis-full  [&>div]:sm:basis-[50%]  [&>div]:lg:basis-1/3 [&>div]:xl:basis-[25%]  [&>div]:shrink-0 [&>div]:cursor-grab [&>div]:overflow-hidden [&>div]:w-full [&>div]:px-[6.5px] [&>div]:xl:px-[10.4px] [&>div]:2xl:px-[13px]">
          {/* ITEM */}
          {items.map((item) => (
            <Items
              imgUrl={item.imgUrl}
              price={item.price}
              discount={item.discount}
              name={item.name}
              soldOut={item.soldOut}
              isNew={item.isNew}
              key={item.id}
            >
              <Star full={item.stars}></Star>
              <Description>{item.description}</Description>
              <Button>Buy Now</Button>
              <Sub text="Choose a store to see local availability"></Sub>
              <Icon icons={item.icons}></Icon>
            </Items>
          ))}
        </div>
      </ContainerWrapper>
    </section>
  );
}
