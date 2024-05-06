import icecream from "./images/icecream.webp";
import flakes from "./images/flakes.jpg";
import peppers from "./images/peppers.jpg";

const Review = () => {
    return (
      <div>
        <section className="text-gray-600 body-font mb-10">
          {/* main  */}
          <div className="container px-5 py-10 mx-auto">
            {/* Heading  */}
            <h1 className=" text-center text-3xl font-bold text-black">
              Product Reviews
            </h1>
            {/* para  */}
            <h2 className=" text-center text-2xl font-semibold mb-10">
              Our customers' favorite items!
            </h2>
  
            <div className="flex flex-wrap -m-4">
              {/* Review 1 */}
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="review"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={icecream}
                  />
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                    Blue Bell Ice Cream
                  </h2>
                  <span className="inline-block h-1 w-5 rounded bg-orange-500 mt-6 mb-4 mr-2" />
                  <span className="inline-block h-1 w-5 rounded bg-orange-500 mt-6 mb-4 mr-2" />
                  <span className="inline-block h-1 w-5 rounded bg-orange-500 mt-6 mb-4" />
                  <p className="leading-relaxed">
                  I recommend this ice cream! It's my favorite.
                  </p>
                  
                </div>
              </div>
  
              {/* review 2 */}
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="review"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={flakes}
                  />
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                    CORN FLAKES
                  </h2><span className="inline-block h-1 w-5 rounded bg-blue-500 mt-6 mb-4 mr-2" />
                  <span className="inline-block h-1 w-5 rounded bg-blue-500 mt-6 mb-4 mr-2" />
                  <span className="inline-block h-1 w-5 rounded bg-blue-500 mt-6 mb-4" />
                  <p className="leading-relaxed">
                    This cereal is my favorite and I can't seem to find it in any other store. This grocery store is the BEST.
                  </p>
                </div>
              </div>
  
              {/* review 3 */}
              <div className="lg:w-1/3 lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    alt="review"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={peppers}
                  /><h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  PEPPERS
                </h2>
                <span className="inline-block h-1 w-5 rounded bg-purple-500 mt-6 mb-4 mr-2" />
                  <span className="inline-block h-1 w-5 rounded bg-purple-500 mt-6 mb-4 mr-2" />
                  <span className="inline-block h-1 w-5 rounded bg-purple-500 mt-6 mb-4" />
                  <p className="leading-relaxed">
                    Truly the freshest produce around. Peppers are a staple in our house.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Review;