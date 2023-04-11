export default function ImageItem({ imgUrl, name }) {
  return (
    <div className=" overflow-hidden  ">
      <img
        className=" hover:scale-110 transition duration-[600ms]  "
        src={imgUrl}
        alt={name}
      />
    </div>
  );
}
