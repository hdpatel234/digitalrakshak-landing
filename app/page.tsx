'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { CheckCircle, Lock, Zap, Mail, Bell, ArrowRight } from 'lucide-react'
import { Header, type HeaderRef } from '@/components/header'
import { Footer } from '@/components/footer'
import { servicesData } from '@/lib/services-data'

export default function Home() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)
  const headerRef = useRef<HeaderRef>(null)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call - in production, this would send to your backend
    setTimeout(() => {
      setSubscribed(true)
      setEmail('')
      setLoading(false)
      
      // Reset message after 3 seconds
      setTimeout(() => {
        setSubscribed(false)
      }, 3000)
    }, 500)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Header headerRef={headerRef} />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-16 md:py-32 md:px-12">
        <div className="text-center max-w-4xl">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              ✓ Trusted Verification Partner
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Verification & Compliance Services
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
            End-to-end identity verification, document intelligence, background checks, and digital transformation solutions. 
            Trusted by businesses across India for secure and reliable compliance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => headerRef.current?.openMenu()}
            >
              Explore Services
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Service Categories
            </h3>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions across identity, compliance, and digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {servicesData.map((mainService, index) => (
              <Card 
                key={mainService.name}
                onClick={() => headerRef.current?.openMenu(mainService.name)}
                className={`p-8 border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group cursor-pointer ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {mainService.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {mainService.name}
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      {mainService.description}
                    </p>
                    
                    {/* Subservices */}
                    <div className="mb-4 pt-4 border-t border-border/40">
                      <p className="text-sm font-semibold text-foreground mb-3">Key Services:</p>
                      <div className="flex flex-wrap gap-2">
                        {mainService.subservices.map((subService) => (
                          <span 
                            key={subService.name}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {subService.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        headerRef.current?.openMenu(mainService.name)
                      }}
                      className="text-primary text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-4"
                    >
                      Explore Services
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 py-20 md:px-12 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose DigitalRakshak?
            </h3>
            <p className="text-lg text-muted-foreground">
              We deliver trust, security, and reliability at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary/10 mb-4">
                <Lock className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Bank-Level Security</h4>
              <p className="text-sm text-muted-foreground">End-to-end encryption and global compliance standards</p>
            </Card>

            <Card className="p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-accent/10 mb-4">
                <Zap className="h-7 w-7 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Lightning Fast</h4>
              <p className="text-sm text-muted-foreground">Real-time results with optimized infrastructure</p>
            </Card>

            <Card className="p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary/10 mb-4">
                <CheckCircle className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">99.9% Accurate</h4>
              <p className="text-sm text-muted-foreground">Trusted by thousands for reliable verification</p>
            </Card>

            <Card className="p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-accent/10 mb-4">
                <Mail className="h-7 w-7 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h4>
              <p className="text-sm text-muted-foreground">Dedicated team for your compliance needs</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section id="contact" className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Join businesses across India that trust DigitalRakshak for secure verification.
          </p>

          {subscribed ? (
            <div className="bg-accent/10 border border-accent rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <p className="text-lg font-semibold text-accent">
                  Thanks for subscribing! We'll notify you soon.
                </p>
              </div>
              <p className="text-sm text-accent/70">
                Check your email for more details about our services.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 mb-8">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 text-base"
              />
              <Button 
                type="submit"
                disabled={loading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          )}

          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 px-4 py-3 rounded-lg">
            <Bell className="w-4 h-4" />
            <span>Enable notifications to receive updates about new features</span>
          </div>
        </div>
      </section> */}

      {/* Direct Contact Section */}
      {/* Contact & Sales Section */}
<section id="contact" className="px-6 py-16 md:px-12 bg-primary text-primary-foreground">
  <div className="max-w-4xl mx-auto">

    <div className="grid md:grid-cols-2 gap-8 items-stretch">

      {/* General Contact Card */}
      <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center md:text-left">
        <h3 className="text-xl font-bold mb-2">General Enquiries</h3>
        <p className="text-primary-foreground/80 mb-6 text-sm">
          Need help understanding our services or verification process?  
          Our support team is ready to assist you.
        </p>

        <a 
          href="mailto:info@digitalrakshak.com"
          className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
        >
          <Mail className="w-5 h-5" />
          info@digitalrakshak.com
        </a>
      </div>

      {/* Sales Card */}
      <div className="bg-gradient-to-br from-white to-white/90 text-slate-900 rounded-xl p-8 shadow-lg text-center md:text-left">
        <h3 className="text-xl font-bold mb-2">Talk to Sales</h3>
        <p className="text-slate-600 mb-6 text-sm">
          Looking for bulk verification, enterprise onboarding, or partnership opportunities?  
          Our sales team will help you choose the right solution and pricing.
        </p>

        <ul className="text-sm text-slate-600 space-y-2 mb-6">
          <li>✓ Custom pricing for startups & enterprises</li>
          <li>✓ API & integration guidance</li>
          <li>✓ Dedicated onboarding support</li>
        </ul>

        <a 
          href="mailto:sales@digitalrakshak.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Mail className="w-5 h-5" />
          sales@digitalrakshak.com
        </a>
      </div>

    </div>
  </div>
</section>


      {/* Footer */}
      <Footer />
    </div>
  )
}
