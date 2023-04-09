import Button from "../function/Button";

export default function Items({ imgUrl, bgColor, description, heading }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className="rounded-[10px] flex justify-center flex-col overflow-hidden"
    >
      <img src={imgUrl} alt="" />

      <div
        className="p-[25px] rounded-[10px]"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <p className="text-[14.875px] text-[#1d1d1d] text-center leading-[22.3125px] sm:text-[16px] xl:text-[17px] mb-3">
          {description}
        </p>
        <h2 className=" text-[30.3333px] text-[#1d1d1d] font-medium leading-[36.4px] xl:text-[37.3333px] xl:leading-[44.8px] mb-4 text-center">
          {heading}
        </h2>
        <Button>Show more</Button>
      </div>
    </div>
  );
}
