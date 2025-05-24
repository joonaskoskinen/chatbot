"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Send, Bot, User, Sparkles, Clock, MessageCircle, Zap, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  typing?: boolean
}

interface ChatDemoProps {
  onBack: () => void
}

export default function ChatDemo({ onBack }: ChatDemoProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hei! 👋 Olen TechStore Oy:n AI-asiakaspalveluassistentti. Voin auttaa sinua tuotetietojen, tilausten, palautusten ja teknisen tuen kanssa. Miten voin auttaa tänään?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [selectedDemo, setSelectedDemo] = useState<string>("ecommerce")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const demoScenarios = {
    ecommerce: {
      name: "E-commerce Kauppa",
      icon: "🛒",
      color: "blue",
      context: "TechStore Oy - Elektroniikkakauppa",
    },
    restaurant: {
      name: "Ravintola",
      icon: "🍽️",
      color: "green",
      context: "Ravintola Aroma - Fine dining",
    },
    realestate: {
      name: "Kiinteistöala",
      icon: "🏠",
      color: "purple",
      context: "Kiinteistö Nord - Asuntojen myynti",
    },
  }

  const quickQuestions = {
    ecommerce: [
      "Onko iPhone 15 Pro varastossa?",
      "Miten voin palauttaa tuotteen?",
      "Mitkä ovat toimitusajat?",
      "Voitteko suositella kannettavaa?",
    ],
    restaurant: [
      "Haluaisin varata pöydän kahdelle",
      "Onko teillä vegaanisia vaihtoehtoja?",
      "Mitkä ovat aukioloajat?",
      "Voiko ruoan tilata kotiin?",
    ],
    realestate: [
      "Etsin 3h+k asuntoa Helsingistä",
      "Mikä on asunnon X hinta?",
      "Voinko varata näytön?",
      "Mitä lainaa saisin 400k asuntoon?",
    ],
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getAIResponse = (userMessage: string, scenario: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (scenario === "ecommerce") {
      if (lowerMessage.includes("iphone") || lowerMessage.includes("puhelin")) {
        return "📱 iPhone 15 Pro on varastossa! Meillä on kaikki värivaihtoehdot saatavilla:\n\n• iPhone 15 Pro 128GB - 1,199€\n• iPhone 15 Pro 256GB - 1,329€ \n• iPhone 15 Pro 512GB - 1,559€\n\nToimitus 1-2 arkipäivää. Haluatko lisätietoja jostain mallista? 🚀"
      }

      if (lowerMessage.includes("palaut") || lowerMessage.includes("return")) {
        return "🔄 Palautukset ovat helppoja meillä!\n\n✅ 30 päivän palautusoikeus\n✅ Ilmainen palautus yli 50€ tilauksissa\n✅ Rahat takaisin 2-5 arkipäivää\n\nTäytä palautuslomake verkkosivuillamme ja tulosta palautuslappu. Voit myös tuoda tuotteen suoraan myymälään! 📦"
      }

      if (lowerMessage.includes("toimitus") || lowerMessage.includes("kuljetus")) {
        return "🚚 Toimitusvaihtoehtojen:\n\n📦 Normaali toimitus (1-3 arkipäivää) - 4,90€\n⚡ Pikatoimitus (seuraava arkipäivä) - 9,90€\n🏪 Nouto myymälästä - Ilmainen\n🎁 Ilmainen toimitus yli 50€ tilauksissa\n\nSaat seurantakoodin heti kun tilaus lähtee! 📱"
      }

      if (lowerMessage.includes("kannettava") || lowerMessage.includes("laptop")) {
        return '💻 Suosittelen näitä kannettavia käyttötarkoituksesi mukaan:\n\n🎯 **Toimistokäyttöön:**\nLenovo ThinkPad E15 - 899€\n\n🎮 **Pelaamiseen:**\nASUS ROG Strix G15 - 1,299€\n\n🎨 **Luovaan työhön:**\nMacBook Pro 14" - 2,199€\n\nKerro lisää käyttötarkoituksesta, niin voin antaa tarkemman suosituksen! ✨'
      }
    }

    if (scenario === "restaurant") {
      if (lowerMessage.includes("varaa") || lowerMessage.includes("pöytä")) {
        return "🍽️ Voin auttaa pöytävarauksessa!\n\n📅 Milloin haluaisitte tulla?\n👥 Kuinka monta henkilöä?\n⏰ Mihin aikaan?\n\nVoin varata pöydän suoraan tai ohjata teidät varausjärjestelmäämme. Meillä on tilaa erityisesti arkisin ja viikonloppuisin ennen klo 18! 🌟"
      }

      if (lowerMessage.includes("vegaan") || lowerMessage.includes("kasvis")) {
        return "🌱 Kyllä! Meillä on upea vegaaninen menu:\n\n🥗 Vegaaninen Caesar-salaatti - 16€\n🍝 Truffle-pasta cashew-kermalla - 22€\n🥘 Thaimaalainen curry - 19€\n🍰 Vegaaninen suklaakakku - 9€\n\nKaikki vegaaniset annokset on merkitty menuumme selkeästi. Haluatteko nähdä koko vegaanisen menun? 🌿"
      }

      if (lowerMessage.includes("aukioloajat") || lowerMessage.includes("auki")) {
        return "🕐 Aukioloajat:\n\n📅 Ma-To: 11:00-22:00\n📅 Pe-La: 11:00-23:00  \n📅 Su: 12:00-21:00\n\n🍳 Lounas ma-pe 11:00-15:00\n🍷 Happy hour pe-la 16:00-18:00\n\nOlemme avoinna myös juhlapyhinä! Tarkista erikoisaukioloajat verkkosivuiltamme. 📱"
      }

      if (lowerMessage.includes("koti") || lowerMessage.includes("toimitus")) {
        return "🚗 Kyllä! Meillä on kotiinkuljetus:\n\n📍 Toimitus-alue: 5km säteellä\n💰 Toimitusmaksu: 4,90€ (ilmainen yli 40€)\n⏱️ Toimitusaika: 30-45 min\n📱 Tilaa: Wolt, Foodora tai suoraan meiltä\n\nSuosittelemme tilaamaan suoraan meiltä - saat 10% alennuksen! 🎉"
      }
    }

    if (scenario === "realestate") {
      if (lowerMessage.includes("3h") || lowerMessage.includes("helsinki")) {
        return "🏠 Löysin sinulle sopivia 3h+k asuntoja Helsingistä!\n\n🌟 **Suositukset:**\n📍 Punavuori, 75m² - 485,000€\n📍 Kallio, 82m² - 420,000€  \n📍 Töölö, 78m² - 520,000€\n\n✨ Kaikki remontoituja, hyvät kulkuyhteydet\n📅 Näytöt viikonloppuna\n\nHaluatko lisätietoja jostain kohteesta? Voin varata näytön! 🗝️"
      }

      if (lowerMessage.includes("hinta") || lowerMessage.includes("maksa")) {
        return "💰 Kerro kohteen osoite tai kohdenumero, niin tarkistan hinnan!\n\n📊 **Yleistä hintatietoa Helsingissä:**\n🏠 1h+k: 200,000-350,000€\n🏠 2h+k: 300,000-500,000€\n🏠 3h+k: 450,000-700,000€\n\n📈 Hinnat nousseet 3% viime vuonna\n💡 Voin myös arvioida asuntosi arvon ilmaiseksi! 🏡"
      }

      if (lowerMessage.includes("näyttö") || lowerMessage.includes("katsoa")) {
        return "👀 Voin varata näytön sinulle!\n\n📅 **Saatavilla olevat ajat:**\n• Lauantai 14:00-16:00\n• Sunnuntai 12:00-15:00\n• Arkisin 17:00-19:00\n\n📝 Tarvitsen:\n• Kohteen osoitteen\n• Toivotun ajan\n• Yhteystietosi\n\nVoin myös järjestää virtuaalikierroksen! 🎥"
      }

      if (lowerMessage.includes("laina") || lowerMessage.includes("400")) {
        return "🏦 400,000€ asuntolainaan:\n\n💰 **Arvio lainamäärästä:**\n📊 Tarvitset n. 5,000€/kk tuloja\n💳 Omarahoitusosuus: 40,000€ (10%)\n📈 Korko tällä hetkellä: 4,2-5,1%\n💸 Kuukausierä: n. 1,800€\n\n🤝 Voin ohjata sinut luotettavalle rahoitusasiantuntijalle ilmaiseen laskelmaan! 📞"
      }
    }

    // Generic responses
    if (lowerMessage.includes("hinta") || lowerMessage.includes("maksu")) {
      return "💰 Kerro tarkemmin mistä tuotteesta/palvelusta olet kiinnostunut, niin voin antaa tarkan hintatiedon! Meillä on myös erilaisia maksuvaihtoehtoja ja rahoitusratkaisuja. 💳"
    }

    return "Kiitos kysymyksestäsi! 😊 Voin auttaa monenlaisissa asioissa. Voisitko tarkentaa kysymystäsi, niin osaan neuvoa sinua paremmin? Tai kokeile jotain pikakysymyksistä! ✨"
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI thinking time with more realistic delay
    setTimeout(
      () => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: getAIResponse(input, selectedDemo),
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, aiResponse])
        setIsTyping(false)
      },
      800 + Math.random() * 1200,
    )
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
  }

  const switchDemo = (demo: string) => {
    setSelectedDemo(demo)
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: `Hei! 👋 Olen ${demoScenarios[demo as keyof typeof demoScenarios].context}:n AI-asiakaspalveluassistentti. Miten voin auttaa sinua tänään?`,
        timestamp: new Date(),
      },
    ])
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <Button variant="outline" onClick={onBack} className="mb-6 border-white/20 text-white hover:bg-white/10">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Takaisin
        </Button>

        <div className="text-center mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-bold text-white mb-4">🤖 AI Chatbot Demo</h1>
            <p className="text-gray-300 text-lg mb-6">Kokeile miten AI-chatbot toimii eri toimialoilla</p>

            {/* Demo Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {Object.entries(demoScenarios).map(([key, scenario]) => (
                <Button
                  key={key}
                  onClick={() => switchDemo(key)}
                  variant={selectedDemo === key ? "default" : "outline"}
                  className={`${
                    selectedDemo === key
                      ? `bg-${scenario.color}-600 hover:bg-${scenario.color}-700 text-white`
                      : "border-white/20 text-white hover:bg-white/10"
                  } transition-all duration-300`}
                >
                  <span className="mr-2">{scenario.icon}</span>
                  {scenario.name}
                </Button>
              ))}
            </div>

            <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2">
              <Sparkles className="mr-1 h-3 w-3" />
              Powered by Advanced AI
            </Badge>
          </motion.div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Chat Interface */}
        <div className="lg:col-span-3">
          <Card className="bg-white/5 border-white/10 backdrop-blur-xl h-[700px] flex flex-col">
            <CardHeader className="border-b border-white/10 bg-white/5">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center text-white">
                  <div className="relative mr-3">
                    <Bot className="h-6 w-6 text-blue-400" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  {demoScenarios[selectedDemo as keyof typeof demoScenarios].context}
                  <Badge variant="outline" className="ml-3 border-green-500/30 text-green-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Online
                  </Badge>
                </CardTitle>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span>Vastausaika: ~1.2s</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 overflow-y-auto p-6 space-y-6">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-4 ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                          : "bg-white/10 text-gray-100 border border-white/10"
                      } shadow-lg`}
                    >
                      <div className="flex items-start space-x-3">
                        {message.role === "assistant" && (
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                        )}
                        {message.role === "user" && (
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="h-4 w-4 text-white" />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="whitespace-pre-wrap leading-relaxed">{message.content}</div>
                          <div className="text-xs opacity-70 mt-2">
                            {message.timestamp.toLocaleTimeString("fi-FI", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 border border-white/10 rounded-2xl p-4 max-w-[85%] shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <span className="text-gray-400 text-sm">AI kirjoittaa...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </CardContent>

            <div className="border-t border-white/10 p-6 bg-white/5">
              <div className="flex space-x-3">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Kirjoita viestisi..."
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Questions */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white text-lg flex items-center">
                <Zap className="mr-2 h-5 w-5 text-yellow-400" />
                Pikakysymykset
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickQuestions[selectedDemo as keyof typeof quickQuestions].map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full text-left justify-start h-auto p-3 whitespace-normal border-white/20 text-white hover:bg-white/10 transition-all duration-200"
                  onClick={() => handleQuickQuestion(question)}
                >
                  <MessageCircle className="mr-2 h-4 w-4 flex-shrink-0 text-blue-400" />
                  {question}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Demo Features */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white text-lg">Demo-ominaisuudet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              {[
                { icon: "⚡", text: "Nopeat vastaukset (1-2s)", color: "text-yellow-400" },
                { icon: "🧠", text: "Kontekstin ymmärtäminen", color: "text-blue-400" },
                { icon: "🇫🇮", text: "Suomenkielinen tuki", color: "text-green-400" },
                { icon: "🕐", text: "24/7 saatavuus", color: "text-purple-400" },
                { icon: "📊", text: "Analytiikka & raportit", color: "text-pink-400" },
                { icon: "🔗", text: "CRM-integraatiot", color: "text-indigo-400" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-lg">{feature.icon}</span>
                  <span className={`${feature.color} font-medium`}>{feature.text}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Performance Stats */}
          <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-500/30 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white text-lg flex items-center">
                <Star className="mr-2 h-5 w-5 text-yellow-400" />
                Suorituskyky
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">98.5%</div>
                  <div className="text-xs text-gray-400">Tarkkuus</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">1.2s</div>
                  <div className="text-xs text-gray-400">Vastausaika</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-xs text-gray-400">Käytettävyys</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">95%</div>
                  <div className="text-xs text-gray-400">Tyytyväisyys</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500/30 backdrop-blur-xl">
            <CardContent className="p-6 text-center">
              <h3 className="font-bold text-white mb-3">Vaikuttunut? 🚀</h3>
              <p className="text-sm text-gray-300 mb-4">
                Tämä on vain demo. Oikea chatbot räätälöidään täysin yrityksesi tarpeisiin!
              </p>
              <div className="space-y-2">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Pyydä Tarjous
                </Button>
                <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10">
                  Varaa Demo-esittely
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
