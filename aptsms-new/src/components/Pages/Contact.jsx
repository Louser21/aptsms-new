import React from 'react';
import { Mail, Phone, MapPin, User, Building } from 'lucide-react';



const ContactCard = ({ name, title, department, institution, location, email, phone, photo, bgColor = "bg-green-700" }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 max-w-sm mx-auto border border-green-100 dark:border-green-900">
      {/* Header with colored background */}
      <div className={`${bgColor} rounded-t-2xl p-3 text-white flex flex-col items-center`}>
        <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3 overflow-hidden border-4 border-white/30">
          {photo ? (
            <img 
              src={`${import.meta.env.BASE_URL}${photo.startsWith('/') ? photo.slice(1) : photo}`}
              alt={name}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <User size={40} className="text-white" />
          )}
        </div>
        <h2 className="text-lg font-bold text-center tracking-tight">{name}</h2>
        <p className="text-green-100 text-center mt-1 text-sm font-medium">{title}</p>
      </div>
      {/* Card content */}
      <div className="p-3 space-y-2">
        <div className="flex items-start space-x-3">
          <Building className="text-green-600 mt-1 flex-shrink-0" size={18} />
          <div>
            <p className="text-gray-800 font-medium leading-tight">{department}</p>
            <p className="text-gray-600 text-sm leading-tight">{institution}</p>
            {location && <p className="text-gray-600 text-xs leading-tight">{location}</p>}
          </div>
        </div>
        {email && (
          <div className="flex items-center space-x-3">
            <Mail className="text-green-600 flex-shrink-0" size={18} />
            <a 
              href={`mailto:${email}`} 
              className="text-green-700 hover:text-green-900 transition-colors text-sm break-all font-medium"
            >
              {email}
            </a>
          </div>
        )}
        {phone && (
          <div className="flex items-center space-x-3">
            <Phone className="text-green-600 flex-shrink-0" size={18} />
            <a 
              href={`tel:${phone}`} 
              className="text-green-700 hover:text-green-900 transition-colors text-sm font-medium"
            >
              {phone}
            </a>
          </div>
        )}
      </div>
      {/* Action buttons */}
      <div className="px-3 pb-3 flex space-x-1">
        {email && (
          <button 
            onClick={() => window.open(`mailto:${email}`)}
            className={`flex-1 ${bgColor} text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold shadow`}
          >
            Send Email
          </button>
        )}
        {phone && (
          <button 
            onClick={() => window.open(`tel:${phone}`)}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold shadow"
          >
            Call
          </button>
        )}
      </div>
    </div>
  );
};

const ContactCards = () => {
  const contacts = [
    {
      name: "Prof. D Srinivasacharya",
      title: "President",
      department: "Department of Mathematics",
      institution: "NIT, Warangal",
      bgColor: "bg-green-800",
      photo: "/images/Srinivasacharya.jpg"
      // photo: "https://example.com/prof-srinivasacharya.jpg" // Add photo URL here
    },
    
    {
      name: "Capt. Prof. N. Ramakrishna",
      title: "General Secretary",
      department: "Department of Mathematics",
      institution: "Andhra University",
      location: "Visakhapatnam",
      email: "captdmrk@gmail.com",
      phone: "+91 9440442737",
      bgColor: "bg-green-800",
      photo:"/images/NRamakrishna.jpg"
      // photo: "https://example.com/prof-ramakrishna.jpg" // Add photo URL here
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 py-6 px-2">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-green-700 mb-4 tracking-tight drop-shadow">Contact</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {contacts.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCards;