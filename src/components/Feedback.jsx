import React, { useState } from 'react';
import { Mail, Clipboard, FileText, CheckCircle } from 'lucide-react';
import './Feedback.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: 'issue',
    description: '',
    screenshot: null,
    satisfaction: 'neutral', // Default satisfaction is neutral
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      screenshot: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleSatisfactionChange = (satisfaction) => {
    setFormData((prev) => ({
      ...prev,
      satisfaction,
    }));
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      feedbackType: 'issue',
      description: '',
      screenshot: null,
      satisfaction: 'neutral',
    });
  };

  return (
    <div className="feedback-container">
      <h1>Send Feedback</h1>

      <div className="feedback-content">
        <p className="feedback-intro">
          We value your feedback! Please let us know how we can improve your experience.
        </p>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              <Clipboard /> Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <Mail /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="feedbackType">
              <FileText /> Feedback Type
            </label>
            <select
              id="feedbackType"
              name="feedbackType"
              value={formData.feedbackType}
              onChange={handleChange}
            >
              <option value="issue">Issue</option>
              <option value="idea">Idea</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">
              <FileText /> Description of Feedback
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="screenshot">
              <FileText /> Upload Screenshot
            </label>
            <input
              type="file"
              id="screenshot"
              name="screenshot"
              onChange={handleFileChange}
            />
          </div>

          <div className="form-group satisfaction">
            <label>How satisfied are you with our service?</label>
            <div className="emojis">
              <button
                type="button"
                onClick={() => handleSatisfactionChange('sad')}
                className={`emoji-btn ${formData.satisfaction === 'sad' ? 'selected' : ''}`}
              >
                😞 {/* Sad Emoji */}
              </button>
              <button
                type="button"
                onClick={() => handleSatisfactionChange('neutral')}
                className={`emoji-btn ${formData.satisfaction === 'neutral' ? 'selected' : ''}`}
              >
                😐 {/* Neutral Emoji */}
              </button>
              <button
                type="button"
                onClick={() => handleSatisfactionChange('happy')}
                className={`emoji-btn ${formData.satisfaction === 'happy' ? 'selected' : ''}`}
              >
                😊 {/* Happy Emoji */}
              </button>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit Feedback
          </button>
          <button type="button" onClick={handleClear} className="clear-btn">
            Clear Form
          </button>
        </form>

        {submitted && (
          <div className="success-message">
            <CheckCircle /> Feedback submitted successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
