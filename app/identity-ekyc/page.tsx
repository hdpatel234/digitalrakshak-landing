'use client'

import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  CheckCircle, 
  ShieldCheck, 
  Zap, 
  FileText, 
  Target, 
  Briefcase, 
  Gamepad2, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Globe, 
  Fingerprint,
  CreditCard,
  Lock,
  UserCheck,
  Scan,
  Database,
  Search,
  BrainCircuit
} from 'lucide-react'
import { Header, type HeaderRef } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function IdentityEkycPage() {
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
            Ultimate Verification Suite
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Identity & e-KYC Infrastructure
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Secure, Scalable & Real-Time Digital Identity Verification for Modern Businesses. Build trust with a frictionless onboarding experience.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-14 px-8 rounded-full shadow-xl hover:shadow-primary/25 transition-all">
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Redefining Digital Onboarding</h2>
            <p className="text-lg text-muted-foreground mb-6">
              In today's digital-first economy, the first impression is your onboarding process. DigitalRakshak provides a comprehensive identity infrastructure that balances security with a seamless user experience.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our infrastructure is designed for high-growth industries like Fintech, NBFCs, Gaming, and SaaS, ensuring you stay compliant while growing fast.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { title: "Real-Time Verification", desc: "Instant outcomes to accelerate business decision-making.", icon: Zap },
                { title: "Regulatory Compliance", desc: "Always aligned with KYC, AML, and government regulations.", icon: Lock }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl -rotate-6 scale-95"></div>
            <Card className="relative p-8 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
               <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b pb-4 border-border/50">
                    <UserCheck className="w-8 h-8 text-green-500" />
                    <div>
                      <h3 className="font-bold text-xl">Identity Verified</h3>
                      <p className="text-sm text-muted-foreground">Verification Successful • 1.2s</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-secondary/30 rounded w-3/4"></div>
                    <div className="h-4 bg-secondary/20 rounded w-1/2"></div>
                    <div className="h-4 bg-secondary/10 rounded w-5/6"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                     <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 text-center">
                        <Fingerprint className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                        <span className="text-xs font-bold text-blue-500">Aadhaar e-KYC</span>
                     </div>
                     <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/20 text-center">
                        <Scan className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                        <span className="text-xs font-bold text-amber-500">Face Match</span>
                     </div>
                  </div>
               </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="px-6 py-20 md:px-12 bg-secondary/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Our Identity Verification Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A modular suite of tools to verify individuals and businesses with surgical precision.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Aadhaar e-KYC", 
                desc: "Real-time biometric or OTP-based authentication using official UIDAI data.", 
                icon: Fingerprint,
                color: "blue"
              },
              { 
                title: "PAN Verification", 
                desc: "Instant validation of financial identity and tax records with authority databases.", 
                icon: CreditCard,
                color: "amber"
              },
              { 
                title: "DigiLocker Access", 
                desc: "Secure, consent-based retrieval of government-issued digital documents.", 
                icon: Database,
                color: "green"
              },
              { 
                title: "Biometric Matching", 
                desc: "AI-powered Face Match and Liveness Detection to eliminate spoofing and fraud.", 
                icon: Scan,
                color: "purple"
              },
              { 
                title: "Communication Sync", 
                desc: "Instant Email and Mobile OTP-based verification for contact authenticity.", 
                icon: Globe,
                color: "indigo"
              },
              { 
                title: "KYC OCR", 
                desc: "Automated data extraction from ID documents using advanced Document Intelligence.", 
                icon: FileText,
                color: "red"
              },
              { 
                title: "Business (KYB)", 
                desc: "Complete verification of business entities, merchants, and vendors registration.", 
                icon: Briefcase,
                color: "sky"
              },
              { 
                title: "Intelligent Screening", 
                desc: "Risk assessment against global watchlists and AML databases.", 
                icon: Search,
                color: "rose"
              }
            ].map((service, i) => (
              <Card key={i} className="p-8 border border-border/50 hover:shadow-xl transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-transform group-hover:scale-110 bg-${service.color}-500/10`}>
                  <service.icon className={`w-6 h-6 text-${service.color}-500`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="px-6 py-24 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest rounded-full">The Flow</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">The Verification Process</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 md:before:left-[1.4rem] md:before:right-auto md:before:w-0.5 before:w-0.5 before:h-full before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent">
              {[
                { step: "1", title: "User Submission", desc: "Customers upload ID documents or provide identity details (Aadhaar/PAN)." },
                { step: "2", title: "API Trigger", desc: "The system triggers real-time verification processes with corresponding authorities." },
                { step: "3", title: "OCR & AI Processing", desc: "Intelligence models extract structured data and validate document authenticity." },
                { step: "4", title: "Biometric Check", desc: "Face matching and liveness detection confirm the user is real and present." },
                { step: "5", title: "Instant Result", desc: "Verified results and data are delivered instantly via dashboard or API." }
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

          <div className="grid grid-cols-1 gap-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">Why DigitalRakshak?</h2>
             {[
               { title: "Deep Domain Expertise", desc: "Practical, compliant solutions tailored to specific industry regulations.", icon: BrainCircuit },
               { title: "API-First Architecture", desc: "Developer-friendly SDKs and APIs for quick integration and scalability.", icon: Globe },
               { title: "Multi-Layered Fraud Prevention", desc: "Combines document and biometric checks for maximum security.", icon: ShieldCheck },
               { title: "Compliance-Driven Approach", desc: "Built to stay ahead of evolving KYC, AML, and data protection laws.", icon: Target }
             ].map((advantage, i) => (
               <Card key={i} className="p-6 border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-all">
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                     <advantage.icon className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <h4 className="font-bold mb-1 text-foreground text-lg">{advantage.title}</h4>
                     <p className="text-sm text-muted-foreground leading-relaxed">{advantage.desc}</p>
                   </div>
                 </div>
               </Card>
             ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="px-6 py-24 md:px-12 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Industry Use Cases</h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto">Versatile identity infrastructure that powers various sectors.</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { industry: "BFSI & NBFCs", icon: Briefcase, uses: ["Digital onboarding", "Loan processing"] },
              { industry: "Fintech & Payments", icon: CreditCard, uses: ["Wallet KYC", "Merchant setup"] },
              { industry: "Gaming & iGaming", icon: Gamepad2, uses: ["Player age", "Fraud checks"] },
              { industry: "E-commerce", icon: ShoppingCart, uses: ["Seller verify", "Vendor risk"] },
              { industry: "HR & Staffing", icon: Users, uses: ["Employee ID", "Background sync"] }
            ].map((useCase, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group text-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-4 text-white">{useCase.industry}</h3>
                <ul className="space-y-2 text-left">
                  {useCase.uses.map((use, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & CTA Section */}
      <section className="px-6 py-24 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about our Identity & e-KYC infrastructure</p>
          </div>
          <Accordion type="single" collapsible className="w-full mb-24 bg-card shadow-sm border rounded-2xl p-4 md:p-8">
            {[
              {
                q: "What is e-KYC infrastructure?",
                a: "It's a digital framework that allows businesses to verify the identity of their customers electronically using government-backed data (like Aadhaar/PAN) and biometric checks."
              },
              {
                q: "Is DigitalRakshak's verification real-time?",
                a: "Yes, most of our identity checks (Aadhaar, PAN, Face Match) provide instant results, enabling a seamless real-time onboarding experience."
              },
              {
                q: "How secure is the data handled by DigitalRakshak?",
                a: "We use enterprise-grade encryption and follow strict regulatory guidelines to ensure all sensitive customer data is protected and compliant with data protection laws."
              },
              {
                q: "Can I integrate specific tools into my existing app?",
                a: "Absolutely. Our API-first architecture allows you to pick and choose specific verification modules (like PAN only or Face Match only) and integrate them easily via our SDKs."
              },
              {
                q: "Does it support international identity documents?",
                a: "While our core focus is on the Indian market with Aadhaar and PAN, our KYC OCR and Biometric tools are designed to work globally."
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Let's Build Trust, Together</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Ready to transform your verification ecosystem? Contact our experts today and start your journey with DigitalRakshak.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 h-14 rounded-full text-lg shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                  Request a Demo
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold px-10 h-14 rounded-full text-lg transition-all">
                  Contact Sales
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
