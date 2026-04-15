'use client'

import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CheckCircle, Mail, Smartphone, Key, AlertTriangle, MessageSquare, Zap, ShieldCheck, Gamepad2, ShoppingCart, Briefcase, Globe, BarChart } from 'lucide-react'
import { Header, type HeaderRef } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function EmailMobileVerification() {
  const headerRef = useRef<HeaderRef>(null)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header headerRef={headerRef} />

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-transparent" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <ShieldCheck className="w-5 h-5" />
            Secure Onboarding & Fraud Prevention
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Email & Mobile Verification
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Real-Time User Validation to empower your business with trust, instant fraud reduction, and improved communication reliability.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-14 px-8 rounded-full shadow-xl hover:shadow-primary/25 transition-all">
            Get Started Securely
          </Button>
        </div>
      </section>

      {/* Overview & Why it Matters */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">What is Email & Mobile Verification?</h2>
            <p className="text-lg text-muted-foreground mb-4">
              In today's digital ecosystem, your first layer of trust begins with something simple—verifying contact details. Whether it's onboarding a new user, processing a transaction, or preventing fake registrations, accurate verification plays a critical role.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              It is the process of confirming that a user's contact details are:
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Valid and active",
                "Owned by the user",
                "Reachable for communication"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium text-lg">
                  <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
             <p className="text-lg text-muted-foreground border-l-4 border-primary pl-4 py-1 italic bg-primary/5 rounded-r-lg">
               This is typically done through OTP authentication, validation checks, and intelligent filtering mechanisms to ensure every user entering your platform is genuine.
             </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Prevent Fake Registrations", desc: "Stop bots, duplicate accounts, and fake users from entering your system.", icon: AlertTriangle, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
              { title: "Strengthen Security", desc: "Add an extra layer of authentication during login, transactions, and recovery.", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
              { title: "Improve Communication", desc: "Ensure that your notifications, invoices, and updates always reach the right person.", icon: MessageSquare, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
              { title: "Boost User Trust", desc: "A verified user base builds a safer environment for everyone in your community.", icon: CheckCircle, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" }
            ].map((benefit, i) => (
              <Card key={i} className={`p-6 border ${benefit.border} hover:shadow-lg transition-all duration-300 group`}>
                <div className={`w-12 h-12 rounded-xl ${benefit.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="px-6 py-20 md:px-12 bg-secondary/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Our Verification Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Comprehensive real-time checks designed to secure your platform across email, mobile, and OTP services.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email Verification */}
            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <Mail className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Email Verification</h3>
              <p className="text-muted-foreground mb-6 min-h-[48px]">Validate email addresses in real-time to ensure deliverability and avoid bounce-backs.</p>
              <h4 className="font-semibold mb-4 text-xs text-foreground/70 uppercase tracking-wider">Key Features</h4>
              <ul className="space-y-3">
                {[
                  "Syntax check (Validating format)",
                  "Domain validation",
                  "Disposable email detection",
                  "SMTP check (Verifying mailbox)"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                     <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                     {feature}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Mobile Verification */}
            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <Smartphone className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Mobile Verification</h3>
              <p className="text-muted-foreground mb-6 min-h-[48px]">Validate phone numbers across global networks to ensure authenticity and reduce SMS costs.</p>
              <h4 className="font-semibold mb-4 text-xs text-foreground/70 uppercase tracking-wider">Key Features</h4>
              <ul className="space-y-3">
                {[
                  "Global coverage (200+ countries)",
                  "Real-time OTP delivery",
                  "Carrier detection",
                  "Fraud detection (virtual/VoIP)"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                     <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                     {feature}
                  </li>
                ))}
              </ul>
            </Card>

            {/* OTP Services */}
            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <Key className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">OTP Services</h3>
              <p className="text-muted-foreground mb-6 min-h-[48px]">Secure your onboarding and high-value transactions with our robust OTP solution.</p>
              <h4 className="font-semibold mb-4 text-xs text-foreground/70 uppercase tracking-wider">Key Features</h4>
              <ul className="space-y-3">
                {[
                  "Multi-channel: SMS, Email, Voice",
                  "Custom expiration times",
                  "Scalable high-speed delivery",
                  "Detailed logs and reports"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                     <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                     {feature}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works & Why Choose Us */}
      <section className="px-6 py-24 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest rounded-full">Process</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">How It Works</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 md:before:left-[1.4rem] md:before:right-auto md:before:w-0.5 before:w-0.5 before:h-full before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent">
              {[
                { step: "1", title: "User Entry", desc: "User enters their email or mobile number on your platform." },
                { step: "2", title: "Validation Trigger", desc: "Our system triggers a validation check or sends a unique OTP instantly." },
                { step: "3", title: "OTP Received", desc: "User receives the OTP and enters it on your site or mobile application." },
                { step: "4", title: "Code Verification", desc: "Our system mathematically verifies the code and sends a status response to your server." },
                { step: "5", title: "Successfully Verified", desc: "The user is successfully verified and can proceed without friction." }
              ].map((item, i) => (
                <div key={i} className="relative flex items-start gap-6 group pl-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-primary text-primary-foreground font-bold shadow-lg z-10 shrink-0 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold mb-2 text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
             <div className="inline-block mb-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest rounded-full">Advantages</div>
             <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">Why Choose DigitalRakshak?</h2>
             <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "API-First & Developer-Friendly", desc: "Integrate our verification tools into your workflow in minutes with clear documentation and SDKs.", icon: Zap },
                  { title: "Real-Time Processing", desc: "Instant validation and OTP delivery for seamless onboarding without dropping users.", icon: BarChart },
                  { title: "Secure & Scalable", desc: "Built to handle high volumes with enterprise-grade security and reliability.", icon: ShieldCheck },
                  { title: "High Deliverability", desc: "Optimized global infrastructure ensures maximum email and SMS success rates.", icon: Globe },
                  { title: "Actionable Insights", desc: "Get detailed logs, reports, and real-time analytics for better decision-making.", icon: BarChart }
                ].map((reason, i) => (
                  <Card key={i} className="p-6 border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-colors duration-300">
                    <reason.icon className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2 text-foreground text-lg">{reason.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
                  </Card>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-24 md:px-12 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Use Cases Across Industries</h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto">See how different sectors utilize our verification services to build robust and trustworthy platforms.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { industry: "Fintech & Payments", icon: Briefcase, uses: ["User onboarding (KYC initiation)", "Transaction authentication", "Fraud prevention"] },
              { industry: "Gaming & iGaming", icon: Gamepad2, uses: ["Player registration", "Account verification", "Bonus abuse prevention"] },
              { industry: "E-commerce & Marketplaces", icon: ShoppingCart, uses: ["Customer sign-up validation", "Seller onboarding", "Order confirmation"] },
              { industry: "HR & Staffing Platforms", icon: Globe, uses: ["Candidate registration", "Employee onboarding"] }
            ].map((useCase, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-white">{useCase.industry}</h3>
                <ul className="space-y-3">
                  {useCase.uses.map((use, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-4 shadow-2xl">
             <span className="font-semibold text-lg text-slate-200">Key Benefits summary:</span>
             <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Reduce duplicate accounts</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Improve database quality</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Smooth onboarding</span>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="px-6 py-24 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about our verification solution</p>
          </div>
          <Accordion type="single" collapsible className="w-full mb-24 bg-card shadow-sm border rounded-2xl p-4 md:p-8">
            {[
              {
                q: "How many countries do you support for mobile verification?",
                a: "We provide global coverage, allowing you to verify mobile numbers in over 200 countries and territories."
              },
              {
                q: "What is the delivery speed for OTPs?",
                a: "Our infrastructure is optimized for speed, ensuring that OTPs are delivered via SMS or email in real-time, usually within seconds."
              },
              {
                q: "Can I customize the OTP length and expiration?",
                a: "Yes, you can configure the length of the OTP (e.g., 4 or 6 digits) and set custom expiration times to meet your security requirements."
              },
              {
                q: "Does your system detect burner or disposable emails?",
                a: "Absolutely. Our Email Verification tool includes a comprehensive database to detect and block temporary or disposable email addresses."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-border/60 last:border-0 px-2 py-1">
                <AccordionTrigger className="text-left font-semibold text-lg py-5 hover:text-primary transition-colors text-foreground">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pt-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="p-10 md:p-14 text-center bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border-primary/20 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Get Started with Secure Verification</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Don't let fake accounts and fraud undermine your growth. Secure your platform with real-time Email & Mobile Verification from DigitalRakshak and build a user base you can trust.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 h-14 rounded-full text-lg shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                Contact Us Today
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
