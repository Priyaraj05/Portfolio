import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { TabCard } from "./TabCard";

const uw_tacoma = {
  title: "University of Washington",
  desc: "Master's in Computer Science and Systems",
  date: "Sep 23 - Dec 24",
  tech: ["Advanced Algorithms", "Distribured Systems", "Cloud Computing", "Database Systems Design", "Big Data Analytics", "Machine Learning" ],
};
const srit = {
  title: "Sri Ramakrishna Institute of Technology",
  desc: "Bachelor's in Electronics and Communications Engineering",
  date: "Jul 15 - Jun 19",
  tech: ["OOPS", "Computer Networks", "Data Structures"],
};
const uw_db = {
  title: "Database Specialist",
  desc: "University of Washington",
  date: "Oct 23 - Present",
  tech: ["MySQL","NextJS", "Python"], 
};
const hitachi = {
  title: "Software Engineer",
  desc: "Hitachi Energy",
  date: "Oct 21 - Apr 22",
  tech: ["MySQL", "Power BI", "AJAX", "JQuery", "JIRA", "ASP.Net","AngualrJS", "Git", "GitHub"], 
};
const LTMindTree = {
  title: "Software Engineer",
  desc: "LTIMindtree",
  date: "Aug 19 - Oct 21",
  tech: ["Jenkins", "MS SQL Server", "ASP.NET", "ASP.Net Web API", "Git", "GitHub"],
};

export default function AboutSection() {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="About image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base md:text-lg">
          </p>
          <div className="flex flex-row mt-8 ">
            <Tabs defaultValue="education" className="w-full ">
              <TabsList className="bg-[#181818] rounded-md">
                <TabsTrigger
                  className="data-[state=active]:bg-[#610073]"
                  value="education"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-[#610073]"
                  value="skills"
                >
                  Experience
                </TabsTrigger>
              </TabsList>
              <TabsContent value="education">
                <TabCard
                  title={uw_tacoma.title}
                  desc={uw_tacoma.desc}
                  date={uw_tacoma.date}
                  tech={uw_tacoma.tech}
                />
                <TabCard
                  title={srit.title}
                  desc={srit.desc}
                  date={srit.date}
                  tech={srit.tech}
                />
              </TabsContent>
              <TabsContent value="skills">
              <TabCard
                  title={uw_db.title}
                  desc={uw_db.desc}
                  date={uw_db.date}
                  tech={uw_db.tech}
                />
                
                <TabCard
                  title={hitachi.title}
                  desc={hitachi.desc}
                  date={hitachi.date}
                  tech={hitachi.tech}
                />
                <TabCard
                  title={LTMindTree.title}
                  desc={LTMindTree.desc}
                  date={LTMindTree.date}
                  tech={LTMindTree.tech}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
