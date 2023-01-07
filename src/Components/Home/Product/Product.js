import React from 'react';

const Product = () => {
    return (
      <div>
        {/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div> */}
        <div className="max-w-screen-xl p-5 mx-auto mt-20">
          <h1 className=" text-7xl my-4 py-10 text-center person-name" style={{color: "goldenrod"}}>Products</h1>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
              style={{
                backgroundImage: `url("https://i.ibb.co/WD0mdTj/Whats-App-Image-2023-01-07-at-13-44-40.jpg")`,
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
                >
                  Since
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    04
                  </span>
                  <span className="leading-none uppercase">Aug</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="font-medium text-md hover:underline dark:text-gray-100"
                >
                  {" "}
                  Islamia Enterprise
                </a>
              </h2>
            </div>
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
              style={{
                backgroundImage: `url("https://i.ibb.co/b3z8R5h/Whats-App-Image-2023-01-07-at-13-44-35.jpg")`,
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
                >
                  Since
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    01
                  </span>
                  <span className="leading-none uppercase">Aug</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="font-medium text-md hover:underline dark:text-gray-100"
                >
                  Islamia Enterprise
                </a>
              </h2>
            </div>
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
              style={{
                backgroundImage: `url("https://i.ibb.co/Sdn64Cc/Whats-App-Image-2023-01-07-at-13-44-31.jpg")`,
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
                >
                  Since
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    28
                  </span>
                  <span className="leading-none uppercase">Jul</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="font-medium text-md hover:underline dark:text-gray-100"
                >
                  Islamia Enterprise
                </a>
              </h2>
            </div>
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
              style={{
                backgroundImage: `url("https://i.ibb.co/6v4y6vW/image.png")`,
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
                >
                  Since
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    19
                  </span>
                  <span className="leading-none uppercase">Jul</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="font-medium text-md hover:underline dark:text-gray-100"
                >
                  Islamia Enterprise
                </a>
              </h2>
            </div>
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
              style={{
                backgroundImage: `url("https://i.ibb.co/68fZvFs/Whats-App-Image-2023-01-07-at-13-41-59.jpg")`,
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
                >
                  Since
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    19
                  </span>
                  <span className="leading-none uppercase">Jul</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="font-medium text-md hover:underline dark:text-gray-100"
                >
                  Islamia Enterprise
                </a>
              </h2>
            </div>
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
              style={{
                backgroundImage: `url("https://i.ibb.co/gwRNGN4/Whats-App-Image-2023-01-07-at-13-44-32.jpg")`,
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
                >
                  Since
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    19
                  </span>
                  <span className="leading-none uppercase">Jul</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="font-medium text-md hover:underline dark:text-gray-100"
                >
                  Islamia Enterprise
                </a>
              </h2>
            </div>
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
              style={{
                backgroundImage: `url("https://i.ibb.co/qmNV54H/image.png")`,
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
                >
                  Since
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    04
                  </span>
                  <span className="leading-none uppercase">Aug</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="font-medium text-md hover:underline dark:text-gray-100"
                >
                  {" "}
                  Islamia Enterprise
                </a>
              </h2>
            </div>
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
              style={{
                backgroundImage: `url("https://i.ibb.co/bsbSwM2/image.png")`,
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
                >
                  Since
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    01
                  </span>
                  <span className="leading-none uppercase">Aug</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="font-medium text-md hover:underline dark:text-gray-100"
                >
                  Islamia Enterprise
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Product;