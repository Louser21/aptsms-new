import React from 'react';
import { Mail, User } from 'lucide-react';

const PresidentMessage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-2 md:p-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-3xl font-bold text-gray-800 mb-2">
            President's Message
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100 p-4">
          <div className="flex flex-col md:flex-row items-center mb-3 gap-2">
            <img 
              src={`${import.meta.env.BASE_URL}images/Srinivasacharya.jpg`} 
              alt="Prof. D Srinivasacharya"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-green-400 shadow-lg mb-4 md:mb-0"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-green-700 mb-1">Prof. D Srinivasacharya</h2>
              <div className="text-gray-600 font-medium mb-2">PRESIDENT</div>
              <div className="text-gray-500 text-sm">Department of Mathematics, NIT Warangal, Telangana</div>
            </div>
          </div>
          <div className="prose prose-sm max-w-none text-gray-800 leading-relaxed space-y-3 text-justify">
            <div className="text-lg font-medium text-gray-900 mb-3">
              Dear APTSMS members, friends,
            </div>
            <p className="text-lg leading-8">APTSMS, a well-established forum for researchers in all areas of Mathematics, Statistics, and Operations Research, has gained the admiration of all researchers, including those from various research/academic organisations. This has been accomplished because of the enormous selfless hard work and dedication from a certain number of people from the inception. Several eminent mathematicians in the state have acted as presidents and other office bearers and contributed to the development activities of the society. I hope, in the coming years, it will be able to attract more people under the umbrella of APTSMS.</p>
            <p className="text-lg leading-8">I am grateful to all the members of APTSMS for electing me as President. I promise to give my honest and sincere efforts in carrying out my responsibility, to work selflessly and to do my best possible to promote APTSMS to a higher level.</p>
            <p className="text-lg leading-8">APTSMS has utmost responsibility to carry out more tasks for the benefit of researchers in Mathematics. Among them, starting some APTSMS chapters to conduct local activities, giving recognition to established researchers, are some that can be given due consideration in near future.</p>
            <p className="text-lg leading-8">The Society aspires to organize symposia, seminars, endowment lectures, exhibitions, international conference, quizzes in university and engineering colleges and institute of higher education to promote the importance and applications of Mathematics in various fields of Science and Technology. To organize such events, interested organizations, colleges, universities, and other institutions should get in contact with the APTSMS office.</p>
            <p className="text-lg leading-8">The faculty, research scholars and students of various universities, institutions and colleges in the states of Andhra Pradesh and Telangana can register as life members, annual members and student members of this august body.</p>
            <p className="text-lg leading-8">Institutions, Organisations and Educational institutions, can also register as corporate members.</p>
          </div>
          <div className="mt-16 pt-8">
            <div className="text-lg text-gray-800 space-y-2 text-right">
              <p className="font-semibold text-xl">Prof. D Srinivasacharya,</p>
              <p className="font-medium text-gray-700">PRESIDENT,</p>
              <p className="text-gray-600">Department of Mathematics,</p>
              <p className="text-gray-600">NIT, Warangal</p>
              <div className="mt-4">
                <a 
                  href="mailto:dsc@nitw.ac.in" 
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium text-lg"
                >
                  {/* <Mail size={20} /> */}
                  <span>dsc@nitw.ac.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresidentMessage;