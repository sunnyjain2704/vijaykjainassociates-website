'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In production, this would send to a backend API
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle status clearing with proper cleanup
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#0B1F3B]">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-[#D1D5DB] bg-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#0B1F3B]">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-[#D1D5DB] bg-white"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-[#0B1F3B]">
          Phone Number
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          value={formData.phone}
          onChange={handleChange}
          className="border-[#D1D5DB] bg-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#0B1F3B]">
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us how we can help you..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="border-[#D1D5DB] bg-white"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="rounded-lg bg-green-50 p-4 text-green-800">
          Thank you! We&apos;ll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-lg bg-red-50 p-4 text-red-800">
          Something went wrong. Please try again.
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
