import * as React from "react";

import Button from "@/components/Button";


export default function main() {
  return (
    <>
      <main className="w-full h-auto">
        <div className="container mx-auto">
          <section id="hero" className="w-full h-screen container flex justify-center items-center">
            <div className="w-full flex flex-col gap-[60px] justify-center items-center">
              <h1 className="text-center text-6xl mx-[120px] leading-[80px]">Revolutionize Your Inventory with Smart <span className="text-[#00408A]">SIP Reporting</span></h1>
              <Button className="w-[200px] h-[60px] font-normal px-6 rounded-[32px] bg-[#00408A] text-white text-2xl">
                Report Now
              </Button>
            </div>
          </section>

          <section id="hero" className="w-full h-screen container flex justify-center items-center">
            <div className="w-full flex flex-col gap-[60px] justify-center items-center">
              <h1 className="text-center text-6xl mx-[200px] leading-[80px]">Revolutionize Your Inventory with Smart <span className="text-[#00408A]">SIP Reporting</span></h1>
              <Button className="w-[200px] h-[60px] font-normal px-6 rounded-[32px] bg-[#00408A] text-white text-2xl">
                Report Now
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}