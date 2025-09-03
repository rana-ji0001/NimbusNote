
import React from 'react';
import { Cloud, Lock, Database, Zap, Tag, FileText, User, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  }
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
      paddingTop: '3rem',
      paddingBottom: '1rem'
    }}>
      <div className="container-fluid" style={{ maxWidth: '1200px' }}>
        {/* Header Section */}
        <div className="text-center mb-5">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <Cloud size={48} color="#2563eb" className="me-3" />
            <h1 className="display-1 fw-bold mb-0" style={{ color: '#1f2937', fontSize: '3.5rem' }}>NimbusNote</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="fs-5 mb-0" style={{ color: '#4b5563' }}>
                Your secure, personal cloud for capturing and organizing life's important moments. 
                Store your daily thoughts, ideas, and memories with powerful organization tools.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="row g-4 mb-5">
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-lg" 
                 style={{ 
                   backgroundColor: '#ffffff',
                   borderRadius: '0.75rem',
                   transition: 'all 0.3s ease',
                   boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                 }}>
              <div className="card-body p-4">
                <FileText size={40} color="#2563eb" className="mb-3" />
                <h5 className="fw-bold mb-3" style={{ color: '#1f2937', fontSize: '1.25rem' }}>Rich Note Taking</h5>
                <p className="mb-0" style={{ color: '#4b5563', lineHeight: '1.6' }}>
                  Create detailed notes with titles and descriptions. Capture your thoughts, 
                  ideas, and daily experiences in a structured format.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-lg" 
                 style={{ 
                   backgroundColor: '#ffffff',
                   borderRadius: '0.75rem',
                   transition: 'all 0.3s ease',
                   boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                 }}>
              <div className="card-body p-4">
                <Tag size={40} color="#16a34a" className="mb-3" />
                <h5 className="fw-bold mb-3" style={{ color: '#1f2937', fontSize: '1.25rem' }}>Smart Organization</h5>
                <p className="mb-0" style={{ color: '#4b5563', lineHeight: '1.6' }}>
                  Organize your notes with customizable tags. Find what you need quickly 
                  with our intuitive tagging system.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-lg" 
                 style={{ 
                   backgroundColor: '#ffffff',
                   borderRadius: '0.75rem',
                   transition: 'all 0.3s ease',
                   boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                 }}>
              <div className="card-body p-4">
                <Lock size={40} color="#dc2626" className="mb-3" />
                <h5 className="fw-bold mb-3" style={{ color: '#1f2937', fontSize: '1.25rem' }}>Secure Authentication</h5>
                <p className="mb-0" style={{ color: '#4b5563', lineHeight: '1.6' }}>
                  Your privacy matters. Access your personal notes through secure authentication 
                  - only you can see your content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-lg" 
                 style={{ 
                   backgroundColor: '#ffffff',
                   borderRadius: '0.75rem',
                   transition: 'all 0.3s ease',
                   boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                 }}>
              <div className="card-body p-4">
                <Database size={40} color="#9333ea" className="mb-3" />
                <h5 className="fw-bold mb-3" style={{ color: '#1f2937', fontSize: '1.25rem' }}>Reliable Storage</h5>
                <p className="mb-0" style={{ color: '#4b5563', lineHeight: '1.6' }}>
                  Built on MongoDB for reliable, scalable data storage. Your notes are 
                  safely stored and always accessible when you need them.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-lg" 
                 style={{ 
                   backgroundColor: '#ffffff',
                   borderRadius: '0.75rem',
                   transition: 'all 0.3s ease',
                   boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                 }}>
              <div className="card-body p-4">
                <Zap size={40} color="#eab308" className="mb-3" />
                <h5 className="fw-bold mb-3" style={{ color: '#1f2937', fontSize: '1.25rem' }}>Custom API</h5>
                <p className="mb-0" style={{ color: '#4b5563', lineHeight: '1.6' }}>
                  Powered by our own custom-built API for seamless CRUD operations. 
                  Fast, efficient, and designed specifically for your note-taking needs.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-lg" 
                 style={{ 
                   backgroundColor: '#ffffff',
                   borderRadius: '0.75rem',
                   transition: 'all 0.3s ease',
                   boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                 }}>
              <div className="card-body p-4">
                <User size={40} color="#4f46e5" className="mb-3" />
                <h5 className="fw-bold mb-3" style={{ color: '#1f2937', fontSize: '1.25rem' }}>Personal Experience</h5>
                <p className="mb-0" style={{ color: '#4b5563', lineHeight: '1.6' }}>
                  Each user gets their own private space. Your notes, your tags, 
                  your organization - completely personalized to your workflow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack Section */}
        <div className="card border-0 shadow-lg mb-5" 
             style={{ 
               backgroundColor: '#ffffff',
               borderRadius: '1rem',
               boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
             }}>
          <div className="card-body p-5">
            <h2 className="text-center fw-bold mb-5" style={{ color: '#1f2937', fontSize: '2.25rem' }}>
              Built With Modern Technology
            </h2>
            <div className="row">
              <div className="col-md-6">
                <h4 className="fw-bold mb-4 d-flex align-items-center" style={{ color: '#1f2937', fontSize: '1.25rem' }}>
                  <Shield size={24} color="#2563eb" className="me-2" />
                  Frontend
                </h4>
                <ul className="list-unstyled" style={{ color: '#4b5563' }}>
                  <li className="mb-2">• React.js for dynamic user interface</li>
                  <li className="mb-2">• Modern component-based architecture</li>
                  <li className="mb-2">• Responsive design for all devices</li>
                  <li className="mb-2">• Intuitive user experience</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h4 className="fw-bold mb-4 d-flex align-items-center" style={{ color: '#1f2937', fontSize: '1.25rem' }}>
                  <Database size={24} color="#16a34a" className="me-2" />
                  Backend
                </h4>
                <ul className="list-unstyled" style={{ color: '#4b5563' }}>
                  <li className="mb-2">• Custom-built REST API</li>
                  <li className="mb-2">• MongoDB for data persistence</li>
                  <li className="mb-2">• Secure user authentication</li>
                  <li className="mb-2">• Full CRUD operations support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-5" style={{ color: '#1f2937', fontSize: '2.25rem' }}>How NimbusNote Works</h2>
          <div className="row g-4">
            <div className="col-sm-6 col-lg-3">
              <div className="d-flex flex-column align-items-center">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold mb-4"
                  style={{ 
                    width: '64px', 
                    height: '64px', 
                    backgroundColor: '#2563eb', 
                    fontSize: '1.25rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  1
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#1f2937', fontSize: '1.125rem' }}>Sign Up</h5>
                <p className="small mb-0" style={{ color: '#4b5563' }}>Create your secure account to get started</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="d-flex flex-column align-items-center">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold mb-4"
                  style={{ 
                    width: '64px', 
                    height: '64px', 
                    backgroundColor: '#16a34a', 
                    fontSize: '1.25rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  2
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#1f2937', fontSize: '1.125rem' }}>Create Notes</h5>
                <p className="small mb-0" style={{ color: '#4b5563' }}>Add titles, descriptions, and tags to your notes</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="d-flex flex-column align-items-center">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold mb-4"
                  style={{ 
                    width: '64px', 
                    height: '64px', 
                    backgroundColor: '#9333ea', 
                    fontSize: '1.25rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  3
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#1f2937', fontSize: '1.125rem' }}>Organize</h5>
                <p className="small mb-0" style={{ color: '#4b5563' }}>Use tags to categorize and find your notes easily</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="d-flex flex-column align-items-center">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold mb-4"
                  style={{ 
                    width: '64px', 
                    height: '64px', 
                    backgroundColor: '#dc2626', 
                    fontSize: '1.25rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  4
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#1f2937', fontSize: '1.125rem' }}>Access Anywhere</h5>
                <p className="small mb-0" style={{ color: '#4b5563' }}>Your notes are securely stored and always available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          className="card border-0 text-center shadow-lg"
          style={{ 
            background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
            borderRadius: '1rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        >
          <div className="card-body p-5">
            <h2 className="fw-bold mb-4" style={{ color: '#ffffff', fontSize: '2.25rem' }}>
              Ready to Start Your Digital Journey?
            </h2>
            <p className="mb-4" style={{ 
              color: '#ffffff', 
              opacity: '0.9', 
              fontSize: '1.25rem',
              lineHeight: '1.6'
            }}>
              Join NimbusNote today and experience the future of personal note-taking
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <button 
                className="btn btn-lg fw-semibold px-4 py-3 border-0"
                onClick={handleClick}
                style={{ 
                  backgroundColor: '#ffffff',
                  color: '#2563eb',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                  
                }}
              >
                Get Started
              </button>
              <button 
                className="btn btn-lg fw-semibold px-4 py-3"
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;