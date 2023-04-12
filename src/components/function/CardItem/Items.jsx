import BorderItem from "./BorderItem";
import ContentContainer from "./ContentContainer";
import Description from "./Description";
import ImageItem from "./ImageItem";
import Ingredient from "./Ingredient";
import Name from "./Name";
import Price from "./Price";
import Star from "./Star";
import Sub from "./Sub";

export default function Items({
  imgUrl,
  price,
  discount,
  hasDiscount,
  name,
  description,
  ingredients,
  stars,
  soldOut = false,
  isNew = false,
  sub = false,
  children,
}) {
  let percent = undefined;
  if (typeof discount == "number" && typeof price == "number") {
    percent = 100 - Math.floor((price / discount) * 100);
  }

  return (
    <div>
      <BorderItem>
        <div className="absolute z-[100]  text-white top-0 right-4 text-[12.75px]">
          {soldOut && (
            <div>
              <p className="bg-[#757575] px-[0.4375rem] rounded-[3px] my-2 text-center w-fit block ml-auto">
                SOLD OUT
              </p>
              <p className="bg-[#A36754] px-[0.4375rem] rounded-[3px] text-center w-fit block">
                PREORDER NOW
              </p>
            </div>
          )}
          {isNew && (
            <div>
              <p className="bg-[#3C863B] px-[0.4375rem] rounded-[3px] my-2 text-center w-fit block ml-auto">
                NEW
              </p>
            </div>
          )}

          {hasDiscount ? (
            <div>
              <p className="bg-[#D14545] px-[0.4375rem] rounded-[3px] my-2 text-center w-fit block ml-auto">
                -{hasDiscount}%
              </p>
            </div>
          ) : (
            percent && (
              <div>
                <p className="bg-[#D14545] px-[0.4375rem] rounded-[3px] my-2 text-center w-fit block ml-auto">
                  -{percent}%
                </p>
              </div>
            )
          )}
        </div>

        <ImageItem imgUrl={imgUrl} name={name}></ImageItem>
        <ContentContainer>
          <Price number={price} discount={discount}></Price>
          <Name url="" text={name}></Name>
          <Star full={stars} />
          <Description>{description}</Description>
          {children}
          {sub && <Sub text="Choose a store to see local availability" />}
          <Ingredient ingredients={ingredients} />
        </ContentContainer>
      </BorderItem>
    </div>
  );
}
