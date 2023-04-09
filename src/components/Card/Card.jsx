export default function Card() {
  return (
    <section>
      {/* Container */}
      <div className="px-[15px] mt-12">
        {/* Card container */}
        <div className="grid grid-rows-2 gap-3">
          {/* Card-1 */}
          <div className="">
            <img 
              className="relative rounded-[10px] w-full"
              src="https://cdn.shopify.com/s/files/1/0572/4146/8989/files/image-with-text_2_78a9c08d-7860-4d3e-bc54-02166e29f5ef.jpg?v=1656425838&width=840"
              alt="Card-1"
            />
            <div className="absolute left-0 bottom-0 p-6">
              <p>Whole grain</p>
              <h3>
                <a href="">Bakery</a>
              </h3>
              <p>Limited Availability</p>
            </div>
          </div>

          {/* Card-2 */}
          <div>
            <img 
              src="https://cdn.shopify.com/s/files/1/0572/4146/8989/files/image-with-text-_1_b4855ca5-7846-4df8-a74d-b854765b0e48.jpg?v=1655132129&width=840"
              alt="Card-2"
            />
            <div>
              <p>Hand-picked</p>
              <h3>
                <a href="">Fruits & Vegetables</a>
              </h3>
              <p>Limited Availability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
