import React from "react";
import ContentBox from "./ContentBox";

export default function Category() {
  return (
    <section className="border-t-[1px] border-solid border-black/15">
      <div className="px-[15px] md:px-[20px] lg:px-[30px] xl:px-[40px] m-auto max-w-[1360px] grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-4 py-10 xl:py-[60px] 2xl:py-20">
        <ContentBox>
          <h3>LOCAL</h3>
          <p>
            Fresh products from local producers, delivered directly to your
            front door, daily.
          </p>
          <div>
            <a href="#">
              <svg
                fill="none"
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m109.688 100.459c0 5.095-4.134 9.229-9.229 9.229h-79.9805c-5.0949 0-9.2285-4.134-9.2285-9.229v-50.6218c0-2.8262 1.3074-5.5178 3.5376-7.2674 4.7873-3.7491 8.7479-6.806 31.5692-23.3595 3.23-2.3456 9.6515-8.0172 14.112-7.9595 4.4604-.0769 10.8819 5.6139 14.1119 7.9595 22.8213 16.5535 26.7823 19.6104 31.5693 23.3595 2.23 1.7496 3.538 4.422 3.538 7.2674zm-8.632-41.7981c-.5-.7114-1.4804-.8844-2.1726-.3653-4.3835 3.2492-14.6704 11.8249-24.3027 18.8232-3.23 2.3648-9.6515 8.0364-14.1119 7.9595-4.4605.0577-10.882-5.5947-14.112-7.9595-9.6323-6.9983-19.9-15.574-24.3027-18.8232-.6922-.5191-1.6919-.3461-2.1726.3653l-1.7495 2.5378c-.4615.6921-.3077 1.615.346 2.1149 4.4028 3.2491 14.6705 11.8249 24.2451 18.7847 3.9029 2.8454 10.8627 9.19 17.7457 9.1515 6.8637.0385 13.8427-6.3061 17.7456-9.1515 9.5938-6.9598 19.8423-15.5356 24.2446-18.7847.673-.4999.827-1.4228.347-2.1149z"
                  fill="#000"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                fill="none"
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m81.3942 66.8069 2.8527-18.2698h-17.8237v-11.8507c0-5.0051 2.4876-9.8755 10.4751-9.8755h8.1017v-15.5765s-7.3485-1.2344-14.4004-1.2344c-14.6743 0-24.2822 8.7533-24.2822 24.5991v13.938h-16.3174v18.2698h16.3174v44.1931h20.083v-44.1931z"
                  fill="#000"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                fill="none"
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m110 28.6577c-3.762 1.5577-7.524 2.8038-11.9122 3.1154 4.3882-2.4923 7.5232-6.5423 9.0912-11.2154-4.076 2.1808-8.4643 4.05-13.1665 4.9846-3.4482-4.05-8.7774-6.5423-14.7335-6.5423-11.2853 0-20.6897 9.0346-20.6897 20.5615 0 1.5577.3135 3.1154.627 4.6731-16.9279-.9346-32.2884-9.0346-42.3197-21.4961-1.8809 3.1153-2.8214 6.5423-2.8214 10.2807 0 7.1654 3.7618 13.3962 9.0909 17.1346-3.4482 0-6.583-.9346-9.4043-2.4923v.3116c0 9.9692 7.21 18.0692 16.6144 19.9384-1.5674.3116-3.4483.6231-5.3292.6231-1.2539 0-2.5078 0-3.7617-.3115 2.5078 8.1 10.3448 14.0192 19.1222 14.3307-6.8965 5.6077-15.9874 8.7231-25.3918 8.7231-1.5674 0-3.1348 0-5.0157-.3115 9.0909 5.6077 20.0627 9.0346 31.6614 9.0346 37.9311 0 58.6206-31.1538 58.6206-58.2577 0-.9346 0-1.8692 0-2.4923 3.762-2.8038 7.21-6.5423 9.718-10.5923z"
                  fill="#000"
                ></path>
              </svg>
            </a>
          </div>
        </ContentBox>

        <ContentBox>
          <h4>Popular categories</h4>
          <li>
            <a href="#">Bread & Bakery</a>
          </li>
          <li>
            <a href="#">Dairy & Eggs</a>
          </li>
          <li>
            <a href="#">Fresh Meals & Pizzas</a>
          </li>
          <li>
            <a href="#">Fruits & Vegetables</a>
          </li>
          <li>
            <a href="#">Kitchen Appliances</a>
          </li>
        </ContentBox>

        <ContentBox>
          <h4>Main Store</h4>
          <p>
            13 Champs-Élysées <br /> 75008 Paris <br /> France
          </p>
        </ContentBox>

        <ContentBox>
          <h4>Quick links</h4>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Delivery</a>
          </li>
          <li>
            <a href="#">Our stores</a>
          </li>
        </ContentBox>
      </div>
    </section>
  );
}