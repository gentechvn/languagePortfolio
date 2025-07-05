import { useState, useEffect } from 'react';
import { Globe, Star, Users, BookOpen, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const greetings = [
    { text: "Hello, I'm a Language Expert", lang: "English", flag: "🇬🇧" },
    { text: "Xin chào, tôi là chuyên gia ngôn ngữ", lang: "Vietnamese", flag: "🇻🇳" },
    { text: "こんにちは、私は言語の専門家です", lang: "Japanese", flag: "🇯🇵" },
    { text: "Hola, soy un experto en idiomas", lang: "Spanish", flag: "🇪🇸" },
    { text: "Bonjour, je suis un expert en langues", lang: "French", flag: "🇫🇷" }
  ];

  const languages = [
    { name: "English", level: "Native", color: "bg-blue-500" },
    { name: "Vietnamese", level: "Native", color: "bg-red-500" },
    { name: "Japanese", level: "Advanced", color: "bg-pink-500" },
    { name: "Spanish", level: "Intermediate", color: "bg-orange-500" },
    { name: "French", level: "Intermediate", color: "bg-purple-500" },
    { name: "Korean", level: "Beginner", color: "bg-green-500" }
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Translation Services",
      description: "Dịch thuật chuyên nghiệp giữa nhiều ngôn ngữ với sự am hiểu văn hóa",
      languages: ["EN→VI", "VI→EN", "JP→EN", "ES→EN"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Language Teaching",
      description: "Dạy ngôn ngữ cá nhân hóa cho mọi trình độ",
      languages: ["English", "Vietnamese", "Japanese"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cultural Consulting",
      description: "Kết nối và thu hẹp khoảng cách văn hóa trong giao tiếp kinh doanh quốc tế",
      languages: ["East Asia", "Southeast Asia", "Europe"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Manager",
      content: "Outstanding translation work! Helped our company expand to Vietnam successfully.",
      rating: 5,
      flag: "🇺🇸"
    },
    {
      name: "田中太郎",
      role: "Student",
      content: "Great English teacher! Very patient and explains grammar clearly.",
      rating: 5,
      flag: "🇯🇵"
    },
    {
      name: "Nguyễn Minh Anh",
      role: "Entrepreneur",
      content: "Excellent interpretation services for international meetings.",
      rating: 5,
      flag: "🇻🇳"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 text-2xl mb-4 animate-fade-in">
                <span className="text-4xl">{greetings[currentLanguage].flag}</span>
                <span className="font-light">{greetings[currentLanguage].lang}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                {greetings[currentLanguage].text}
              </h1>
            </div>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
              Phá vỡ rào cản ngôn ngữ • Xây dựng cầu nối văn hóa • Kết nối toàn cầu
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" />
                Liên hệ ngay
              </Button>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                Xem Hồ Sơ Năng Lực
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trình Độ Ngôn Ngữ</h2>
            <p className="text-xl text-gray-600">Giao tiếp thành thạo giữa các nền văn hóa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <Card key={lang.name} className={`transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{lang.name}</h3>
                    <Badge variant="secondary" className="font-medium">{lang.level}</Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${lang.color} transition-all duration-1000 ease-out`}
                      style={{
                        width: lang.level === 'Native' ? '100%' : 
                               lang.level === 'Advanced' ? '85%' : 
                               lang.level === 'Intermediate' ? '70%' : '40%'
                      }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dịch Vụ</h2>
            <p className="text-xl text-gray-600">Giải pháp ngôn ngữ toàn diện</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className={`transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: `${index * 200}ms`}}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.languages.map((lang) => (
                      <Badge key={lang} variant="outline" className="bg-gradient-to-r from-blue-50 to-purple-50">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Khách Hàng Nhận Xét</h2>
            <p className="text-xl text-gray-600">Khách hàng nói gì về tôi</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className={`transform transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{testimonial.flag}</span>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Sẵn Sàng Kết Nối?</h2>
          <p className="text-xl mb-8">Hãy trao đổi để tôi hỗ trợ bạn về ngôn ngữ</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p>hello@languageexpert.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Điện thoại</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Địa điểm</h3>
              <p>Toàn cầu • Làm việc từ xa</p>
            </div>
          </div>

          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
            <MessageCircle className="w-5 h-5 mr-2" />
            Bắt đầu trò chuyện
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <Globe className="w-8 h-8 mr-3" />
            <span className="text-2xl font-bold">Chuyên gia Ngôn ngữ</span>
          </div>
          <p className="text-gray-400">
            © GenTech.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
