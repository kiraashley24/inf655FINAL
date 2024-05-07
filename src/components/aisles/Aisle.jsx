import aisle from "./data";

const Aisle = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col mt-5">
        <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
          <div className="flex">
            {aisle.map((item, index) => (
              <div key={index} className="px-3 lg:px-10">
                <div className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs transition-all mb-1">
                  <div className="flex justify-center mb-12">
                    <img src={item.image} alt="img" />
                  </div>
                </div>
                <h1 className="text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase">
                  {item.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
        }}
      />
    </div>
  );
};

export default Aisle;

