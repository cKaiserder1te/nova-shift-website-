"use client";

import { useState, useCallback, useMemo, type FormEvent } from 'react';
import { companyEntity } from '@/lib/site-content';
import { EnterpriseButton } from '@/components/ui/enterprise-button';
import { MotionReveal, MotionSequence, MotionSequenceItem } from '@/components/motion/motion-system';
import { contactBudgets, contactServices } from '@/lib/contact-form';

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    budget: '',
    name: '',
    email: '',
    project: '',
    website: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleNext = useCallback(() => setStep((prev) => Math.min(prev + 1, 4)), [setStep]);
  const handleBack = useCallback(() => setStep((prev) => Math.max(prev - 1, 1)), [setStep]);

  const setField = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, [setFormData]);

  const handleSelect = useCallback((field: string, value: string) => {
    setField(field, value);
    handleNext();
  }, [setField, handleNext]);

  const progressPercent = useMemo(() => `${(step / 4) * 100}%`, [step]);

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (step !== 3 || isSubmitting) {
      return;
    }

    setSubmitError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sourcePath: '/contact',
        }),
      });

      const result = await response.json().catch(() => null) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error || 'Die Anfrage konnte nicht gesendet werden.');
      }

      setStep(4);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Die Anfrage konnte nicht gesendet werden.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, isSubmitting, step]);

  return (
    <div className="ds-surface ds-surface--glass p-6 md:p-8 relative overflow-hidden" itemScope itemType="https://schema.org/ContactPoint">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-1 bg-neutral-800 w-full">
        <div
          className="h-full bg-ds-content transition-[width] duration-300"
          style={{ width: progressPercent }}
        />
      </div>

      {/* Machine-readable contact metadata (hidden) */}
      <div aria-hidden="true" style={{ display: 'none' }}>
        <meta itemProp="contactType" content="sales" />
        <meta itemProp="email" content={companyEntity.email} />
        <meta itemProp="availableLanguage" content={(companyEntity.availableLanguages || []).join(', ')} />
      </div>

      <MotionSequence className="ds-stack mb-10 mt-4" style={{ ['--stack-gap' as string]: '0.75rem' }}>
        <MotionSequenceItem>
          <p id="contact-form-title" className="ds-eyebrow">
            Project Brief
          </p>
        </MotionSequenceItem>
        <MotionSequenceItem>
          <MotionReveal kind="mask">
            <h2 className="ds-section-title text-[2rem] md:text-[2.4rem]">Tell us what you want to build.</h2>
          </MotionReveal>
        </MotionSequenceItem>
        <MotionSequenceItem>
          <p className="ds-body-copy ds-body-copy--dense max-w-2xl">
            Wir antworten mit der nächsten sinnvollen Aktion, nicht mit Floskeln.
          </p>
        </MotionSequenceItem>
      </MotionSequence>

      <form onSubmit={handleSubmit} aria-labelledby="contact-form-title" className="min-h-[400px] flex flex-col">
        {step === 1 ? (
            <div className="flex-1">
              <h3 className="text-xl font-medium mb-6 text-ds-content">Welcher Bereich interessiert dich primär?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactServices.map((svc) => (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => handleSelect('service', svc.id)}
                    className={`text-left p-4 border rounded-xl transition-all duration-300 flex flex-col gap-2 relative ${
                      formData.service === svc.id 
                        ? 'border-ds-content bg-ds-content/5' 
                        : 'border-ds-border hover:border-ds-content-subtle'
                    }`}
                  >
                    <span className="font-semibold text-ds-content">{svc.label}</span>
                    <span className="text-sm text-ds-content-subtle">{svc.desc}</span>
                  </button>
                ))}
              </div>
            </div>
        ) : null}

        {step === 2 ? (
            <div className="flex-1">
              <h3 className="text-xl font-medium mb-6 text-ds-content">Wie sieht der budgetäre Rahmen aus?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactBudgets.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => { setField('budget', budget); handleNext(); }}
                    className={`p-4 border rounded-xl transition-all duration-300 font-medium ${
                      formData.budget === budget
                        ? 'border-ds-content bg-ds-content/5'
                        : 'border-ds-border hover:border-ds-content-subtle'
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>
        ) : null}

        {step === 3 ? (
            <div className="flex-1 space-y-6">
              <h3 className="text-xl font-medium text-ds-content">Fast geschafft. Wie erreichen wir dich?</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="ds-field-label group relative block">
                  <span className="text-sm mb-1 block">Name</span>
                  <input 
                    name="name" 
                    value={formData.name} 
                    onChange={(e) => setField('name', e.target.value)} 
                    required 
                    className="ds-input focus:ring-1 focus:ring-ds-content" 
                    placeholder="Vorname Nachname" 
                  />
                </label>
                <label className="ds-field-label group relative block">
                  <span className="text-sm mb-1 block">E-Mail</span>
                  <input 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={(e) => setField('email', e.target.value)} 
                    required 
                    className="ds-input focus:ring-1 focus:ring-ds-content" 
                    placeholder="hello@domain.com" 
                  />
                </label>
              </div>
              <label className="ds-field-label flex flex-col">
                <span className="text-sm mb-1">Kurzes Briefing (Optional)</span>
                <textarea 
                  name="project" 
                  rows={4} 
                  value={formData.project} 
                  onChange={(e) => setField('project', e.target.value)} 
                  className="ds-textarea focus:ring-1 focus:ring-ds-content" 
                  placeholder="Was sind die Ziele? Was stört gerade am meisten?" 
                />
              </label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setField('website', e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="sr-only"
                />
              <div className="flex flex-col gap-4">
                <EnterpriseButton type="submit" variant="primary" className="w-fit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sende…' : 'Anfrage senden'}
                </EnterpriseButton>
                {submitError ? (
                  <p className="text-sm text-red-300" role="alert" aria-live="polite">
                    {submitError}
                  </p>
                ) : null}
                
                {/* Trust Badges */}
                <div className="flex gap-4 mt-2">
                  <span className="text-xs text-ds-content-subtle flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    SSL & DSGVO
                  </span>
                  <span className="text-xs text-ds-content-subtle flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Antwort in &lt; 24h
                  </span>
                </div>
              </div>
            </div>
        ) : null}

        {step === 4 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-ds-content/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-ds-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-ds-content mb-2">Briefing erhalten.</h3>
              <p className="text-ds-content-subtle max-w-sm">
                Wir sichten deine Anfrage sofort und melden uns innerhalb von 24 Stunden mit einem konkreten Vorschlag bei dir.
              </p>
            </div>
        ) : null}
        
        {/* Navigation bottom bar */}
        {step > 1 && step < 4 && (
           <div className="mt-8 pt-6 border-t border-ds-border flex justify-between">
             <button type="button" onClick={handleBack} disabled={isSubmitting} className="text-sm text-ds-content-subtle hover:text-ds-content transition-colors disabled:opacity-50">
               ← Zurück
             </button>
             <span className="text-sm text-ds-content-subtle">
               Schritt {step} von 3
             </span>
           </div>
        )}
      </form>
    </div>
  );
}