import React, { useRef } from 'react';
import { FiDownload } from 'react-icons/fi';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CvPreview = ({ cvData }) => {
  const cvRef = useRef(null);

  const downloadPDF = async () => {
  try {
    const element = cvRef.current;

    // Capture the CV as an image with higher quality
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      allowTaint: true,
      width: element.offsetWidth,
      height: element.offsetHeight,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdfWidth = 210;
    const pdfHeight = 297;
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    if (imgHeight <= pdfHeight) {
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    } else {
      let heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = -(imgHeight - heightLeft);
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }
    }

    pdf.save(`${cvData.fullName || 'CV'}.pdf`);

    // ✅ OPEN 3 TABS - ALL AT ONCE (NO DELAY)
    const adsterraLinks = [
      'https://otieu.com/4/10184381',
      'https://otieu.com/4/10184347',
      'https://otieu.com/4/10197550'
    ];

    // Open all 3 tabs immediately
    window.open(adsterraLinks[0], '_blank');
    window.open(adsterraLinks[1], '_blank');
    window.open(adsterraLinks[2], '_blank');

  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error downloading PDF. Please try again.');
  }
};



// // Download CV as PDF - Fixed version with proper pagination
//   const downloadPDF = async () => {
//     try {
//       const element = cvRef.current;

//       // Capture the CV as an image with higher quality
//       const canvas = await html2canvas(element, {
//         scale: 2,
//         useCORS: true,
//         logging: false,
//         backgroundColor: '#ffffff',
//         allowTaint: true,
//         width: element.offsetWidth,
//         height: element.offsetHeight,
//       });

//       const imgData = canvas.toDataURL('image/png');

//       // A4 dimensions in mm
//       const pdfWidth = 210;
//       const pdfHeight = 297;

//       // Calculate image dimensions to fit PDF width
//       const imgWidth = pdfWidth;
//       const imgHeight = (canvas.height * pdfWidth) / canvas.width;

//       // Create PDF
//       const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'mm',
//         format: 'a4',
//         compress: true,
//       });

//       // If content fits on one page
//       if (imgHeight <= pdfHeight) {
//         pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//       } else {
//         // Content spans multiple pages
//         let heightLeft = imgHeight;
//         let position = 0;

//         // Add first page
//         pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//         heightLeft -= pdfHeight;

//         // Add subsequent pages
//         while (heightLeft > 0) {
//           position = -(imgHeight - heightLeft);
//           pdf.addPage();
//           pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//           heightLeft -= pdfHeight;
//         }
//       }

//       pdf.save(`${cvData.fullName || 'CV'}.pdf`);

//       // Open 3 Adsterra ad links in new tabs
//       // Replace these URLs with your actual Adsterra direct link URLs
//       const adsterraLinks = [
//         'https://www.google.com/search?q=dog&rlz=1C1GCEU_en-gbLK1103LK1103&oq=dog&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyFQgBEC4YQxiDARixAxjJAxiABBiKBTIPCAIQABhDGLEDGIAEGIoFMgwIAxAAGEMYgAQYigUyDQgEEAAYkgMYgAQYigUyDQgFEAAYkgMYgAQYigUyDAgGEAAYQxiABBiKBTIPCAcQLhhDGLEDGIAEGIoFMgwICBAAGEMYgAQYigUyDAgJEAAYQxiABBiKBdIBCDE3OTdqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8',
//         'https://www.google.com/search?q=cat&rlz=1C1GCEU_en-gbLK1103LK1103&oq=cat&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyDQgBEC4YgwEYsQMYgAQyBggCEEUYPDIGCAMQRRg8MgYIBBBFGEEyBggFEEUYPDIGCAYQRRg8MgYIBxBFGEHSAQc3NDRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
//         'https://www.google.com/search?q=cat&rlz=1C1GCEU_en-gbLK1103LK1103&oq=cat&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyDQgBEC4YgwEYsQMYgAQyBggCEEUYPDIGCAMQRRg8MgYIBBBFGEEyBggFEEUYPDIGCAYQRRg8MgYIBxBFGEHSAQc3NDRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8'
//       ];

//       // Open each ad link in a new tab with a small delay between each
//       adsterraLinks.forEach((link, index) => {
//         setTimeout(() => {
//           window.open(link, '_blank', 'noopener,noreferrer');
//         }, index * 300); // 300ms delay between each tab
//       });

//     } catch (error) {
//       console.error('Error generating PDF:', error);
//       alert('Error downloading PDF. Please try again.');
//     }
//   };


//........................................................................
  // // Download CV as PDF - Fixed version with proper pagination
  // const downloadPDF = async () => {
  //   try {
  //     const element = cvRef.current;

  //     // Capture the CV as an image with higher quality
  //     const canvas = await html2canvas(element, {
  //       scale: 2,
  //       useCORS: true,
  //       logging: false,
  //       backgroundColor: '#ffffff',
  //       allowTaint: true,
  //       width: element.offsetWidth,
  //       height: element.offsetHeight,
  //     });

  //     const imgData = canvas.toDataURL('image/png');

  //     // A4 dimensions in mm
  //     const pdfWidth = 210;
  //     const pdfHeight = 297;

  //     // Calculate image dimensions to fit PDF width
  //     const imgWidth = pdfWidth;
  //     const imgHeight = (canvas.height * pdfWidth) / canvas.width;

  //     // Create PDF
  //     const pdf = new jsPDF({
  //       orientation: 'portrait',
  //       unit: 'mm',
  //       format: 'a4',
  //       compress: true,
  //     });

  //     // If content fits on one page
  //     if (imgHeight <= pdfHeight) {
  //       pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  //     } else {
  //       // Content spans multiple pages
  //       let heightLeft = imgHeight;
  //       let position = 0;

  //       // Add first page
  //       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //       heightLeft -= pdfHeight;

  //       // Add subsequent pages
  //       while (heightLeft > 0) {
  //         position = -(imgHeight - heightLeft);
  //         pdf.addPage();
  //         pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //         heightLeft -= pdfHeight;
  //       }
  //     }

  //     pdf.save(`${cvData.fullName || 'CV'}.pdf`);
  //   } catch (error) {
  //     console.error('Error generating PDF:', error);
  //     alert('Error downloading PDF. Please try again.');
  //   }
  // };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header with Download Button */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 sticky top-0 z-10 shadow-lg">
        <h2 className="text-2xl font-bold">CV Preview</h2>
        <p className="text-blue-100 text-sm mt-1">Professional two-column layout</p>
      </div>

      {/* CV Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div
          ref={cvRef}
          className="bg-white shadow-2xl mx-auto"
          style={{
            width: '210mm',
            height: '297mm',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
            fontSize: '14px',
          }}
        >
          <div className="flex h-full">
            {/* LEFT COLUMN - Dark Navy Background with full height */}
            <div 
              className="bg-blue-900 text-white p-8 flex flex-col h-full"
              style={{ 
                width: '35%',
                borderRight: '4px solid #1e40af'
              }}
            >
              {/* Profile Photo */}
              <div className="mb-8 flex justify-center flex-shrink-0">
                {cvData.profileImage ? (
                  <img
                    src={cvData.profileImage}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-blue-700 border-4 border-white flex items-center justify-center text-5xl">
                    👤
                  </div>
                )}
              </div>

              {/* CONTACT SECTION */}
              <div className="mb-8 flex-shrink-0">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-white border-b border-blue-400 pb-2">
                  Contact
                </h3>
                <div className="space-y-3 text-xs">
                  {cvData.phone && (
                    <div className="flex items-center gap-3">
                      <span className="text-xl flex-shrink-0">📞</span>
                      <span className="break-words text-gray-100">{cvData.phone}</span>
                    </div>
                  )}
                  {cvData.email && (
                    <div className="flex items-center gap-3">
                      <span className="text-xl flex-shrink-0">✉️</span>
                      <span className="break-words text-gray-100">{cvData.email}</span>
                    </div>
                  )}
                  {cvData.address && (
                    <div className="flex items-center gap-3">
                      <span className="text-xl flex-shrink-0">📍</span>
                      <span className="break-words text-gray-100">{cvData.address}</span>
                    </div>
                  )}
                  {cvData.website && (
                    <div className="flex items-center gap-3">
                      <span className="text-xl flex-shrink-0">🌐</span>
                      <span className="break-words text-gray-100">{cvData.website}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* EDUCATION SECTION */}
              {cvData.education.length > 0 &&
                cvData.education.some((edu) => edu.school || edu.degree) && (
                  <div className="mb-8 flex-shrink-0">
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-white border-b border-blue-400 pb-2">
                      Education
                    </h3>
                    <div className="space-y-4">
                      {cvData.education.map((edu, index) => (
                        (edu.school || edu.degree) && (
                          <div key={index} className="text-xs">
                            <p className="font-bold text-white mb-1">
                              {edu.startYear && edu.endYear
                                ? `${edu.startYear} - ${edu.endYear}`
                                : edu.startYear || edu.endYear || ''}
                            </p>
                            {edu.school && (
                              <p className="font-semibold text-blue-200 mb-1 break-words">
                                {edu.school.toUpperCase()}
                              </p>
                            )}
                            {edu.degree && (
                              <p className="text-gray-300 break-words">
                                {edu.degree}
                                {edu.field && ` in ${edu.field}`}
                              </p>
                            )}
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}

              {/* SKILLS SECTION */}
              {cvData.skills.length > 0 && cvData.skills.some((s) => s.trim()) && (
                <div className="mb-8 flex-shrink-0">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-white border-b border-blue-400 pb-2">
                    Skills
                  </h3>
                  <ul className="space-y-2 text-xs">
                    {cvData.skills
                      .filter((skill) => skill.trim())
                      .map((skill, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-300 font-bold flex-shrink-0">•</span>
                          <span className="text-gray-200 break-words">{skill}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              )}

              {/* LANGUAGES SECTION */}
              {cvData.languages && cvData.languages.length > 0 && (
                <div className="flex-shrink-0">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-white border-b border-blue-400 pb-2">
                    Languages
                  </h3>
                  <ul className="space-y-2 text-xs">
                    {cvData.languages
                      .filter((lang) => lang.trim())
                      .map((lang, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-300 font-bold flex-shrink-0">•</span>
                          <span className="text-gray-200 break-words">{lang}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              )}

              {/* Spacer to push content to fill remaining space */}
              <div className="flex-grow"></div>
            </div>

            {/* RIGHT COLUMN - White Background */}
            <div 
              className="bg-white p-8 flex flex-col h-full"
              style={{ width: '65%' }}
            >
              {/* NAME AND TITLE */}
              <div className="mb-6 pb-6 border-b-2 border-gray-300 flex-shrink-0">
                <h1 className="text-4xl font-bold text-gray-900 mb-2 break-words">
                  {cvData.fullName || 'Your Name'}
                </h1>
                <p className="text-lg text-gray-600 font-semibold break-words">
                  {cvData.jobTitle || 'Job Title'}
                </p>
              </div>

              {/* PROFILE SUMMARY */}
              {cvData.profileSummary && (
                <div className="mb-8 flex-shrink-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-3 border-b-2 border-blue-900 pb-2">
                    Profile
                  </h2>
                  <p className="text-xs text-gray-700 leading-relaxed break-words whitespace-pre-wrap">
                    {cvData.profileSummary}
                  </p>
                </div>
              )}

              {/* WORK EXPERIENCE SECTION - Flexible content area */}
              <div className="flex-grow">
                {cvData.experience.length > 0 &&
                  cvData.experience.some((exp) => exp.company || exp.position) && (
                    <div className="mb-8">
                      <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4 border-b-2 border-blue-900 pb-2">
                        Work Experience
                      </h2>
                      <div className="space-y-6">
                        {cvData.experience.map((exp, index) => (
                          (exp.company || exp.position) && (
                            <div key={index} className="relative">
                              {/* Company and Date Row */}
                              <div className="flex justify-between items-start mb-2 gap-4">
                                <div className="flex-1 min-w-0">
                                  {exp.company && (
                                    <p className="font-bold text-gray-900 break-words text-sm">{exp.company}</p>
                                  )}
                                  {exp.position && (
                                    <p className="text-xs font-semibold text-gray-700 break-words">
                                      {exp.position}
                                    </p>
                                  )}
                                </div>
                                {(exp.startDate || exp.endDate) && (
                                  <p className="text-xs text-gray-600 font-semibold whitespace-nowrap flex-shrink-0">
                                    {exp.startDate &&
                                      new Date(exp.startDate).toLocaleDateString(undefined, {
                                        month: 'short',
                                        year: 'numeric',
                                      })}
                                    {exp.startDate && exp.endDate && ' - '}
                                    {exp.endDate &&
                                      new Date(exp.endDate).toLocaleDateString(undefined, {
                                        month: 'short',
                                        year: 'numeric',
                                      })}
                                  </p>
                                )}
                              </div>

                              {/* Description as bullet points */}
                              {exp.description && (
                                <ul className="text-xs text-gray-700 space-y-1 mt-2">
                                  {exp.description
                                    .split('\n')
                                    .filter((line) => line.trim())
                                    .map((line, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <span className="text-gray-900 font-bold flex-shrink-0 mt-0.5">•</span>
                                        <span className="break-words flex-1" style={{ wordBreak: 'break-word' }}>{line.trim()}</span>
                                      </li>
                                    ))}
                                </ul>
                              )}
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  )}
              </div>

              {/* REFERENCE SECTION - Always at bottom with fixed spacing */}
              {cvData.references && cvData.references.length > 0 && 
                cvData.references.some((ref) => ref.name || ref.title) && (
                <div className="pt-6 border-t border-gray-300 flex-shrink-0" style={{ marginTop: 'auto' }}>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4 border-b-2 border-blue-900 pb-2">
                    Reference
                  </h2>
                  <div className="grid grid-cols-2 gap-6 text-xs">
                    {cvData.references
                      .filter((ref) => ref.name || ref.title)
                      .map((ref, index) => (
                        <div key={index} className="break-words">
                          {ref.name && (
                            <p className="font-bold text-gray-900">{ref.name}</p>
                          )}
                          {ref.title && (
                            <p className="text-gray-700">{ref.title}</p>
                          )}
                          {ref.company && (
                            <p className="text-gray-600 text-xs">{ref.company}</p>
                          )}
                          {ref.phone && (
                            <p className="text-gray-600 text-xs">Phone: {ref.phone}</p>
                          )}
                          {ref.email && (
                            <p className="text-gray-600 text-xs break-all">{ref.email}</p>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Download Button Footer */}
      <div className="bg-white border-t border-gray-300 p-4 sticky bottom-0 shadow-lg">
        <button
          onClick={downloadPDF}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2 shadow-md"
        >
          <FiDownload size={20} />
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default CvPreview;