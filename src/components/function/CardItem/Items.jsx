import BorderItem from "./BorderItem";
import ContentContainer from "./ContentContainer";
import ImageItem from "./ImageItem";
import Name from "./Name";
import Price from "./Price";

export default function Items({
  imgUrl,
  price,
  discount,
  name,
  soldOut = false,
  isNew=false,
  children,
}) {
  const sold = (
    <div className="absolute z-[100]  text-white top-0 right-4 text-[12.75px]">
      <p className="bg-[#757575] px-[0.4375rem] rounded-[3px] my-2 text-center w-fit block ml-auto">
        SOLD OUT
      </p>
      <p className="bg-[#A36754] px-[0.4375rem] rounded-[3px] text-center w-fit block">
        PREORDER NOW
      </p>
    </div>
  );

  let percent = undefined;
  if (typeof discount == "number" && typeof price == "number") {
    percent = 100 - Math.floor((price / discount) * 100);
  }

  const percentage = (
    <div className="absolute z-[100]  text-white top-0 right-4 text-[12.75px]">
      <p className="bg-[#D14545] px-[0.4375rem] rounded-[3px] my-2 text-center w-fit block ml-auto">
        -{percent}%
      </p>
    </div>
  );

  const newBlock = (
    <div className="absolute z-[100]  text-white top-0 right-4 text-[12.75px]">
      <p className="bg-[#3C863B] px-[0.4375rem] rounded-[3px] my-2 text-center w-fit block ml-auto">
        NEW
      </p>
    </div>
  )
  return (
    <BorderItem>
      {soldOut && sold}
      {percent && percentage}
      {isNew && newBlock}
      {}
      <ImageItem imgUrl={imgUrl} name={name}></ImageItem>
      <ContentContainer>
        <Price number={price} discount={discount}></Price>
        <Name url="" text={name}></Name>
        {children}
      </ContentContainer>
    </BorderItem>
  );
}
