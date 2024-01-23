import React, { useState } from "react";
import NumberTitle from "./NumberTitle";
import Schedule from "./Schedule";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

const Climb = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMountain1Active, setIsMountain1Active] = useState(true);
  const [isMountain2Active, setIsMountain2Active] = useState(false);

  return (
    <div id="team" className="flex flex-col sm:mb-8">
      {/* PArt1 02climb */}
      <div className="bg-white">
        <div className="w-4/5 mx-auto py-4 flex gap-20 items-center sm:flex-col sm:items-start sm:gap-10">
          {/* left side */}
          <div>
            <NumberTitle number="02" title="Climb" />
          </div>
          {/* right side */}
          <div>
            <p className="text-gray-700 text-left sm:text-sm">
              Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
              gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
              dignissim tortor nec congue.
            </p>
          </div>
        </div>
      </div>

      {/* Part2 Mountains tabs and schedule*/}
      <div>
        <div className="bg-mountains">
          <div className="w-4/5 mx-auto flex gap-8 uppercase">
            <p
              onClick={() => setIsActive(false)}
              className={
                isActive
                  ? "text-mountainNotActive mountainButton cursor-pointer py-1 px-3 font-bold sm:text-sm sm:hidden"
                  : "active mountainButton cursor-pointer py-1 px-3 font-bold sm:text-sm sm:hidden"
              }
            >
              Mountain 1
            </p>
            <p
              onClick={() => setIsActive(true)}
              className={
                isActive
                  ? "active mountainButton cursor-pointer py-1 px-3 font-bold sm:text-sm sm:hidden"
                  : "text-mountainNotActive mountainButton cursor-pointer py-1 px-3 font-bold sm:text-sm sm:hidden"
              }
            >
              Mountain 2
            </p>
          </div>

          {isActive ? (
            // tab2
            <div className="bg-tab2 bg-center bg-cover pt-20 pb-40 sm:hidden">
              <div className="w-4/5 mx-auto flex justify-start relative">
                <div className="py-8 px-10 relative">
                  <div className="bg-white opacity-50 absolute w-full h-full left-0 bottom-0 z-10"></div>
                  <Schedule
                    date1="20 Jan 2017"
                    date2="05 Feb 2017"
                    date3="12 May 2017"
                    date4="19 Jul 2017"
                  />
                </div>
              </div>
            </div>
          ) : (
            // tab1
            <div className="bg-tab1 bg-center bg-cover pt-20 pb-40 sm:hidden">
              <div className="w-4/5 mx-auto flex justify-start relative">
                <div className="py-8 px-10 relative">
                  <div className="bg-white opacity-50 absolute w-full h-full left-0 bottom-0 z-10"></div>
                  <Schedule
                    date1="25 Nov 2016"
                    date2="28 Nov 2016"
                    date3="18 Dec 2016"
                    date4="07 Jan 2017"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Accordion */}
          <div className="hidden sm:block">
            <div className="">
              {/* Mountain1 */}
              <div className="bg-neutral-500">
                <div className="flex text-white py-6 px-6 items-center">
                  <div className="flex-1">
                    <p>Mountain 1</p>
                  </div>
                  <div className="flex-1 flex justify-end">
                    {isMountain1Active ? (
                      <FaArrowCircleUp
                        onClick={() => {
                          setIsMountain1Active(false);
                        }}
                      />
                    ) : (
                      <FaArrowCircleDown
                        onClick={() => {
                          setIsMountain1Active(true);
                        }}
                      />
                    )}
                  </div>
                </div>
                {isMountain1Active ? (
                  <div className="bg-tab1 bg-center bg-cover pt-20 pb-40">
                    <div className="w-4/5 mx-auto flex justify-start relative">
                      <div className="py-8 px-10 relative">
                        <div className="bg-white opacity-50 absolute w-full h-full left-0 bottom-0 z-10"></div>
                        <Schedule
                          date1="25 Nov 2016"
                          date2="28 Nov 2016"
                          date3="18 Dec 2016"
                          date4="07 Jan 2017"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              {/* mountain2 */}
              <div className="bg-neutral-600">
                <div className="flex text-white py-6 px-6 items-center">
                  <div className="flex-1">
                    <p>Mountain 2</p>
                  </div>
                  <div className="flex-1 flex justify-end">
                    {isMountain2Active ? (
                      <FaArrowCircleUp
                        onClick={() => {
                          setIsMountain2Active(false);
                        }}
                      />
                    ) : (
                      <FaArrowCircleDown
                        onClick={() => {
                          setIsMountain2Active(true);
                        }}
                      />
                    )}
                  </div>
                </div>
                {isMountain2Active ? (
                  <div className="bg-tab2 bg-center bg-cover pt-20 pb-40">
                    <div className="w-4/5 mx-auto flex justify-start relative">
                      <div className="py-8 px-10 relative">
                        <div className="bg-white opacity-50 absolute w-full h-full left-0 bottom-0 z-10"></div>
                        <Schedule
                          date1="20 Jan 2017"
                          date2="05 Feb 2017"
                          date3="12 May 2017"
                          date4="19 Jul 2017"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Climb;
