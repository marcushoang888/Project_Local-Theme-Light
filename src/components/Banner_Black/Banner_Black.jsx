export default function Banner_Black() {
  return (
    <div>
      {/* Container */}
      <div className="max-w-[1360px] mx-auto mt-[60px] px-[15px] md:px-5 lg:px-[30px] xl:mt-20 xl:px-10">
        {/* Banner black container */}
        <div className="relative min-h-[60vh] h-[384px]">
        <span className="absolute w-full h-full bg-black rounded-[10px] opacity-40 "></span>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="z-[-1] w-full h-full object-cover rounded-[10px] border-none "
          >
            <source
              data-src="https://cdn.shopify.com/videos/c/vp/f402a97a53364ffbabf58c12dfb20176/f402a97a53364ffbabf58c12dfb20176.m3u8"
              type="application/x-mpegURL"
              src="https://cdn.shopify.com/videos/c/vp/f402a97a53364ffbabf58c12dfb20176/f402a97a53364ffbabf58c12dfb20176.m3u8"
            />
            <source
              data-src="https://cdn.shopify.com/videos/c/vp/f402a97a53364ffbabf58c12dfb20176/f402a97a53364ffbabf58c12dfb20176.HD-720p-1.6Mbps.mp4"
              type="video/mp4"
              src="https://cdn.shopify.com/videos/c/vp/f402a97a53364ffbabf58c12dfb20176/f402a97a53364ffbabf58c12dfb20176.HD-720p-1.6Mbps.mp4"
            />
          
          </video>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   text-center p-[25px] w-full">
            <p className="mb-3 text-white text-base xl:text-lg leading-[22px]  ">
              Introducing
            </p>
            <h3 className="mb-4 pb-[3px] text-white text-[44px] xl:text-[68px] font-medium leading-[53px] ">
              Black Edition
            </h3>
            <button className="block m-auto mt-4 py-3 xl:py-4 px-8 lg:px-10 xl:px-[46px] text-[20px] xl:text-[22px] leading-6 font-medium  text-white  bg-transparent border-solid border-[1px] border-white rounded-full hover:bg-black hover:border-black hover:transition-all ">
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
