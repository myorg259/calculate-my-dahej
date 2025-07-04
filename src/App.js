import React, { useState, useEffect } from 'react';
import { User, Briefcase, GraduationCap, Building, Globe, Ruler, Trophy, Calculator } from 'lucide-react';
import confetti from 'canvas-confetti';

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    age: '',
    jobType: '',
    salary: '',
    education: '',
    location: '',
    height: '',
    bonusTraits: []
  });
  const [showResult, setShowResult] = useState(false);
  const [calculatedScore, setCalculatedScore] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const steps = [
    {
      id: 'age',
      title: 'Age & Freshness Factor',
      icon: <User />,
      options: [
        { value: '20-24', label: '20-24 years (Fresh from college!)', multiplier: 0.8 },
        { value: '25-30', label: '25-30 years (Prime matrimonial age)', multiplier: 1.0 },
        { value: '31-35', label: '31-35 years (Slightly experienced)', multiplier: 0.9 },
        { value: '35+', label: '35+ years (Vintage collection)', multiplier: 0.7 }
      ]
    },
    {
      id: 'jobType',
      title: 'Career & Status Symbol',
      icon: <Briefcase />,
      options: [
        { value: 'govt', label: 'Government/Civil Services (Job security = Gold)', multiplier: 2.0 },
        { value: 'private', label: 'Private Sector (Standard package)', multiplier: 1.0 },
        { value: 'entrepreneur', label: 'Entrepreneur (Risk = Premium)', multiplier: 1.5 },
        { value: 'other', label: 'Other/Freelancer (Mysterious income)', multiplier: 0.8 }
      ]
    },
    {
      id: 'salary',
      title: 'Monthly Earning Potential',
      icon: <Calculator />,
      options: [
        { value: '<50k', label: '< ₹50,000 (Modest dreams)', multiplier: 0.8 },
        { value: '50-100k', label: '₹50,000 - ₹1,00,000 (Comfortable life)', multiplier: 1.0 },
        { value: '100-200k', label: '₹1,00,000 - ₹2,00,000 (Upper middle class)', multiplier: 1.2 },
        { value: '200k+', label: '₹2,00,000+ (High value asset)', multiplier: 1.5 }
      ]
    },
    {
      id: 'education',
      title: 'Educational Qualification',
      icon: <GraduationCap />,
      options: [
        { value: 'high-school', label: 'High School (Basic model)', multiplier: 0.7 },
        { value: 'graduate', label: 'Graduate (Standard edition)', multiplier: 1.0 },
        { value: 'postgrad', label: 'Post Graduate (Premium version)', multiplier: 1.2 },
        { value: 'phd', label: 'PhD (Luxury collector\'s item)', multiplier: 1.3 }
      ]
    },
    {
      id: 'location',
      title: 'Geographic Premium',
      icon: <Globe />,
      options: [
        { value: 'india', label: 'India (Local flavor)', multiplier: 1.0 },
        { value: 'abroad', label: 'Abroad (Foreign return premium)', multiplier: 1.4 }
      ]
    },
    {
      id: 'height',
      title: 'Height Advantage',
      icon: <Ruler />,
      options: [
        { value: '<5.6', label: 'Under 5\'6" (Compact size)', multiplier: 0.8 },
        { value: '5.6-6', label: '5\'6" - 6\' (Industry standard)', multiplier: 1.0 },
        { value: '6+', label: 'Above 6\' (Tall, dark, handsome)', multiplier: 1.2 }
      ]
    },
    {
      id: 'bonusTraits',
      title: 'Bonus Features',
      icon: <Trophy />,
      type: 'checkbox',
      options: [
        { value: 'english', label: 'Fluent English (International appeal)', multiplier: 1.05 },
        { value: 'sports', label: 'Sports Captain (Athletic build)', multiplier: 1.05 },
        { value: 'music', label: 'Musical Talent (Cultural value)', multiplier: 1.05 },
        { value: 'cooking', label: 'Cooking Skills (Rare find!)', multiplier: 1.08 },
        { value: 'car', label: 'Owns Car (Transportation included)', multiplier: 1.1 },
        { value: 'house', label: 'Owns House (Property bonus)', multiplier: 1.15 }
      ]
    }
  ];

  const satiricalMessages = [
    "Congratulations! You've struck matrimonial gold!",
    "Your parents can now retire from dowry negotiations!",
    "Time to update your biodata with these premium rates!",
    "Warning: May cause excessive family pride and bragging!",
    "Certified Grade-A matrimonial material!",
    "Your market value has been scientifically calculated!",
    "Ready for the highest bidder in the marriage market!"
  ];

  const getProgress = () => {
    const completedSteps = steps.filter(step => {
      if (step.type === 'checkbox') {
        return formData[step.id] && formData[step.id].length > 0;
      }
      return formData[step.id] && formData[step.id] !== '';
    }).length;
    return Math.round((completedSteps / steps.length) * 100);
  };

  const handleInputChange = (stepId, value, type = 'radio') => {
    setFormData(prev => ({
      ...prev,
      [stepId]: type === 'checkbox' 
        ? prev[stepId].includes(value) 
          ? prev[stepId].filter(item => item !== value)
          : [...prev[stepId], value]
        : value
    }));
  };

  const calculateDahej = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const base = 100000; // Base amount: ₹1 lakh
      let totalMultiplier = 1;

      // Calculate multipliers for each step
      steps.forEach(step => {
        if (step.type === 'checkbox') {
          // For bonus traits, multiply all selected multipliers
          formData[step.id].forEach(selectedValue => {
            const option = step.options.find(opt => opt.value === selectedValue);
            if (option) {
              totalMultiplier *= option.multiplier;
            }
          });
        } else {
          // For radio buttons, find the selected option
          const selectedOption = step.options.find(opt => opt.value === formData[step.id]);
          if (selectedOption) {
            totalMultiplier *= selectedOption.multiplier;
          }
        }
      });

      const finalScore = Math.round(base * totalMultiplier);
      setCalculatedScore(finalScore);
      setShowResult(true);
      setIsCalculating(false);

      // Trigger confetti if score is high
      if (finalScore > 300000) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }, 2000);
  };

  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Crore`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} Lakh`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

  const getRandomMessage = () => {
    return satiricalMessages[Math.floor(Math.random() * satiricalMessages.length)];
  };

  const isFormComplete = () => {
    return steps.every(step => {
      if (step.type === 'checkbox') {
        return formData[step.id] && formData[step.id].length > 0;
      }
      return formData[step.id] && formData[step.id] !== '';
    });
  };

  const resetForm = () => {
    setFormData({
      age: '',
      jobType: '',
      salary: '',
      education: '',
      location: '',
      height: '',
      bonusTraits: []
    });
    setShowResult(false);
    setCurrentStep(0);
    setCalculatedScore(0);
  };

  useEffect(() => {
    // Initialize bonus traits as empty array
    setFormData(prev => ({
      ...prev,
      bonusTraits: []
    }));
  }, []);

  if (showResult) {
    return (
      <div className="app">
        <div className="header">
          <h1>🎭 Dahej Dock</h1>
          <p className="subtitle">The Satirical Dowry Auction</p>
          <div className="warning-badge">⚠️ This is SATIRE!</div>
        </div>

        <div className="result-card bounce-in">
          <div className="result-amount">{formatCurrency(calculatedScore)}</div>
          <div className="result-title">Your Current Dahej Rate</div>
          <div className="result-message">{getRandomMessage()}</div>
          <button 
            className="btn btn-primary"
            onClick={resetForm}
          >
            Calculate Again
          </button>
        </div>

        <div className="disclaimer">
          <strong>DISCLAIMER:</strong> This is a satirical commentary on dowry culture. 
          Dowry is ILLEGAL and UNETHICAL. Every human being has inherent worth that 
          cannot be quantified by money or material possessions. This tool is meant 
          to highlight the absurdity of such practices through humor.
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="header">
        <h1>🎭 Dahej Dock</h1>
        <p className="subtitle">The Satirical Dowry Auction</p>
        <div className="warning-badge">⚠️ This is SATIRE!</div>
      </div>

      <div className="form-container">
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${getProgress()}%` }}
            ></div>
          </div>
          <div className="progress-text">
            {getProgress()}% Complete - Building your matrimonial portfolio...
          </div>
        </div>

        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className={`step-card ${index === currentStep ? 'active' : ''} fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div 
              className="step-header"
              onClick={() => setCurrentStep(index)}
            >
              <div className="step-icon">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
            </div>

            {index === currentStep && (
              <div className="step-content">
                {step.type === 'checkbox' ? (
                  <div className="checkbox-group">
                    {step.options.map(option => (
                      <div 
                        key={option.value}
                        className={`checkbox-option ${formData[step.id].includes(option.value) ? 'selected' : ''}`}
                        onClick={() => handleInputChange(step.id, option.value, 'checkbox')}
                      >
                        <input 
                          type="checkbox"
                          checked={formData[step.id].includes(option.value)}
                          onChange={() => handleInputChange(step.id, option.value, 'checkbox')}
                        />
                        <div className="tooltip">
                          {option.label}
                          <span className="tooltiptext">
                            +{Math.round((option.multiplier - 1) * 100)}% Dahej Bonus!
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="radio-group">
                    {step.options.map(option => (
                      <div 
                        key={option.value}
                        className={`radio-option ${formData[step.id] === option.value ? 'selected' : ''}`}
                        onClick={() => handleInputChange(step.id, option.value)}
                      >
                        <input 
                          type="radio"
                          name={step.id}
                          value={option.value}
                          checked={formData[step.id] === option.value}
                          onChange={() => handleInputChange(step.id, option.value)}
                        />
                        <div className="tooltip">
                          {option.label}
                          <span className="tooltiptext">
                            {option.multiplier > 1 ? '+' : ''}{Math.round((option.multiplier - 1) * 100)}% Dahej Impact!
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                  {index > 0 && (
                    <button 
                      className="btn btn-secondary"
                      onClick={() => setCurrentStep(index - 1)}
                      style={{ marginRight: '1rem' }}
                    >
                      Previous
                    </button>
                  )}
                  {index < steps.length - 1 && (
                    <button 
                      className="btn btn-primary"
                      onClick={() => setCurrentStep(index + 1)}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        {isFormComplete() && (
          <button 
            className="btn btn-calculate"
            onClick={calculateDahej}
            disabled={isCalculating}
          >
            {isCalculating ? (
              <>
                <span className="loading"></span>
                Calculating Your Worth...
              </>
            ) : (
              'Calculate My Dahej! 💰'
            )}
          </button>
        )}
      </div>

      <div className="disclaimer">
        <strong>REMEMBER:</strong> This is a satirical tool designed to mock the dowry system. 
        Dowry is illegal and represents a harmful practice that reduces human worth to monetary value. 
        Every person has inherent dignity and value that cannot be measured in rupees.
      </div>
    </div>
  );
};

export default App; 