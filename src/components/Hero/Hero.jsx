import HeroButton from "./HeroButton";
import HeroItem from "./HeroItem";
import HeroItems from "./HeroItems";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <div>
      {/* Container */}
      <div>
        {/* Hero container */}
        <div>
          <HeroItems />
          <HeroText />
        </div>
      </div>
    </div>
  );
}
