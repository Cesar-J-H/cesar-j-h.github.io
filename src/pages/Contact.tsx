import React, { useState } from 'react';
import LinkCableAnimation from '../components/LinkCable';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Mail, Send, CheckCircle, AlertCircle, Paperclip, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [attachments, setAttachments] = useState<File[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const EMAILJS_SERVICE_ID = 'placeholder';
  const EMAILJS_TEMPLATE_ID = 'placeholder';
  const EMAILJS_PUBLIC_KEY = 'placeholder';

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB per file
  const MAX_TOTAL_SIZE = 10 * 1024 * 1024; // 10MB total
  const ALLOWED_TYPES = [
    'image/jpeg', 'image/png', 'image/gif', 'image/webp',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain'
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newErrors: {[key: string]: string} = {};

    // Check individual file sizes and types
    const validFiles = files.filter(file => {
      if (file.size > MAX_FILE_SIZE) {
        newErrors.attachments = `${file.name} exceeds 5MB limit`;
        return false;
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        newErrors.attachments = `${file.name} is not an allowed file type`;
        return false;
      }
      return true;
    });

    // Check total size
    const currentSize = attachments.reduce((sum, f) => sum + f.size, 0);
    const newSize = validFiles.reduce((sum, f) => sum + f.size, 0);
    
    if (currentSize + newSize > MAX_TOTAL_SIZE) {
      newErrors.attachments = 'Total attachment size cannot exceed 10MB';
      setErrors(prev => ({ ...prev, ...newErrors }));
      return;
    }

    setAttachments(prev => [...prev, ...validFiles]);
    setErrors(prev => ({ ...prev, ...newErrors }));
    
    // Reset file input
    e.target.value = '';
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors.attachments;
      return newErrors;
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setStatus('sending');
    
    try {
      // Prepare template parameters
      const templateParams: any = {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      // Convert attachments to base64 if any
      if (attachments.length > 0) {
        const attachmentPromises = attachments.map(file => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              const base64 = (reader.result as string).split(',')[1];
              resolve({
                name: file.name,
                data: base64,
                type: file.type
              });
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        });

        const attachmentData = await Promise.all(attachmentPromises);
        templateParams.attachments = attachmentData;
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setAttachments([]);
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Link Cable Animation */}
      <LinkCableAnimation />

      {/* Contact Form Section */}
      <div className="mt-16 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-lightBlue mb-3">Send Me a Message</h2>
          <p className="text-lighterBlue">
            Have a question or want to work together? Fill out the form below!
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-lightBlue font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal transition-all ${
                  errors.name ? 'border-red-500' : 'border-coral'
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lightBlue font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal transition-all ${
                  errors.email ? 'border-red-500' : 'border-coral'
                }`}
                placeholder="yourEmail@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-lightBlue font-semibold mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal transition-all ${
                  errors.subject ? 'border-red-500' : 'border-coral'
                }`}
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-lightBlue font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal transition-all resize-none ${
                  errors.message ? 'border-red-500' : 'border-coral'
                }`}
                placeholder="Tell me what's on your mind..."
              />
              {errors.message && (
                <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* File Attachment Field */}
            <div>
              <label htmlFor="attachments" className="block text-lightBlue font-semibold mb-2">
                Attachments (Optional)
              </label>
              <div className="space-y-3">
                <label 
                  htmlFor="file-upload"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white border-2 border-coral rounded-lg cursor-pointer hover:bg-coral hover:text-white transition-all"
                >
                  <Paperclip className="w-5 h-5" />
                  <span className="font-medium">Choose Files</span>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".jpg,.jpeg,.png,.gif,.webp,.pdf,.doc,.docx,.txt"
                  />
                </label>
                
                {/* File List */}
                {attachments.length > 0 && (
                  <div className="space-y-2">
                    {attachments.map((file, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-3 bg-white border-2 border-coral rounded-lg"
                      >
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <Paperclip className="w-4 h-4 text-teal flex-shrink-0" />
                          <span className="text-sm text-navy truncate">{file.name}</span>
                          <span className="text-xs text-lighterBlue flex-shrink-0">
                            ({formatFileSize(file.size)})
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeAttachment(index)}
                          className="ml-2 p-1 hover:bg-red-100 rounded transition-colors flex-shrink-0"
                          aria-label="Remove file"
                        >
                          <X className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                
                {errors.attachments && (
                  <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.attachments}
                  </p>
                )}
                
                <p className="text-xs text-lighterBlue">
                  Max 5MB per file, 10MB total. Accepted: Images (JPG, PNG, GIF, WebP), PDF, Word, Text
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-4 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                status === 'sending'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-teal hover:bg-lightBlue hover:scale-105 active:scale-95'
              }`}
            >
              {status === 'sending' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>

            {/* Success Message */}
            {status === 'success' && (
              <div className="p-4 bg-green-100 border-2 border-green-500 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <p className="text-green-800 font-medium">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="p-4 bg-red-100 border-2 border-red-500 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <p className="text-red-800 font-medium">
                  Oops! Something went wrong. Please try again.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t-2 border-coral"></div>

      {/* Social Links Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-lightBlue mb-3">Connect With Me</h2>
        <p className="text-lighterBlue mb-8">
          Prefer social media? Find me on these platforms!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
        {/* GitHub */}
        <a
          href="https://github.com/cesar-j-h"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto flex items-center gap-4 p-6 bg-white hover:bg-coral rounded-xl transition-all hover:scale-105 border-2 border-coral shadow-lg"
          aria-label="GitHub Profile"
        >
          <FaGithub className="w-12 h-12 text-navy" />
          <div className="text-left">
            <span className="text-xl text-navy font-bold block">GitHub</span>
            <span className="text-lighterBlue text-sm">Check out my code</span>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/cesar-j-herrera"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto flex items-center gap-4 p-6 bg-white hover:bg-coral rounded-xl transition-all hover:scale-105 border-2 border-coral shadow-lg"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="w-12 h-12 text-lightBlue" />
          <div className="text-left">
            <span className="text-xl text-navy font-bold block">LinkedIn</span>
            <span className="text-lighterBlue text-sm">Let's connect professionally</span>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:cesarjoelherrera@icloud.com"
          className="w-full md:w-auto flex items-center gap-4 p-6 bg-white hover:bg-coral rounded-xl transition-all hover:scale-105 border-2 border-coral shadow-lg"
          aria-label="Email"
        >
          <Mail className="w-12 h-12 text-teal" />
          <div className="text-left">
            <span className="text-xl text-navy font-bold block">Email</span>
            <span className="text-lighterBlue text-sm">Send me a direct email</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;