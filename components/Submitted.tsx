import Image from "next/image";
import React from "react";

const Submitted = () => {
  return (
    <div className="w-[600px] h-[600px] py-20 px-14 bg-[#252d37]  rounded-[50px] flex flex-col  items-center gap-y-10">
      {/* image */}
      <Image src="/phone.png" width={250} height={250} alt="lmao"></Image>
      {/* rating result */}
      <div className="w-[270px] p-1.5 bg-[#323f4d] rounded-[50px] flex items-center justify-center">
        <div className="text-[#fb7413] text-xl">
          You selected <span>4</span> out of 5
        </div>
      </div>
      {/* thankyou message */}
      <div className="flex flex-col justify-center items-center gap-y-4">
        <div className="text-4xl text-white font-bold">Thank you!</div>
        <div className="text-center text-xl text-[#7c8798] font-medium leading-8">
          We appreciate you taking the time to give a rating. if you ever need
          more support. don't hestitate to get in touch!
        </div>
      </div>
    </div>
  );
};

export default Submitted;
