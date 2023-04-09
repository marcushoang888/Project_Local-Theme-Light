import Items from "./Items";
import Title from "../function/Title";
import ContainerWrapper from "../function/ContainerWrapper";
export default function Products_Hotdeals() {
  const items = [
    {
      id:1,
      imgUrl:

        "//cdn.shopify.com/s/files/1/0572/4146/8989/files/promo_bread_27dc722f-4f6d-4b81-b75d-542077a4156a.jpg?v=1656509679&width=480",
      bgColor: "#f4ede1",
      description: "Fresh everyday",
      heading: "Finest Bread",
    },

    {
      id: 2,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/files/promo_superfoods_242a5de7-13e1-48e3-a56e-6c3013431280.jpg?v=1656509787&width=480",
      bgColor: "#f4e5e5",
      description: "Just arrived",
      heading: "Superfoods",
    },

    {
      id: 3,
      imgUrl:
        "//cdn.shopify.com/s/files/1/0572/4146/8989/files/promo_pure_7c759baf-9767-4fc0-bee1-99e0ad3d0a9c.jpg?v=1656509601&width=480",
      bgColor: "#e5edf1",
      description: "Collection",
      heading: "Pure Organic",
    },
  ];
  return (
    <section>
      <ContainerWrapper>
        <Title title="Hot Deals!"></Title>
        <div className="grid grid-cols-1 gap-[13px] lg:grid-cols-3 xl:gap-[20.8px] 2xl:gap-[26px]">
          {items.map((item) => (
            <Items
              key = {item.id}
              imgUrl={item.imgUrl}
              bgColor={item.bgColor}
              description={item.description}
              heading={item.heading}
            ></Items>
          ))}
        </div>
      </ContainerWrapper>
    </section>
  );
}
