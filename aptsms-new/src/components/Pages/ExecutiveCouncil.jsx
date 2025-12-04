import React from 'react';
import { Mail, Phone, User } from 'lucide-react';

const ExecutiveCouncil = () => {
  const councilMembers = [
    {
      id: 1,
      name: "Dr A Chandulal",
      position: "Vice president",
      department: "Assistant Professor",
      organization: "National Sanskrit University, Tirupati",
      image: "/images/chandulal.jpg",
      isHighlighted: false
    },
    {
      id: 2,
      name: "Prof. A Benerji Babu",
      position: "Vice president",
      department: "Department of Mathematics",
      organization: "NIT, Warangal",
      image: "/images/benerji_babu.jpg",
      isHighlighted: false
    },
    {
      id: 3,
      name: "Prof. N. Ramakrishna",
      position: "General Secretary",
      department: "Department of Mathematics",
      organization: "Andhra university, Visakhapatnam",
      email: "captdmrk@gmail.com",
      phone: "+91 9440442737",
      image: "/images/ramakrishna.jpg",
      isHighlighted: false
    },
    {
      id: 4,
      name: "Dr. P Narasimha Swamy",
      position: "Office Secretary",
      department: "Department of Mathematics",
      organization: "GITAM University, Hyderabad Campus",
      email: "swamy.pasham@gmail.com",
      phone: "+91 9948525133",
      image: "/images/narasimha_swamy.jpeg",
      isHighlighted: false
    },
    {
      id: 5,
      name: "Dr.Maddileti Pasupula",
      position: "Treasurer",
      department: "Department of Mathematics",
      organization: "University College of science, Mahatma Gandhi University, Nalgonda",
      email: "madhu.june5@gmail.com",
      phone: "+91 6281897948",
      image: "/images/maddileti_pasupula.jpeg",
      isHighlighted: false
    }
  ];

  const executiveMembers = [
    {
      id: 6,
      name: "Dr.G Upender Reddy",
      position: "Associate Professor",
      department: "Department of Mathematics",
      organization: "Nizam College (A), Osmania University, Basheerbagh, Hyderabad",
      email: "yuviganga@gmail.com",
      phone: "+91 9849133398",
      image: "/images/upender_reddy.jpg"
    },
    {
      id: 7,
      name: "Dr. L P Raj Kumar",
      position: "Associate Professor",
      department: "Department of mathematics",
      organization: "Kakatiya University, Warangal",
      email: "ladalla.raj@gmail.com",
      phone: "+91 9849133398",
      image: "/images/raj_kumar.jpg"
    },
    {
      id: 8,
      name: "Prof. M C Raju",
      position: "Professor",
      department: "Department of Mathematics",
      organization: "JNTUA College of Engineering, Anantapur",
      email: "mcrmaths@gmail.com",
      phone: "+91 9848998649",
      image: "/images/mc_raju.jpeg"
    },
    {
      id: 9,
      name: "Dr. B Ramu Naidu",
      position: "Department of Mathematics",
      department: "",
      organization: "JNTUGV, Vizianagaram",
      image: "/images/ramu_naidu.jpg"
    },
    {
      id: 10,
      name: "Dr. E Rama",
      position: "Associate Professor",
      department: "Department of Mathematics",
      organization: "University College of Science, Saifabad, Osmania University, Hyderabad",
      email: "ramamathsou@gmail.com",
      phone: "+91 9989545301",
      image: "/images/rama.jpeg"
    },
    {
      id: 11,
      name: "Dr. R. Vijayalakshmi",
      position: "Department of Mathematics",
      department: "",
      organization: "SRIT, Anantapur",
      image: "/images/vijayalakshmi.jpg"
    },
    {
      id: 12,
      name: "Dr. P Deepak",
      position: "",
      department: "Department of Mathematics",
      organization: "GJC, Seethanagaram(EG)",
    
     image: "/images/deepak.jpg"
    },
    {
      id: 13,
      name: "Dr. GVV Hema Sunder",
      position: "",
      department: "Department of Mathematics",
      organization: "SIWS College, Affiliated to the University of Mumbai, Wadala, Mumbai",
      email: "hemasundargollakota@gmail.com",
      phone: "+91 9969363495",
    image: "/images/hema.jpeg"
    },
    {
      id: 14,
      name: "Prof. N Kishan (Ex-Officio Member)",
      position: "Head Department of Mathematics",
      department: "",
      organization: "Osmania University, Hyderabad",
      email: "kishan_n@rediffmail.com",
      phone: "+91 9346433343",
      image: "/images/kishan.jpeg"
    },
    {
      id: 15,
      name: "Dr. Munjam Shankar Rao (Ex-Officio Member)",
      position: "",
      department: "Department of Mathematics",
      organization: "Woxsen University, Hyderabad",
   
      image: "/images/shankar.jpg"
    },
    {
      id: 16,
      name: "Prof. E Keshava Reddy (co-opted Member)",
      position: "",
      department: "Department of Mathematics",
      organization: "JNTU Ananthapur, Ananthapur",
      email: "keshava.maths@jntua.ac.in",
      phone: "+91 9440228484",
      image: "/images/keshava.png"
    }
  ];

  const MemberCard = ({ member, isCouncil = false }) => {
    // Check if email is not a placeholder email
    const hasValidEmail = member.email && !member.email.includes('@example');
    const hasValidPhone = member.phone; // Show all valid phone numbers

    return (
      <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${
        member.isHighlighted ? 'border-green-300 bg-gradient-to-br from-green-50 to-white' : 'border-gray-200'
      }`}>
        <div className="p-6 text-center">
          {/* Profile Image */}
          <div className="relative mx-auto mb-4">
            <div className={`w-24 h-24 mx-auto rounded-full overflow-hidden border-4 ${
              member.isHighlighted ? 'border-green-400' : 'border-green-200'
            } shadow-md`}>
              <img 
                src={`${import.meta.env.BASE_URL}${member.image.startsWith('/') ? member.image.slice(1) : member.image}`}
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center"
                style={{ display: 'none' }}
              >
                <User className="w-12 h-12 text-green-600" />
              </div>
            </div>
            {member.isHighlighted && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            )}
          </div>

          {/* Name and Position */}
          <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
          <p className="text-green-600 font-semibold text-sm mb-2">{member.position}</p>
          
          {/* Department and Organization */}
          {member.department && (
            <p className="text-gray-600 text-sm mb-1">{member.department}</p>
          )}
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">{member.organization}</p>

          {/* Contact Information - Only show if valid */}
          <div className="space-y-2">
            {hasValidEmail && (
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <Mail className="w-4 h-4" />
                <span className="text-sm truncate">{member.email}</span>
              </div>
            )}
            {hasValidPhone && (
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{member.phone}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 py-4 px-2">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">APTSMS Leadership</h1>
          <p className="text-gray-600 text-lg">Meet our distinguished executive council and members</p>
        </div>

        {/* Executive Council Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Executive Council</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
            {councilMembers.map((member) => (
              <MemberCard key={member.id} member={member} isCouncil={true} />
            ))}
          </div>
        </section>

        {/* Executive Members Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Executive Members</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {executiveMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-green-200">
          <p className="text-gray-500 text-sm">© 2025 APTSMS. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveCouncil;