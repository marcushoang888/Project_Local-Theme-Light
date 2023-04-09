export default function Price({ number, discount }) {
  if (typeof number == "number") {
    number = "$" + number.toFixed(2);
  }

  if (typeof discount == "number") discount = "$" + discount.toFixed(2);

  return (
    <p className=" mb-[17px] text-[#1d1d1d] text-[17px] xl:text-[19.125px]leading-[25.5px]">
      {number} <span className=" line-through opacity-[0.54]">{discount}</span>
    </p>
  );
}
