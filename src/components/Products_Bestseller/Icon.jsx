export default function Icon({ icons = {} }) {
  const imgUrl = Object.values(icons);
  const description = Object.keys(icons);

  return (
    <div>
      {imgUrl.map((imgUrl, index) => (
        <div key={index+1} className="group inline-block relative mr-2">
          <span className="hidden absolute bg-black text-white translate-y-[-100%] group-hover:block text-[12px]  py-1 px-2 w-fit text-center left-[50%] translate-x-[-50%] min-w-[90px] rounded-[5px] top-[-10px] l ">
            <span className="absolute  top-[100%] left-[50%] translate-x-[-50%] clip-triangle block bg-black w-[20px] h-[20px]"></span>
            {description[index]}
          </span>
          <img className="" src={imgUrl} alt="" />
        </div>
      ))}
    </div>
  );
}
