import { StarIcon } from "@/public";
import React from "react";

const Rating = () => {
  return (
    <div className="w-[600px] h-[600px] px-14 pt-14 bg-[#252d37]  rounded-[50px] flex flex-col gap-y-10">
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
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </div>
      </div>
      {/* Rating Scale */}
      <div className="flex gap-x-5">
        <button className="bg-[#323f4d] hover:bg-[#959eac] focus:bg-[#fb7413] w-20 h-20 rounded-full flex justify-center items-center text-[#7c8798] focus:text-white hover:text-white font-bold text-2xl">
          1
        </button>
        <button className="bg-[#323f4d] hover:bg-[#959eac] focus:bg-[#fb7413] w-20 h-20 rounded-full flex justify-center items-center text-[#7c8798] focus:text-white hover:text-white font-bold text-2xl">
          2
        </button>
        <button className="bg-[#323f4d] hover:bg-[#959eac] focus:bg-[#fb7413] w-20 h-20 rounded-full flex justify-center items-center text-[#7c8798] focus:text-white hover:text-white font-bold text-2xl">
          3
        </button>
        <button className="bg-[#323f4d] hover:bg-[#959eac] focus:bg-[#fb7413] w-20 h-20 rounded-full flex justify-center items-center text-[#7c8798] focus:text-white hover:text-white font-bold text-2xl">
          4
        </button>
        <button className="bg-[#323f4d] hover:bg-[#959eac] focus:bg-[#fb7413] w-20 h-20 rounded-full flex justify-center items-center text-[#7c8798] focus:text-white hover:text-white font-bold text-2xl">
          5
        </button>
      </div>
      {/* Submit Button */}
      <button className="h-16 bg-[#fb7413] hover:bg-[#c75c0f] focus:bg-white rounded-[50px] text-white focus:text-[#fb7413] font-bold text-2xl">
        SUBMIT
      </button>
    </div>
  );
};

export default Rating;
