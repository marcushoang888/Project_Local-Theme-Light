import ContainerWrapperFluid from "../function/ContainerWrapperFluid";

export default function Info() {
  return (
    <section>
      <ContainerWrapperFluid>
        <div className=" [&>span]:px-[60px] text-[17px] md:text-[21.25px] xl:text-[25.5px] whitespace-nowrap overflow-hidden relative [&>div]:absolute [&>div]:animate-loopText   [&>div]:pl-[100%] h-[60px]  flex items-center [&>div>span]:px-[60px] xl:[&>div>span]:px-[120px] pause">
          <div>
            <span>
              We've opened a new store in <strong>La Defense</strong>.&nbsp;
              <a className="underline" href="#" title="Our stores">
                Check it out
              </a>
              !
            </span>
            <span>
              <span style={{ textDecoration: "underline" }}>
                <em>FREE SHIPPING</em>
              </span>
              <em> </em>&nbsp;on orders above $50.
            </span>
            <span>
              Check out or all new&nbsp;
              <a className="underline" href="#" title="Recipes">
                <strong>RECIPES SECTION</strong>
              </a>
            </span>
          </div>
        </div>
      </ContainerWrapperFluid>
    </section>
  );
}
