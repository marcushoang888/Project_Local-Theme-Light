import Items from "./Items";

export default function ItemsContainer({ items, children }) {
  return (
    <div>
      {items.map((item) => (
        <Items
          imgUrl={item.imgUrl}
          price={item.price}
          discount={item.discount}
          description={item.description}
          ingredients={item.ingredients}
          stars={item.stars}
          hasDiscount={item.hasDiscount}
          name={item.name}
          soldOut={item.soldOut}
          isNew={item.isNew}
          key={item.id}
          sub = {item.sub}
        >
          {children}
        </Items>
      ))}
    </div>
  );
}
