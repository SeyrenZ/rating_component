"use client";
import { StarIcon } from "@/public";
import React from "react";
import { useState } from "react";

import Image from "next/image";
const Rating = () => {
  const [ratingSubmitted, setRating] = useState(false);
  const [rateValue, setRateValue] = useState(0);

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   if (rateValue) {
  //     setRating(!ratingSubmitted);
  //   } else {
  //   }
  // };

  return (
    <>
      {/* changing UI{thankyou letter} after submitting */}
      {ratingSubmitted ? (
        // rating result section
        <div className="w-[600px] h-[600px] py-20 px-14 bg-[#252d37]  rounded-[50px] flex flex-col  items-center gap-y-10">
          {/* image */}
          <Image src="/phone.png" width={250} height={250} alt="lmao"></Image>
          {/* rating result */}
          <div className="w-[270px] p-1.5 bg-[#323f4d] rounded-[50px] flex items-center justify-center">
            <div className="text-[#fb7413] text-xl">
              You selected {rateValue} out of 5
            </div>
          </div>
          {/* thankyou message */}
          <div className="flex flex-col justify-center items-center gap-y-4">
            <div className="text-4xl text-white font-bold">Thank you!</div>
            <div className="text-center text-xl text-[#7c8798] font-medium leading-8">
              We appreciate you taking the time to give a rating. if you ever
              need more support. don't hestitate to get in touch!
            </div>
          </div>
        </div>
      ) : (
        // rating section
        <form
          onSubmit={() => setRating(!ratingSubmitted)}
          className="w-[600px] h-[600px] px-14 pt-14 bg-[#252d37]  rounded-[50px] flex flex-col gap-y-10"
        >
          {/* Star Icon */}
          <div className="bg-[#323f4d] w-16 h-16 rounded-full flex items-center justify-center">
            <StarIcon className="w-7 fill-[#fb7413]" />
          </div>
          {/* Description */}
          <div className="flex flex-col gap-y-2">
            <div className="text-[37px] text-white font-semibold">
              How did we do?
            </div>
            <div className="w-[450px] text-lg font-medium text-[#7c8798]">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </div>
          </div>
          {/* Rating Scale */}
          <div className="flex gap-5">
            {[1, 2, 3, 4, 5].map((value) => {
              return (
                <div
                  key={value}
                  className={`flex justify-center items-center w-20 h-20   rounded-full text-2xl font-bold   ${
                    value === rateValue
                      ? "bg-orange-500  text-white"
                      : "bg-[#323f4d] hover:bg-[#7c8798] text-[#7c8798] hover:text-white"
                  }`}
                  onClick={() => setRateValue(value)}
                >
                  {value}
                </div>
              );
            })}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="h-16 bg-[#fb7413] hover:bg-[#c75c0f] focus:bg-white rounded-[50px] text-white focus:text-[#fb7413] font-bold text-2xl"
          >
            SUBMIT
          </button>
        </form>
      )}
    </>
  );
};

export default Rating;
