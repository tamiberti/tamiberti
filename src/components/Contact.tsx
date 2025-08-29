import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  MessageCircle,
  Shield,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    sessionType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem Enviada com Sucesso!",
      description: "Obrigada por entrar em contato. Retornarei em até 24 horas.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredContact: 'email',
      sessionType: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronta para começar sua jornada em direção a uma melhor saúde mental? Estou aqui para ajudar e responder qualquer pergunta que você possa ter.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-medium bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-foreground">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Localização do Consultório</p>
                    <p className="text-muted-foreground">
                      Rua do Bem-Estar, 1234, Sala 200<br />
                      São Paulo, SP 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Telefone</p>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                    <p className="text-sm text-muted-foreground">Mensagens de WhatsApp bem-vindas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">contato@tamiberti.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Horário de Funcionamento</p>
                    <div className="text-muted-foreground space-y-1">
                      <p>Segunda - Quinta: 9:00 - 19:00</p>
                      <p>Sexta: 9:00 - 17:00</p>
                      <p>Sábado: 10:00 - 15:00</p>
                      <p className="text-sm">Consultas noturnas disponíveis</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="shadow-medium bg-destructive/5 border-destructive/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-destructive mt-1" />
                  <div>
                    <p className="font-semibold text-destructive mb-2">Apoio em Crise</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Se você está passando por uma emergência de saúde mental, entre em contato:
                    </p>
                    <div className="space-y-1 text-sm">
                      <p><strong>192</strong> - Serviços de Emergência</p>
                      <p><strong>188</strong> - Centro de Valorização da Vida</p>
                      <p><strong>(11) 3151-1948</strong> - Centro de Atenção Psicossocial</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-foreground">Envie uma Mensagem</CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e retornarei em até 24 horas para agendar uma consulta.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Endereço de Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="seu.email@exemplo.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Número de Telefone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Método de Contato Preferido
                      </label>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Ligação</option>
                        <option value="text">WhatsApp</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tipo de Serviço de Interesse
                    </label>
                    <select
                      name="sessionType"
                      value={formData.sessionType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="individual">Terapia Individual</option>
                      <option value="couples">Terapia de Casal</option>
                      <option value="family">Terapia Familiar</option>
                      <option value="assessment">Avaliação Psicológica</option>
                      <option value="consultation">Consulta</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full"
                      placeholder="Conte-me um pouco sobre o que a trouxe aqui e em que você espera trabalhar..."
                    />
                  </div>

                  {/* Privacy Notice */}
                  <div className="bg-accent/20 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium text-foreground mb-1">Sua Privacidade está Protegida</p>
                        <p>
                          Todas as comunicações são confidenciais e compatíveis com LGPD. Este contato inicial 
                          não estabelece uma relação terapeuta-cliente.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <MessageCircle className="mr-2 w-4 h-4 animate-spin" />
                        Enviando Mensagem...
                      </>
                    ) : (
                      <>
                        <Calendar className="mr-2 w-4 h-4" />
                        Enviar Mensagem e Solicitar Consulta
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card className="shadow-soft bg-gradient-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Convênios e Pagamento</h3>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">Unimed</Badge>
                      <Badge variant="outline" className="text-xs">Bradesco Saúde</Badge>
                      <Badge variant="outline" className="text-xs">SulAmérica</Badge>
                      <Badge variant="outline" className="text-xs">Amil</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Opções de pagamento particular e escala móvel disponíveis
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft bg-gradient-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Primeiros Passos</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Consulta gratuita de 15 minutos</li>
                    <li>• Sessão de avaliação abrangente</li>
                    <li>• Planejamento de tratamento personalizado</li>
                    <li>• Opções flexíveis de agendamento</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;