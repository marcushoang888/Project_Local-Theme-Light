import ButtonOutline from "./ButtonOutline";

export default function Banner_Kitchen() {
  return (
    <div>
      {/* Container */}
      <div className="xl:mt-[60px] min-h-[80vh]">
        {/* Banner kitchen container */}
        <div className="flex flex-col-reverse lg:flex-row">
        <div className="p-10 xl:pr-[25px] max-w-full  bg-[#e7e7e7] text-start text-[#1d1d1d]">
            <p className=" mb-4 text-[15px] leading-[22px] font-medium">Up to 50% discount</p>
            <h2 className="mb-4 text-[44px] leadng-[53px] font-medium">Kitchen & Dining Summer Sale</h2>
            <p className="mb-4 text-[15px]  leading-[22px]">
              Common kitchen tasks include cutting food items to size, heating
              food on an open fire or on a stove...
            </p>
            <ButtonOutline textBtn="Learn more" />
          </div>
          <div>
          <img className="h-full lg:object-cover lg:object-left" src="//cdn.shopify.com/s/files/1/0572/4146/8989/files/rich_text_kitchen_df43f2b8-9b5f-4aee-b7d9-56b5f01fa62e.jpg?v=1655969043" alt="" />
          </div>
         
        </div>
      </div>
    </div>
  );
}
