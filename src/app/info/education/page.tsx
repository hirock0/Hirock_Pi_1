"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "XYZ University",
    year: "2020 - 2024",
    description:
      "Focused on software development, web technologies, and database systems.",
  },
  {
    degree: "High School Diploma",
    institution: "ABC High School",
    year: "2018 - 2020",
    description:
      "Graduated with honors, with a strong focus on mathematics and physics.",
  },
  // Add more education entries as needed
];

export default function Education() {
  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 text-gray-900"
        >
          Education
        </motion.h1>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-md p-6 mb-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {edu.degree}
            </h2>
            <p className="text-gray-600">
              {edu.institution} | {edu.year}
            </p>
            <p className="mt-2 text-gray-500">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
