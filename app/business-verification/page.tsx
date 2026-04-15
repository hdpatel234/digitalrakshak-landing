'use client'

import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  BrainCircuit,
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
  Building2, 
  UserCheck, 
  AlertTriangle,
  Search,
  ArrowRight
} from 'lucide-react'
import { Header, type HeaderRef } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function BusinessVerificationPage() {
  const headerRef = useRef<HeaderRef>(null)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header headerRef={headerRef} />

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-transparent" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <Building2 className="w-5 h-5" />
            Secure Business Onboarding
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Business Verification (KYB)
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Verify Businesses with Confidence, Reduce Risk, and Enable Secure Onboarding. Validate business identities in real-time with DigitalRakshak.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-14 px-8 rounded-full shadow-xl hover:shadow-primary/25 transition-all">
            Request a Demo
          </Button>
        </div>
      </section>

      {/* Overview & Why it Matters */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">What is KYB?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              KYB (Know Your Business) is the process of verifying the identity, legitimacy, and compliance status of a business entity before onboarding or transacting with them.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              It includes validating critical business parameters:
            </p>
            <ul className="space-y-4 mb-4">
              {[
                "Business registration details",
                "Legal existence and status",
                "Ownership and authorized representatives",
                "Licenses and regulatory compliance"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium text-lg">
                  <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
             <p className="text-lg text-muted-foreground border-l-4 border-primary pl-4 py-1 italic bg-primary/5 rounded-r-lg mt-8">
               KYB is essential for industries dealing with financial transactions, partnerships, and marketplace ecosystems.
             </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Prevent Fraud", desc: "Avoid onboarding fake or shell companies that lead to financial damage.", icon: AlertTriangle, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
              { title: "Ensure Compliance", desc: "Stay aligned with KYC, AML, and government regulations.", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
              { title: "Build Trust", desc: "Work only with verified vendors, merchants, and partners.", icon: Users, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
              { title: "Speed Up Process", desc: "Automate verification processes and reduce manual checks.", icon: Zap, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Our KYB Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">DigitalRakshak offers a comprehensive KYB infrastructure to validate businesses efficiently and accurately.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Business Identity */}
            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <Building2 className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Identity Verification</h3>
              <p className="text-muted-foreground mb-6 min-h-[48px]">Verify the legal existence and registration details of a company.</p>
              <ul className="space-y-3">
                {[
                  "Validate business name & registration",
                  "Check active/inactive status",
                  "Cross-verify official records"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                     <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                     {feature}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Shop & Establishment */}
            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <Search className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Shop & Establishment</h3>
              <p className="text-muted-foreground mb-6 min-h-[48px]">Ensure local businesses are legally registered and compliant.</p>
              <ul className="space-y-3">
                {[
                  "Verify Shop & Establishment licenses",
                  "Validate location and ownership",
                  "Ideal for SMB onboarding"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                     <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                     {feature}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Document Verification */}
            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <FileText className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Document Validation</h3>
              <p className="text-muted-foreground mb-6 min-h-[48px]">Authenticate business documents to prevent forgery and manipulation.</p>
              <ul className="space-y-3">
                {[
                  "Registration certificates",
                  "Licenses and permits",
                  "Supporting legal documents"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                     <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                     {feature}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Authorized Person */}
            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <UserCheck className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Authorized Person</h3>
              <p className="text-muted-foreground mb-6 min-h-[48px]">Verify the identity of key individuals associated with the business.</p>
              <ul className="space-y-3">
                {[
                  "Directors / owners verification",
                  "KYC for authorized signatories",
                  "Link business with real individuals"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                     <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                     {feature}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Risk & Fraud */}
            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <ShieldCheck className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Risk & Fraud Screening</h3>
              <p className="text-muted-foreground mb-6 min-h-[48px]">Identify potential risks before onboarding a business.</p>
              <ul className="space-y-3">
                {[
                  "Detect non-compliant entities",
                  "Flag high-risk businesses",
                  "Reduce exposure to financial crime"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                     <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                     {feature}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="px-6 py-24 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest rounded-full">Process</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">How KYB Verification Works</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 md:before:left-[1.4rem] md:before:right-auto md:before:w-0.5 before:w-0.5 before:h-full before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent">
              {[
                { step: "1", title: "Submission", desc: "Business submits registration details and supporting documents." },
                { step: "2", title: "Validation", desc: "System validates data against trusted government and official sources." },
                { step: "3", title: "Authentication", desc: "Documents are verified for authenticity and cross-checked." },
                { step: "4", title: "Assessment", desc: "Risk assessment and compliance checks are performed automatically." },
                { step: "5", title: "Reporting", desc: "Verified status is delivered instantly via dashboard or API." }
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
                  { title: "Deep Verification", desc: "Data validation, document checks, and risk analysis in one suite.", icon: BrainCircuit },
                  { title: "API-First Infrastructure", desc: "Seamlessly integrate into your onboarding workflows with ease.", icon: Globe },
                  { title: "Real-Time Results", desc: "Instant outcomes to accelerate your business decision-making.", icon: Zap },
                  { title: "Compliance-Ready", desc: "Designed to support regulatory requirements across all industries.", icon: ShieldCheck },
                  { title: "Scalable Solutions", desc: "Handle thousands of verifications without operational bottlenecks.", icon: TrendingUp }
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Industry Use Cases</h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto">See how different sectors utilize our KYB services to build trusted networks.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { industry: "E-commerce & Marketplaces", icon: ShoppingCart, uses: ["Merchant onboarding", "Marketplace trust building", "Vendor compliance checks"] },
              { industry: "BFSI & NBFCs", icon: Briefcase, uses: ["Business loan verification", "Corporate account opening", "AML/KYC compliance"] },
              { industry: "Gaming & iGaming", icon: Gamepad2, uses: ["Partner & Affiliate verification", "Payment risk mitigation", "Fraud prevention"] }
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
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Reduce fraud & financial risk</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Ensure regulatory compliance</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Accelerate onboarding</span>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="px-6 py-24 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about our KYB capabilities</p>
          </div>
          <Accordion type="single" collapsible className="w-full mb-24 bg-card shadow-sm border rounded-2xl p-4 md:p-8">
            {[
              {
                q: "What is KYB verification?",
                a: "KYB (Know Your Business) is the process of verifying a company’s identity, registration, and compliance before onboarding or transactions."
              },
              {
                q: "Why is business verification important?",
                a: "It helps prevent fraud, ensures regulatory compliance, and builds a trusted ecosystem for partnerships and transactions."
              },
              {
                q: "What documents are required for KYB?",
                a: "Common documents include business registration certificates, licenses, and identity proof of authorized individuals."
              },
              {
                q: "Can DigitalRakshak integrate with our current systems?",
                a: "Yes, we provide easy-to-use APIs for seamless integration with your existing onboarding platforms."
              },
              {
                q: "Is the verification real-time?",
                a: "Most of our business identity and license verifications are performed in real-time or near real-time."
              },
              {
                q: "Does KYB support international businesses?",
                a: "Currently, our primary focus is on Indian business entities, with support for more regions coming soon."
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Build a Trusted Business Network</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Don’t let unverified businesses compromise your platform. Integrate DigitalRakshak’s Business Verification (KYB) solutions today.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 h-14 rounded-full text-lg shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                Request a Demo Today
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
