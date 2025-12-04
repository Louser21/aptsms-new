import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, User, Globe, Award, ChevronRight, Star, BookOpen, Users } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

const ConferenceCard = ({ conference, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getOrdinal = (num) => {
    const suffixes = ["st", "nd", "rd"];
    const remainder = num % 100;
    return num + (suffixes[(remainder - 21) % 10] || suffixes[remainder - 1] || "th");
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="relative bg-white rounded-3xl p-8 border-2 border-green-100 hover:border-green-300 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-green-100/50 overflow-hidden">
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div 
          className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
          animate={{ rotate: isHovered ? 0 : 12 }}
          transition={{ duration: 0.3 }}
        >
          {index + 1}
        </motion.div>

        
        <motion.div 
          className="flex items-center gap-3 mb-6"
          initial={{ x: -20, opacity: 0 }}  
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
        >
          <motion.div 
            className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Globe className="w-6 h-6 text-green-600" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              {getOrdinal(index + 1)} International Conference
            </h3>
            <div className="flex items-center gap-2 text-green-600">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">{conference.date}</span>
            </div>
          </div>
        </motion.div>

        
        <motion.div 
          className="mb-6 p-4 bg-green-50 rounded-xl border border-green-100"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <motion.div 
              className="p-2 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <User className="w-5 h-5 text-emerald-600" />
            </motion.div>
            <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">Conference President</span>
          </div>
          <p className="text-xl font-semibold text-gray-800">{conference.president}</p>
        </motion.div>

        
        <motion.div 
          className="mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <motion.div 
              className="p-2 bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="w-5 h-5 text-rose-500" />
            </motion.div>
            <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">Host Institution</span>
          </div>
          <p className="text-gray-700 leading-relaxed">{conference.host}</p>
        </motion.div>

        
        <motion.div 
          className="absolute bottom-4 right-4"
          initial={{ x: 20, opacity: 0 }}
          animate={{ 
            x: isHovered ? 0 : 20, 
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="w-6 h-6 text-green-500" />
        </motion.div>

        
        <motion.div 
          className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-4 left-4 w-1 h-1 bg-emerald-400 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </div>
    </motion.div>
  );
};

export default function InternationalConferencesPage() {
  const conferences = [
    {
      date: "Aug. 9-11, 2019",
      president: "Prof. E.Keshava Reddy",
      host: "Department of Mathematics, GITAM, Hyderabad Campus, Hyderabad, Telangana"
    },
    {
      date: "Aug. 7-9, 2020",
      president: "Prof. E.Keshava Reddy",
      host: "Department of Mathematics, Annamacharya Institute of Technology & Sciences(AUTONOMOUS), Rajampet, Kadapa, Andhra Pradesh"
    },
    {
      date: "Aug. 27-28, 2021",
      president: "Prof. E.Keshava Reddy",
      host: "Departments of Mathematics, Physics, Electronics, Statistics and Computer Science of Aurora's Degree and PG College, Hyderabad, Telangana"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-emerald-50/20 relative overflow-hidden">
      
      <div className="container mx-auto px-2 py-4 relative z-10">
        
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.div 
              className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Globe className="w-6 h-6 text-green-600" />
              <span className="text-green-700 font-medium">Global Mathematical Excellence</span>
            </motion.div>
          </motion.div>
            
          <motion.h1 
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6 leading-tight"
            variants={itemVariants}
          >
            International
            <br />
            Conferences
          </motion.h1>
            
          <motion.p 
            className="text-sm text-gray-600 mb-3 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Fostering global collaboration and advancing mathematical research through prestigious international conferences
          </motion.p>
        </motion.div>

        
        <motion.div 
          className="grid gap-2 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {conferences.map((conference, index) => (
            <ConferenceCard
              key={index}
              conference={conference}
              index={index}
            />
          ))}
        </motion.div>

        
        <motion.div 
          className="text-center mt-16 pt-12 border-t border-green-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 text-gray-500 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Star className="w-5 h-5 text-green-500" />
            <span>Advancing Mathematical Sciences Globally</span>
            <Star className="w-5 h-5 text-green-500" />
          </motion.div>
          <p className="text-gray-400 text-sm">
            Each conference represents a milestone in international mathematical collaboration and research excellence.
          </p>
        </motion.div>
      </div>

      
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
}