import React, { useState } from 'react';
import {
  Mail,
  Briefcase,
  Lightbulb,
  MapPin,
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
      handle: '@Yashas-08',
      url: 'https://github.com/Yashas-08',
      icon: <GithubCircleIcon size={20} />,
      isExternal: true,
    },
    {
      name: 'LinkedIn',
      handle: 'in/k-a-yashas',
      url: 'https://www.linkedin.com/in/k-a-yashas-188103379',
      icon: <LinkedInIcon size={19} className="social-svg-icon" />,
      isExternal: true,
    },
    {
      name: 'Instagram',
      handle: '@yashas____08',
      url: 'https://www.instagram.com/yashas____08/',
      icon: <InstagramIcon size={19} className="social-svg-icon" />,
      isExternal: true,
    },
    {
      name: 'Email Direct',
      handle: 'yashas1325143@gmail.com',
      url: 'mailto:yashas1325143@gmail.com',
      icon: <Mail size={19} className="social-svg-icon" />,
      isExternal: false,
    },
  ];

  return (
    <div className="contact-section-container">
      {/* 3-Column Wide Editorial Layout on Desktop */}
      <div className="contact-three-col-layout">
        {/* =========================================================================
           Column 1: Introduction & Contact / Professional Details
           ========================================================================= */}
        <div className="contact-col-intro">
          <div className="contact-eyebrow-row" aria-hidden="true">
            <span className="contact-eyebrow-text">GET IN TOUCH</span>
            <span className="contact-eyebrow-rule" />
          </div>

          <h2 className="contact-main-title">LET'S CONNECT</h2>

          <p className="contact-lead-desc">
            Have a question, idea, or opportunity? I'd love to hear from you.
            Feel free to drop a message or reach out across any of the platforms.
          </p>

          {/* Open Professional Details Ledger */}
          <div className="contact-details-ledger" aria-label="Professional Details">
            <div className="ledger-entry">
              <div className="ledger-entry-header">
                <Briefcase size={15} strokeWidth={2.2} className="ledger-entry-icon" aria-hidden="true" />
                <span className="ledger-entry-label">OPPORTUNITIES</span>
              </div>
              <p className="ledger-entry-val">
                Internships, full-time engineering roles, and technical collaborations.
              </p>
            </div>

            <div className="ledger-entry">
              <div className="ledger-entry-header">
                <Lightbulb size={15} strokeWidth={2.2} className="ledger-entry-icon" aria-hidden="true" />
                <span className="ledger-entry-label">INTERESTS</span>
              </div>
              <p className="ledger-entry-val">
                AI &amp; Machine Learning, Web Development, Systems &amp; Problem Solving.
              </p>
            </div>

            <div className="ledger-entry">
              <div className="ledger-entry-header">
                <MapPin size={15} strokeWidth={2.2} className="ledger-entry-icon" aria-hidden="true" />
                <span className="ledger-entry-label">LOCATION</span>
              </div>
              <p className="ledger-entry-val">
                Bengaluru, Karnataka, India · Open to Remote
              </p>
            </div>
          </div>
        </div>

        {/* Fine Vertical Rule */}
        <div className="contact-col-divider" aria-hidden="true" />

        {/* =========================================================================
           Column 2: Message Form (Simple fields, restrained outlines, ivory button)
           ========================================================================= */}
        <div className="contact-col-form">
          <div className="form-header-wrap">
            <span className="form-kicker">DIRECT INQUIRY</span>
            <h3 className="form-heading">Send a Message</h3>
            <span className="form-subtext">I'll get back to you promptly.</span>
          </div>

          <form
            className="contact-editorial-form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Send a Message Form"
          >
            {/* Row 1: Name and Email */}
            <div className="form-fields-row">
              <div className="form-field-group">
                <label htmlFor="contact-name" className="field-label">
                  YOUR NAME
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
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
                <label htmlFor="contact-email" className="field-label">
                  YOUR EMAIL
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
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
              <label htmlFor="contact-subject" className="field-label">
                SUBJECT
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Internship / Project / Collaboration"
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
              <label htmlFor="contact-message" className="field-label">
                MESSAGE
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share details about your idea, role, or inquiry..."
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

            {/* Feedback / Notice */}
            {submittedStatus.type === 'client-redirect' && (
              <div className="form-status-banner banner-info" role="status">
                <span>{submittedStatus.message}</span>
              </div>
            )}

            {submittedStatus.type === 'validation-error' && submittedStatus.message && (
              <div className="form-status-banner banner-error" role="status">
                <span>{submittedStatus.message}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-contact-submit"
              aria-label="Send Message"
            >
              <span>Send Message</span>
              <ArrowRight size={16} strokeWidth={2.4} className="btn-arrow-icon" />
            </button>
          </form>
        </div>

        {/* Fine Vertical Rule */}
        <div className="contact-col-divider" aria-hidden="true" />

        {/* =========================================================================
           Column 3: Social Links / Direct Channels
           ========================================================================= */}
        <div className="contact-col-social">
          <div className="social-header-wrap">
            <span className="social-kicker">DIRECT CHANNELS</span>
            <h3 className="social-heading">Connect With Me</h3>
            <span className="social-subtext">Open to messages across platforms.</span>
          </div>

          <div
            className="social-open-list"
            role="list"
            aria-label="Social and Communication Channels"
          >
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className="social-channel-item"
                role="listitem"
                aria-label={
                  item.isExternal
                    ? `${item.name} profile (${item.handle}) (opens in new tab)`
                    : `Send email to ${item.handle}`
                }
              >
                <div className="social-channel-left">
                  <span className="social-channel-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div className="social-channel-info">
                    <span className="social-channel-name">{item.name}</span>
                    <span className="social-channel-handle">{item.handle}</span>
                  </div>
                </div>
                <ArrowRight size={14} strokeWidth={2.2} className="social-channel-arrow" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
