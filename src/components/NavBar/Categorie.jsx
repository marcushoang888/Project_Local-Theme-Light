

export default function Categorie({heading, lilink }) {
 
  return (
    <ul className="px-[15px] pb-[30px] text-base text-[#1d1d1d]">
      <li className="my-[10px] p-[10px] pb-[3px] text-[#050505] leading-4 font-medium">
        <a href="">{heading}</a>
      </li>
      {lilink.map((item) => {
        return (
          <li className="mb-[10px] py-[6px] px-[10px] pb-[3px] leading-5 texxt-left">
            <a href="">{item}</a>
          </li>
        );
      })}
    </ul>
  );
}
