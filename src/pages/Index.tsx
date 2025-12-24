import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedCounter from '@/components/AnimatedCounter';
import { useState, useEffect, useRef } from 'react';

// Human Values Logo SVG Component
const HumanValuesLogo = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    {/* Center Om symbol circle */}
    <circle cx="200" cy="200" r="60" fill="#F8BBD9" />
    <text x="200" y="220" textAnchor="middle" fontSize="48" fill="#E91E63" fontWeight="bold">ॐ</text>
    
    {/* Petals - representing different values */}
    {/* Top - Pink */}
    <ellipse cx="200" cy="100" rx="50" ry="60" fill="#F48FB1" />
    {/* Top Right - Yellow */}
    <ellipse cx="290" cy="130" rx="50" ry="60" fill="#FFE082" transform="rotate(45 290 130)" />
    {/* Right - Green */}
    <ellipse cx="310" cy="200" rx="60" ry="50" fill="#A5D6A7" />
    {/* Bottom Right - Yellow */}
    <ellipse cx="290" cy="270" rx="50" ry="60" fill="#FFE082" transform="rotate(-45 290 270)" />
    {/* Bottom - Pink */}
    <ellipse cx="200" cy="300" rx="50" ry="60" fill="#F48FB1" />
    {/* Bottom Left - Yellow */}
    <ellipse cx="110" cy="270" rx="50" ry="60" fill="#FFE082" transform="rotate(45 110 270)" />
    {/* Left - Cyan */}
    <ellipse cx="90" cy="200" rx="60" ry="50" fill="#80DEEA" />
    {/* Top Left - Yellow */}
    <ellipse cx="110" cy="130" rx="50" ry="60" fill="#FFE082" transform="rotate(-45 110 130)" />
    
    {/* Religious symbols on petals */}
    <text x="200" y="110" textAnchor="middle" fontSize="24" fill="#1A237E">✝</text>
    <text x="310" cy="205" textAnchor="middle" fontSize="24" fill="#1A237E">☪</text>
    <text x="200" y="310" textAnchor="middle" fontSize="24" fill="#1A237E">🙏</text>
    <text x="90" y="205" textAnchor="middle" fontSize="24" fill="#1A237E">☸</text>
    
    {/* Outer figures - representing people */}
    <g fill="#FFA726">
      {/* Top left figure */}
      <circle cx="80" cy="80" r="12" />
      <path d="M80 95 L80 130 M65 110 L95 110 M80 130 L65 155 M80 130 L95 155" stroke="#FFA726" strokeWidth="4" fill="none" />
      
      {/* Top right figure */}
      <circle cx="320" cy="80" r="12" />
      <path d="M320 95 L320 130 M305 110 L335 110 M320 130 L305 155 M320 130 L335 155" stroke="#FFA726" strokeWidth="4" fill="none" />
      
      {/* Bottom left figure */}
      <circle cx="80" cy="320" r="12" />
      <path d="M80 335 L80 370 M65 350 L95 350 M80 370 L65 395 M80 370 L95 395" stroke="#FFA726" strokeWidth="4" fill="none" transform="rotate(180 80 355)" />
      
      {/* Bottom right figure */}
      <circle cx="320" cy="320" r="12" />
      <path d="M320 335 L320 370 M305 350 L335 350 M320 370 L305 395 M320 370 L335 395" stroke="#FFA726" strokeWidth="4" fill="none" transform="rotate(180 320 355)" />
    </g>
  </svg>
);

export default function Index() {
  const { content } = useContent();
  const { home } = content;
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Sister institutes for carousel
  const sisterInstitutes = home.sisterInstitutes?.items || [
    { name: 'Alike', imageUrl: 'https://github.com/Satyamurthi/mbw-Photos/blob/main/Sister%20Institutes/Alike.jpg?raw=true' },
    { name: 'Dharwad', imageUrl: 'https://github.com/Satyamurthi/mbw-Photos/blob/main/Sister%20Institutes/Dharwad%202.jpg?raw=true' },
    { name: 'Mysuru', imageUrl: 'https://github.com/Satyamurthi/mbw-Photos/blob/main/College%20Photos/College.jpg?raw=true' },
  ];

  // Campus life images
  const campusImages = [
    { src: 'https://github.com/Satyamurthi/mbw-Photos/blob/main/image.png?raw=true', alt: 'College', label: 'College' },
    { src: '/placeholder.svg', alt: 'Student Housing', label: 'Student Housing' },
    { src: '/placeholder.svg', alt: 'Sports Facilities', label: 'Sports Facilities' },
    { src: '/placeholder.svg', alt: 'Student Center', label: 'Student Center' },
  ];

  // Updates/News items
  const updates = [
    { category: 'Research', date: 'Feb 20, 2025', title: 'Breakthrough in Quantum Computing', description: 'Our research team has achieved a significant milestone in quantum computing, paving the way for future innovations.' },
    { category: 'Events', date: 'Feb 15, 2025', title: 'Spring Graduation Ceremony 2025', description: 'Join us in celebrating the achievements of our graduating class of 2025 at our annual ceremony.' },
    { category: 'Events', date: 'Feb 15, 2025', title: 'Spring Graduation Ceremony 2025', description: 'Join us in celebrating the achievements of our graduating class of 2025 at our annual ceremony.' },
    { category: 'Campus Life', date: 'Feb 10, 2025', title: 'New Sports Complex Opening', description: 'Experience our state-of-the-art sports facility designed to enhance student wellness and athletic performance.' },
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sisterInstitutes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sisterInstitutes.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sisterInstitutes.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sisterInstitutes.length) % sisterInstitutes.length);

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        {/* Background Video/Image Container */}
        <div className="absolute inset-0 w-full h-full">
          {home.videoSection?.enabled ? (
            <iframe
              className="absolute inset-0 w-[200%] h-[200%] -top-1/2 -left-1/2 scale-100 pointer-events-none"
              src={`https://www.youtube.com/embed/${home.videoSection.youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${home.videoSection.youtubeVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1&disablekb=1&fs=0&playsinline=1`}
              title="School Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : (
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920')` }}
            />
          )}
          {/* Blue transparent gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-transparent mix-blend-multiply" />
        </div>
        
        {/* Quote Text */}
        <div className="relative z-10 flex items-center justify-end w-full h-full px-8 md:px-16">
          <div className="text-right max-w-lg">
            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-serif italic text-white leading-tight tracking-wide"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {home.heroSection?.quote || 'EDUCATION SHOULD BE FOR LIFE. NOT FOR A LIVING.'}
            </h2>
            {home.heroSection?.subtext && (
              <p className="mt-4 text-base md:text-lg text-white/90">
                {home.heroSection.subtext}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Human Values Logo */}
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80">
                <img 
                  src="https://github.com/Satyamurthi/mbw-Photos/blob/main/Logo/sai%20school%20logo%20png.png?raw=true"
                  alt="Human Values Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* About Text */}
            <div>
              <p className="text-primary font-semibold mb-2 uppercase tracking-wide text-sm border-b-2 border-primary inline-block pb-1">
                ABOUT US
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Welcome to <span className="text-primary">Sri Sathya Sai School & PU College Mysuru</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {home.aboutSection?.description || 
                  "Our school is dedicated to fostering Education in Human Values. Today's education system often prioritizes intellectual and skill development while neglecting the cultivation of good character. We believe that true education extends beyond academics to encompass moral and spiritual growth. Our mission is to nurture students who not only excel academically but also possess compassion, humility, and a sense of service towards society. We strive to instill in our students a deep reverence for righteousness, a steadfast faith in God, and a profound love for their mothers, motherland, mother tongue, and religion. Our goal is to produce individuals who lead meaningful lives guided by principles of truth, righteousness, and service to humanity."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Blessings Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Founder Card */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={home.founderSection?.founder?.imageUrl || "https://github.com/Satyamurthi/mbw-Photos/blob/main/Baba%20Photos/Sunandamma.png?raw=true"}
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <p className="text-primary text-xs uppercase tracking-widest mb-2 font-medium">
                  founder president
                </p>
                <h3 className="text-xl font-bold text-primary mb-3 hover:underline cursor-pointer">
                  {home.founderSection?.founder?.name || "Late Smt Sunandamma"}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {home.founderSection?.founder?.description || "Deeply influenced by the Bhagvn Sri Satya Sai Baba, Smt Sunandamma, with the help of some dedicated workers, set up this educational institution at Mysuru on 1957…..."}
                </p>
                <button className="text-primary text-sm mt-3 hover:underline font-medium">
                  Read more
                </button>
              </CardContent>
            </Card>

            {/* Blessings Card */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={home.founderSection?.blessings?.imageUrl || "https://github.com/Satyamurthi/mbw-Photos/blob/main/Baba%20Photos/Baba%20Cahir.jpg?raw=true"}
                  alt="Blessings"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <p className="text-primary text-xs uppercase tracking-widest mb-2 font-medium">
                  blessings
                </p>
                <h3 className="text-xl font-bold text-primary mb-3 hover:underline cursor-pointer">
                  {home.founderSection?.blessings?.name || "Bhagawan Sri Sathya Sai Baba"}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {home.founderSection?.blessings?.description || "Bhagawan Sri Sathya Sai Baba was incarnated in a remote village called Puttaparthi in Anantpur district in Andhra Pradesh in the year 23-11-1926. His parents…..."}
                </p>
                <button className="text-primary text-sm mt-3 hover:underline font-medium">
                  Read more
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Updates</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with the latest happenings, breakthroughs, and events at SSSBPUC.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {updates.map((item, index) => (
              <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group bg-card">
                {/* Video placeholder */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-6 border-b-6 border-l-10 border-transparent border-l-primary-foreground ml-1" 
                           style={{ borderTopWidth: '8px', borderBottomWidth: '8px', borderLeftWidth: '12px' }} />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span className="text-primary font-medium">{item.category}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-sm leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs line-clamp-2">
                    {item.description}
                  </p>
                  <button className="text-primary text-xs mt-3 hover:underline font-medium inline-flex items-center gap-1">
                    Read More <ArrowRight size={12} />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="px-6 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-medium">
              View All News
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section - By the Numbers */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">By the Numbers</h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Our impact in numbers reflects our commitment to excellence in education and research.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '500+', label: 'Students Enrolled' },
              { value: '35+', label: 'Faculty Members' },
              { value: '6', label: 'Academic Programs' },
              { value: '98%', label: 'Passing Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Facilities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our most popular and innovative academic programs designed to prepare you for success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {(home.facilities?.items || [
              { icon: '🌈⃤ ⚛️', name: 'Physics Lab', description: 'Equipped with advanced apparatus for hands-on experiments. Students explore concepts through practical demonstrations.', imageUrl: 'https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4033.jpg?raw=true' },
              { icon: '🧪 👨🏻‍🔬', name: 'Chemistry Lab', description: 'Designed for safe and effective chemical experiments. Students learn concepts with practical applications.', imageUrl: 'https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4038.jpg?raw=true' },
              { icon: '🌱 🫁', name: 'Biology Lab', description: 'Offers modern tools for studying life sciences. Students perform dissections and observe microscopic life.', imageUrl: 'https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4015.jpg?raw=true' },
              { icon: '💻 🌐', name: 'Computer Science Lab', description: 'Offers modern tools for studying life sciences. Students perform dissections and observe microscopic life.', imageUrl: 'https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4006.jpg?raw=true' },
              { icon: '📚 📖', name: 'Library', description: 'Offers modern tools for studying life sciences. Students perform dissections and observe microscopic life.', imageUrl: 'https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4054.jpg?raw=true' },
              { icon: '👨🏻‍🏫 👩‍🏫', name: "Class Room's", description: 'Offers modern tools for studying life sciences. Students perform dissections and observe microscopic life.', imageUrl: 'https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4054.jpg?raw=true' },
            ]).map((facility, index) => (
              <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group bg-card">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={facility.imageUrl}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="text-white text-sm font-medium">{facility.name}</span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {facility.icon} {facility.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{facility.description}</p>
                  <button className="text-primary text-sm hover:underline font-medium">
                    Learn More
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Campus Life</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the vibrant and diverse community at SSSBPUC.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {campusImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg aspect-square">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-sm font-medium">{image.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sister Institutes Carousel Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sister Institutes</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover endless opportunities and shared excellence at our esteemed sister institutions.
            </p>
          </div>
          
          {/* Carousel */}
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden" ref={carouselRef}>
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Duplicate for infinite effect */}
                {[...sisterInstitutes, ...sisterInstitutes].map((institute, index) => (
                  <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-2">
                    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={institute.imageUrl}
                          alt={institute.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4 text-center">
                        <h3 className="font-bold text-foreground">{institute.name}</h3>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card shadow-lg flex items-center justify-center hover:bg-muted transition-colors z-10"
            >
              <ChevronLeft className="text-foreground" size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card shadow-lg flex items-center justify-center hover:bg-muted transition-colors z-10"
            >
              <ChevronRight className="text-foreground" size={20} />
            </button>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {sisterInstitutes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
