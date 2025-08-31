import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-display text-2xl font-bold text-secondary">
              AI Design Academy
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#program" className="text-foreground hover:text-primary transition-colors">Программа</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Тарифы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-accent text-accent-foreground px-4 py-2">
                  Премиальный курс
                </Badge>
                <h1 className="font-display text-5xl lg:text-6xl font-bold leading-tight text-secondary">
                  Нейросети для 
                  <span className="text-primary"> дизайнеров интерьера</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Освойте современные AI-инструменты и увеличьте доходы в 3-5 раз. 
                  Создавайте визуализации за минуты, а не дни.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                  <Icon name="Play" className="mr-2" size={20} />
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Бесплатная консультация
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Выпускников</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-secondary">8 недель</div>
                  <div className="text-sm text-muted-foreground">Длительность</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8">
                <img 
                  src="/img/66b1c316-f779-48c6-bbfb-f99d63d6b268.jpg" 
                  alt="AI Interior Design Course"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-secondary mb-4">
              Программа курса
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              8 модулей от основ до продвинутых техник работы с нейросетями
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                week: "Неделя 1-2",
                title: "Основы AI для дизайна",
                description: "Знакомство с Midjourney, DALL-E, Stable Diffusion",
                icon: "Brain"
              },
              {
                week: "Неделя 3-4", 
                title: "Генерация интерьеров",
                description: "Создание реалистичных визуализаций интерьеров",
                icon: "Home"
              },
              {
                week: "Неделя 5-6",
                title: "Продвинутые техники",
                description: "Inpainting, outpainting, контроль композиции",
                icon: "Palette"
              },
              {
                week: "Неделя 7-8",
                title: "Бизнес-применение",
                description: "Презентации клиентам, продажи, масштабирование",
                icon: "TrendingUp"
              },
              {
                week: "Бонус",
                title: "Автоматизация",
                description: "Настройка рабочих процессов и экономия времени",
                icon: "Zap"
              },
              {
                week: "Бонус",
                title: "Портфолио",
                description: "Создание впечатляющего AI-портфолио",
                icon: "Award"
              }
            ].map((module, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {module.week}
                    </Badge>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={module.icon} size={24} className="text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-display">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {module.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-secondary mb-4">
              Тарифы и цены
            </h2>
            <p className="text-xl text-muted-foreground">
              Выберите подходящий формат обучения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Базовый",
                price: "49 990",
                description: "Для начинающих дизайнеров",
                features: [
                  "8 видео-уроков",
                  "Доступ к материалам на год", 
                  "Базовая поддержка в чате",
                  "Сертификат о прохождении"
                ],
                popular: false
              },
              {
                name: "Профессиональный",
                price: "89 990", 
                description: "Оптимальный выбор",
                features: [
                  "8 видео-уроков + бонусы",
                  "Пожизненный доступ",
                  "Приоритетная поддержка",
                  "Индивидуальные консультации",
                  "Доступ к закрытому сообществу",
                  "Готовые промпты и шаблоны"
                ],
                popular: true
              },
              {
                name: "VIP",
                price: "149 990",
                description: "Максимальный результат",
                features: [
                  "Всё из Профессионального",
                  "Персональный ментор",
                  "Разбор ваших проектов",
                  "Помощь в поиске клиентов",
                  "Гарантия результата",
                  "3 месяца сопровождения"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular ? 'border-primary shadow-xl scale-105' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-6 py-2">
                      Популярный выбор
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="font-display text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base mb-4">{plan.description}</CardDescription>
                  <div className="space-y-2">
                    <div className="font-display text-4xl font-bold text-secondary">
                      {plan.price} ₽
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Единоразовый платёж
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-6 text-lg font-semibold ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-secondary hover:bg-secondary/90'
                    }`}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">
              Не уверены в выборе? Получите бесплатную консультацию
            </p>
            <Button variant="outline" size="lg" className="px-8">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Задать вопрос эксперту
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-4xl font-bold mb-4">
                  Готовы начать обучение?
                </h2>
                <p className="text-xl text-gray-200">
                  Свяжитесь с нами для получения персональной консультации
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-200">info@aidesignacademy.ru</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-gray-200">+7 (999) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="MessageSquare" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Telegram</div>
                    <div className="text-gray-200">@aidesignacademy</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-display text-2xl">
                  Бесплатная консультация
                </CardTitle>
                <CardDescription className="text-gray-200">
                  Обсудим ваши цели и подберём оптимальный тариф
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    placeholder="Имя" 
                    className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input 
                    placeholder="Телефон" 
                    className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <input 
                  placeholder="Email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea 
                  placeholder="Расскажите о своих целях"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 py-3">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chat Support */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-2xl animate-pulse"
        >
          <Icon name="MessageCircle" size={24} />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="font-display text-2xl font-bold">
                AI Design Academy
              </div>
              <p className="text-gray-300">
                Профессиональное обучение нейросетям для дизайнеров интерьера
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Обучение</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#program" className="hover:text-white transition-colors">Программа курса</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Поддержка</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Техподдержка</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Социальные сети</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2024 AI Design Academy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}