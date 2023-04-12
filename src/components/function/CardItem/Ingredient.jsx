import Tooltip from "./Tooltip";

export default function Ingredient({ingredients = []}) {


  return (
    <div>
      {ingredients.map((ingredient, index) => (
        <Tooltip key={index} text={ingredient.name}>
          <img className="" src={ingredient.iconLink} alt={ingredient.name} />
        </Tooltip>
      ))}
    </div>
  );
}
