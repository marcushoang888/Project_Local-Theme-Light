export default function Name({ url, text }) {
  return (
    <h3 className=" text-[17px] md:text-[21.25px] xl:text-[25.5px] font-medium  mb-[14.875px]">
      <a
        href="#"
        className="relative leading-[18.7px]  after:content-[''] after:block  after:h-[2px]   after:w-0 after:bg-[#1d1d1d] after:absolute after:bottom-0 hover:after:w-full   after:transition-all"
      >
        {text}
      </a>
    </h3>
  );
}
