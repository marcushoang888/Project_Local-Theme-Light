export default function Button({children}) {
    return <button type="submit" className=" border-solid text-[17px] rounded-[30px] border-[1px] border-[#1d1d1d] py-2 px-6 w-full font-medium hover:border-black hover:bg-black hover:text-white transtition duration-300 bg-inherit text-inherit">
       {children}
    </button>
}