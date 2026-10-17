import React, { useState } from 'react';
import {
  Mail,
  Briefcase,
  Lightbulb,
  MapPin,
  Headphones,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';
import {
  GithubCircleIcon,
  LinkedInIcon,
  InstagramIcon,
} from '../Skills/SkillIcons';
import './ContactSection.css';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedStatus, setSubmittedStatus] = useState<{
    type: 'idle' | 'client-redirect' | 'validation-error';
    message?: string;
  }>({ type: 'idle' });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setSubmittedStatus({
        type: 'validation-error',
        message: 'Please resolve the highlighted fields before sending.',
      });
      return;
    }

    // Honest handling: No fake submission toast or simulated API.
    // Real functional fallback triggers standard mailto with pre-filled content.
    const mailtoSubject = encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject.trim()}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );
    const mailtoUrl = `mailto:yashas1325143@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmittedStatus({
      type: 'client-redirect',
      message:
        'Opening your email client to send this message directly to yashas1325143@gmail.com.',
    });

    window.location.href = mailtoUrl;
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Yashas-08',
      icon: <GithubCircleIcon size={24} />,
      isExternal: true,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/k-a-yashas-188103379',
      icon: <LinkedInIcon size={22} className="social-svg-icon" />,
      isExternal: true,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/yashas____08/',
      icon: <InstagramIcon size={22} className="social-svg-icon" />,
      isExternal: true,
    },
    {
      name: 'Email',
      url: 'mailto:yashas1325143@gmail.com',
      icon: <Mail size={22} className="social-svg-icon" />,
      isExternal: false,
    },
  ];

  return (
    <div className="contact-section-container">
      {/* Subtle Mountain Topography Background */}
      <div className="contact-mountain-bg" aria-hidden="true">
        <svg
          viewBox="0 0 600 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="contact-mountain-svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 240 L0 180 L80 110 L160 170 L240 90 L340 190 L440 130 L540 200 L600 150 L600 240 Z"
            fill="#2c0403"
            fillOpacity="0.55"
          />
          <path
            d="M0 180 L80 110 L160 170 L240 90 L340 190 L440 130 L540 200 L600 150"
            stroke="#D52B27"
            strokeWidth="1.2"
            strokeOpacity="0.3"
          />
        </svg>
      </div>

      <div className="contact-main-grid">
        {/* =========================================================================
           Column 1 (Left): Introduction & Information Panels
           ========================================================================= */}
        <div className="contact-intro-col">
          {/* Eyebrow Header: [Mail icon] CONTACT — */}
          <div className="contact-top-bar" aria-hidden="true">
            <span className="contact-badge-icon">
              <Mail size={16} strokeWidth={2.4} />
            </span>
            <span className="contact-eyebrow">CONTACT</span>
            <span className="contact-header-rule" />
          </div>

          <h2 className="contact-main-title">LET'S CONNECT</h2>

          <p className="contact-lead-desc">
            Have a question, idea, or opportunity? I'd love to hear from you.
            Feel free to drop a message and I'll get back to you as soon as
            possible.
          </p>

          {/* 3 Information Panels */}
          <div className="contact-info-cards" aria-label="Professional Details">
            {/* Opportunities */}
            <div className="contact-info-card">
              <div className="info-badge-icon" aria-hidden="true">
                <Briefcase size={18} strokeWidth={2.2} />
              </div>
              <div className="info-card-text">
                <h3 className="info-card-title">Opportunities</h3>
                <p className="info-card-desc">
                  Internships, full-time roles, and collaborations.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="contact-info-card">
              <div className="info-badge-icon" aria-hidden="true">
                <Lightbulb size={18} strokeWidth={2.2} />
              </div>
              <div className="info-card-text">
                <h3 className="info-card-title">Interests</h3>
                <p className="info-card-desc">
                  AI & Machine Learning, Web Development, Problem Solving.
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="contact-info-card">
              <div className="info-badge-icon" aria-hidden="true">
                <MapPin size={18} strokeWidth={2.2} />
              </div>
              <div className="info-card-text">
                <h3 className="info-card-title">Location</h3>
                <p className="info-card-desc">
                  Bengaluru, Karnataka, India (Open to Remote)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
           Column 2 (Center): Send a Message Form
           ========================================================================= */}
        <div className="contact-form-panel">
          <div className="contact-panel-header">
            <div className="contact-panel-title-group">
              <span className="contact-badge-icon" aria-hidden="true">
                <Mail size={18} strokeWidth={2.4} />
              </span>
              <h3 className="contact-panel-title">Send a Message</h3>
              <span className="contact-panel-rule" aria-hidden="true" />
            </div>
            <span className="contact-panel-subtitle">
              Let's start a conversation.
            </span>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Send a Message Form"
          >
            {/* Row 1: Name and Email */}
            <div className="form-fields-row">
              <div className="form-field-group">
                <label htmlFor="contact-name" className="visually-hidden">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  autoComplete="name"
                  required
                />
                {errors.name && (
                  <span id="name-error" className="field-error-msg" role="alert">
                    <AlertCircle size={13} />
                    <span>{errors.name}</span>
                  </span>
                )}
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-email" className="visually-hidden">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  autoComplete="email"
                  required
                />
                {errors.email && (
                  <span id="email-error" className="field-error-msg" role="alert">
                    <AlertCircle size={13} />
                    <span>{errors.email}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Row 2: Subject */}
            <div className="form-field-group">
              <label htmlFor="contact-subject" className="visually-hidden">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={`form-input ${errors.subject ? 'input-error' : ''}`}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                required
              />
              {errors.subject && (
                <span id="subject-error" className="field-error-msg" role="alert">
                  <AlertCircle size={13} />
                  <span>{errors.subject}</span>
                </span>
              )}
            </div>

            {/* Row 3: Message */}
            <div className="form-field-group">
              <label htmlFor="contact-message" className="visually-hidden">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                required
              />
              {errors.message && (
                <span id="message-error" className="field-error-msg" role="alert">
                  <AlertCircle size={13} />
                  <span>{errors.message}</span>
                </span>
              )}
            </div>

            {/* Feedback / Delivery Notice */}
            {submittedStatus.type === 'client-redirect' && (
              <div className="form-status-banner banner-info" role="status">
                <span>{submittedStatus.message}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-send-message"
              aria-label="Send Message"
            >
              <span>Send Message</span>
              <ArrowRight size={16} strokeWidth={2.4} className="btn-arrow-icon" />
            </button>
          </form>
        </div>

        {/* =========================================================================
           Column 3 (Right): Connect With Me Social Links
           ========================================================================= */}
        <div className="contact-connect-panel">
          <div className="contact-panel-header">
            <div className="contact-panel-title-group">
              <span className="contact-badge-icon" aria-hidden="true">
                <Headphones size={18} strokeWidth={2.4} />
              </span>
              <h3 className="contact-panel-title">Connect With Me</h3>
              <span className="contact-panel-rule" aria-hidden="true" />
            </div>
            <span className="contact-panel-subtitle">
              Find me on these platforms.
            </span>
          </div>

          <div
            className="social-links-list"
            role="list"
            aria-label="Social and Communication Channels"
          >
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className="social-link-card"
                role="listitem"
                aria-label={
                  item.isExternal
                    ? `${item.name} profile (opens in new tab)`
                    : `Send email via ${item.name}`
                }
              >
                <div className="social-link-left">
                  <div className="social-icon-box">{item.icon}</div>
                  <span className="social-link-name">{item.name}</span>
                </div>
                <div className="social-link-right">
                  <ArrowRight size={16} strokeWidth={2.4} className="social-arrow" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
