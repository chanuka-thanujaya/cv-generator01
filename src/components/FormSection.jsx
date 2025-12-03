import React from 'react';
import { FiPlus, FiX, FiUpload } from 'react-icons/fi';

const FormSection = ({ cvData, onUpdateCvData }) => {
  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdateCvData({ profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle basic field changes
  const handleBasicChange = (field, value) => {
    onUpdateCvData({ [field]: value });
  };

  // Handle skills change with ad
  const handleAddSkillWithAd = () => {
    // Add the skill first
    handleSkillsChange([...cvData.skills, '']);
    
    // Open ad in new tab (Ad 4)
    const adLink = 'https://www.effectivegatecpm.com/cpdfz7vg0?key=02c361cfa0ecf75c56d9d091d4c5dd24';
    window.open(adLink, '_blank');
  };

  // Handle skills change
  const handleSkillsChange = (skillsArray) => {
    onUpdateCvData({ skills: skillsArray });
  };

  // Handle languages change
  const handleLanguagesChange = (languagesArray) => {
    onUpdateCvData({ languages: languagesArray });
  };

  // Handle add language (no ad function needed, button calls directly)
  const handleAddLanguageWithAd = () => {
    handleLanguagesChange([...(cvData.languages || []), '']);
  };

  // Add education entry
  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      school: '',
      degree: '',
      field: '',
      startYear: '',
      endYear: '',
    };
    onUpdateCvData({
      education: [...cvData.education, newEducation],
    });
  };

  // Update education entry
  const updateEducation = (id, field, value) => {
    const updatedEducation = cvData.education.map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    onUpdateCvData({ education: updatedEducation });
  };

  // Delete education entry
  const deleteEducation = (id) => {
    const updatedEducation = cvData.education.filter((edu) => edu.id !== id);
    onUpdateCvData({ education: updatedEducation });
  };

  // Add experience entry
  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    onUpdateCvData({
      experience: [...cvData.experience, newExperience],
    });
  };

  // Update experience entry
  const updateExperience = (id, field, value) => {
    const updatedExperience = cvData.experience.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    onUpdateCvData({ experience: updatedExperience });
  };

  // Delete experience entry
  const deleteExperience = (id) => {
    const updatedExperience = cvData.experience.filter((exp) => exp.id !== id);
    onUpdateCvData({ experience: updatedExperience });
  };

  // Add reference entry
  const addReference = () => {
    const newReference = {
      id: Date.now(),
      name: '',
      title: '',
      company: '',
      phone: '',
      email: '',
    };
    onUpdateCvData({
      references: [...(cvData.references || []), newReference],
    });
  };

  // Update reference entry
  const updateReference = (id, field, value) => {
    const updatedReferences = (cvData.references || []).map((ref) =>
      ref.id === id ? { ...ref, [field]: value } : ref
    );
    onUpdateCvData({ references: updatedReferences });
  };

  // Delete reference entry
  const deleteReference = (id) => {
    const updatedReferences = (cvData.references || []).filter((ref) => ref.id !== id);
    onUpdateCvData({ references: updatedReferences });
  };

  return (
    <div className="h-full overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 sticky top-0 z-10 shadow-lg">
        <h2 className="text-2xl font-bold">Edit Your CV</h2>
        <p className="text-blue-100 text-sm mt-1">Fill in your information below</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Profile Image Section */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Profile Picture
          </label>
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 bg-gray-200 rounded-full overflow-hidden border-2 border-gray-300">
              {cvData.profileImage ? (
                <img
                  src={cvData.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-2xl">👤</span>
                </div>
              )}
            </div>
            <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition flex items-center gap-2">
              <FiUpload size={18} />
              Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Personal Information</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              value={cvData.fullName}
              onChange={(e) => handleBasicChange('fullName', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Job Title"
              value={cvData.jobTitle || ''}
              onChange={(e) => handleBasicChange('jobTitle', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={cvData.email}
              onChange={(e) => handleBasicChange('email', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={cvData.phone}
              onChange={(e) => handleBasicChange('phone', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Address"
              value={cvData.address}
              onChange={(e) => handleBasicChange('address', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Website (e.g., www.yourwebsite.com)"
              value={cvData.website || ''}
              onChange={(e) => handleBasicChange('website', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Profile Summary Section */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Professional Summary</h3>
          <textarea
            placeholder="Write a brief summary about yourself..."
            value={cvData.profileSummary}
            onChange={(e) => handleBasicChange('profileSummary', e.target.value)}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Skills Section */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Skills</h3>
          <div className="space-y-2">
            {cvData.skills.map((skill, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter a skill"
                  value={skill}
                  onChange={(e) => {
                    const newSkills = [...cvData.skills];
                    newSkills[index] = e.target.value;
                    handleSkillsChange(newSkills);
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => {
                    const newSkills = cvData.skills.filter((_, i) => i !== index);
                    handleSkillsChange(newSkills);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition"
                >
                  <FiX size={20} />
                </button>
              </div>
            ))}
            <button
              onClick={handleAddSkillWithAd}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition flex items-center justify-center gap-2 mt-2"
            >
              <FiPlus size={18} />
              Click to Unlock Add Skill
            </button>
          </div>
        </div>

        {/* Languages Section */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Languages</h3>
          <div className="space-y-2">
            {(cvData.languages || []).map((language, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter a language"
                  value={language}
                  onChange={(e) => {
                    const newLanguages = [...(cvData.languages || [])];
                    newLanguages[index] = e.target.value;
                    handleLanguagesChange(newLanguages);
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => {
                    const newLanguages = (cvData.languages || []).filter(
                      (_, i) => i !== index
                    );
                    handleLanguagesChange(newLanguages);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition"
                >
                  <FiX size={20} />
                </button>
              </div>
            ))}
            <button
              onClick={handleAddLanguageWithAd}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition flex items-center justify-center gap-2 mt-2"
            >
              <FiPlus size={18} />
              Add Language
            </button>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Education</h3>
            <button
              onClick={addEducation}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition flex items-center gap-1"
            >
              <FiPlus size={16} />
              Add
            </button>
          </div>
          <div className="space-y-4">
            {cvData.education.map((edu) => (
              <div key={edu.id} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex justify-end mb-2">
                  <button
                    onClick={() => deleteEducation(edu.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
                  >
                    <FiX size={16} />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="School/University"
                  value={edu.school}
                  onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <input
                  type="text"
                  placeholder="Field of Study"
                  value={edu.field}
                  onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Start Year"
                    value={edu.startYear}
                    onChange={(e) => updateEducation(edu.id, 'startYear', e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="End Year"
                    value={edu.endYear}
                    onChange={(e) => updateEducation(edu.id, 'endYear', e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Work Experience</h3>
            <button
              onClick={addExperience}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition flex items-center gap-1"
            >
              <FiPlus size={16} />
              Add
            </button>
          </div>
          <div className="space-y-4">
            {cvData.experience.map((exp) => (
              <div key={exp.id} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex justify-end mb-2">
                  <button
                    onClick={() => deleteExperience(exp.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
                  >
                    <FiX size={16} />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <input
                  type="text"
                  placeholder="Position"
                  value={exp.position}
                  onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <input
                    type="month"
                    placeholder="Start Date"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="month"
                    placeholder="End Date"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <textarea
                  placeholder="Job Description (one point per line)"
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Reference Section */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">References</h3>
            <button
              onClick={addReference}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition flex items-center gap-1"
            >
              <FiPlus size={16} />
              Add
            </button>
          </div>
          <div className="space-y-4">
            {(cvData.references || []).map((ref) => (
              <div key={ref.id} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex justify-end mb-2">
                  <button
                    onClick={() => deleteReference(ref.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
                  >
                    <FiX size={16} />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  value={ref.name}
                  onChange={(e) => updateReference(ref.id, 'name', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <input
                  type="text"
                  placeholder="Title"
                  value={ref.title}
                  onChange={(e) => updateReference(ref.id, 'title', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={ref.company}
                  onChange={(e) => updateReference(ref.id, 'company', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={ref.phone}
                  onChange={(e) => updateReference(ref.id, 'phone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={ref.email}
                  onChange={(e) => updateReference(ref.id, 'email', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;