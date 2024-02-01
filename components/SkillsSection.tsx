import Image from "next/image";
import React from "react";

const techImages = [
{id:0,src: "/images/c-icon.svg", alt: "C"},
{id:1,src: "/images/java-icon.svg", alt: "Java"},
{id:1,src: "/images/python-logo.svg", alt: "Python"},
{id:2,src: "/images/mysql-icon.svg", alt: "MySQL"},
{id:3,src: "/images/unofficial_javascript_logo_2.svg", alt: "JavaScript"},
{id:4,src: "/images/postgresql_elephant.svg", alt: "PostgreSQL"},
{id:5,src: "/images/sql-database-generic.svg", alt: "SQL"},
{id:6,src: "/images/net_core_logo.svg", alt: ".NET"},
{id:7,src: "/images/nextjs-icon.svg", alt: "NextJS"},
{id:8,src: "/images/react-icon.svg", alt: "ReactJS"},
{id:9,src: "/images/angular.svg", alt: "AngularJS"},
{id:10,src:"/images/git-icon-white.svg", alt: "GIT"},
{id:11,src: "/images/AWS-logo.svg", alt: "AWS Services"},
{id:12,src: "/images/Power_BI_Logo.svg", alt: "Power BI"},
{id:13,src: "/images/Linux.svg", alt: "Linux"},
{id:13,src: "/images/visual-studio-icon.svg", alt: "Visual Studio"}
];  

export default function SkillsSection() {
  return (
    <section className="text-white py-8" id="skills">
      <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 grid-rows-3 gap-2">
          {techImages.map((imageItem, index) => (
            <div className="group relative overflow-hidden border-1 rounded-2xl flex items-center justify-center" key={imageItem.id}>
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <Image
                      src={imageItem.src}
                      alt={imageItem.alt}
                      width={150}
                      height={150}
                      className="group-hover:scale-110 transition-all duration-500"
                      />
                <div className="absolute -bottom-full left-5 group-hover:bottom-14 transition-all duration-500 z-50">
                  <span className=" text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-3xl text-gradient">{imageItem.alt}</span>
                </div>
            </div>
          ))}
      </div>
    </section>
  );
}

