export default function ContainerWrapper({children}) {
    return <div className="px-[15px] md:px-[20px] lg:px-[30px] xl:px-[40px] m-auto max-w-[1360px] mt-[60px]">
        {children}
    </div>
}