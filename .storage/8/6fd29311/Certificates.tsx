import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, Calendar, ExternalLink, Download } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      title: 'Bachelor of Business Administration',
      institution: 'Universität Hamburg',
      type: 'Academic Degree',
      date: '2017',
      grade: '1.8',
      description: 'Specialization in Sales Management and Business Development',
      skills: ['Business Strategy', 'Marketing', 'Financial Management', 'Leadership']
    },
    {
      title: 'Certified Professional Sales Person (CPSP)',
      institution: 'National Association of Sales Professionals',
      type: 'Professional Certification',
      date: '2019',
      grade: 'Excellent',
      description: 'Advanced certification in professional sales techniques and customer relationship management',
      skills: ['Advanced Sales Techniques', 'Customer Psychology', 'Negotiation', 'CRM']
    },
    {
      title: 'Salesforce Certified Administrator',
      institution: 'Salesforce',
      type: 'Technical Certification',  
      date: '2020',
      grade: 'Certified',
      description: 'Comprehensive knowledge of Salesforce platform administration and customization',
      skills: ['Salesforce Administration', 'Data Management', 'Workflow Automation', 'Reporting']
    },
    {
      title: 'Google Analytics Certified',
      institution: 'Google',
      type: 'Digital Marketing Certification',
      date: '2021',
      grade: 'Certified',
      description: 'Advanced analytics and data-driven marketing strategies',
      skills: ['Web Analytics', 'Data Analysis', 'Marketing Attribution', 'ROI Optimization']
    },
    {
      title: 'Project Management Professional (PMP)',
      institution: 'Project Management Institute',
      type: 'Professional Certification',
      date: '2022',
      grade: 'Certified',
      description: 'Comprehensive project management methodology and best practices',
      skills: ['Project Planning', 'Risk Management', 'Team Leadership', 'Agile Methodologies']
    },
    {
      title: 'Advanced B2B Sales Strategy',
      institution: 'Harvard Business School Online',
      type: 'Executive Education',
      date: '2023',
      grade: 'Certificate with Distinction',
      description: 'Strategic approaches to complex B2B sales environments and enterprise client management',
      skills: ['Strategic Selling', 'Enterprise Sales', 'Value Proposition', 'Sales Leadership']
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Academic Degree':
        return 'bg-blue-600/20 text-blue-400 border-blue-500/50';
      case 'Professional Certification':
        return 'bg-purple-600/20 text-purple-400 border-purple-500/50';
      case 'Technical Certification':
        return 'bg-green-600/20 text-green-400 border-green-500/50';
      case 'Digital Marketing Certification':
        return 'bg-orange-600/20 text-orange-400 border-orange-500/50';
      case 'Executive Education':
        return 'bg-cyan-600/20 text-cyan-400 border-cyan-500/50';
      default:
        return 'bg-gray-600/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="h-12 w-12 text-blue-400 mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Zeugnisse & Qualifikationen
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Kontinuierliche Weiterbildung und professionelle Zertifizierungen, die meine Expertise 
            im B2B-Vertrieb und Geschäftsentwicklung untermauern
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-8 mb-12">
          {certificates.map((cert, index) => (
            <Card key={index} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
                      <Badge variant="outline" className={getTypeColor(cert.type)}>
                        {cert.type}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-slate-300">
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2 text-blue-400" />
                        {cert.institution}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                        {cert.date}
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-blue-400" />
                        {cert.grade}
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Erworbene Kompetenzen:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-slate-700/50 text-slate-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:ml-6">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Zeugnis anzeigen
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Verifizieren
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white text-center">
              Qualifikationsübersicht
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
                <div className="text-slate-400">Universitäts-abschluss</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
                <div className="text-slate-400">Professionelle Zertifikate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">2</div>
                <div className="text-slate-400">Tech Zertifikate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
                <div className="text-slate-400">Jahre Weiterbildung</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}