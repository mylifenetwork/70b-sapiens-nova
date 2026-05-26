'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { FormEvent } from 'react';
import { buildEnrollmentMailBody, toEnrollmentSubmission } from './submission';

// Note: metadata must be exported from a Server Component, so it's defined in a separate wrapper
// or declared here for static metadata purposes (works with Next.js App Router for non-dynamic data)

const PROGRAMMES = [
  { value: 'hksl-translation', label: 'Building HKSL Translation Technology', price: '7,800 HKD / Session' },
  { value: 'private-ai-copilots', label: 'Building Private AI Copilots', price: '7,800 HKD / Session' },
];

type FormData = {
  programme: string;
  studentFirstName: string;
  studentLastName: string;
  studentAge: string;
  studentGender: string;
  studentSchool: string;
  studentCountry: string;
  contactFirstName: string;
  contactLastName: string;
  contactEmail: string;
  contactRelationship: string;
  contactPhone: string;
};

const INITIAL: FormData = {
  programme: '',
  studentFirstName: '',
  studentLastName: '',
  studentAge: '',
  studentGender: '',
  studentSchool: '',
  studentCountry: '',
  contactFirstName: '',
  contactLastName: '',
  contactEmail: '',
  contactRelationship: '',
  contactPhone: '',
};

function InputField({ id, label, type = 'text', value, onChange, required = true, placeholder = '' }: { id: keyof FormData; label: string; type?: string; value: string; onChange: (id: keyof FormData, val: string) => void; required?: boolean; placeholder?: string }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        required={required}
        placeholder={placeholder}
        min={type === 'number' ? '5' : undefined}
        max={type === 'number' ? '30' : undefined}
        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition-colors"
      />
    </div>
  );
}

function SelectField({ id, label, value, onChange, options, required = true }: { id: keyof FormData; label: string; value: string; onChange: (id: keyof FormData, val: string) => void; options: { value: string; label: string }[]; required?: boolean }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        required={required}
        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent bg-white transition-colors"
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

export default function CheckoutPage() {
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const selectedProg = PROGRAMMES.find((p) => p.value === formData.programme);

  function handleChange(id: keyof FormData, val: string) {
    setFormData((prev) => ({ ...prev, [id]: val }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);
    const submission = toEnrollmentSubmission(formData);
    try {
      const response = await fetch('/api/enrolments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission),
      });

      const data = (await response.json().catch(() => null)) as
        | {
            ok?: boolean;
            message?: string;
            details?: { fieldErrors?: Record<string, string[]> };
          }
        | null;

      if (!response.ok) {
        const firstFieldError = data?.details?.fieldErrors
          ? Object.values(data.details.fieldErrors).flat().find(Boolean)
          : '';
        throw new Error(firstFieldError || data?.message || 'Unable to submit application.');
      }
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Submission failed. Please try again. If the problem continues, use email fallback.',
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen pt-32 pb-20 bg-[var(--bg-linen)] flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center px-6 space-y-6">
          <div className="w-20 h-20 bg-[var(--brand-primary)] rounded-full flex items-center justify-center mx-auto">
            <svg className="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="text-4xl font-normal font-serif text-black">Application Sent!</h1>
          <p className="text-gray-600 text-lg">Your application has been submitted successfully. We&apos;ll get back to you within 2 business days.</p>
          <a href="/" className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-[var(--brand-primary)] text-white font-medium hover:bg-[var(--brand-primary)]/90 transition-colors">
            Back to Home
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-20 bg-[var(--bg-linen)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-8 right-4 md:right-12 w-24 h-24 md:w-40 md:h-40 opacity-30 pointer-events-none select-none" aria-hidden="true">
        <Image src="/images/victory.svg" alt="" fill className="object-contain" />
      </div>
      <div className="absolute top-1/2 right-0 w-16 h-16 md:w-24 md:h-24 opacity-20 pointer-events-none select-none" aria-hidden="true">
        <Image src="/images/spiky.webp" alt="" fill className="object-contain" />
      </div>
      <div className="absolute top-1/3 left-0 w-16 h-16 md:w-24 md:h-24 opacity-20 pointer-events-none select-none" aria-hidden="true">
        <Image src="/images/circle.svg" alt="" fill className="object-contain" />
      </div>

      <div className="container-large px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center mb-10 space-y-3">
          <div className="bg-[var(--brand-primary)] px-4 py-1 rounded-full inline-block">
            <span className="text-white text-sm font-normal uppercase tracking-wide">Enrol Now</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-normal font-serif text-black">Complete Your Enrolment</h1>
          <p className="text-gray-600 max-w-xl mx-auto">Fill in the details below and we&apos;ll get back to you within 2 business days to confirm your spot.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
            {/* Programme Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-semibold font-serif text-black">Select Programme</h2>
              <SelectField
                id="programme"
                label="Programme"
                value={formData.programme}
                onChange={handleChange}
                options={PROGRAMMES.map((p) => ({ value: p.value, label: p.label }))}
              />
            </div>

            {/* Student Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-semibold font-serif text-black">Student Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField id="studentFirstName" label="First Name" value={formData.studentFirstName} onChange={handleChange} placeholder="Jane" />
                <InputField id="studentLastName" label="Last Name" value={formData.studentLastName} onChange={handleChange} placeholder="Smith" />
                <InputField id="studentAge" label="Age" type="number" value={formData.studentAge} onChange={handleChange} placeholder="16" />
                <SelectField
                  id="studentGender"
                  label="Gender"
                  value={formData.studentGender}
                  onChange={handleChange}
                  options={[{ value: 'Male', label: 'Male' }, { value: 'Female', label: 'Female' }, { value: 'Other', label: 'Other / Prefer not to say' }]}
                />
                <InputField id="studentSchool" label="School / Institution" value={formData.studentSchool} onChange={handleChange} placeholder="International School of ..." />
                <InputField id="studentCountry" label="Country of Residence" value={formData.studentCountry} onChange={handleChange} placeholder="Hong Kong" />
              </div>
            </div>

            {/* Contact / Parent / Guardian */}
            <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-semibold font-serif text-black">Parent / Guardian Contact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField id="contactFirstName" label="First Name" value={formData.contactFirstName} onChange={handleChange} placeholder="John" />
                <InputField id="contactLastName" label="Last Name" value={formData.contactLastName} onChange={handleChange} placeholder="Smith" />
                <InputField id="contactEmail" label="Email Address" type="email" value={formData.contactEmail} onChange={handleChange} placeholder="john@example.com" />
                <SelectField
                  id="contactRelationship"
                  label="Relationship to Student"
                  value={formData.contactRelationship}
                  onChange={handleChange}
                  options={[
                    { value: 'Parent', label: 'Parent' },
                    { value: 'Guardian', label: 'Guardian' },
                    { value: 'Relative', label: 'Relative' },
                    { value: 'Teacher', label: 'Teacher / School Staff' },
                    { value: 'Other', label: 'Other' },
                  ]}
                />
                <div className="sm:col-span-2">
                  <InputField id="contactPhone" label="Phone Number" type="tel" value={formData.contactPhone} onChange={handleChange} required={true} placeholder="+852 1234 5678" />
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full font-semibold text-base uppercase tracking-wide text-white transition-all hover:opacity-90 hover:scale-[1.01]"
              style={{ backgroundColor: 'var(--brand-azure)' }}
            >
              {isSubmitting ? 'Submitting...' : 'Proceed to Enquiry'}
            </button>
            <p className="text-center text-xs text-gray-500 -mt-4">Your application will be submitted directly to our system.</p>
            {submitError ? (
              <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                <p>{submitError}</p>
                <a
                  className="mt-2 inline-block underline"
                  href={`mailto:admin@xai.hk?subject=${encodeURIComponent('Enrolment Application: ' + (selectedProg?.label || formData.programme))}&body=${encodeURIComponent(buildEnrollmentMailBody(toEnrollmentSubmission(formData)))}`}
                >
                  Use email fallback
                </a>
              </div>
            ) : null}
          </form>

          {/* Order Summary */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24 space-y-5">
              <h2 className="text-xl font-semibold font-serif text-black">Order Summary</h2>
              {selectedProg ? (
                <>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-black">{selectedProg.label}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{selectedProg.price}</p>
                  </div>
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Subtotal</span>
                      <span>To be confirmed</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">Final pricing will be confirmed via email after your application is received.</p>
                </>
              ) : (
                <p className="text-sm text-gray-400 italic">Select a programme to see details.</p>
              )}

              <div className="border-t pt-4 space-y-3">
                <h3 className="text-sm font-semibold text-black">Why choose us?</h3>
                {[
                  'Preparing Students for the Future of AI',
                  'Real-world AI technologies',
                  'Hands-on project learning',
                  'Innovation and entrepreneurship mindset',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[var(--brand-primary)] shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-xs text-gray-600 leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[var(--bg-linen)] rounded-xl p-4 text-center space-y-2">
                <p className="text-xs text-gray-600">Questions? Contact us directly:</p>
                <a href="mailto:admin@xai.hk" className="text-sm font-medium text-[var(--brand-primary)] hover:underline block">
                  admin@xai.hk
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
