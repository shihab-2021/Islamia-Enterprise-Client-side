import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/ws5trvy/Gettiamo-le-ancore-di-stabilita-e-speranza-1.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md flex flex-col items-center justify-center">
            <img
              className=""
              src="https://i.ibb.co/q5r9BkK/image-removebg-preview.png"
              alt=""
            />
            <h1 className="mb-5 text-5xl font-bold">Islamia Enterprise</h1>
            <p className="mb-5">
              জাহাজের পুরাতন প্লেট ৬ মিলি হতে ৭০ মিলি পর্যন্ত প্রাইম কোয়ালিটি
              করে গ্রাহকের সুবিধা অনুযায়ী অটো কাটিং এবং শেয়ারিং কাটিং কেটে
              বিক্রি করা হয়
            </p>
            <button className="btn btn-outline btn-accent">
              <a href="#contact">Contact</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
