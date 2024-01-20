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
        <div className="w-[600px] h-auto sm:w-[375px] py-20 sm:py-9 px-14 bg-[#252d37]  rounded-[50px] sm:rounded-xl flex flex-col  items-center gap-y-10 sm:gap-y-6">
          {/* image */}
          <Image
            src="/phone.png"
            width={250}
            height={250}
            alt="lmao"
            className="sm:w-[150px]"
          ></Image>
          {/* rating result */}
          <div className="w-auto py-1.5 px-10 sm:px-4 sm:py-1 bg-[#323f4d] rounded-[50px] flex items-center justify-center">
            <div className="text-[#fb7413] text-xl sm:text-[14px]">
              You selected {rateValue} out of 5
            </div>
          </div>
          {/* thankyou message */}
          <div className="flex flex-col justify-center items-center gap-y-4 sm:gap-y-2">
            <div className="text-4xl sm:text-2xl text-white font-bold">
              Thank you!
            </div>
            <div className="sm:w-[300px] text-center text-xl sm:text-sm text-[#7c8798] font-medium leading-8">
              We appreciate you taking the time to give a rating. if you ever
              need more support. don't hestitate to get in touch!
            </div>
          </div>
        </div>
      ) : (
        // rating section
        <form
          onSubmit={() => setRating(!ratingSubmitted)}
          className="w-[600px] h-auto sm:w-[375px] p-14 sm:p-6 bg-[#252d37]  rounded-[50px] sm:rounded-xl flex flex-col gap-y-10 sm:gap-y-5"
        >
          {/* Star Icon */}
          <div className="bg-[#323f4d] w-16 h-16 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
            <StarIcon className="w-7 sm:w-5 fill-[#fb7413]" />
          </div>
          {/* Description */}
          <div className="flex flex-col gap-y-2">
            <div className="text-[37px] sm:text-[25px] text-white font-semibold">
              How did we do?
            </div>
            <div className="w-[450px] sm:w-[295px] text-lg sm:text-sm font-medium text-[#7c8798]">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </div>
          </div>
          {/* Rating Scale */}
          <div className="flex items-center justify-center gap-5">
            {[1, 2, 3, 4, 5].map((value) => {
              return (
                <div
                  key={value}
                  className={`flex justify-center items-center w-20 h-20 sm:w-12 sm:h-12 rounded-full text-2xl sm:text-sm font-bold   ${
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
            className="h-16 sm:h-12 bg-[#fb7413] hover:bg-[#c75c0f] focus:bg-white rounded-[50px] text-white focus:text-[#fb7413] font-bold text-2xl sm:text-sm"
          >
            SUBMIT
          </button>
        </form>
      )}
    </>
  );
};

export default Rating;
