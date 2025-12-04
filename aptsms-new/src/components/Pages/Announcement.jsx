import React, { useState } from 'react';
import { Download, Mail, Building2, CreditCard } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const Announcement = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/public/MembershipRegistration/APTSMS_MEMBERSHIP_FORM.pdf';
    link.download = 'APTSMS_MEMBERSHIP_FORM.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset downloading state after a short delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-4 px-2">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Announcement</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Announcement Card */}
        <Card className="mb-3">
          <CardContent className="p-0">
            {/* Alert Banner */}
            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border-l-4 border-amber-400 p-6">
              <div className="flex items-start">
                <CreditCard className="text-amber-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <div className="text-amber-800">
                  <p className="mb-2">
                    As the <span className="font-semibold">PAN Card</span> is unavailable for APTSMS Society, 
                    <span className="font-semibold"> the payment gateway is still under process</span>.
                  </p>
                  <p>
                    Until the Society obtain PAN card, it is decided to add 
                    <span className="font-semibold"> following temporary provision</span> for new life members to join APTSMS.
                  </p>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="p-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructions for New Members</h2>
                <p className="text-gray-700 mb-4">
                  To all new members, those who are not registered as life member to APTSMS.
                </p>
                <p className="text-gray-700 mb-4">
                  Please pay to the bank and share your <span className="font-semibold">email id</span> and 
                  <span className="font-semibold"> receipt</span> to any one of the following email address:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center bg-white rounded-lg p-3 border border-green-200">
                    <Mail className="text-green-600 mr-3" size={18} />
                    <span className="font-mono text-gray-800">captdrnrk@gmail.com</span>
                    <span className="text-gray-500 ml-2">(or)</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-3 border border-green-200">
                    <Mail className="text-green-600 mr-3" size={18} />
                    <span className="font-mono text-gray-800">madhu.june5@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Bank Details */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Building2 className="mr-2 text-gray-600" size={20} />
                  Bank Details
                </h2>
                
                <div className="bg-white rounded-lg p-4 font-mono text-sm space-y-2">
                  <div className="text-gray-800 font-semibold mb-3">
                    ANDHRA PRADESH and TELANGANA SOCIETY FOR MATHEMATICAL SCIENCES.
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-600">SB A/C:</span>
                      <span className="ml-2 font-semibold">52198267892</span>
                    </div>
                    <div>
                      <span className="text-gray-600">IFSC code:</span>
                      <span className="ml-2 font-semibold">SBIN0020071</span>
                    </div>
                    <div>
                      <span className="text-gray-600">MICR code:</span>
                      <span className="ml-2 font-semibold">500002342</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Branch Code:</span>
                      <span className="ml-2 font-semibold">20071</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <span className="text-gray-600">Bank address:</span>
                    <div className="ml-2 font-semibold">
                      Osmania University, Hyderabad, Arts college premises.
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="px-8 py-3 font-semibold"
                  variant="default"
                >
                  <Download className="mr-2" size={20} />
                  {isDownloading ? 'Downloading...' : 'Download'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <Card className="border-red-200">
          <CardContent className="flex items-start p-6">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div className="text-gray-700">
              <span className="font-semibold text-red-600">Note:</span> Please download Membership Registration form and fill the form send it to 
              <span className="font-mono bg-gray-100 px-2 py-1 rounded ml-1">captdrnrk@gmail.com</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Announcement;