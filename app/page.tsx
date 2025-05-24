"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Shield, Sparkles } from "lucide-react"
import ChatDemo from "@/components/chat-demo"
import { motion, AnimatePresence } from "framer-motion"

export default function HomePage() {
  const [showDemo, setShowDemo] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Maria Virtanen",
      company: "TechStore Oy",
      text: "Chatbot vähensi asiakaspalvelun työmäärää 75%. ROI saavutettiin 2 kuukaudessa!",
      rating: 5,
    },
    {
      name: "Jukka Nieminen",
      company: "Kiinteistö Nord",
      text: "Asiakkaat saavat vastaukset välittömästi, myös öisin. Myynti kasvoi 40%.",
      rating: 5,
    },
    {
      name: "Anna Koskinen",
      company: "Ravintola Aroma",
      text: "Varaukset hoituvat automaattisesti. Henkilökunta voi keskittyä asiakkaisiin.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <MessageSquare className="h-8 w-8 text-blue-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-xl font-bold text-white">AI ChatBot Pro</span>
            </motion.div>
            <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Live Demo
            </Badge>
          </div>
        </div>
      </header>

      <div className="relative container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {!showDemo ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Section */}
              <div className="text-center mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                    🚀 Uusi teknologia - Testattu 500+ yrityksessä
                  </Badge>
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Älykäs AI-Chatbot
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {" "}
                      Yrityksellesi
                    </span>
                  </h1>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Automatisoi asiakaspalvelu, paranna asiakaskokemusta ja säästä aikaa 24/7 AI-chatbotilla.
                    <span className="text-blue-400 font-semibold">
                      {" "}
                      Keskimäärin 75% vähemmän asiakaspalvelupyyntöjä.
                    </span>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <Button
                      size="lg"
                      onClick={() => setShowDemo(true)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-all duration-200"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Kokeile Demoa Ilmaiseksi
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
                    >
                      Katso Video (2 min)
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">75%</div>
                      <div className="text-sm text-gray-400">Vähemmän tukipyyntöjä</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">24/7</div>
                      <div className="text-sm text-gray-400">Asiakaspalvelu</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">2min</div>
                      <div className="text-sm text-gray-400">Keskimääräinen vastausaika</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">95%</div>
                      <div className="text-sm text-gray-400">Asiakastyytyväisyys</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Features */}
              <motion.div
                className="grid md:grid-cols-3 gap-8 mb-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">Välittömät Vastaukset</CardTitle>
                    <CardDescription className="text-gray-300">
                      AI vastaa asiakkaiden kysymyksiin alle 2 sekunnissa, 24/7. Ei enää jonoja tai odottelua.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">Kasvata Myyntiä</CardTitle>
                    <CardDescription className="text-gray-300">
                      Chatbot ohjaa asiakkaita ostopäätökseen ja ehdottaa sopivia tuotteita. Keskimäärin +40% myynti.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">Luotettava & Turvallinen</CardTitle>
                    <CardDescription className="text-gray-300">
                      GDPR-yhteensopiva, suomalainen data-hosting. Chatbot oppii vain sinun tiedoistasi.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              {/* ROI Calculator */}
              <motion.div
                className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 mb-20 border border-white/10 backdrop-blur-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">💰 Laske Säästösi</h2>
                  <p className="text-gray-300">Katso kuinka paljon chatbot säästää yrityksellesi rahaa</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="bg-white/10 rounded-lg p-6">
                      <h3 className="text-white font-semibold mb-4">Nykyinen tilanne (kuukaudessa):</h3>
                      <div className="space-y-3 text-gray-300">
                        <div className="flex justify-between">
                          <span>Asiakaspalvelupyyntöjä:</span>
                          <span className="text-white font-semibold">1,000 kpl</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Aika per pyyntö:</span>
                          <span className="text-white font-semibold">5 min</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tuntipalkka (+ sivukulut):</span>
                          <span className="text-white font-semibold">25€</span>
                        </div>
                        <hr className="border-white/20" />
                        <div className="flex justify-between text-lg">
                          <span className="text-white font-semibold">Kuukausikustannus:</span>
                          <span className="text-red-400 font-bold">2,083€</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-lg p-6 border border-green-500/30">
                      <h3 className="text-white font-semibold mb-4">AI Chatbotin kanssa:</h3>
                      <div className="space-y-3 text-gray-300">
                        <div className="flex justify-between">
                          <span>AI hoitaa automaattisesti:</span>
                          <span className="text-green-400 font-semibold">750 kpl (75%)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Henkilöstö hoitaa:</span>
                          <span className="text-white font-semibold">250 kpl</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Chatbot-kustannus:</span>
                          <span className="text-white font-semibold">299€/kk</span>
                        </div>
                        <hr className="border-white/20" />
                        <div className="flex justify-between text-lg">
                          <span className="text-white font-semibold">Uusi kuukausikustannus:</span>
                          <span className="text-green-400 font-bold">820€</span>
                        </div>
                        <div className="flex justify-between text-xl">
                          <span className="text-white font-bold">💰 Säästö kuukaudessa:</span>
                          <span className="text-green-400 font-bold">1,263€</span>
                        </div>
                        <div className="text-center mt-4">
                          <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2">
                            ROI: 423% | Takaisinmaksu: 2.8 viikkoa
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Testimonials */}
              <motion.div
                className="mb-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">Mitä Asiakkaamme Sanovat</h2>
                  <p className="text-gray-300">Yli 500 yritystä luottaa meidän AI-ratkaisuihin</p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white/5 border-white/10 backdrop-blur-xl rounded-2xl p-8 text-center"
                    >
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-xl text-gray-200 mb-6 italic">
                        "{testimonials[currentTestimonial].text}"
                      </blockquote>
                      <div className="text-white font-semibold">{testimonials[currentTestimonial].name}</div>
                      <div className="text-gray-400">{testimonials[currentTestimonial].company}</div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial ? "bg-blue-400" : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Use Cases */}
              <motion.div
                className="bg-white/5 border-white/10 backdrop-blur-xl rounded-2xl p-8 mb-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-center text-white mb-12">Toimialakohtaiset Ratkaisut</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: "🛒", title: "E-commerce", desc: "Tuotetiedot, tilaukset, palautukset, suositukset" },
                    { icon: "🏠", title: "Kiinteistöt", desc: "Kohdetiedot, näytöt, hintatiedustelut, laskurit" },
                    { icon: "🍽️", title: "Ravintolat", desc: "Varaukset, menu, aukioloajat, erikoisruokavaliot" },
                    { icon: "⚕️", title: "Terveydenhuolto", desc: "Ajanvaraukset, oireet, lääkäritiedot, ohjeet" },
                  ].map((item, index) => (
                    <Card
                      key={index}
                      className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <CardHeader className="text-center">
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <CardTitle className="text-white text-lg">{item.title}</CardTitle>
                        <CardDescription className="text-gray-300 text-sm">{item.desc}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Pricing */}
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">Hinnoittelu</h2>
                <p className="text-gray-300 mb-12">Valitse yrityksellesi sopiva paketti. Ei piilokustannuksia.</p>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white">Starter</CardTitle>
                      <div className="text-3xl font-bold text-white">
                        €149<span className="text-lg font-normal text-gray-400">/kk</span>
                      </div>
                      <CardDescription className="text-gray-300">Pienille yrityksille</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          2,000 viestiä/kk
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          Perus AI-malli
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          Email-tuki
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          Verkkosivuintegraatio
                        </li>
                      </ul>
                      <Button className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white border border-white/20">
                        Aloita ilmainen kokeilu
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-b from-blue-900/50 to-purple-900/50 border-blue-500/50 backdrop-blur-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 text-sm font-semibold">
                      🔥 SUOSITUIN
                    </div>
                    <CardHeader className="pt-12">
                      <CardTitle className="text-white">Professional</CardTitle>
                      <div className="text-4xl font-bold text-white">
                        €399<span className="text-lg font-normal text-gray-400">/kk</span>
                      </div>
                      <CardDescription className="text-gray-300">Kasvavat yritykset</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          15,000 viestiä/kk
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          Edistynyt AI-malli
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          CRM-integraatiot
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          Prioriteettituki
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          Analytiikka & raportit
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          Mukautettu ulkoasu
                        </li>
                      </ul>
                      <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                        Aloita ilmainen kokeilu
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white">Enterprise</CardTitle>
                      <div className="text-3xl font-bold text-white">Räätälöity</div>
                      <CardDescription className="text-gray-300">Suuret organisaatiot</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          Rajaton käyttö
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          Mukautettu AI-malli
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          Täysi integraatio
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          24/7 puhelintuki
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          Oma projektipäällikkö
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          SLA-sopimus
                        </li>
                      </ul>
                      <Button className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white border border-white/20">
                        Ota yhteyttä
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-12 text-center">
                  <p className="text-gray-400 mb-4">
                    🎁 Erikoistarjous: Ensimmäinen kuukausi ilmaiseksi kaikissa paketeissa!
                  </p>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2">
                    30 päivän rahat takaisin -takuu
                  </Badge>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                className="text-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-12 border border-white/10 backdrop-blur-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Valmis Aloittamaan?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Liity 500+ yrityksen joukkoon jotka ovat automatisoineet asiakaspalvelunsa AI:lla. Kokeile ilmaiseksi
                  - ei sitoutumista.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => setShowDemo(true)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-all duration-200"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Kokeile Demoa Nyt
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
                  >
                    Varaa Demo-esittely
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="demo"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <ChatDemo onBack={() => setShowDemo(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
