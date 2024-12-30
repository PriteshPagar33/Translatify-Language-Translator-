import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Help.css';

const Help = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How do I use the translator?",
      answer: "1. Select your source and target languages\n2. Type or paste your text in the input box\n3. Click the 'Translate' button\n4. Your translation will appear below\n5. You can click the speaker icon to hear the pronunciation"
    },
    {
      question: "What are the character limits?",
      answer: "The translator has a limit of 500 characters per translation. This is to ensure optimal performance and comply with API limitations. For longer texts, please break them into smaller segments."
    },
    {
      question: "Is the service free to use?",
      answer: "Yes, the translator is completely free to use. However, there are daily usage limits: 5000 words per day for unregistered users. This is based on the MyMemory Translated API limitations."
    },
    {
      question: "Why isn't the audio playing?",
      answer: "The text-to-speech feature requires:\n1. A modern web browser\n2. Internet connection\n3. Device audio enabled\n4. Browser permission to play audio\nTry refreshing the page if issues persist."
    },
    {
      question: "How accurate are the translations?",
      answer: "While we strive for accuracy, machine translations may not be perfect. They work best for:\n- Simple sentences\n- Common phrases\n- Basic communication\nFor critical or professional translations, we recommend consulting a professional translator."
    },
    {
      question: "Can I save my translations?",
      answer: "Currently, translations are not saved to ensure your privacy. You can manually copy and save the translations as needed. We're considering adding a save feature with user accounts in the future."
    }
  ];

  return (
    <div className="help-container">
      <h1>Help Center</h1>

      <section className="help-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openFaq === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {faq.question}
                {openFaq === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              <div className="faq-answer">
                {faq.answer.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="help-section">
        <h2>Need More Help?</h2>
        <div className="support-options">
          <div className="support-card">
            <h3>Email Support</h3>
            <p>Contact our support team at:</p>
            <a href="mailto:support@universaltranslator.com">
              support@universaltranslator.com
            </a>
          </div>
          <div className="support-card">
            <h3>Documentation</h3>
            <p>Visit our documentation for detailed guides:</p>
            <a href="#/docs">View Documentation</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;