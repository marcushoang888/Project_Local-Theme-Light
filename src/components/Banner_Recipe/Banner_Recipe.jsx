export default function Banner_Recipe() {
  return (
    <section className="bg-[#e1e0d7] sm:px-[15px] md:px-5 lg:px-[30px]">
      {/* Container */}
      <div>
        {/* Banner-recipe container */}
        <div className="grid grid-rows-2">
          <div className="relative" >
            <img
              className="absolute lg:object-cover"
              src="https://cdn.shopify.com/s/files/1/0572/4146/8989/files/recipes_150921b8-28c7-49f5-be74-c34ee80d63cb.jpg?v=1655131846&width=1860"
              alt=""
            />
          </div>
          <div className="py-10">
            <div className="px-10 lg:px-0 text-center">
              <h2 className="mb-4 text-[38px] font-medium leading-[1.2] text-[#1d1d1d]">
                Delicious Recipes
              </h2>
              <button className="block m-auto mt-4 text-[15px] py-3 px-8 text-[#1d1d1d] font-medium  border-solid border-[1px] border-black rounded-full hover:bg-[#1d1d1d] hover:text-white">
                Explore All
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
