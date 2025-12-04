import React from "react";
import { Button } from "../ui/button.jsx";
import { Link } from "react-router-dom";
import Id from "../Id.jsx";
import Membership from "./Membership.jsx";

function Home() {
  return (
    <div>
      <div
        id="Hero"
        className="flex flex-col items-center justify-center text-center py-4 w-full"
      >
        <div className="flex flex-col items-center md:items-start w-full max-w-7xl">
          <p
            className="px-2 md:pl-4 md:pr-2 text-center md:text-left text-xl md:text-[1.45rem] leading-snug"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            A forum for research workers, young and old, to present their findings and to review the state of the art in their specialized areas of <b>Mathematical Sciences</b>, while bringing together academics for camaraderie and intellectual interaction.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 mt-0 items-start">
        <div className="flex items-center justify-center px-6">
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="maths-pic"
            className="max-w-full max-h-[70vh] lg:w-3/4 w-full h-auto object-contain"
          />
        </div>
        <div className="flex items-start justify-start px-4 lg:px-6">
          <div
            id="objectives"
            className="w-full flex flex-col items-start justify-start bg-green-50 dark:bg-gray-900 md:-ml-4 lg:-ml-12 xl:-ml-16"
          >
            <div className="max-w-4xl w-full px-4 py-4">
              <h1 className="text-green-800 text-[6.5vw] md:text-[3.8vw] lg:text-[2.6vw] font-bold mb-2 text-left font-sans">
                Objectives
              </h1>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 lg:text-[1.0vw] md:text-[1.3vw] text-[3.2vw] space-y-2 text-justify">
                <li>
                  To promote and advance the cause of <b>mathematical sciences</b>{" "}
                  in <b>Andhra Pradesh</b> and <b>Telangana</b>.
                </li>
                <li>
                  To provide a platform for <b>researchers</b>, <b>educators</b>,
                  and <b>students</b> to exchange ideas and present their work.
                </li>
                <li>
                  To organize <b>annual congresses</b>, <b>seminars</b>,{" "}
                  <b>workshops</b>, and <b>lectures</b> for the dissemination of
                  mathematical knowledge.
                </li>
                <li>
                  To encourage <b>interdisciplinary research</b> and{" "}
                  <b>collaboration</b> among mathematical scientists.
                </li>
                <li>
                  To recognize and reward <b>outstanding contributions</b> and{" "}
                  <b>young talent</b> in mathematical sciences.
                </li>
                <li>
                  To foster <b>camaraderie</b> and <b>intellectual interaction</b>{" "}
                  among academics and professionals in the field.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
