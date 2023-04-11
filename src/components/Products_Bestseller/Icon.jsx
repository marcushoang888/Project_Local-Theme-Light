import Tooltip from "./Tooltip";

export default function Icon({ icons = {} }) {
  const imgUrl = Object.values(icons);
  const description = Object.keys(icons);

  return (
    <div>
      {imgUrl.map((imgUrl, index) => (
        <Tooltip key={index} text={description[index]}>
          <img className="" src={imgUrl} alt="" />
        </Tooltip>
      ))}
    </div>
  );
}
