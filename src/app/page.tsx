import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-slate-50">
    <section>
      <MaxWidthWrapper className="pb-24 pt-10 lg:grid  lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                  <img src="/image.png" alt="" className="w-full h-96 z-10"/>
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Your Image on a <span className="bg-green-400 px-2 text-white">Custom </span>Phone Case</h1>
              <p className="mt-8 text-lg lg:pr-8 max-w-prose text-center lg:text-left text-balance md:text-wrap ">
                Capture your Favourite Memories with your own, <span className="font-semibold">one-of-one</span> phone case. Case Cobra allows you to protect your memories, not just your phone case.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600"/>
                    High Quality, durable material 
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600"/>
                    5-Year Print guaranteed
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600"/>
                    Modern Iphone Models supported 
                  </li>
                </div>
              </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
   </div>

  );
}
