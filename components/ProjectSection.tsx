import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { TabCard } from "./TabCard";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="text-white py-8" id="projects">
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>

        <ProjectCard
          title="Luxury Cab Dashboard"
          description="An Admin Dashboard to manage a cab company"
          imageUrl={"/images/luxury-cab-admin-dashboard.svg"}
          gitUrl={"https://github.com/Priyaraj05/luxury-cab-admin-dashboard"}
          demoUrl={"https://luxury-cab-admin-dashboard.vercel.app/"}
        />
      </div>
    </section>
  );
}
