export default function Star({ full }) {
  let count = full;
  let star = [];
  for (let i = 0; i < 5; i++) {
    star[i] = <i key={i} className="fa-regular fa-star"></i>;
  }

  return (
    <div className="mb-[14.875px]">
      {star.map((item, index) => {
        if (count > 0) {
          count = count - 1;
          return <i key={index}className="fa-solid fa-star"></i>;
        }
        return item;
      })}
    </div>
  );
}
