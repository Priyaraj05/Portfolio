"use client";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">
              Bonjour, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Priya",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a graduate student",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base  mb-6 sm:text-lg lg:text-xl">
            I&apos;m a graduate student at University of Washington pursing
            Master&apos;s in Computer Science
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-[#9F0BBD] hover:bg-[#AA0BCA] mt-3">
              <a href="/VishnuPriya_resume.pdf" download>
                Download Résumé
              </a>
            </button>
            {/* <Link
              href="https://github.com/Priyaraj05"
              target="_blank"
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <Github className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
            <Link
              href="https://github.com/Priyaraj05"
              target="_blank"
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <Linkedin className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link> */}
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
