"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { Card, CardHeader, CardFooter, CardContent } from "../ui/card";
import { PROJECT_INFO } from "@/lib/utils";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <div className="min-h-screen max-w-screen-xl mx-4 xl:mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-center md:text-start mb-6">
        Featured projects
      </h1>
      <div className="grid gap-12 items-center justify-center md:grid-cols-2">
        {PROJECT_INFO.map((project) => (
          <motion.div
            whileHover={{
              // scale: 1.05,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.3 }}
            key={project.id}
            className="w-full p-4 rounded-lg shadow-lg border border-gray-200 bg-#c86f6f hover:bg-yellow-50"
          >
            <Card className="overflow-hidden rounded-lg w-full">
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.name}
                  height={160}
                  width={400}
                  className="w-full h-40 object-cover transition-transform duration-300 transform hover:scale-110"
                />
              </CardHeader>

              <CardContent className="p-4 text-left">
                <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
                <p className="text-sm mb-3">{project.description}</p>

                {/* Bullet Points */}
                <ul className="list-disc list-inside space-y-1">
                  {project.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </CardContent>

              {/* Footer with Link */}
              <CardFooter className="pt-4 text-right">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-800 flex items-center gap-1"
                >
                  <Link size={16} />
                  View Project
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
