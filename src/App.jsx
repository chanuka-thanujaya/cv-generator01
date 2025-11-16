// import React, { useState } from 'react';
// import FormSection from './components/FormSection';
// import CvPreview from './components/CvPreview';

// function App() {
//   // State for all CV data
//   const [cvData, setCvData] = useState({
//     profileImage: '',
//     fullName: '',
//     jobTitle: '',
//     email: '',
//     phone: '',
//     address: '',
//     website: '',
//     profileSummary: '',
//     skills: [],
//     languages: [],
//     education: [
//       {
//         id: 1,
//         school: '',
//         degree: '',
//         field: '',
//         startYear: '',
//         endYear: '',
//       },
//     ],
//     experience: [
//       {
//         id: 1,
//         company: '',
//         position: '',
//         startDate: '',
//         endDate: '',
//         description: '',
//       },
//     ],
//     references: [
//       {
//         id: 1,
//         name: '',
//         title: '',
//         company: '',
//         phone: '',
//         email: '',
//       },
//     ],
//   });

//   // Update CV data
//   const handleUpdateCvData = (updates) => {
//     setCvData((prev) => ({
//       ...prev,
//       ...updates,
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-6 shadow-xl">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-4xl font-bold">CV Generator</h1>
//           <p className="text-blue-100 mt-2">Create your professional resume instantly with real-time preview</p>
//         </div>
//       </div>

//       {/* Main Container */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Section - Form */}
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <FormSection cvData={cvData} onUpdateCvData={handleUpdateCvData} />
//           </div>

//           {/* Right Section - CV Preview */}
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-8 h-fit">
//             <CvPreview cvData={cvData} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import FormSection from './components/FormSection';
import CvPreview from './components/CvPreview';

function App() {
  // State for all CV data
  const [cvData, setCvData] = useState({
    profileImage: '',
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    profileSummary: '',
    skills: [],
    languages: [],
    education: [
      {
        id: 1,
        school: '',
        degree: '',
        field: '',
        startYear: '',
        endYear: '',
      },
    ],
    experience: [
      {
        id: 1,
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ],
    references: [
      {
        id: 1,
        name: '',
        title: '',
        company: '',
        phone: '',
        email: '',
      },
    ],
  });

  // Update CV data
  const handleUpdateCvData = (updates) => {
    setCvData((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  // Load AdSense script on component mount
  useEffect(() => {
    // AdSense script - Replace with your AdSense client ID
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Push ads after component renders
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ============================================
          AD SPACE 1: TOP BANNER (Horizontal Banner Ad)
          Replace data-ad-slot with your AdSense ad slot ID
          Recommended size: 728x90 or 970x90
          ============================================ */}
      <div className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXX"
            data-ad-slot="YYYYYYYYYY"
            data-ad-format="horizontal"
            data-full-width-responsive="true"
          ></ins>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-6 shadow-xl">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">CV Generator</h1>
          <p className="text-blue-100 mt-2">Create your professional resume instantly with real-time preview</p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ============================================
              AD SPACE 2: LEFT SIDEBAR (Vertical Banner Ad)
              Recommended size: 160x600 or 120x600
              Only shows on large screens
              ============================================ */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="sticky top-8">
              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-XXXXXXXXXX"
                data-ad-slot="YYYYYYYYYY"
                data-ad-format="vertical"
                data-full-width-responsive="true"
              ></ins>
            </div>
          </div>

          {/* Left Section - Form */}
          <div className="lg:col-span-5 bg-white rounded-lg shadow-lg overflow-hidden">
            <FormSection cvData={cvData} onUpdateCvData={handleUpdateCvData} />
          </div>

          {/* Right Section - CV Preview */}
          <div className="lg:col-span-5 bg-white rounded-lg shadow-lg overflow-hidden sticky top-8 h-fit">
            <CvPreview cvData={cvData} />
          </div>
        </div>

        {/* ============================================
            AD SPACE 3: MIDDLE CONTENT (Horizontal Banner Ad)
            Shows between form and bottom content on mobile
            Recommended size: 728x90 or 320x100 (mobile)
            ============================================ */}
        <div className="w-full bg-white rounded-lg shadow-sm mt-8 p-4">
          <div className="flex justify-center">
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-XXXXXXXXXX"
              data-ad-slot="YYYYYYYYYY"
              data-ad-format="horizontal"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div>

        {/* ============================================
            AD SPACE 4: BOTTOM BANNER (Horizontal Banner Ad)
            Recommended size: 728x90 or 970x250
            ============================================ */}
        <div className="w-full bg-white rounded-lg shadow-sm mt-8 p-4">
          <div className="flex justify-center">
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-XXXXXXXXXX"
              data-ad-slot="YYYYYYYYYY"
              data-ad-format="horizontal"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div>
      </div>

      {/* ============================================
          AD SPACE 5: FOOTER STICKY AD (Optional)
          Sticky bottom ad that stays visible while scrolling
          Recommended size: 728x90 or 320x50 (mobile)
          Uncomment if you want a sticky footer ad
          ============================================ */}
      {/* <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXX"
            data-ad-slot="YYYYYYYYYY"
            data-ad-format="horizontal"
            data-full-width-responsive="true"
          ></ins>
        </div>
      </div> */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2024 CV Generator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;