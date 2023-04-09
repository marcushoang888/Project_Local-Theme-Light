export default function Title( {title, view}) {
    return <div className="flex justify-between flex-col text-[#1d1d1d] lg:flex-row mb-5 xl:mb-7 ">
        <h2 className="text-[23.3333px] font-medium leading-[28px] xl:text-[28px]">{title}</h2>
        {view && <a href="#" className=" underline text-[17px] xl:text-[19px] leading-[25.5px] mt-[10px] ">{view}</a>}
    </div>
}