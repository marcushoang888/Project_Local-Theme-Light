export default function BorderItem({children}) {
  return (
    <div className=" h-full relative rounded-[10px] border-solid border-[#e1e1e1] border-[1px] overflow-hidden bg-white">
      {children}
    </div>
  );
}
