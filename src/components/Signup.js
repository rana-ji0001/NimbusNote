import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = (props) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      console.log('Signup attempt:', formData);
      // Add your signup API call here
      const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const json = await response.json();
      console.log(json);

      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        props.setToken(json.authtoken);
        navigate("/");
        props.showAlert("Welcome Sir!!","success");
      } else {
        props.showAlert("Check Your Details","danger");
        
      }
      
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error('Signup failed:', error);
      props.showAlert("Signup Failed","danger");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <style>{`
        body {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .login-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
        }
        
        .login-card {
          background: rgba(31, 41, 55, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(75, 85, 99, 0.3);
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .form-control-dark {
          background-color: rgba(55, 65, 81, 0.5);
          border: 1px solid rgba(75, 85, 99, 0.5);
          color: #fff;
          border-radius: 0.5rem;
        }
        
        .form-control-dark:focus {
          background-color: rgba(55, 65, 81, 0.7);
          border-color: #3b82f6;
          box-shadow: 0 0 0 0.2rem rgba(59, 130, 246, 0.25);
          color: #fff;
        }
        
        .form-control-dark::placeholder {
          color: #9ca3af;
        }
        
        .btn-gradient {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        
        .btn-gradient:hover {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          transform: translateY(-1px);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        }
        
        .btn-gradient:disabled {
          background: linear-gradient(135deg, #4b5563 0%, #6b7280 100%);
          transform: none;
          box-shadow: none;
        }
        
        .text-light-gray {
          color: #d1d5db;
        }
        
        .text-gray {
          color: #9ca3af;
        }
        
        .link-blue {
          color: #60a5fa;
          text-decoration: none;
        }
        
        .link-blue:hover {
          color: #93c5fd;
        }
        
        .spinner-border-sm {
          width: 1rem;
          height: 1rem;
        }
        
        .border-dark-custom {
          border-color: rgba(75, 85, 99, 0.3) !important;
        }
        
        .input-group-text-dark {
          background-color: rgba(55, 65, 81, 0.5);
          border: 1px solid rgba(75, 85, 99, 0.5);
          color: #9ca3af;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .input-group-text-dark:hover {
          background-color: rgba(55, 65, 81, 0.7);
          color: #fff;
        }
      `}</style>

      <div className="login-container d-flex align-items-center justify-content-center p-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
              <div className="login-card p-4 p-sm-5">
                {/* Header */}
                <div className="text-center mb-4">
                  <h2 className="fw-bold text-white mb-2">Create Account</h2>
                  <p className="text-gray mb-0">Join us and start organizing your notes</p>
                </div>

                {/* Form */}
                <div className="mb-4">
                  {/* Name Input */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-light-gray fw-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control form-control-lg form-control-dark"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-light-gray fw-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control form-control-lg form-control-dark"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label text-light-gray fw-medium">
                      Password
                    </label>
                    <div className="input-group">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control form-control-lg form-control-dark"
                        placeholder="Enter your password"
                        minLength={5}
                      />
                      <span 
                        className="input-group-text input-group-text-dark"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    onClick={handleSubmit}
                    className="btn btn-gradient btn-lg w-100 text-white"
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Creating Account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                </div>

                {/* Footer */}
                <div className="text-center pt-3 border-top border-dark-custom">
                  <p className="text-gray small mb-0">
                    Already have an account?{' '}
                    <Link to="/login" className="link-blue fw-medium">
                      Sign in here
                    </Link>
                  </p>
                </div>
              </div>

              {/* Security Note */}
              <div className="text-center mt-3">
                <p className="text-gray small mb-0">
                  🔒 Your data is encrypted and secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup