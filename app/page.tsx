'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold" style={{fontFamily: 'var(--font-playfair)'}}>
              Samiat
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-neutral-700 transition-colors duration-200 hover:text-brown-700">Home</Link>
              <Link href="#about" className="text-neutral-700 transition-colors duration-200 hover:text-brown-700">About</Link>
              <Link href="#work" className="text-neutral-700 transition-colors duration-200 hover:text-brown-700">My Work</Link>
              <Link href="#contact" className="text-neutral-700 transition-colors duration-200 hover:text-brown-700">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-neutral-200 animate-slideUp">
              <div className="flex flex-col gap-4">
                <Link href="/" className="text-neutral-700 py-2">Home</Link>
                <Link href="#about" className="text-neutral-700 py-2">About</Link>
                <Link href="#work" className="text-neutral-700 py-2">My Work</Link>
                <Link href="#contact" className="text-neutral-700 py-2">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-brown-50 via-white to-brown-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="text-center lg:text-left">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brown-600 animate-fadeIn">
                Product Marketer • Brand Storyteller • Content Creator
              </p>
              
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl animate-slideUp delay-1">
                Hi, I'm <span className="text-brown-700">Abdulahi Samiat</span>
              </h1>
              
              <p className="mb-8 text-lg text-neutral-600 leading-relaxed animate-slideUp delay-2">
                I help brands tell stories that connect, convert, and create lasting impact. 
                From product marketing to content creation, I turn ideas into narratives that resonate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slideUp delay-3">
                <a href="#work" className="btn btn-brown">
                  View My Work
                </a>
                <a href="#contact" className="btn btn-outline">
                  Let's Talk
                </a>
              </div>
            </div>

            {/* Right: Image Placeholder */}
            <div className="flex justify-center lg:justify-end animate-scaleIn delay-2">
              <div className="relative">
                <div className="h-80 w-80 rounded-full bg-brown-100 flex items-center justify-center">
                  {/* Icon Placeholder */}
                  <svg className="h-40 w-40 text-brown-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-brown-200/50 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-brown-300/30 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl" style={{fontFamily: 'var(--font-playfair)'}}>
              About Me
            </h2>
            <p className="mb-6 text-lg text-neutral-600 leading-relaxed">
              I'm Abdulahi Samiat, a Product Marketer and Brand Storyteller who believes every brand 
              has a story worth telling. With expertise in product marketing, content creation, and 
              social media strategy, I help businesses connect with their audience in meaningful ways.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              My approach combines data-driven insights with creative storytelling to deliver campaigns 
              that don't just look good—they drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section id="work" className="section bg-brown-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl" style={{fontFamily: 'var(--font-playfair)'}}>
            My Work
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Work Card 1 */}
            <div className="card">
              {/* Logo Placeholder */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-brown-100">
                <svg className="h-8 w-8 text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="mb-3 text-xl font-bold" style={{fontFamily: 'var(--font-playfair)'}}>
                Brand Name
              </h3>
              
              <p className="mb-4 text-sm text-brown-600 font-semibold">
                Product Launch Campaign
              </p>
              
              <p className="text-neutral-600 leading-relaxed">
                Led the go-to-market strategy for a new product launch, resulting in 250% increase 
                in first-month sales and 100K+ social media impressions.
              </p>
            </div>

            {/* Work Card 2 */}
            <div className="card">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-brown-100">
                <svg className="h-8 w-8 text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="mb-3 text-xl font-bold" style={{fontFamily: 'var(--font-playfair)'}}>
                Client Project
              </h3>
              
              <p className="mb-4 text-sm text-brown-600 font-semibold">
                Content Strategy & Creation
              </p>
              
              <p className="text-neutral-600 leading-relaxed">
                Developed comprehensive content strategy across social platforms, growing 
                audience by 400% and increasing engagement rates by 180%.
              </p>
            </div>

            {/* Work Card 3 */}
            <div className="card">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-brown-100">
                <svg className="h-8 w-8 text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              
              <h3 className="mb-3 text-xl font-bold" style={{fontFamily: 'var(--font-playfair)'}}>
                Campaign Success
              </h3>
              
              <p className="mb-4 text-sm text-brown-600 font-semibold">
                Brand Awareness Campaign
              </p>
              
              <p className="text-neutral-600 leading-relaxed">
                Executed integrated marketing campaign that reached 500K+ people and 
                generated 50+ qualified leads within the first week.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-600 italic">
              ✨ Replace these with your actual projects, logos, and case studies
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl" style={{fontFamily: 'var(--font-playfair)'}}>
              Let's Work Together
            </h2>
            <p className="mb-8 text-lg text-neutral-600">
              Have a project in mind? Let's create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:samiat.abdulahi@gmail.com" 
                className="btn btn-brown w-full sm:w-auto"
              >
                Email Me
              </a>
              <div className="flex gap-4">
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-brown-100 text-brown-700 transition-colors duration-200 hover:bg-brown-700 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-brown-100 text-brown-700 transition-colors duration-200 hover:bg-brown-700 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-brown-100 text-brown-700 transition-colors duration-200 hover:bg-brown-700 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-900 py-12 text-white">
        <div className="container-custom">
          <div className="text-center">
            <p className="mb-2 text-2xl font-bold" style={{fontFamily: 'var(--font-playfair)'}}>
              Abdulahi Samiat
            </p>
            <p className="mb-6 text-brown-300">
              Product Marketer • Brand Storyteller • Content Creator
            </p>
            <p className="text-sm text-brown-400">
              © 2026 Abdulahi Samiat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}