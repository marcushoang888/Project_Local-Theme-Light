import ButtonOutline from "./ButtonOutline";

export default function Banner_Recipe() {
  return (
    <section className="bg-[#e1e0d7] ">
      {/* Container */}
      <div className="max-w-screen-2xl mx-auto sm:px-[15px] md:px-5 lg:px-[30px]">
        {/* Banner-recipe container */}
        <div className="">
          <div className="relative" >
            <img
              className=" lg:object-cover scale-50"
              src="https://cdn.shopify.com/s/files/1/0572/4146/8989/files/recipes_150921b8-28c7-49f5-be74-c34ee80d63cb.jpg?v=1655131846&width=1860"
              alt=""
            />
          </div>
          <div className=" py-20 ">
            <div className="px-10 lg:px-0 text-center">
              <h2 className="mb-4 text-[38px] font-medium leading-[1.2] text-[#1d1d1d]">
                Delicious Recipes
              </h2>
              <ButtonOutline textBtn="Explore All"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
