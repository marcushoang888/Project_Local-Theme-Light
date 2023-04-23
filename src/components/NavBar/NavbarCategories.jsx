import Categorie from "./Categorie";

export default function NavbarCategories() {
  return (
    <div className="mx-auto pt-[45px] pb-[30px] ">
      <div className="grid grid-cols-4">
        {/* Categories link list */}
        {/* Pantry */}
        <div>
          <Categorie
            heading="Pantry"
            lilink={[
              "All",
              "Pasta & Noodles",
              "Grains & Beans",
              "Snacks",
              "Oil, Vinegar & Spices",
              "Sauces",
              "Dressings",
            ]}
          />
        </div>

        {/* Produce & Dairy&Eggs */}
        <div>
          <Categorie
            heading="Produce"
            lilink={["All", "Vegetable", "Meat", "Herb & Aromatics"]}
          />

          <Categorie
            heading="Dairy & Eggs"
            lilink={[
              "All",
              "Milk & Cream",
              "Eggs & Butter",
              "Cheese",
              "Yogurt & Cultured Dairy",
              "Plant-Based",
            ]}
          />
        </div>

        {/* Bakery & Drin */}
        <div>
          <Categorie
            heading="Bakery"
            lilink={[
              "All",
              "Break",
              "Bun & Rolls",
              "Bagels & Breakfast",
              "Gluten-Free",
            ]}
          />

          <Categorie
            heading="Dairy & Eggs"
            lilink={["All", "Coffee", "Tea & Elixirs", "Juices"]}
          />
        </div>

        {/* Categories image */}
        <div>
          <div className="relative ml-[15px]">
            <img
              className="rounded-[10px] w-100%   object-center"
              src="https://cdn.shopify.com/s/files/1/0572/4146/8989/files/promo2.jpg?v=1654694174&width=860"
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center text-[#1d1d1d] font-medium">
              <p className=" mb-3 text-[25px] leading-7 ">Fresh & Energetic</p>
              <p className=" mb-3 text-[15px] leading-[22px]">Healthy & Organic</p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
