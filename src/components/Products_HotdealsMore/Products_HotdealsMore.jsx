import ContainerWrapper from "../function/ContainerWrapper";
import Items from "../function/CardItem/Items";
import Title from "../function/Title";
import ItemsContainer from "../function/CardItem/ItemsContainer";

export default function Products_HotdealsMore() {
  const items = [
    {
      id: 1,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/25-a.jpg?v=1655127670&width=480",
      price: 29,
      discount: 35,
      name: "Cutting Board",
    },
    {
      id: 2,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/21-a.jpg?v=1655123214&width=480",
      price: 80,
      discount: 145,
      name: "PTFE Trying Pan",
    },
    {
      id: 3,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/26-b.jpg?v=1655128179&width=480",
      price: 15,
      discount: 30,
      name: "Salt & Pepper Shakers",
    },
    {
      id: 4,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/24-a.jpg?v=1655126304&width=480",
      price: 69,
      discount: 100,
      name: "Kitchen Knifes",
    },
    {
      id: 5,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/22-a.jpg?v=1655123364&width=480",
      price: 95,
      discount: "",
      name: "Teapot",
      soldOut: true,
    },
    {
      id: 6,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/23-a.jpg?v=1655123850&width=480",
      price: "From $20.00",
      discount: "",
      name: "Kitchen Tools",
    },
    {
      id: 7,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/27-a.jpg?v=1655134826&width=480",
      price: 15,
      discount: 25,
      name: "Wooden Bowls",
    },
    {
      id: 8,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/products/28-a.jpg?v=1655204207&width=480",
      price: 22,
      discount: 30,
      name: "Potholder",
    },
  ];

  return (
    <section>
      <ContainerWrapper>
        <Title title="Hot Deals" view="View All Products"></Title>
        <div className="[&>div]:grid [&>div]:grid-cols-1 [&>div]:gap-[13px]  [&>div]:sm:grid-cols-2 [&>div]:lg:grid-cols-3 [&>div]:xl:grid-cols-4 [&>div]:xl:gap-[20.8px] [&>div]:2xl:gap-[26px]">
          <ItemsContainer items={items} />
        </div>
      </ContainerWrapper>
    </section>
  );
}
