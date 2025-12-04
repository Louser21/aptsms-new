import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, User, GraduationCap, Search, Filter } from 'lucide-react';

const CongressPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('');

  const congressData = [
    { id: 1, congress: "Inaugural and First Congress", date: "Sept. 5-6, 1987", president: "Prof. G.Lakshmi Narayana", host: "Jawaharlal Nehru Technological University, Hyderabad" },
    { id: 2, congress: "II Congress", date: "Dec. 13-14, 1988", president: "Prof. G.Lakshmi Narayana", host: "Sri Krishnadevaraya University, Anantapur" },
    { id: 3, congress: "III Congress", date: "Dec. 7-8, 1989", president: "Prof. D.Ramakotaiah", host: "Nagarjuna University, Nagarjuna Nagar, Guntur" },
    { id: 4, congress: "IV Congress", date: "Sep. 6, 1990", president: "Prof. D.Ramakotaiah", host: "Andhra University, Visakhapatnam" },
    { id: 5, congress: "V Congress", date: "Oct. 29-30, 1993", president: "Prof. K.Sitaram", host: "REC., Warangal" },
    { id: 6, congress: "VI Congress", date: "Oct. 18-20, 1996", president: "Prof. P.V.Arunachalam", host: "Nagarjuna University, Nagarjuna Nagar, Guntur" },
    { id: 7, congress: "VII Congress", date: "Oct. 5-6, 1997", president: "Prof. K.L.N.Swamy", host: "Dr.L.Bullayya Post Graduate College Visakhapatnam" },
    { id: 8, congress: "VIII Congress", date: "Jan. 29-30, 2000", president: "Prof. I.H.Nagaraja Rao", host: "Ideal College of Arts & Sciences (P.G.Courses), Kakinada" },
    { id: 9, congress: "IX Congress", date: "Feb. 23-25, 2001", president: "Prof. I.H.Nagaraja Rao", host: "A.U.Dr.B.Ambedkar P.G.Centre, Etcherla, Srikakulam" },
    { id: 10, congress: "X Congress", date: "Jan. 18-20, 2002", president: "Prof. D.V.Krishna", host: "Sri Ramakrishna Post Graduate College, Nandyal" },
    { id: 11, congress: "XI Congress", date: "Jan. 31-Feb.2, 2003", president: "Prof. D.V.Krishna", host: "Sri Padmavathi Mahila Viswavidyalayam, Tirupathi" },
    { id: 12, congress: "XII Congress", date: "Dec. 12-14, 2003", president: "Prof. Sivarama Prasad", host: "Osmania University, Hyderabad" },
    { id: 13, congress: "XIII Congress", date: "Dec. 10-12, 2004", president: "Prof.T.K.V.Iyengar", host: "NIT, Warangal" },
    { id: 14, congress: "XIV Congress", date: "Sep. 9-11, 2005", president: "Prof. U.M.Swamy", host: "GITAM, Visakhapatnam" },
    { id: 15, congress: "XV Congress", date: "August 7-9, 2006", president: "Prof. U.M.Swamy", host: "Dept. of Mathematics, Kakatiya University" },
    { id: 16, congress: "XVI Congress", date: "Dec. 8-10, 2007", president: "Prof. D.Ramamurthy", host: "NGRI, Hyderabad" },
    { id: 17, congress: "XVII Congress", date: "Feb. 13-15, 2009", president: "Prof. D.Ramamurthy", host: "MallaReddy Engineering College, Hyderabad" },
    { id: 18, congress: "XVIII Congress", date: "Dec. 11-13, 2010", president: "Prof.V.V.HaraGopal", host: "Mrs A.V.N. College, Visakhapatnam" },
    { id: 19, congress: "XIX Congress", date: "Nov. 12-14, 2010", president: "Prof.V.V.HaraGopal", host: "Jyothishmathi Institute of Technology & Science, Karimnagar" },
    { id: 20, congress: "XX Congress", date: "Dec. 09-11, 2011", president: "Prof L.Anand Babu", host: "Swarna Bharathi Institute of Science & Technology, Khammam" },
    { id: 21, congress: "XXI Congress", date: "Dec 07-09, 2012", president: "Prof G.Sarojamma", host: "Dept.Of Mathematics, S.V.University, Tirupathi" },
    { id: 22, congress: "XXII Congress", date: "Dec 13-15, 2013", president: "Prof G.Sarojamma", host: "Anurag Group of Institutions, Ghatkesar, Ranga Reddy(Dist)" },
    { id: 23, congress: "XXIII Congress", date: "Dec 12-14, 2014", president: "Prof S.Sreenadh", host: "Vignan's University, Vadlamudi, Guntur" },
    { id: 24, congress: "XXIV Congress", date: "Dec 11-13, 2015", president: "Prof.B.Maheswari", host: "Vignan Bharathi Institute of Technology, Aushapur(village), Ghatkesar" },
    { id: 25, congress: "XXV Congress", date: "Dec 9-11, 2016", president: "Prof.B.Maheswari", host: "NBKR Institute of Science & Technology, Vidyanagar, Near Gudur, Nellore, AP" },
    { id: 26, congress: "XXVI Congress", date: "August 11-13, 2017", president: "Prof.T.Srinivas", host: "Department of Mathematics, Kakatiya University, Hanamkonda, Warangal, TS" },
    { id: 27, congress: "XXVII Congress", date: "Dec 8-10, 2018", president: "Prof.T.Srinivas", host: "Department of Mathematics (PG & UG), Maris Stella College (Autonomous), Vijayawada, AP" },
    { id: 28, congress: "XXVIII Congress", date: "Dec 6-8, 2019", president: "Prof.E.Keshava Reddy", host: "Department of Mathematics, National Sanskrit University, Tirupathi, A.P" },
    { id: 29, congress: "XXIX Congress", date: "Dec 3-5, 2020", president: "Prof.E.Keshava Reddy", host: "Department of Mathematics, Mahatma Gandhi University, Nalgonda, Telangana" },
    { id: 30, congress: "XXX Congress", date: "March 12-14, 2022", president: "Prof.E.Keshava Reddy", host: "Department of Mathematics, Osmania University, Hyderabad, Telangana" },
    { id: 31, congress: "XXXI Congress", date: "October 28-30, 2023", president: "Prof N. Kishan", host: "Department of Mathematics, NATIONAL INSTITUTE OF TECHNOLOGY Warangal, Telangana" }
  ];

  const filteredData = congressData.filter(item => {
    const matchesSearch = 
      item.congress.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.president.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = filterYear === '' || item.date.includes(filterYear);
    
    return matchesSearch && matchesYear;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const years = [...new Set(congressData.map(item => {
    const year = item.date.match(/\d{4}/);
    return year ? year[0] : null;
  }).filter(Boolean))].sort();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100 py-4 px-2">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-200 opacity-10"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-6"
            whileHover={{ scale: 1.05, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <GraduationCap className="text-white" size={40} />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Annual Congress History
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive record of all annual congresses from 1987 to 2023, showcasing the evolution and growth of our academic community.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 mb-3 shadow-lg border border-green-100"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" size={20} />
              <input
                type="text"
                placeholder="Search by congress, president, or host institution..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" size={20} />
              <select
                className="pl-10 pr-8 py-3 rounded-xl border border-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-300 bg-white"
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
              >
                <option value="">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredData.length} of {congressData.length} congresses
          </div>
        </motion.div>

        {/* Congress Cards Grid */}
        <motion.div
          className="grid gap-2 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {filteredData.map((congress, index) => (
            <motion.div
              key={congress.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 relative overflow-hidden group cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              layout
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Congress Number Badge */}
              <div className="absolute top-4 right-4">
                <motion.div
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
                  whileHover={{ scale: 1.1 }}
                >
                  #{congress.id}
                </motion.div>
              </div>

              <div className="relative z-10">
                {/* Congress Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 pr-12">
                  {congress.congress}
                </h3>

                {/* Date */}
                <div className="flex items-center text-green-600 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span className="font-medium">{congress.date}</span>
                </div>

                {/* President */}
                <div className="flex items-start text-gray-700 mb-3">
                  <User size={16} className="mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">President</div>
                    <div className="font-medium">{congress.president}</div>
                  </div>
                </div>

                {/* Host */}
                <div className="flex items-start text-gray-700">
                  <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Host Institution</div>
                    <div className="font-medium text-sm leading-tight">{congress.host}</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
             
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Footer */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold mb-4">Congress Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div>
              <div className="text-3xl font-bold">{congressData.length}</div>
              <div className="text-green-100">Total Congresses</div>
            </div>
            <div>
              <div className="text-3xl font-bold">37</div>
              <div className="text-green-100">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{new Set(congressData.map(c => c.president)).size}</div>
              <div className="text-green-100">Distinguished Presidents</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CongressPage;