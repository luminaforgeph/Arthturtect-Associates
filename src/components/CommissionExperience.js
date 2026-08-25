"use client";

import React, { useState } from "react";
import { Container } from "./Container";
import { DisplayText, Heading, BodyText, MetaText } from "./Typography";
import { MotionWrapper } from "./MotionWrapper";
import { commissionData } from "../data/commissionData";

export function CommissionHero() {
  const { hero } = commissionData;
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#262624] relative overflow-hidden">
      <Container>
        <MotionWrapper animation="fadeUp" delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-10 text-xs tracking-[0.2em] font-mono text-[#8e8e8a] uppercase">
            <span>{hero.kicker}</span>
            <span>{hero.meta}</span>
          </div>

          <DisplayText
            as="h1"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#f5f5f2] tracking-tight leading-[1.08] mb-6 max-w-4xl"
          >
            {hero.title}
          </DisplayText>

          <p className="text-base sm:text-lg md:text-xl text-[#8e8e8a] font-light max-w-2xl leading-relaxed">
            {hero.subtitle}
          </p>
        </MotionWrapper>
      </Container>
    </section>
  );
}

export function CommissionForm() {
  const { intents, formConfig } = commissionData;

  const [selectedIntent, setSelectedIntent] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    description: "",
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (!selectedIntent) {
      setStatus("error");
      setErrorMessage("Please select a Project Intent category below.");
      return;
    }

    try {
      const res = await fetch("/api/commission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          projectIntent: selectedIntent,
        }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to submit commission inquiry. Please check your fields.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error occurred while submitting. Please try again.");
    }
  };

  return (
    <section className="py-20 md:py-32 border-b border-[#262624] bg-[#0a0a0a]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Intent Selection System */}
          <div className="lg:col-span-5 space-y-6">
            <MotionWrapper animation="fadeUp" delay={0.1}>
              <span className="text-xs font-mono tracking-widest uppercase text-[#8e8e8a] mb-2 block">
                01 / INTENT SELECTION
              </span>
              <Heading level={2} className="text-2xl sm:text-3xl font-light text-[#f5f5f2] mb-4">
                What is the nature of your inquiry?
              </Heading>
              <p className="text-xs sm:text-sm text-[#8e8e8a] font-light leading-relaxed mb-6">
                Select the architectural discipline that best reflects your project requirements.
              </p>

              <div className="space-y-3">
                {intents.map((intent) => {
                  const isSelected = selectedIntent === intent.id;
                  return (
                    <button
                      key={intent.id}
                      type="button"
                      onClick={() => setSelectedIntent(intent.id)}
                      className={`w-full text-left p-4 text-xs sm:text-sm font-mono tracking-wide transition-all min-h-[48px] flex items-center justify-between border ${
                        isSelected
                          ? "bg-[#f5f5f2] text-[#0a0a0a] border-[#f5f5f2] font-semibold"
                          : "bg-[#141414] text-[#8e8e8a] hover:text-[#f5f5f2] border-[#262624]"
                      }`}
                      aria-pressed={isSelected}
                    >
                      <span>{intent.label}</span>
                      <span className="text-xs">{isSelected ? "●" : "○"}</span>
                    </button>
                  );
                })}
              </div>
            </MotionWrapper>
          </div>

          {/* Form Fields */}
          <div className="lg:col-span-7">
            <MotionWrapper animation="fadeUp" delay={0.2}>
              <div className="p-8 sm:p-10 bg-[#141414] border border-[#262624]">
                <div className="mb-8 pb-6 border-b border-[#262624]">
                  <span className="text-xs font-mono tracking-widest uppercase text-[#8e8e8a] mb-2 block">
                    02 / PARTICULAR & CONTACT
                  </span>
                  <Heading level={2} className="text-xl sm:text-2xl font-light text-[#f5f5f2]">
                    {formConfig.heading}
                  </Heading>
                  <p className="text-xs text-[#8e8e8a] font-light mt-2">
                    {formConfig.subheading}
                  </p>
                </div>

                {status === "success" ? (
                  <div className="p-8 border border-[#f5f5f2]/40 bg-[#0a0a0a] text-center space-y-4">
                    <span className="w-3 h-3 rounded-full bg-[#f5f5f2] inline-block mb-2" />
                    <Heading level={3} className="text-xl font-light text-[#f5f5f2]">
                      Commission Inquiry Received
                    </Heading>
                    <p className="text-xs sm:text-sm text-[#8e8e8a] font-light leading-relaxed">
                      Thank you for sharing your project parameters. Our partner team will review your inquiry and reach out directly to initiate initial dialogue.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setSelectedIntent("");
                        setFormData({ name: "", email: "", phone: "", location: "", description: "" });
                      }}
                      className="mt-4 px-6 py-3 border border-[#262624] text-xs font-mono text-[#8e8e8a] hover:text-[#f5f5f2] transition-colors uppercase"
                    >
                      SUBMIT ANOTHER INQUIRY
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === "error" && (
                      <div className="p-4 border border-red-800 bg-red-950/20 text-red-400 text-xs font-mono">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-xs font-mono uppercase text-[#8e8e8a]">
                          Full Name <span className="text-[#f5f5f2]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Eleanor Vance"
                          className="w-full bg-[#0a0a0a] border border-[#262624] p-3 text-xs sm:text-sm text-[#f5f5f2] focus:outline-none focus:border-[#f5f5f2] transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-xs font-mono uppercase text-[#8e8e8a]">
                          Email Address <span className="text-[#f5f5f2]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. eleanor@studio.com"
                          className="w-full bg-[#0a0a0a] border border-[#262624] p-3 text-xs sm:text-sm text-[#f5f5f2] focus:outline-none focus:border-[#f5f5f2] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-xs font-mono uppercase text-[#8e8e8a]">
                          Telephone (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234 803 000 0000"
                          className="w-full bg-[#0a0a0a] border border-[#262624] p-3 text-xs sm:text-sm text-[#f5f5f2] focus:outline-none focus:border-[#f5f5f2] transition-colors"
                        />
                      </div>

                      {/* Location */}
                      <div className="space-y-2">
                        <label htmlFor="location" className="block text-xs font-mono uppercase text-[#8e8e8a]">
                          Site Geography / Location
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Port Harcourt, Nigeria"
                          className="w-full bg-[#0a0a0a] border border-[#262624] p-3 text-xs sm:text-sm text-[#f5f5f2] focus:outline-none focus:border-[#f5f5f2] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <label htmlFor="description" className="block text-xs font-mono uppercase text-[#8e8e8a]">
                        Project Description & Scope <span className="text-[#f5f5f2]">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        rows={5}
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe the site context, spatial vision, timeline expectations, or relevant constraints..."
                        className="w-full bg-[#0a0a0a] border border-[#262624] p-3 text-xs sm:text-sm text-[#f5f5f2] focus:outline-none focus:border-[#f5f5f2] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full min-h-[50px] bg-[#f5f5f2] text-[#0a0a0a] text-xs font-mono uppercase font-semibold tracking-wider hover:bg-[#8e8e8a] disabled:opacity-50 transition-colors flex items-center justify-center"
                      >
                        {status === "submitting" ? "TRANSMITTING INQUIRY..." : "TRANSMIT COMMISSION INQUIRY →"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function TrustExpectation() {
  const { trust } = commissionData;
  return (
    <section className="py-20 md:py-32 border-b border-[#262624]">
      <Container>
        <MotionWrapper animation="fadeUp" delay={0.1}>
          <div className="mb-12 md:mb-16 pb-6 border-b border-[#262624]">
            <span className="text-xs font-mono tracking-widest uppercase text-[#8e8e8a] mb-2 block">
              03 / TRUST & ENGAGEMENT
            </span>
            <Heading level={2} className="text-2xl sm:text-4xl font-light text-[#f5f5f2]">
              {trust.title}
            </Heading>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trust.steps.map((step, idx) => (
            <MotionWrapper key={step.number} animation="fadeUp" delay={0.1 * (idx + 1)}>
              <div className="p-6 sm:p-8 bg-[#141414] border border-[#262624] h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#8e8e8a] block mb-4">
                    {step.number}
                  </span>
                  <Heading level={3} className="text-lg font-normal text-[#f5f5f2] mb-3">
                    {step.title}
                  </Heading>
                </div>
                <p className="text-xs sm:text-sm text-[#8e8e8a] font-light leading-relaxed pt-4 border-t border-[#262624]/60">
                  {step.description}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function StudioContactInfo() {
  const { studios } = commissionData;
  return (
    <section className="py-20 md:py-32 border-b border-[#262624] bg-[#0a0a0a]">
      <Container>
        <MotionWrapper animation="fadeUp" delay={0.1}>
          <div className="mb-12 md:mb-16 pb-6 border-b border-[#262624]">
            <span className="text-xs font-mono tracking-widest uppercase text-[#8e8e8a] mb-2 block">
              04 / DIRECT ATELIER CONTACT
            </span>
            <Heading level={2} className="text-2xl sm:text-4xl font-light text-[#f5f5f2]">
              Global Studio Addresses
            </Heading>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studios.map((st, idx) => (
            <MotionWrapper key={st.city} animation="fadeUp" delay={0.1 * (idx + 1)}>
              <div className="p-6 sm:p-8 bg-[#141414] border border-[#262624] space-y-3">
                <div className="flex items-center justify-between">
                  <Heading level={3} className="text-lg font-light text-[#f5f5f2]">
                    {st.city} Studio
                  </Heading>
                  <span className="w-2 h-2 rounded-full bg-[#f5f5f2]" />
                </div>
                <p className="text-xs font-mono text-[#8e8e8a] leading-relaxed">
                  {st.address}
                </p>
                <div className="pt-3 border-t border-[#262624]">
                  <a
                    href={`mailto:${st.email}`}
                    className="text-xs font-mono text-[#f5f5f2] hover:text-[#8e8e8a] transition-colors uppercase tracking-wider"
                  >
                    {st.email}
                  </a>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CinematicClosing() {
  const { closing } = commissionData;
  return (
    <section className="py-28 md:py-40 bg-[#0a0a0a] text-center relative overflow-hidden">
      <Container>
        <MotionWrapper animation="fadeUp" delay={0.1}>
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono tracking-[0.25em] text-[#8e8e8a] uppercase">
              05 / FINIS
            </span>

            <DisplayText
              as="h2"
              className="text-2xl sm:text-4xl md:text-5xl font-light text-[#f5f5f2] leading-tight"
            >
              &ldquo;{closing.quote}&rdquo;
            </DisplayText>

            <p className="text-xs sm:text-sm text-[#8e8e8a] font-light max-w-lg mx-auto leading-relaxed">
              {closing.subtext}
            </p>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
