"use client"
import React, { useState, useEffect } from 'react';
import { Brain, Target, TrendingUp, BookOpen, Star, ChevronRight, Zap, Award, Clock, Users, ArrowRight, Sparkles, CheckCircle, Play, ExternalLink } from 'lucide-react';

const AICareerGuidance = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userProfile, setUserProfile] = useState({
    skills: [],
    experience: '',
    interests: [],
    goals: [],
    timeCommitment: ''
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [roadmap, setRoadmap] = useState(null);

  const skillCategories = {
    'Frontend Development': ['HTML/CSS', 'JavaScript', 'React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    'Backend Development': ['Node.js', 'Python', 'Java', 'C#', 'PHP', 'Ruby', 'Go', 'Rust'],
    'Database': ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'GraphQL'],
    'DevOps': ['Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD', 'Jenkins', 'Terraform'],
    'Mobile Development': ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
    'Data Science': ['Python', 'R', 'SQL', 'Machine Learning', 'TensorFlow', 'PyTorch', 'Pandas'],
    'AI/ML': ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'TensorFlow', 'PyTorch'],
    'Design': ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Sketch', 'Prototyping']
  };

  const experienceLevels = [
    { value: 'beginner', label: 'Beginner (0-1 years)', icon: '🌱' },
    { value: 'intermediate', label: 'Intermediate (1-3 years)', icon: '🌿' },
    { value: 'advanced', label: 'Advanced (3-5 years)', icon: '🌳' },
    { value: 'expert', label: 'Expert (5+ years)', icon: '🏆' }
  ];

  const careerPaths = [
    'Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'DevOps Engineer',
    'Mobile Developer', 'Data Scientist', 'ML Engineer', 'UI/UX Designer', 'Product Manager'
  ];

  // Simulate AI analysis
  const analyzeProfile = async () => {
    setIsAnalyzing(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Generate AI roadmap based on user profile
    const generatedRoadmap = generateRoadmap(userProfile);
    setRoadmap(generatedRoadmap);
    setIsAnalyzing(false);
    setCurrentStep(4);
  };

  const generateRoadmap = (profile) => {
    // Simplified AI logic for demo
    const hasReactSkills = profile.skills.some(skill => 
      skill.name.includes('React') || skill.name.includes('JavaScript')
    );

    return {
      recommendedPath: hasReactSkills ? 'Full Stack Developer' : 'Frontend Developer',
      currentLevel: 'Intermediate',
      nextMilestone: 'Senior Developer',
      timeToComplete: '6-12 months',
      phases: [
        {
          title: 'Foundation Strengthening',
          duration: '2-3 months',
          skills: ['Advanced JavaScript', 'TypeScript', 'Testing'],
          resources: [
            { title: 'JavaScript: The Definitive Guide', type: 'book', rating: 4.8 },
            { title: 'TypeScript Handbook', type: 'documentation', rating: 4.9 },
            { title: 'Jest Testing Framework', type: 'course', rating: 4.7 }
          ]
        },
        {
          title: 'Advanced Frontend',
          duration: '2-3 months',
          skills: ['Next.js', 'State Management', 'Performance Optimization'],
          resources: [
            { title: 'Next.js Complete Course', type: 'course', rating: 4.9 },
            { title: 'Redux Toolkit Guide', type: 'tutorial', rating: 4.6 },
            { title: 'Web Performance Optimization', type: 'course', rating: 4.8 }
          ]
        },
        {
          title: 'Backend Integration',
          duration: '2-3 months',
          skills: ['Node.js', 'Database Design', 'API Development'],
          resources: [
            { title: 'Node.js Master Class', type: 'course', rating: 4.8 },
            { title: 'Database Design Fundamentals', type: 'course', rating: 4.7 },
            { title: 'RESTful API Design', type: 'tutorial', rating: 4.6 }
          ]
        }
      ],
      marketDemand: 'High',
      avgSalary: '$85,000 - $120,000',
      growth: '+15% YoY'
    };
  };

  const SkillSelector = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Tell Us About Your Skills
        </h2>
        <p className="text-gray-600">Select your current skills and experience level</p>
      </div>

      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">{category}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.map(skill => {
              const isSelected = userProfile.skills.some(s => s.name === skill);
              return (
                <button
                  key={skill}
                  onClick={() => {
                    const newSkills = isSelected 
                      ? userProfile.skills.filter(s => s.name !== skill)
                      : [...userProfile.skills, { name: skill, level: 'intermediate' }];
                    setUserProfile({...userProfile, skills: newSkills});
                  }}
                  className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-105'
                  }`}
                >
                  {skill}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Overall Experience Level</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experienceLevels.map(level => (
            <button
              key={level.value}
              onClick={() => setUserProfile({...userProfile, experience: level.value})}
              className={`p-4 rounded-xl text-left transition-all duration-200 ${
                userProfile.experience === level.value
                  ? 'bg-white shadow-lg border-2 border-blue-300 transform scale-105'
                  : 'bg-white/50 hover:bg-white hover:shadow-md'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{level.icon}</span>
                <span className="font-medium text-gray-800">{level.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const InterestsAndGoals = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mb-4">
          <Target className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
          Your Career Aspirations
        </h2>
        <p className="text-gray-600">What are your interests and career goals?</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Career Paths of Interest</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {careerPaths.map(path => {
            const isSelected = userProfile.interests.includes(path);
            return (
              <button
                key={path}
                onClick={() => {
                  const newInterests = isSelected 
                    ? userProfile.interests.filter(i => i !== path)
                    : [...userProfile.interests, path];
                  setUserProfile({...userProfile, interests: newInterests});
                }}
                className={`p-4 rounded-xl text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="font-medium">{path}</div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Time Commitment</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { value: 'part-time', label: 'Part-time (5-10 hrs/week)', icon: '⏰' },
            { value: 'regular', label: 'Regular (10-20 hrs/week)', icon: '📅' },
            { value: 'intensive', label: 'Intensive (20+ hrs/week)', icon: '🚀' }
          ].map(option => (
            <button
              key={option.value}
              onClick={() => setUserProfile({...userProfile, timeCommitment: option.value})}
              className={`p-4 rounded-xl text-center transition-all duration-200 ${
                userProfile.timeCommitment === option.value
                  ? 'bg-white shadow-lg border-2 border-orange-300'
                  : 'bg-white/50 hover:bg-white'
              }`}
            >
              <div className="text-2xl mb-2">{option.icon}</div>
              <div className="font-medium text-gray-800">{option.label}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const AnalysisScreen = () => (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-6 animate-pulse">
        <Sparkles className="w-10 h-10 text-white" />
      </div>
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        AI is Analyzing Your Profile
      </h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Our AI is analyzing your skills, experience, and goals to create a personalized roadmap just for you.
      </p>

      <div className="max-w-md mx-auto bg-white rounded-2xl p-6 shadow-lg">
        <div className="space-y-4">
          {[
            'Analyzing current skill set...',
            'Identifying skill gaps...',
            'Researching market demand...',
            'Creating personalized roadmap...'
          ].map((step, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full ${index <= 1 ? 'bg-green-500' : 'bg-gray-300'} animate-pulse`} />
              <span className="text-sm text-gray-600">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const RoadmapDisplay = () => (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
          <Award className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Your Personalized Career Roadmap
        </h2>
        <p className="text-gray-600">AI-generated roadmap based on your profile and market trends</p>
      </div>

      {/* Career Overview */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{roadmap.recommendedPath}</div>
            <div className="text-sm text-gray-600">Recommended Path</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">{roadmap.timeToComplete}</div>
            <div className="text-sm text-gray-600">Time to Complete</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">{roadmap.marketDemand}</div>
            <div className="text-sm text-gray-600">Market Demand</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">{roadmap.avgSalary}</div>
            <div className="text-sm text-gray-600">Avg Salary Range</div>
          </div>
        </div>
      </div>

      {/* Roadmap Phases */}
      <div className="space-y-6">
        {roadmap.phases.map((phase, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{phase.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {phase.duration}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Skills to Learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {phase.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Recommended Resources:</h4>
                  <div className="space-y-3">
                    {phase.resources.map((resource, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                            <BookOpen className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">{resource.title}</div>
                            <div className="text-sm text-gray-500 capitalize">{resource.type}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{resource.rating}</span>
                          </div>
                          <button className="p-1 rounded-full hover:bg-gray-200 transition-colors">
                            <ExternalLink className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
          Start Learning Journey
        </button>
        <button 
          onClick={() => {
            setCurrentStep(1);
            setUserProfile({ skills: [], experience: '', interests: [], goals: [], timeCommitment: '' });
            setRoadmap(null);
          }}
          className="px-8 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:shadow-lg hover:bg-gray-50 transition-all duration-200"
        >
          Create New Roadmap
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800">AI Career Guidance</h1>
            <div className="text-sm text-gray-500">Step {currentStep} of 4</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
          {currentStep === 1 && <SkillSelector />}
          {currentStep === 2 && <InterestsAndGoals />}
          {currentStep === 3 && <AnalysisScreen />}
          {currentStep === 4 && roadmap && <RoadmapDisplay />}

          {/* Navigation */}
          {currentStep < 3 && (
            <div className="flex justify-between mt-8">
              <button 
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                disabled={currentStep === 1}
              >
                Previous
              </button>
              <button 
                onClick={() => {
                  if (currentStep === 2) {
                    setCurrentStep(3);
                    analyzeProfile();
                  } else {
                    setCurrentStep(Math.min(4, currentStep + 1));
                  }
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                disabled={
                  (currentStep === 1 && (userProfile.skills.length === 0 || !userProfile.experience)) ||
                  (currentStep === 2 && (userProfile.interests.length === 0 || !userProfile.timeCommitment))
                }
              >
                <span>{currentStep === 2 ? 'Generate Roadmap' : 'Next'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AICareerGuidance;