
'use client';

import { useState, useEffect, FormEvent } from 'react';
import { 
  Heart, 
  Users, 
  BookOpen, 
  Puzzle, 
  PartyPopper, 
  HandHeart,
  MapPin,
  Phone,
  Mail,
  Send,
  Star,
  ArrowUp,
  Menu,
  X,
  Globe
} from 'lucide-react';

// Language type
type Language = 'ar' | 'fr' | 'en';

// Translation interface
interface Translations {
  nav: {
    home: string;
    about: string;
    objectives: string;
    activities: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    features: {
      training: { title: string; description: string };
      support: { title: string; description: string };
      awareness: { title: string; description: string };
    };
  };
  objectives: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  activities: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
    info: {
      address: string;
      phone: string;
      email: string;
    };
  };
  footer: {
    description: string;
    rights: string;
  };
}

// Translations object
const translations: Record<Language, Translations> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      objectives: 'أهدافنا',
      activities: 'أنشطتنا',
      contact: 'تواصل معنا'
    },
    hero: {
      title: 'جمعية لمسة أمل',
      subtitle: 'دعم أطفال اضطراب طيف التوحد',
      description: 'نحن جمعية غير ربحية تعمل على دعم أسر وأطفال اضطراب طيف التوحد في المغرب، وتقديم الدعم النفسي والتربوي والأنشطة المتخصصة.',
      primaryButton: 'انضم إلينا',
      secondaryButton: 'اعرف المزيد'
    },
    about: {
      title: 'من نحن',
      paragraphs: [
        'جمعية لمسة أمل هي جمعية غير ربحية تأسست بهدف دعم أسر وأطفال اضطراب طيف التوحد في المغرب. نحن نؤمن بأن كل طفل يستحق الفرصة للنمو والتطور في بيئة محبة وداعمة.',
        'تعمل جمعيتنا على تقديم الدعم النفسي والتربوي للأسر، وتنظيم برامج التوعية المجتمعية، وتوفير الأنشطة الترفيهية والتعليمية المتخصصة للأطفال.',
        'نسعى إلى بناء مجتمع أكثر وعياً وتفهماً لاحتياجات الأطفال ذوي اضطراب طيف التوحد وأسرهم، ونعمل على كسر الحواجز وتعزيز الدمج الاجتماعي.'
      ],
      features: {
        training: { title: 'التكوين', description: 'برامج تدريبية متخصصة' },
        support: { title: 'الدعم', description: 'مساندة نفسية واجتماعية' },
        awareness: { title: 'التوعية', description: 'نشر الوعي المجتمعي' }
      }
    },
    objectives: {
      title: 'أهدافنا',
      items: [
        { title: 'دعم الأسر', description: 'تقديم الدعم النفسي والاجتماعي للأسر المتأثرة بطيف التوحد' },
        { title: 'برامج تعليمية', description: 'تطوير وتنفيذ برامج تعليمية مخصصة للأطفال ذوي طيف التوحد' },
        { title: 'التوعية المجتمعية', description: 'نشر الوعي حول اضطراب طيف التوحد في المجتمع' },
        { title: 'التدريب المهني', description: 'تدريب المختصين والأهالي على أفضل الممارسات في التعامل مع طيف التوحد' }
      ]
    },
    activities: {
      title: 'أنشطتنا',
      items: [
        { title: 'ورش تدريبية', description: 'ورش متخصصة للأهالي والمختصين حول كيفية التعامل مع أطفال طيف التوحد' },
        { title: 'أنشطة ترفيهية', description: 'برامج ترفيهية وتعليمية مصممة خصيصاً لأطفال طيف التوحد' },
        { title: 'جلسات دعم', description: 'جلسات دعم نفسي واجتماعي للأسر والأطفال' },
        { title: 'حملات توعية', description: 'حملات توعوية لنشر الوعي حول طيف التوحد في المجتمع' }
      ]
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا لمساعدتك والإجابة على جميع استفساراتك',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        message: 'رسالتك',
        send: 'إرسال الرسالة'
      },
      info: {
        address: 'كلميم، المغرب',
        phone: '+212 6 12 34 56 78',
        email: 'lamsatamal589@gmail.com'
      }
    },
    footer: {
      description: 'جمعية لمسة أمل - دعم أطفال وأسر اضطراب طيف التوحد',
      rights: 'جميع الحقوق محفوظة © 2025 جمعية لمسة أمل'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      objectives: 'Objectifs',
      activities: 'Activités',
      contact: 'Contact'
    },
    hero: {
      title: 'Association Lamsat Amal',
      subtitle: 'Soutien aux enfants autistes',
      description: 'Nous sommes une association à but non lucratif qui œuvre pour soutenir les familles et les enfants avec trouble du spectre autistique au Maroc, en offrant un soutien psychologique, éducatif et des activités spécialisées.',
      primaryButton: 'Rejoignez-nous',
      secondaryButton: 'En savoir plus'
    },
    about: {
      title: 'À propos de nous',
      paragraphs: [
        'L\'Association Lamsat Amal est une association à but non lucratif fondée dans le but de soutenir les familles et les enfants avec trouble du spectre autistique au Maroc. Nous croyons que chaque enfant mérite l\'opportunité de grandir et de se développer dans un environnement aimant et soutenant.',
        'Notre association œuvre à fournir un soutien psychologique et éducatif aux familles, organiser des programmes de sensibilisation communautaire, et offrir des activités récréatives et éducatives spécialisées pour les enfants.',
        'Nous aspirons à construire une communauté plus consciente et compréhensive des besoins des enfants avec trouble du spectre autistique et de leurs familles, et nous travaillons à briser les barrières et promouvoir l\'inclusion sociale.'
      ],
      features: {
        training: { title: 'Formation', description: 'Programmes de formation spécialisés' },
        support: { title: 'Soutien', description: 'Accompagnement psychologique et social' },
        awareness: { title: 'Sensibilisation', description: 'Diffusion de la sensibilisation communautaire' }
      }
    },
    objectives: {
      title: 'Nos objectifs',
      items: [
        { title: 'Soutien aux familles', description: 'Fournir un soutien psychologique et social aux familles affectées par l\'autisme' },
        { title: 'Programmes éducatifs', description: 'Développer et mettre en œuvre des programmes éducatifs dédiés aux enfants autistes' },
        { title: 'Sensibilisation communautaire', description: 'Diffuser la sensibilisation sur les troubles du spectre autistique dans la communauté' },
        { title: 'Formation professionnelle', description: 'Former les spécialistes et les parents aux meilleures pratiques de prise en charge de l\'autisme' }
      ]
    },
    activities: {
      title: 'Nos activités',
      items: [
        { title: 'Ateliers de formation', description: 'Ateliers spécialisés pour les parents et professionnels sur la prise en charge des enfants autistes' },
        { title: 'Activités récréatives', description: 'Programmes récréatifs et éducatifs conçus spécialement pour les enfants autistes' },
        { title: 'Séances de soutien', description: 'Séances de soutien psychologique et social pour les familles et les enfants' },
        { title: 'Campagnes de sensibilisation', description: 'Campagnes de sensibilisation pour diffuser la conscience sur l\'autisme dans la communauté' }
      ]
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Nous sommes là pour vous aider et répondre à toutes vos questions',
      form: {
        name: 'Nom complet',
        email: 'Adresse e-mail',
        message: 'Votre message',
        send: 'Envoyer le message'
      },
      info: {
        address: 'Guelmim, Maroc',
        phone: '+212 6 12 34 56 78',
        email: 'lamsatamal589@gmail.com'
      }
    },
    footer: {
      description: 'Association Lamsat Amal - Soutien aux enfants et familles avec trouble du spectre autistique',
      rights: 'Tous droits réservés © 2025 Association Lamsat Amal'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      objectives: 'Objectives',
      activities: 'Activities',
      contact: 'Contact'
    },
    hero: {
      title: 'Lamsat Amal Association',
      subtitle: 'Supporting children with autism',
      description: 'We are a non-profit association working to support families and children with autism spectrum disorder in Morocco, providing psychological and educational support and specialized activities.',
      primaryButton: 'Join Us',
      secondaryButton: 'Learn More'
    },
    about: {
      title: 'About Us',
      paragraphs: [
        'Lamsat Amal Association is a non-profit organization founded with the goal of supporting families and children with autism spectrum disorder in Morocco. We believe that every child deserves the opportunity to grow and develop in a loving and supportive environment.',
        'Our association works to provide psychological and educational support to families, organize community awareness programs, and provide specialized recreational and educational activities for children.',
        'We strive to build a more aware and understanding community of the needs of children with autism spectrum disorder and their families, and we work to break barriers and promote social inclusion.'
      ],
      features: {
        training: { title: 'Training', description: 'Specialized training programs' },
        support: { title: 'Support', description: 'Psychological and social assistance' },
        awareness: { title: 'Awareness', description: 'Community awareness spreading' }
      }
    },
    objectives: {
      title: 'Our Objectives',
      items: [
        { title: 'Family Support', description: 'Provide psychological and social support to families affected by autism' },
        { title: 'Educational Programs', description: 'Develop and implement educational programs dedicated to children with autism' },
        { title: 'Community Awareness', description: 'Spread awareness about autism spectrum disorders in the community' },
        { title: 'Professional Training', description: 'Train specialists and parents in best practices for autism care' }
      ]
    },
    activities: {
      title: 'Our Activities',
      items: [
        { title: 'Training Workshops', description: 'Specialized workshops for parents and professionals on caring for children with autism' },
        { title: 'Recreational Activities', description: 'Recreational and educational programs designed specifically for children with autism' },
        { title: 'Support Sessions', description: 'Psychological and social support sessions for families and children' },
        { title: 'Awareness Campaigns', description: 'Awareness campaigns to spread consciousness about autism in the community' }
      ]
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to help you and answer all your questions',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        message: 'Your Message',
        send: 'Send Message'
      },
      info: {
        address: 'Guelmim, Morocco',
        phone: '+212 6 12 34 56 78',
        email: 'lamsatamal589@gmail.com'
      }
    },
    footer: {
      description: 'Lamsat Amal Association - Supporting children and families with autism spectrum disorder',
      rights: 'All rights reserved © 2025 Lamsat Amal Association'
    }
  }
};

import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('Zon_qY_7e-7Pw3khE');

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ar');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize document direction and language
  useEffect(() => {
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  // Get current translations
  const t = translations[currentLanguage];

  // Check if current language is RTL
  const isRTL = currentLanguage === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    // Update document direction
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'arabic-text' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="/lamsa.png" 
                  alt="Lamsat Amal Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">{t.hero.title}</h1>
                <p className="text-sm text-gray-600">{t.hero.subtitle}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { name: t.nav.home, id: 'home' },
                { name: t.nav.about, id: 'about' },
                { name: t.nav.objectives, id: 'objectives' },
                { name: t.nav.activities, id: 'activities' },
                { name: t.nav.contact, id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium relative group px-4 py-2 rounded-full hover:bg-green-50"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              
              {/* Language Switcher */}
              <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200">
                <Globe size={20} className="text-gray-600" />
                <div className="flex gap-1">
                  {(['ar', 'fr', 'en'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className={`px-2 py-1 text-xs font-medium rounded transition-colors duration-200 ${
                        currentLanguage === lang
                          ? 'bg-green-600 text-white'
                          : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl p-6 border-t">
              {[
                { name: t.nav.home, id: 'home' },
                { name: t.nav.about, id: 'about' },
                { name: t.nav.objectives, id: 'objectives' },
                { name: t.nav.activities, id: 'activities' },
                { name: t.nav.contact, id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-right py-3 text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium border-b border-gray-100 last:border-b-0"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 pt-4 mt-4 border-t border-gray-200">
                <Globe size={20} className="text-gray-600" />
                <div className="flex gap-2">
                  {(['ar', 'fr', 'en'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className={`px-3 py-1 text-xs font-medium rounded transition-colors duration-200 ${
                        currentLanguage === lang
                          ? 'bg-green-600 text-white'
                          : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section - Professional Two-Column Layout */}
      <section id="home" className="relative min-h-[100vh] flex items-center bg-gradient-to-br from-white via-green-50/30 to-green-100/20 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3">
              <path d="M200 300L250 250L300 300L250 350Z" fill="#04623E"/>
              <path d="M800 200L850 150L900 200L850 250Z" fill="#F8B707"/>
              <path d="M400 500L450 450L500 500L450 550Z" fill="#04623E"/>
              <path d="M1000 400L1050 350L1100 400L1050 450Z" fill="#F8B707"/>
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Text Block */}
            <div className="space-y-8">
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 leading-tight">
                {t.hero.title}
              </h1>
              
              {/* Subheading */}
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                {t.hero.description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  {t.hero.primaryButton}
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {t.hero.secondaryButton}
                </button>
              </div>
            </div>

            {/* Right Column - Visual Block */}
            <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden">
              <img src="/hero.png" className="w-full h-full object-cover" alt="hero image"/>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
          <ArrowUp size={24} className="rotate-180" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 h-full">
              <div className="relative overflow-hidden w-full h-full rounded-3xl shadow-xl">
                <img 
                  src="./about.jpeg"
                  alt="أطفال يلعبون ويتعلمون في بيئة داعمة"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">{t.about.title}</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                {t.about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen size={28} className="text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{t.about.features.training.title}</h4>
                  <p className="text-sm text-gray-600">{t.about.features.training.description}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart size={28} className="text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{t.about.features.support.title}</h4>
                  <p className="text-sm text-gray-600">{t.about.features.support.description}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <HandHeart size={28} className="text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{t.about.features.awareness.title}</h4>
                  <p className="text-sm text-gray-600">{t.about.features.awareness.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">{t.objectives.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentLanguage === 'ar' 
                ? 'نعمل على تحقيق مجموعة من الأهداف الاستراتيجية لخدمة مجتمع التوحد وتطوير الخدمات المقدمة'
                : currentLanguage === 'fr'
                ? 'Nous travaillons à atteindre un ensemble d\'objectifs stratégiques pour servir la communauté autiste et développer les services offerts'
                : 'We work to achieve a set of strategic objectives to serve the autism community and develop the services provided'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.objectives.items.map((objective, index) => {
              const icons = [BookOpen, Puzzle, PartyPopper, HandHeart];
              const IconComponent = icons[index];
              return (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={40} className="text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{objective.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">{t.activities.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentLanguage === 'ar' 
                ? 'نقدم مجموعة متنوعة من الأنشطة والبرامج المصممة خصيصاً لدعم الأطفال وأسرهم'
                : currentLanguage === 'fr'
                ? 'Nous offrons une variété d\'activités et programmes conçus spécialement pour soutenir les enfants et leurs familles'
                : 'We offer a variety of activities and programs designed specifically to support children and their families'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.activities.items.map((activity, index) => {
              const imageSources = ['./p1.jpg', './p2.avif', './p3.avif', './p4.jpg'];
              return (
                <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                  <img src={imageSources[index] || './p1.jpg'} alt={activity.title} className="w-full h-48 object-cover" />
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{activity.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              {currentLanguage === 'ar' 
                ? 'معرض الصور'
                : currentLanguage === 'fr'
                ? 'Galerie photos'
                : 'Photo Gallery'
              }
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentLanguage === 'ar' 
                ? 'لحظات مميزة من أنشطتنا وفعالياتنا'
                : currentLanguage === 'fr'
                ? 'Moments spéciaux de nos activités et événements'
                : 'Special moments from our activities and events'
              }
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square">
                <img 
                  src={`./gallery${index}.jpg`}
                  alt={currentLanguage === 'ar' 
                    ? 'صورة من أنشطتنا'
                    : currentLanguage === 'fr'
                    ? 'Photo de nos activités'
                    : 'Photo from our activities'
                  }
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">
                      {currentLanguage === 'ar' 
                        ? 'نشاط ' + index
                        : currentLanguage === 'fr'
                        ? 'Activité ' + index
                        : 'Activity ' + index
                      }
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              {currentLanguage === 'ar' 
                ? 'عرض المزيد من الصور'
                : currentLanguage === 'fr'
                ? 'Voir plus de photos'
                : 'View More Photos'
              }
              <Star size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 leading-tight">
              {currentLanguage === 'ar' 
                ? '"منح الأمل والدعم للأسرة والطفل التوحدي، من خلال التوعية، التكوين، والترفيه"'
                : currentLanguage === 'fr'
                ? '"Donner espoir et soutien aux familles et enfants autistes, à travers la sensibilisation, la formation et les loisirs"'
                : '"Providing hope and support to families and children with autism, through awareness, training, and recreation"'
              }
            </h2>
            <p className="text-2xl text-gray-600 mb-8">
              {currentLanguage === 'ar' 
                ? 'نحو مجتمع أكثر احتواءً وتفهماً للاختلاف'
                : currentLanguage === 'fr'
                ? 'Vers une communauté plus inclusive et compréhensive de la différence'
                : 'Towards a more inclusive and understanding community of difference'
              }
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              {currentLanguage === 'ar' 
                ? 'كن جزءاً من التغيير'
                : currentLanguage === 'fr'
                ? 'Soyez partie du changement'
                : 'Be Part of the Change'
              }
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {currentLanguage === 'ar' 
                ? 'انضم إلينا في رحلتنا لبناء مجتمع أكثر وعياً ودعماً لأطفال التوحد وأسرهم'
                : currentLanguage === 'fr'
                ? 'Rejoignez-nous dans notre parcours pour construire une communauté plus consciente et solidaire des enfants autistes et de leurs familles'
                : 'Join us in our journey to build a more aware and supportive community for children with autism and their families'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                {currentLanguage === 'ar' 
                  ? 'تطوع معنا'
                  : currentLanguage === 'fr'
                  ? 'Devenir bénévole'
                  : 'Volunteer with us'
                }
                <HandHeart size={20} />
              </button>
              <button 
                onClick={() => setShowDonateModal(true)}
                className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                {currentLanguage === 'ar' 
                  ? 'تبرع الآن'
                  : currentLanguage === 'fr'
                  ? 'Faire un don'
                  : 'Donate Now'
                }
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">{t.contact.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {currentLanguage === 'ar' 
                  ? 'أرسل لنا رسالة'
                  : currentLanguage === 'fr'
                  ? 'Envoyez-nous un message'
                  : 'Send us a message'
                }
              </h3>
              <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                
                setFormStatus('sending');
                
                try {
                  const result = await emailjs.send(
                    'service_8bn6kjl',
                    'template_fj86mfb',
                    {
                      user_name: formData.get('user_name'),
                      user_email: formData.get('user_email'),
                      user_phone: formData.get('user_phone'),
                      message: formData.get('message'),
                      to_name: 'Lamsat Amal Association',
                    },
                    'Zon_qY_7e-7Pw3khE'
                  );
                  
                  console.log('Email sent successfully:', result);
                  
                  setFormStatus('success');
                  form.reset();
                  setTimeout(() => setFormStatus('idle'), 3000);
                } catch (error) {
                  console.error('Failed to send email:', error);
                  setFormStatus('error');
                  setTimeout(() => setFormStatus('idle'), 3000);
                }
              }}>
                <div>
                  <input
                    name="user_name"
                    type="text"
                    placeholder={t.contact.form.name}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-green-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    name="user_email"
                    type="email"
                    placeholder={t.contact.form.email}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-green-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    name="user_phone"
                    type="tel"
                    placeholder={currentLanguage === 'ar' ? 'رقم الهاتف' : currentLanguage === 'fr' ? 'Numéro de téléphone' : 'Phone number'}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-green-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder={t.contact.form.message}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-green-500 focus:outline-none transition-colors resize-none"
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'sending'}
                  className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform ${
                    formStatus === 'sending'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : formStatus === 'success'
                      ? 'bg-green-500'
                      : formStatus === 'error'
                      ? 'bg-red-500'
                      : 'bg-green-600 hover:bg-green-700 hover:scale-105'
                  } text-white`}
                >
                  {formStatus === 'sending' 
                    ? currentLanguage === 'ar' 
                      ? 'جاري الإرسال...'
                      : currentLanguage === 'fr'
                      ? 'Envoi en cours...'
                      : 'Sending...'
                    : formStatus === 'success'
                    ? currentLanguage === 'ar'
                      ? 'تم الإرسال بنجاح!'
                      : currentLanguage === 'fr'
                      ? 'Message envoyé!'
                      : 'Message sent!'
                    : formStatus === 'error'
                    ? currentLanguage === 'ar'
                      ? 'حدث خطأ!'
                      : currentLanguage === 'fr'
                      ? 'Erreur!'
                      : 'Error!'
                    : t.contact.form.send
                  }
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {currentLanguage === 'ar' 
                    ? 'معلومات التواصل'
                    : currentLanguage === 'fr'
                    ? 'Informations de contact'
                    : 'Contact Information'
                  }
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MapPin size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {currentLanguage === 'ar' ? 'العنوان' : currentLanguage === 'fr' ? 'Adresse' : 'Address'}
                      </h4>
                      <p className="text-gray-600">{t.contact.info.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Phone size={24} className="text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {currentLanguage === 'ar' ? 'الهاتف' : currentLanguage === 'fr' ? 'Téléphone' : 'Phone'}
                      </h4>
                      <p className="text-gray-600">{t.contact.info.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {currentLanguage === 'ar' ? 'البريد الإلكتروني' : currentLanguage === 'fr' ? 'Email' : 'Email'}
                      </h4>
                      <p className="text-gray-600">{t.contact.info.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-3xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {currentLanguage === 'ar' 
                    ? 'أوقات العمل'
                    : currentLanguage === 'fr'
                    ? 'Heures d\'ouverture'
                    : 'Working Hours'
                  }
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    {currentLanguage === 'ar' 
                      ? 'الاثنين - الجمعة: 9:00 - 17:00'
                      : currentLanguage === 'fr'
                      ? 'Lundi - Vendredi: 9:00 - 17:00'
                      : 'Monday - Friday: 9:00 - 17:00'
                    }
                  </p>
                  <p>
                    {currentLanguage === 'ar' 
                      ? 'السبت: 9:00 - 13:00'
                      : currentLanguage === 'fr'
                      ? 'Samedi: 9:00 - 13:00'
                      : 'Saturday: 9:00 - 13:00'
                    }
                  </p>
                  <p>
                    {currentLanguage === 'ar' 
                      ? 'الأحد: مغلق'
                      : currentLanguage === 'fr'
                      ? 'Dimanche: Fermé'
                      : 'Sunday: Closed'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Description */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                      src="/lamsa.png"
                      alt="Lamsat Amal Logo"
                      className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{t.hero.title}</h3>
                      <p className="text-gray-400">{t.hero.subtitle}</p>
                    </div>
                    </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t.footer.description}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                {currentLanguage === 'ar' ? 'روابط سريعة' : currentLanguage === 'fr' ? 'Liens rapides' : 'Quick Links'}
              </h4>
              <ul className="space-y-3">
                {[
                  { name: t.nav.home, id: 'home' },
                  { name: t.nav.about, id: 'about' },
                  { name: t.nav.objectives, id: 'objectives' },
                  { name: t.nav.activities, id: 'activities' }
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t.contact.title}</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <MapPin size={18} />
                  <span>{t.contact.info.address}</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Phone size={18} />
                  <span>{t.contact.info.phone}</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Mail size={18} />
                  <span>{t.contact.info.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-50 transform hover:scale-110"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Donation Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className={`bg-white rounded-3xl p-8 max-w-lg w-full mx-4 shadow-2xl ${isRTL ? 'rtl' : 'ltr'}`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                {currentLanguage === 'ar' 
                  ? 'معلومات التبرع'
                  : currentLanguage === 'fr'
                  ? 'Informations de don'
                  : 'Donation Information'
                }
              </h3>
              <button 
                onClick={() => setShowDonateModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-2xl">
                <p className="text-sm text-gray-600 mb-2">
                  {currentLanguage === 'ar' 
                    ? 'اسم الجمعية'
                    : currentLanguage === 'fr'
                    ? 'Nom de l\'association'
                    : 'Association Name'
                  }
                </p>
                <p className="text-lg font-semibold">جمعية لمسة أمل - Lamsat Amal Association</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl">
                <p className="text-sm text-gray-600 mb-2">IBAN</p>
                <p className="text-lg font-mono bg-white p-3 rounded-xl select-all border border-gray-200">
                  MA123456789012345678901234
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl">
                <p className="text-sm text-gray-600 mb-2">RIB</p>
                <p className="text-lg font-mono bg-white p-3 rounded-xl select-all border border-gray-200">
                  123456789012345678901234
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-2xl">
                <p className="text-sm text-yellow-800">
                  {currentLanguage === 'ar' 
                    ? 'شكراً لدعمكم. تبرعكم يساعدنا في مواصلة رسالتنا لدعم أطفال التوحد وأسرهم.'
                    : currentLanguage === 'fr'
                    ? 'Merci pour votre soutien. Votre don nous aide à poursuivre notre mission auprès des enfants autistes et leurs familles.'
                    : 'Thank you for your support. Your donation helps us continue our mission to support children with autism and their families.'
                  }
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setShowDonateModal(false)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                {currentLanguage === 'ar' 
                  ? 'إغلاق'
                  : currentLanguage === 'fr'
                  ? 'Fermer'
                  : 'Close'
                }
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
