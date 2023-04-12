import HeroItem from "./HeroItem";

export default function Hero() {
    return (
        <div>
            {/* Container */}
            <div>
                {/* Hero container */}
                <div className="h-[692px] flex overflow-hidden object-cover">
                    <HeroItem heroUrl="https://cdn.shopify.com/s/files/1/0572/4146/8989/files/HERO_main_1_bb5a1d51-e731-4132-8c2d-24f909f05736.jpg?v=1655970492&width=1540" text1="Only Non-GMO" text2="100% Organic" />
                    <HeroItem heroUrl="https://cdn.shopify.com/s/files/1/0572/4146/8989/files/HERO_main_2_6e4d8f5b-69d4-41fa-9abd-234c6dfa6756.jpg?v=1655970512&width=1540" text1="Introducing" text2="Prepared Meals"/>
                </div>
            </div>
        </div>
    )
}