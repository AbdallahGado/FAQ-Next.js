"use client";
import React, { useState } from "react";
import FAQ from "./page";

type QAProps = {
  question: string;
  answer: string;
};

const Qa = (props: QAProps) => {
  const [showQA, setShowQA] = useState(false);

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 shadow-xl rounded-xl border border-gray-300 p-6 my-8 max-w-3xl mx-auto transition-transform duration-300 hover:scale-105">
      <button
        className="w-full flex justify-between items-center gap-4 cursor-pointer"
        onClick={() => setShowQA(!showQA)}
      >
        <span className="font-bold text-2xl text-gray-900">
          {props.question}
        </span>
        <span
          className={`text-4xl font-bold ${
            showQA ? "text-red-500 rotate-180" : "text-green-500"
          } transition-transform duration-300`}
        >
          {showQA ? "-" : "+"}
        </span>
      </button>

      {showQA && (
        <div className="mt-6">
          <p className="text-gray-700 text-lg leading-relaxed border-t border-gray-200 pt-4">
            {props.answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default Qa;
