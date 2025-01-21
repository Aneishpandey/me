'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';


interface FAQItem {
  question: string;
  answer: string;
}

const FAQs: FAQItem[] = [
  {
    question: 'What is Vibely?',
    answer: 'Vibely is a premium wellness platform offering spa, salon, dental, and other wellness services.',
  },
  {
    question: 'How do I book a service?',
    answer: 'You can book a service directly from our website or mobile app by selecting your preferred service and time.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit/debit cards, digital wallets, and UPI payments.',
  },
  {
    question: 'Can I reschedule my appointment?',
    answer: 'Yes, you can reschedule your appointment up to 24 hours before the scheduled time.',
  },
  {
    question: 'Are there any cancellation fees?',
    answer: 'Cancellations within 24 hours of the appointment may incur a fee. Please check our cancellation policy.',
  },
];

const FAQsPage = () => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleQuestion = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <div className="faqs-container">
      {/* Heading */}
      <h1 className="faqs-heading">Frequently Asked Questions (FAQs)</h1>

      {/* Introduction with See More Button */}
      <div className="faqs-intro">
        <p>
          Welcome to our FAQs section. Here you'll find answers to commonly asked questions about our services and policies.
        </p>
        <button className="see-more-button" onClick={() => setShowMoreInfo(!showMoreInfo)}>
          {showMoreInfo ? 'See Less' : 'See More'}
        </button>
      </div>

      {/* Expanded Intro Information */}
      {showMoreInfo && (
        <div className="additional-info">
          <p>
            We are committed to providing you with the best wellness experience. If you have any further questions, feel free
            to contact our support team.
          </p>
        </div>
      )}

      {/* Questions List */}
      <div className="faqs-list">
        {FAQs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleQuestion(index)}
              aria-expanded={expandedQuestion === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{faq.question}</span>
              {expandedQuestion === index ? (
                <ChevronDown className="faq-icon" />
              ) : (
                <ChevronRight className="faq-icon" />
              )}
            </button>
            {expandedQuestion === index && (
              <div id={`faq-answer-${index}`} className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsPage;
