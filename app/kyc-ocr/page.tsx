'use client'

import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CheckCircle, ShieldCheck, Zap, FileText, Target, Briefcase, Gamepad2, ShoppingCart, Users, TrendingUp, Globe, ScanLine, BrainCircuit } from 'lucide-react'
import { Header, type HeaderRef } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function KycOcrPage() {
  const headerRef = useRef<HeaderRef>(null)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header headerRef={headerRef} />

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-transparent" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <ScanLine className="w-5 h-5" />
            Automate Data Extraction
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            KYC OCR (Document Intelligence)
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Automate Data Extraction from KYC Documents with Speed, Accuracy & Intelligence. Eliminate manual data entry bottlenecks and ensure reliability.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">What is KYC OCR?</h2>
            <p className="text-lg text-muted-foreground mb-4">
              KYC OCR (Know Your Customer – Optical Character Recognition) is a technology that scans identity documents and converts unstructured text (images or PDFs) into structured, machine-readable data.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Instead of manually entering details, businesses can automatically extract:
            </p>
            <ul className="space-y-4 mb-4">
              {[
                "Name",
                "Date of Birth",
                "Document Number (PAN, Aadhaar, etc.)",
                "Address",
                "Other key identity fields"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium text-lg">
                  <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
             <p className="text-lg text-muted-foreground border-l-4 border-primary pl-4 py-1 italic bg-primary/5 rounded-r-lg mt-8">
               This enables instant, error-free data capture during onboarding and verification, completely replacing slow and error-prone manual tasks.
             </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Accelerate Onboarding", desc: "Reduce document processing time from minutes to seconds.", icon: Zap, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
              { title: "Eliminate Manual Errors", desc: "Avoid costly mistakes caused by manual data entry workflows.", icon: Target, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
              { title: "Reduce Operational Costs", desc: "Minimize dependency on large manual verification teams.", icon: TrendingUp, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
              { title: "Improve Data Accuracy", desc: "Ensure consistent and reliable data extraction across all files.", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Our KYC OCR Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">DigitalRakshak's OCR engine is built with advanced AI models to handle a wide range of identity documents with high precision.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 justify-center">
            {/* Multi-Document Support */}
            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <FileText className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Multi-Document Support</h3>
              <p className="text-muted-foreground mb-6 min-h-[48px]">Extract data comprehensively from various identity documents.</p>
              <h4 className="font-semibold mb-4 text-xs text-foreground/70 uppercase tracking-wider">Examples</h4>
              <ul className="space-y-3">
                {[
                  "Aadhaar Card",
                  "PAN Card",
                  "Passport",
                  "Driving License",
                  "Other government-issued IDs"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                     <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                     {feature}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Intelligent Data Extraction */}
            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <BrainCircuit className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Intelligent Extraction</h3>
              <p className="text-muted-foreground mb-6 min-h-[48px]">Automatically identify and extract relevant fields from unstructured documents.</p>
              <h4 className="font-semibold mb-4 text-xs text-foreground/70 uppercase tracking-wider">Features</h4>
              <ul className="space-y-3">
                {[
                  "Name, DOB, ID number",
                  "Address & demographic details",
                  "Structured output (JSON/API format)",
                  "Instant processing"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                     <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                     {feature}
                  </li>
                ))}
              </ul>
            </Card>

            {/* AI-Powered Accuracy */}
            <Card className="relative overflow-hidden p-8 border border-border/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group bg-background/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <Target className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">AI-Powered Accuracy</h3>
              <p className="text-muted-foreground mb-6 min-h-[48px]">Leverage machine learning models trained on real-world document formats.</p>
              <h4 className="font-semibold mb-4 text-xs text-foreground/70 uppercase tracking-wider">Benefits</h4>
              <ul className="space-y-3">
                {[
                  "High accuracy with low-quality images",
                  "Handles different layouts and formats",
                  "Auto-cropping & alignment (Pre-Processing)",
                  "Noise reduction & clarity enhancement"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">How KYC OCR Works</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 md:before:left-[1.4rem] md:before:right-auto md:before:w-0.5 before:w-0.5 before:h-full before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent">
              {[
                { step: "1", title: "Upload", desc: "User uploads a document (image or PDF) through your platform." },
                { step: "2", title: "Pre-Processing", desc: "System processes and enhances the image for maximum readability." },
                { step: "3", title: "Extraction", desc: "OCR engine intuitively extracts text and key identity fields." },
                { step: "4", title: "Structuring", desc: "Extracted data is instantly structured into a usable format (JSON/API)." },
                { step: "5", title: "Delivery", desc: "Output is sent instantly and seamlessly to your system." }
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
                  { title: "Built for Scale", desc: "Handle thousands of document verifications simultaneously without performance issues.", icon: TrendingUp },
                  { title: "High Accuracy & Reliability", desc: "Optimized models ensure maximum data extraction accuracy across document types.", icon: Target },
                  { title: "Secure Data Handling", desc: "Enterprise-grade security and data encryption ensure data is closely protected.", icon: ShieldCheck },
                  { title: "Faster Time-to-Market", desc: "Seamless API Integration allows you to launch automated workflows rapidly.", icon: Zap },
                  { title: "Complete Ecosystem", desc: "Seamlessly combine OCR with Aadhaar, PAN, and biometric verification easily.", icon: Globe }
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
            <p className="text-slate-300 text-xl max-w-2xl mx-auto">See how different sectors utilize our OCR services to automate onboarding workflows.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { industry: "Fintech & NBFCs", icon: Briefcase, uses: ["Customer onboarding", "Loan application processing", "KYC automation workflows"] },
              { industry: "Gaming & iGaming", icon: Gamepad2, uses: ["Player identity verification", "Age verification support", "Fraud mitigation"] },
              { industry: "E-commerce & Marketplaces", icon: ShoppingCart, uses: ["Seller & Vendor onboarding", "Vendor document verification", "Compliance checks"] },
              { industry: "HR & Staffing Platforms", icon: Users, uses: ["Employee document processing", "Identity verification", "Fast background processing"] }
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
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Automate document extraction</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Reduce manual time</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Enable real-time onboarding</span>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="px-6 py-24 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about our OCR capabilities</p>
          </div>
          <Accordion type="single" collapsible className="w-full mb-24 bg-card shadow-sm border rounded-2xl p-4 md:p-8">
            {[
              {
                q: "Which documents are supported?",
                a: "We support Aadhaar, PAN, Passports, Driving Licenses, and many other government-issued identity documents natively."
              },
              {
                q: "How accurate is the OCR?",
                a: "Our AI models are trained on large datasets to ensure exceptionally high accuracy even with varied document qualities and difficult layouts."
              },
              {
                q: "Can it extract data in real-time?",
                a: "Yes, our OCR solution is specifically designed for real-time processing, providing instant extraction results for smooth onboarding workflows."
              },
              {
                q: "Is data secure?",
                a: "Absolutely. We strictly prioritize data security and utilize high-level encryption to ensure all processed document information is handled safely and securely."
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Transform Your KYC Process using OCR</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Stop relying on slow and error-prone manual processes. Integrate DigitalRakshak's KYC OCR solution to bring speed, intelligence, and automation to your identity verification.
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
