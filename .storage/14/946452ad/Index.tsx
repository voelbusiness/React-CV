import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Mail, Phone, MapPin, Linkedin, Download, Award, Users, TrendingUp, Target, GraduationCap, Star, Globe, Briefcase, MessageCircle } from 'lucide-react';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'B2B Sales Strategy', level: 95 },
    { name: 'Client Relationship Management', level: 92 },
    { name: 'Lead Generation', level: 88 },
    { name: 'Sales Analytics', level: 85 },
    { name: 'Negotiation', level: 90 },
    { name: 'CRM Systems', level: 87 },
    { name: 'Team Leadership', level: 89 },
    { name: 'Market Analysis', level: 84 }
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
              <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
              <Link to="/certificates" className="text-slate-300 hover:text-white transition-colors">Zeugnisse</Link>
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
                <div className="relative">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center border-2 border-blue-500/30">
                    <div className="w-72 h-72 rounded-full bg-slate-700/50 flex items-center justify-center">
                      <div className="text-6xl text-slate-400">👤</div>
                    </div>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-25 animate-pulse" />
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
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/50"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                  <Link to="/certificates">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-full transition-all duration-300"
                    >
                      <GraduationCap className="mr-2 h-5 w-5" />
                      Zeugnisse
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-full transition-all duration-300"
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
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
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
                    <div className="p-3 bg-blue-600/20 rounded-full">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <p className="text-white">tim.voelker@email.com</p>
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