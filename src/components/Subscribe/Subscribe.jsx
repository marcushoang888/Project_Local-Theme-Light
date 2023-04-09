import Button from "../function/Button";
import ContainerWrapper from "../function/ContainerWrapper";

export default function Subscibe() {
  return (
    <section>
      <ContainerWrapper>
        <div className="text-white bg-black text-center py-10 px-5 rounded-[10px] xl:p-[60px]">
          <div className="max-w-[37.5rem] m-auto">

          {/* Icon */}
          <div className="mb-[14.875px]">
            <svg
              className="mx-auto"
              width={52}
              height={52}
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.5 2.5 22.75 27.25M47.5 2.5l-15.75 45-9-20.25-20.25-9 45-15.75Z"
                stroke="#fff"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h2 className="text-[30.3333px] xl:text-[37.3333px]">Sign up for our newslet</h2>
            <form action="" className="flex flex-col gap-5 my-[29.75px] md:flex-row md:gap-0 ">
              <input
                className="bg-transparent p-2 border-solid border-[1px] border-white/60 rounded-[5px]  text-[17px] xl:text-[19.125px] md:rounded-r-none md:border-r-0 w-full" 
                type="email"
                placeholder="Enter your email"
              />
              <button className="border-white/60 border-[1px] rounded-[30px] py-2 px-[35px] text-[17px] font-medium  xl:text-[19.125px] md:rounded-l-none">
                Submit
              </button>
            </form>

            <p className="text-white/60 mb-4 text-[12.75px] xl:text-[14.75px] ">
              Use this text to share information about your brand with your
              customers. Describe a product, share announcements, or welcome
              customers to your store.
            </p>
          </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
