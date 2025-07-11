import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, Search, ArrowRight, Eye, Heart, MessageSquare } from 'lucide-react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'Die Zukunft des B2B-Vertriebs: Digitale Transformation und KI',
      excerpt: 'Erfahren Sie, wie künstliche Intelligenz und digitale Tools den B2B-Vertrieb revolutionieren und welche Strategien Unternehmen heute implementieren sollten.',
      content: 'Die Digitalisierung hat den B2B-Vertrieb grundlegend verändert. In diesem Artikel erkunde ich die wichtigsten Trends...',
      date: '2024-01-15',
      readTime: '8 min',
      category: 'Sales Strategy',
      image: '/api/placeholder/400/200',
      views: 1250,
      likes: 89,
      comments: 23
    },
    {
      id: 2,
      title: 'Erfolgreiche Lead-Generierung in 2024: Bewährte Strategien',
      excerpt: 'Moderne Ansätze zur Lead-Generierung, die wirklich funktionieren. Von Content Marketing bis zu Social Selling.',
      content: 'Lead-Generierung ist das Herzstück jedes erfolgreichen Vertriebsprozesses...',
      date: '2024-01-10',
      readTime: '6 min',
      category: 'Lead Generation',
      image: '/api/placeholder/400/200',
      views: 980,
      likes: 67,
      comments: 15
    },
    {
      id: 3,
      title: 'CRM-Optimierung: Wie Sie Ihr Vertriebsteam zum Erfolg führen',
      excerpt: 'Praktische Tipps zur Optimierung Ihres CRM-Systems und zur Steigerung der Produktivität Ihres Vertriebsteams.',
      content: 'Ein gut konfiguriertes CRM-System ist der Schlüssel zu einem effizienten Vertriebsprozess...',
      date: '2024-01-05',
      readTime: '10 min',
      category: 'CRM & Tools',
      image: '/api/placeholder/400/200',
      views: 750,
      likes: 45,
      comments: 12
    },
    {
      id: 4,
      title: 'Verhandlungsstrategien für komplexe B2B-Deals',
      excerpt: 'Lernen Sie die Kunst der Verhandlung bei großen B2B-Deals und wie Sie Win-Win-Situationen schaffen.',
      content: 'Komplexe B2B-Verhandlungen erfordern eine durchdachte Strategie und psychologisches Verständnis...',
      date: '2023-12-28',
      readTime: '12 min',
      category: 'Negotiation',
      image: '/api/placeholder/400/200',
      views: 1100,
      likes: 78,
      comments: 31
    },
    {
      id: 5,
      title: 'Aufbau langfristiger Kundenbeziehungen im B2B-Bereich',
      excerpt: 'Warum Kundenbeziehungen wichtiger sind als einzelne Deals und wie Sie nachhaltige Partnerschaften aufbauen.',
      content: 'Langfristige Kundenbeziehungen sind das Fundament nachhaltigen Geschäftserfolgs...',
      date: '2023-12-20',
      readTime: '7 min',
      category: 'Customer Relations',
      image: '/api/placeholder/400/200',
      views: 890,
      likes: 56,
      comments: 18
    },
    {
      id: 6,
      title: 'Sales Analytics: Datengetriebene Entscheidungen im Vertrieb',
      excerpt: 'Wie Sie Daten nutzen, um Ihre Vertriebsstrategie zu optimieren und bessere Ergebnisse zu erzielen.',
      content: 'In der heutigen datengetriebenen Welt ist Sales Analytics unverzichtbar...',
      date: '2023-12-15',
      readTime: '9 min',
      category: 'Analytics',
      image: '/api/placeholder/400/200',
      views: 650,
      likes: 42,
      comments: 9
    }
  ];

  const categories = ['Alle', 'Sales Strategy', 'Lead Generation', 'CRM & Tools', 'Negotiation', 'Customer Relations', 'Analytics'];
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Alle' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'Sales Strategy': 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      'Lead Generation': 'bg-green-500/20 text-green-400 border-green-500/50',
      'CRM & Tools': 'bg-purple-500/20 text-purple-400 border-purple-500/50',
      'Negotiation': 'bg-orange-500/20 text-orange-400 border-orange-500/50',
      'Customer Relations': 'bg-pink-500/20 text-pink-400 border-pink-500/50',
      'Analytics': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-400 border-gray-500/50';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Sales Blog
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Insights, Strategien und Praxistipps für erfolgreichen B2B-Vertrieb von Tim Völker
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Blog durchsuchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-400"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-blue-600 hover:bg-blue-700" 
                  : "border-slate-600 text-slate-300 hover:bg-slate-800/50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Card key={post.id} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 group overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-4xl text-slate-400">📊</div>
                </div>
                <Badge 
                  variant="outline" 
                  className={`absolute top-3 right-3 ${getCategoryColor(post.category)}`}
                >
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('de-DE')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-slate-300 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-slate-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {post.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {post.likes}
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {post.comments}
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-500/10 group-hover:border-blue-400 transition-all duration-300"
                >
                  Artikel lesen
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm mt-16">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bleiben Sie auf dem Laufenden
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Erhalten Sie die neuesten Artikel und Insights direkt in Ihr Postfach. 
              Praktische Tipps für Ihren Vertriebserfolg - ohne Spam, versprochen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Abonnieren
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}