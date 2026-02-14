'use client'

import { useState, useRef, useEffect } from 'react'
import { Lock, ChevronDown, Search, ArrowRight, ChevronLeft, Menu, X } from 'lucide-react'
import { servicesData } from '@/lib/services-data'
import type { MainService, SubService } from '@/lib/services-data'

type NavLevel = 'main' | 'subservices' | 'services'

export interface HeaderRef {
  openMenu: (mainService?: string, subService?: string) => void
  closeMenu: () => void
}

export const Header = ({ headerRef }: { headerRef?: React.Ref<HeaderRef> }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [currentLevel, setCurrentLevel] = useState<NavLevel>('main')
  const [activeMainService, setActiveMainService] = useState<MainService | null>(null)
  const [activeSubService, setActiveSubService] = useState<SubService | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleServicesEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
    }
    setOpenDropdown('services')
  }

  const handleServicesLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
      resetNavigation()
    }, 150)
  }

  const resetNavigation = () => {
    setCurrentLevel('main')
    setActiveMainService(null)
    setActiveSubService(null)
  }

  const handleMainServiceClick = (service: MainService) => {
    setActiveMainService(service)
    setCurrentLevel('subservices')
  }

  const handleSubServiceClick = (subService: SubService) => {
    setActiveSubService(subService)
    setCurrentLevel('services')
  }

  const handleBackClick = () => {
    if (currentLevel === 'services') {
      setCurrentLevel('subservices')
      setActiveSubService(null)
    } else if (currentLevel === 'subservices') {
      setCurrentLevel('main')
      setActiveMainService(null)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (!isMobileMenuOpen) {
      // Reset to main level when opening
      setCurrentLevel('main')
      setActiveMainService(null)
      setActiveSubService(null)
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    resetNavigation()
  }

  // Handle click outside for mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && 
          !(event.target as Element).closest('.mobile-menu-button')) {
        closeMobileMenu()
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Expose methods via ref for external control
  useEffect(() => {
    if (headerRef && typeof headerRef === 'object' && 'current' in headerRef) {
      headerRef.current = {
        openMenu: (mainServiceName?: string, subServiceName?: string) => {
          if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current)
          }
          
          if (mainServiceName && subServiceName) {
            const mainService = servicesData.find(s => s.name === mainServiceName)
            if (mainService) {
              setActiveMainService(mainService)
              const subService = mainService.subservices.find(s => s.name === subServiceName)
              if (subService) {
                setActiveSubService(subService)
                setCurrentLevel('services')
              } else {
                setCurrentLevel('subservices')
              }
            }
          } else if (mainServiceName) {
            const mainService = servicesData.find(s => s.name === mainServiceName)
            if (mainService) {
              setActiveMainService(mainService)
              setCurrentLevel('subservices')
            }
          } else {
            setCurrentLevel('main')
          }
          setOpenDropdown('services')
          // Open mobile menu if on mobile
          if (window.innerWidth < 768) {
            setIsMobileMenuOpen(true)
          }
        },
        closeMenu: () => {
          setOpenDropdown(null)
          resetNavigation()
          setIsMobileMenuOpen(false)
        }
      }
    }
  }, [headerRef])

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <nav className="relative bg-background border-b border-border/40 sticky top-0 z-50">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-4 md:px-12 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="DigitalRakshak Logo" className="w-10 h-10 md:w-12 md:h-12" />
          <h1 className="text-xl md:text-2xl font-bold text-primary">DigitalRakshak</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Why Choose Us
          </a>

          <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 hover:bg-secondary/50 rounded-lg transition-colors">
            <Search className="w-5 h-5 text-foreground" />
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 hover:bg-secondary/50 rounded-lg transition-colors mobile-menu-button"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      {openDropdown === 'services' && !isMobileMenuOpen && (
        <div
          ref={dropdownRef}
          className="hidden md:block absolute top-full left-0 right-0 bg-background border-t border-border/40 shadow-2xl max-h-[520px] overflow-hidden"
          onMouseEnter={handleServicesEnter}
          onMouseLeave={handleServicesLeave}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex h-full">
              {/* Main Services List */}
              {currentLevel === 'main' && (
                <div className="w-full">
                  <div className="px-6 py-5">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">
                      Our Popular Services
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {servicesData.map((service) => (
                        <button
                          key={service.name}
                          onClick={() => handleMainServiceClick(service)}
                          className="p-4 rounded-lg border border-border/30 bg-white hover:shadow-md hover:border-primary/40 transition-all duration-300 text-left group"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                                {service.name}
                              </h3>
                              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                {service.description}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Sub Services List */}
              {currentLevel === 'subservices' && activeMainService && (
                <div className="w-full">
                  <div className="px-6 py-5">
                    <div className="flex items-center gap-3 mb-4">
                      <button
                        onClick={handleBackClick}
                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-foreground" />
                      </button>
                      <div>
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          {activeMainService.name}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                          {activeMainService.description}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {activeMainService.subservices.map((subService) => (
                        <button
                          key={subService.name}
                          onClick={() => handleSubServiceClick(subService)}
                          className="p-4 rounded-lg border border-border/30 bg-white hover:shadow-md hover:border-primary/40 transition-all duration-300 text-left group"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                                {subService.name}
                              </h3>
                              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                {subService.description}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Services List */}
              {currentLevel === 'services' && activeSubService && (
                <div className="w-full">
                  <div className="px-6 py-5 overflow-y-auto max-h-[440px]">
                    <div className="flex items-center gap-3 mb-4">
                      <button
                        onClick={handleBackClick}
                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-foreground" />
                      </button>
                      <div>
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          {activeSubService.name}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                          {activeSubService.description}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      {activeSubService.services.map((service) => (
                        <div
                          key={service.name}
                          className="p-4 rounded-lg border border-border/30 bg-white hover:shadow-md hover:border-primary/40 transition-all duration-300 cursor-pointer group"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                {service.name}
                              </h3>
                              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                {service.description || 'Professional verification service'}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden fixed inset-x-0 top-[73px] bottom-0 bg-background z-50 overflow-y-auto"
        >
          <div className="min-h-full pb-10">
            {/* Mobile Navigation Links */}
            <div className="p-4 border-b border-border/40">
              <a 
                href="#services" 
                onClick={closeMobileMenu}
                className="block py-4 text-base font-medium text-foreground hover:text-primary transition-colors border-b border-border/20"
              >
                Why Choose Us
              </a>
              <a 
                href="#contact" 
                onClick={closeMobileMenu}
                className="block py-4 text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Services Header */}
            <div className="p-4 border-b border-border/40">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">Services</h3>
                {currentLevel !== 'main' && (
                  <button
                    onClick={handleBackClick}
                    className="flex items-center gap-1 text-sm text-primary font-medium"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Services Content */}
            <div className="p-4">
              {/* Mobile Main Services */}
              {currentLevel === 'main' && (
                <div className="space-y-3">
                  {servicesData.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => handleMainServiceClick(service)}
                      className="w-full p-5 rounded-xl border border-border/30 bg-white hover:shadow-md hover:border-primary/40 transition-all duration-300 text-left"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-base font-bold text-foreground mb-2">
                            {service.name}
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 ml-3 mt-1" />
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Mobile Sub Services */}
              {currentLevel === 'subservices' && activeMainService && (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground mb-4">
                    {activeMainService.description}
                  </p>
                  {activeMainService.subservices.map((subService) => (
                    <button
                      key={subService.name}
                      onClick={() => handleSubServiceClick(subService)}
                      className="w-full p-5 rounded-xl border border-border/30 bg-white hover:shadow-md hover:border-primary/40 transition-all duration-300 text-left"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="text-base font-bold text-foreground mb-2">
                            {subService.name}
                          </h5>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {subService.description}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 ml-3 mt-1" />
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Mobile Services List */}
              {currentLevel === 'services' && activeSubService && (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground mb-4">
                    {activeSubService.description}
                  </p>
                  <div className="space-y-3">
                    {activeSubService.services.map((service) => (
                      <div
                        key={service.name}
                        className="p-5 rounded-xl border border-border/30 bg-white"
                      >
                        <h5 className="text-base font-bold text-foreground mb-2">
                          {service.name}
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          {service.description || 'Professional verification service'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function Shield({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m7.784-4.817a.5.5 0 00-.212-.662l-.012-.007a49.5 49.5 0 00-7.923-3.346.5.5 0 00-.464.55v5.338a9 9 0 01-4.568 7.753l-.026.015a.5.5 0 00.048.854l.991.99.954.954.316.315a.5.5 0 00.708 0l.707-.707.707-.707.316-.315a.5.5 0 00-.088-.823l-.012-.007A9 9 0 019 3.75v5.068a.5.5 0 01-.464-.55l-.012-.007a49.5 49.5 0 00-7.923-3.346"
      />
    </svg>
  )
}