import CardItem from "./CardItem";

export default function Card() {
  return (
    <section>
      {/* Container */}
      <div className="max-w-screen-2xl mx-auto px-[15px] lg:px-[30px] xl:px-10 md:mt-[60px] xl:mt-20 ">
        {/* Card container */}
        <div className="grid grid-col-1 lg:grid-cols-2 gap-3">
          {/* Card-1 */}
          <CardItem src="https://cdn.shopify.com/s/files/1/0572/4146/8989/files/image-with-text_2_78a9c08d-7860-4d3e-bc54-02166e29f5ef.jpg?v=1656425838&width=840" alt="Card-1" text1="Whole grain" text2="Bakery" text3="Limited Availability"/>

          {/* Card-2 */}
          <CardItem src="https://cdn.shopify.com/s/files/1/0572/4146/8989/files/image-with-text-_1_b4855ca5-7846-4df8-a74d-b854765b0e48.jpg?v=1655132129&width=840" alt="Card-1" text1="Hand-picked" text2="Fruits & Vegetables" text3="Limited Availability"/>

        </div>
      </div>
    </section>
  );
}
