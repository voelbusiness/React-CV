import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Mail, Phone, MapPin, Linkedin, Download, Award, Users, TrendingUp, Target, GraduationCap, Star, Globe, Briefcase, MessageCircle, Sparkles, Zap, BookOpen } from 'lucide-react';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'B2B Sales Strategy', level: 95, color: '#3b82f6' },
    { name: 'Client Relationship Management', level: 92, color: '#8b5cf6' },
    { name: 'Lead Generation', level: 88, color: '#06b6d4' },
    { name: 'Sales Analytics', level: 85, color: '#10b981' },
    { name: 'Negotiation', level: 90, color: '#f59e0b' },
    { name: 'CRM Systems', level: 87, color: '#ef4444' },
    { name: 'Team Leadership', level: 89, color: '#ec4899' },
    { name: 'Market Analysis', level: 84, color: '#6366f1' }
  ];

  const languages = [
    { name: 'Deutsch', level: 'Muttersprache', flag: '🇩🇪' },
    { name: 'English', level: 'Fließend (C2)', flag: '🇺🇸' },
    { name: 'Français', level: 'Fortgeschritten (B2)', flag: '🇫🇷' },
    { name: 'Español', level: 'Grundkenntnisse (A2)', flag: '🇪🇸' }
  ];

  const testimonials = [
    {
      name: 'Maria Schmidt',
      position: 'CEO, TechSolutions GmbH',
      text: 'Tim hat unser Vertriebsteam revolutioniert. Seine strategische Herangehensweise und sein Talent, komplexe Deals abzuschließen, sind außergewöhnlich.',
      rating: 5
    },
    {
      name: 'Johannes Weber',
      position: 'VP Sales, InnovateCorp',
      text: 'Ein wahrer Profi im B2B-Vertrieb. Tim\'s Fähigkeit, langfristige Kundenbeziehungen aufzubauen, ist bemerkenswert.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      position: 'Director, BusinessMax Solutions',
      text: 'Tim bringt eine perfekte Balance aus Fachwissen und zwischenmenschlichen Fähigkeiten mit. Ein echter Game-changer für jedes Vertriebsteam.',
      rating: 5
    }
  ];

  const experiences = [
    {
      title: 'Senior B2B Sales Manager',
      company: 'TechSolutions GmbH',
      period: '2021 - Present',
      achievements: [
        'Increased annual revenue by 150% through strategic client acquisition',
        'Built and managed a team of 8 sales professionals',
        'Established partnerships with 50+ enterprise clients',
        'Implemented CRM system improving team efficiency by 40%'
      ]
    },
    {
      title: 'B2B Sales Specialist',
      company: 'InnovateCorp',
      period: '2019 - 2021',
      achievements: [
        'Generated €2.5M in new business within 18 months',
        'Maintained 95% client retention rate',
        'Developed sales processes that reduced cycle time by 30%',
        'Mentored 5 junior sales representatives'
      ]
    },
    {
      title: 'Sales Representative',
      company: 'BusinessMax Solutions',
      period: '2017 - 2019',
      achievements: [
        'Consistently exceeded quarterly targets by 120%',
        'Built relationships with key decision makers',
        'Specialized in enterprise software solutions',
        'Won "Rookie of the Year" award in first year'
      ]
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '150%', label: 'Revenue Growth' },
    { icon: Users, value: '50+', label: 'Enterprise Clients' },
    { icon: Target, value: '95%', label: 'Client Retention' },
    { icon: Award, value: '8', label: 'Team Members Led' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-white">Tim Völker</Link>
            <div className="flex space-x-6">
              <Link to="/" className="text-slate-300 hover:text-white transition-colors hover:scale-110 transform duration-200">Home</Link>
              <Link to="/certificates" className="text-slate-300 hover:text-white transition-colors hover:scale-110 transform duration-200">Zeugnisse</Link>
              <Link to="/blog" className="text-slate-300 hover:text-white transition-colors hover:scale-110 transform duration-200">Blog</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6 pt-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-end order-2 lg:order-1">
                <div className="relative group">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center border-2 border-blue-500/30 group-hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                    <img 
                      src="/assets/profile.jpg" 
                      alt="Tim Völker" 
                      className="w-72 h-72 rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-25 animate-pulse group-hover:opacity-40 transition-opacity duration-300" />
                  
                  {/* Floating badges with awesome animations */}
                  <div className="absolute top-4 right-4 bg-green-500/20 border border-green-500/50 rounded-full px-3 py-1 text-green-400 text-sm font-medium animate-bounce">
                    <Sparkles className="inline h-3 w-3 mr-1" />
                    Available
                  </div>
                  <div className="absolute bottom-8 left-8 bg-blue-500/20 border border-blue-500/50 rounded-full px-3 py-1 text-blue-400 text-sm font-medium hover:bg-blue-500/30 transition-all duration-300">
                    <Globe className="inline h-4 w-4 mr-1" />
                    Germany
                  </div>
                  <div className="absolute top-1/2 -right-4 bg-purple-500/20 border border-purple-500/50 rounded-full px-2 py-1 text-purple-400 text-xs font-medium animate-pulse">
                    <Zap className="inline h-3 w-3" />
                  </div>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="text-center lg:text-left order-1 lg:order-2">
                <div className="relative inline-block mb-6">
                  <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Tim Völker
                  </h1>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-xl opacity-25 animate-pulse" />
                </div>
                <p className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
                  B2B Sales Professional
                </p>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed">
                  Driving exceptional growth through strategic B2B sales excellence, 
                  relationship building, and innovative market expansion strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/50 hover:scale-110 transform animate-pulse hover:animate-none"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                  <Link to="/certificates">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 transform hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/25"
                    >
                      <GraduationCap className="mr-2 h-5 w-5" />
                      Zeugnisse
                    </Button>
                  </Link>
                  <Link to="/blog">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 transform hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
                    >
                      <BookOpen className="mr-2 h-5 w-5" />
                      Blog
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 transform hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25"
                    onClick={() => window.open('mailto:tim@voelker-freiburg.de')}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white text-center mb-8">
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    With over 6 years of experience in B2B sales, I specialize in building 
                    lasting relationships with enterprise clients and driving exceptional 
                    revenue growth. My expertise lies in understanding complex business needs 
                    and delivering tailored solutions that create mutual value.
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    I've successfully led high-performing sales teams, implemented strategic 
                    processes, and consistently exceeded targets while maintaining the highest 
                    standards of client satisfaction and retention.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/20">
                    <h4 className="text-xl font-semibold text-white mb-3">Core Expertise</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Enterprise Sales Strategy</li>
                      <li>• Team Leadership & Development</li>
                      <li>• Client Relationship Management</li>
                      <li>• Revenue Growth Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Skills & Expertise</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Skills Chart */}
            <div className="relative">
              <div className="flex justify-center mb-8">
                <div className="relative w-80 h-80">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {skills.map((skill, index) => {
                      const total = skills.reduce((sum, s) => sum + s.level, 0);
                      const percentage = (skill.level / total) * 100;
                      const circumference = 2 * Math.PI * 45;
                      const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
                      const offset = skills.slice(0, index).reduce((sum, s) => sum + (s.level / total) * circumference, 0);
                      
                      return (
                        <circle
                          key={index}
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke={skill.color}
                          strokeWidth="8"
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={-offset}
                          className="transition-all duration-1000 ease-out"
                          style={{ 
                            strokeDasharray: isVisible ? strokeDasharray : '0 628',
                            filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))'
                          }}
                        />
                      );
                    })}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">Skills</div>
                      <div className="text-blue-400">Portfolio</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Legend */}
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                    <div className="flex-1">
                      <div className="text-slate-300 text-sm font-medium">{skill.name}</div>
                      <div className="text-slate-400 text-xs">{skill.level}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Progress Bars */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={isVisible ? skill.level : 0} 
                    className="h-3 bg-slate-700"
                    style={{
                      '--progress-background': `linear-gradient(to right, ${skill.color}, ${skill.color}aa)`
                    } as React.CSSProperties}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Sprachen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <Card key={index} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{lang.flag}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{lang.name}</h3>
                  <p className="text-slate-400">{lang.level}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Was Kunden sagen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t border-slate-700 pt-4">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-slate-400 text-sm">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-blue-400 text-lg">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="border-blue-500/50 text-blue-400 mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-slate-300 flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white text-center mb-8">
                Let's Connect
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600/20 rounded-full hover:bg-blue-600/30 transition-all duration-300 cursor-pointer" onClick={() => window.open('mailto:tim@voelker-freiburg.de')}>
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <p className="text-white hover:text-blue-400 transition-colors cursor-pointer" onClick={() => window.open('mailto:tim@voelker-freiburg.de')}>tim@voelker-freiburg.de</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600/20 rounded-full">
                      <Phone className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Phone</p>
                      <p className="text-white">+49 123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600/20 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Location</p>
                      <p className="text-white">Germany</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600/20 rounded-full">
                      <Linkedin className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">LinkedIn</p>
                      <p className="text-white">linkedin.com/in/timvoelker</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/20">
                    <h4 className="text-xl font-semibold text-white mb-3">Ready to Collaborate?</h4>
                    <p className="text-slate-300 mb-4">
                      I'm always interested in discussing new opportunities, 
                      partnerships, and ways to drive business growth together.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Schedule a Meeting
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Tim Völker. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}