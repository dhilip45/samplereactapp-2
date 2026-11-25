
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    position: "",
    qualification: "",
    experience: "",
    skills: "",
    expectedSalary: "",
    joiningDate: "",
    resume: null,
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.terms) {
      alert("Please accept the terms and conditions.");
      return;
    }

    console.log("Job Application Details:", formData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      address: "",
      position: "",
      qualification: "",
      experience: "",
      skills: "",
      expectedSalary: "",
      joiningDate: "",
      resume: null,
      terms: false,
    });
    setSubmitted(false);
  };

  return (
    <div className="page">
      <div className="form-container">
        <div className="form-header">
          <h1>Job Application Form</h1>
          <p>Register your details to apply for your dream job.</p>
        </div>

        {submitted ? (
          <div className="success-message">
            <h2>Application Submitted!</h2>
            <p>
              Thank you, {formData.fullName}. Your application
              has been submitted successfully.
            </p>
            <button onClick={handleReset}>Submit Another Application</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3>Personal Information</h3>

            <div className="form-grid">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Date of Birth *</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Gender *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">
                    Prefer not to say
                  </option>
                </select>
              </div>

              <div className="form-group full-width">
                <label>Address *</label>
                <textarea
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <h3>Job Information</h3>

            <div className="form-grid">
              <div className="form-group">
                <label>Applying Position *</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Position</option>
                  <option value="Frontend Developer">
                    Frontend Developer
                  </option>
                  <option value="Backend Developer">
                    Backend Developer
                  </option>
                  <option value="Full Stack Developer">
                    Full Stack Developer
                  </option>
                  <option value="Software Tester">Software Tester</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="HR Executive">HR Executive</option>
                </select>
              </div>

              <div className="form-group">
                <label>Highest Qualification *</label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Qualification</option>
                  <option value="Diploma">Diploma</option>
                  <option value="B.E / B.Tech">B.E / B.Tech</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="BCA">BCA</option>
                  <option value="MCA">MCA</option>
                  <option value="M.E / M.Tech">M.E / M.Tech</option>
                  <option value="MBA">MBA</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Work Experience *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Experience</option>
                  <option value="Fresher">Fresher</option>
                  <option value="0-1 Years">0-1 Years</option>
                  <option value="1-3 Years">1-3 Years</option>
                  <option value="3-5 Years">3-5 Years</option>
                  <option value="5+ Years">5+ Years</option>
                </select>
              </div>

              <div className="form-group">
                <label>Expected Salary (Per Annum)</label>
                <input
                  type="number"
                  name="expectedSalary"
                  placeholder="Enter expected salary"
                  min="0"
                  value={formData.expectedSalary}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Skills *</label>
                <input
                  type="text"
                  name="skills"
                  placeholder="React, JavaScript, HTML, CSS"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Available Joining Date</label>
                <input
                  type="date"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <label>Upload Resume (PDF/DOC/DOCX) *</label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="terms">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              <label>
                I confirm that the information provided is accurate.
              </label>
            </div>

            <div className="form-actions">
              <button type="button" className="reset-btn" onClick={handleReset}>
                Reset
              </button>
              <button type="submit" className="submit-btn">
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
