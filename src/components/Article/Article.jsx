import ContainerWrapper from "../function/ContainerWrapper";
import Title from "../function/Title";
import Item from "./Item";

export default function Article() {
    return <section>
        <ContainerWrapper>
            <div>
                <Title title="Latest Articles" view="Visit the blog"></Title>
            </div>
            
            {/* GRID */}
            <div className="grid grid-cols-1 gap-[13px] lg:grid-cols-3 xl:grid-cols-4 xl:gap-[20.8px]">
                <Item imgUrl="//cdn.shopify.com/s/files/1/0572/4146/8989/articles/blog1_7f0c9c13-08c3-4d03-844f-7a07d5a10098.jpg?v=1654586669&" date="Jun 15, 2022" title="10 Ideas for a Healthy High Fiber Diet" articleLink="#"></Item>

                <Item imgUrl="//cdn.shopify.com/s/files/1/0572/4146/8989/articles/blog2.jpg?v=1654590847&" date="Jun 07, 2022" title="11 Top Chef Grilling Recipes to Make This Summer"  articleLink="#"></Item>


                <Item imgUrl="//cdn.shopify.com/s/files/1/0572/4146/8989/articles/blog3.jpg?v=1654592092&" date="Jun 01, 2022" title="Healthy Sweets?"  articleLink="#"></Item>
            </div>
        </ContainerWrapper>
    </section>
}