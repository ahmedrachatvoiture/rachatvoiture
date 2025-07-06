"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Car, Shield, Clock, Wrench, MessageCircle } from "lucide-react"
import InteractiveMap from "@/components/map"

export default function CarDealershipPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    marque: "",
    modele: "",
    annee: "",
    kilometrage: "",
    energie: "",
    etat: "",
    budget: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Nouvelle demande de contact:
    
Nom: ${formData.nom}
Prénom: ${formData.prenom}
Email: ${formData.email}
Téléphone: ${formData.telephone}
Marque souhaitée: ${formData.marque}
Modèle: ${formData.modele}
Année: ${formData.annee}
Kilométrage: ${formData.kilometrage}
Énergie: ${formData.energie}
État: ${formData.etat}
Budget: ${formData.budget}
Message: ${formData.message}

Note: Les photos peuvent être envoyées séparément via WhatsApp après cette soumission.`

    const whatsappUrl = `https://wa.me/32471386125?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/32471386125", "_blank")
  }

  // Function to scroll to form
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form")
    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
      // Add a subtle highlight effect
      formElement.classList.add("ring-4", "ring-amber-300", "ring-opacity-50")
      setTimeout(() => {
        formElement.classList.remove("ring-4", "ring-amber-300", "ring-opacity-50")
      }, 2000)
    }
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Navigation */}
      <nav className="bg-emerald-600 text-white py-4 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="text-xl font-bold">AUTO EXPERT</div>
            {/* Belgian Flag */}
            <div className="w-6 h-4 flex border border-gray-300">
              <div className="w-1/3 h-full bg-black"></div>
              <div className="w-1/3 h-full bg-yellow-400"></div>
              <div className="w-1/3 h-full bg-red-600"></div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#accueil" className="hover:text-amber-300 transition-colors font-medium">
              ACCUEIL
            </a>
            <a href="#vehicules" className="hover:text-amber-300 transition-colors font-medium">
              VÉHICULES
            </a>
            <a href="#services" className="hover:text-amber-300 transition-colors font-medium">
              SERVICES
            </a>
            <a href="#occasion" className="hover:text-amber-300 transition-colors font-medium">
              OCCASION
            </a>
            <a href="#contact" className="hover:text-amber-300 transition-colors font-medium">
              À PROPOS
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={scrollToForm}
              className="hidden md:block bg-amber-500 hover:bg-amber-600 text-white font-semibold"
            >
              CONTACT
            </Button>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div
                  className={`w-full h-0.5 bg-white transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-white transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                ></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-emerald-700 border-t border-emerald-500">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a
                href="#accueil"
                className="block hover:text-amber-300 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ACCUEIL
              </a>
              <a
                href="#vehicules"
                className="block hover:text-amber-300 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                VÉHICULES
              </a>
              <a
                href="#services"
                className="block hover:text-amber-300 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SERVICES
              </a>
              <a
                href="#occasion"
                className="block hover:text-amber-300 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                OCCASION
              </a>
              <a
                href="#contact"
                className="block hover:text-amber-300 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À PROPOS
              </a>
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  scrollToForm()
                }}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold"
              >
                CONTACT
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Voiture de luxe"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-emerald-900 bg-opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6">TROUVEZ VOTRE VOITURE DE RÊVE</h1>
              <p className="text-xl mb-8">Découvrez notre sélection exceptionnelle de véhicules neufs et d'occasion</p>
              <Button
                onClick={scrollToForm}
                className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-3 font-semibold"
              >
                DÉCOUVRIR
              </Button>
            </div>

            {/* Contact Form */}
            <Card
              id="contact-form"
              className="bg-white p-6 shadow-xl border-t-4 border-emerald-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">DEMANDE DE CONTACT</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="nom"
                    placeholder="Nom *"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                  <Input
                    name="prenom"
                    placeholder="Prénom *"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <Input
                  name="telephone"
                  placeholder="Téléphone *"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  required
                  className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <div className="grid grid-cols-2 gap-4">
                  <select
                    name="marque"
                    value={formData.marque}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="">Marque</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Peugeot">Peugeot</option>
                    <option value="Renault">Renault</option>
                    <option value="Citroën">Citroën</option>
                    <option value="Ford">Ford</option>
                    <option value="Opel">Opel</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Kia">Kia</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Volvo">Volvo</option>
                    <option value="SEAT">SEAT</option>
                    <option value="Skoda">Skoda</option>
                    <option value="Fiat">Fiat</option>
                    <option value="Alfa Romeo">Alfa Romeo</option>
                  </select>
                  <Input
                    name="modele"
                    placeholder="Modèle"
                    value={formData.modele}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="annee"
                    placeholder="Année"
                    type="number"
                    min="1990"
                    max="2024"
                    value={formData.annee}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                  <Input
                    name="kilometrage"
                    placeholder="Kilométrage"
                    value={formData.kilometrage}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    name="energie"
                    value={formData.energie}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="">Énergie</option>
                    <option value="Essence">Essence</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Hybride">Hybride</option>
                    <option value="Électrique">Électrique</option>
                    <option value="GPL">GPL</option>
                  </select>
                  <select
                    name="etat"
                    value={formData.etat}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="">État</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Très bon">Très bon</option>
                    <option value="Bon">Bon</option>
                    <option value="Moyen">Moyen</option>
                    <option value="À réparer">À réparer</option>
                  </select>
                </div>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:border-emerald-500 focus:ring-emerald-500"
                >
                  <option value="">Budget</option>
                  <option value="0-15000">0 - 15 000 €</option>
                  <option value="15000-30000">15 000 - 30 000 €</option>
                  <option value="30000-50000">30 000 - 50 000 €</option>
                  <option value="50000+">50 000 € +</option>
                </select>
                <Textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <p className="text-sm text-gray-600">
                  * Les photos peuvent être envoyées séparément via WhatsApp après la soumission du formulaire.
                </p>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                  ENVOYER VIA WHATSAPP
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Vehicle Purchase Types */}
      <section id="vehicules" className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Les véhicules que nous achetons</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-500">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Rachat voiture bon état"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-emerald-900 bg-opacity-60 flex flex-col justify-end p-4 text-white">
                  <h3 className="font-bold text-lg mb-2">RACHAT DE VOITURE EN BON ÉTAT</h3>
                  <p className="text-sm mb-3">Jackpot! demandez votre estimation!</p>
                  <Button
                    onClick={scrollToForm}
                    className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold"
                  >
                    ESTIMER MA VOITURE
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-500">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Rachat voiture en panne"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-emerald-900 bg-opacity-60 flex flex-col justify-end p-4 text-white">
                  <h3 className="font-bold text-lg mb-2">RACHAT DE VOITURE EN PANNE OU BEAUCOUP DE KM</h3>
                  <p className="text-sm mb-3">Pas de souci! on reprend votre auto</p>
                  <Button
                    onClick={scrollToForm}
                    className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold"
                  >
                    ESTIMER MA VOITURE
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-500">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Rachat voiture sans contrôle"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-emerald-900 bg-opacity-60 flex flex-col justify-end p-4 text-white">
                  <h3 className="font-bold text-lg mb-2">RACHAT DE VOITURE SANS CONTRÔLE TECHNIQUE</h3>
                  <p className="text-sm mb-3">Nous rachetons votre voiture en l'état</p>
                  <Button
                    onClick={scrollToForm}
                    className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold"
                  >
                    ESTIMER MA VOITURE
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-500">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Rachat voiture accidentée"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-emerald-900 bg-opacity-60 flex flex-col justify-end p-4 text-white">
                  <h3 className="font-bold text-lg mb-2">RACHAT DE VOITURE ACCIDENTÉE</h3>
                  <p className="text-sm mb-3">On vous débarrasse de votre voiture accidentée</p>
                  <Button
                    onClick={scrollToForm}
                    className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold"
                  >
                    ESTIMER MA VOITURE
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-500">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Rachat utilitaires"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-emerald-900 bg-opacity-60 flex flex-col justify-end p-4 text-white">
                  <h3 className="font-bold text-lg mb-2">RACHAT DE VOITURES UTILITAIRES & CAMIONNETTES</h3>
                  <p className="text-sm mb-3">Rachat de véhicules utilitaires au meilleur prix</p>
                  <Button
                    onClick={scrollToForm}
                    className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold"
                  >
                    ESTIMER MON UTILITAIRE
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Vendez votre voiture rapidement et simplement</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Car className="w-12 h-12 text-emerald-600" />,
                title: "ÉVALUATION GRATUITE",
                description: "Estimation précise et gratuite de votre véhicule par nos experts",
              },
              {
                icon: <Shield className="w-12 h-12 text-emerald-600" />,
                title: "GARANTIE SÉCURISÉE",
                description: "Transaction sécurisée avec garantie complète sur tous nos services",
              },
              {
                icon: <Clock className="w-12 h-12 text-emerald-600" />,
                title: "RACHAT RAPIDE",
                description: "Rachat immédiat de votre véhicule sous 24h maximum",
              },
              {
                icon: <Wrench className="w-12 h-12 text-emerald-600" />,
                title: "SERVICE COMPLET",
                description: "Prise en charge complète de toutes les démarches administratives",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow border-t-4 border-amber-400"
              >
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="font-bold text-lg text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={scrollToForm}
              className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-3 font-semibold"
            >
              DEMANDER UNE ÉVALUATION
            </Button>
          </div>
        </div>
      </section>

      {/* Used Cars Section */}
      <section id="occasion" className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">RACHAT DE VOITURES D'OCCASION</h2>
              <p className="text-lg mb-8">
                Nous rachetons votre véhicule au meilleur prix du marché. Évaluation gratuite et paiement immédiat.
              </p>
              <Button
                onClick={scrollToForm}
                className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-3 font-semibold"
              >
                VENDRE MA VOITURE
              </Button>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Voiture d'occasion"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Sections */}
      {/* Vendre ma voiture */}
      <section className="py-0">
        <div className="grid md:grid-cols-2 min-h-[600px]">
          <div className="bg-emerald-50 flex items-center p-12">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Vendre ma voiture</h2>
              <p className="text-gray-700 mb-6">
                Si vous envisagez de <strong>vendre votre voiture</strong> d'occasion, vous êtes au bon endroit ! Notre
                estimation est gratuite et sans engagement pour <strong>vendre sa voiture</strong> rapidement.
              </p>

              <h3 className="text-xl font-bold mb-4 text-gray-800">Comment fonctionne ?</h3>
              <p className="text-gray-700 mb-6">
                Pour <strong>vendre votre voiture</strong> il vous suffit de suivre les 3 étapes clés.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="bg-emerald-600 text-white font-bold w-6 h-6 rounded flex items-center justify-center text-sm">
                    1
                  </span>
                  <p className="text-gray-700">
                    Complétez notre formulaire, nous vous contacterons ensuite afin d'établir une offre de prix sans
                    engagement.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-emerald-600 text-white font-bold w-6 h-6 rounded flex items-center justify-center text-sm">
                    2
                  </span>
                  <p className="text-gray-700">
                    Notre offre vous convient ? Parfait ! Nous nous occupons de toutes les démarches nécessaires à la
                    cessation de votre véhicule.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-emerald-600 text-white font-bold w-6 h-6 rounded flex items-center justify-center text-sm">
                    3
                  </span>
                  <p className="text-gray-700">
                    Nous nous déplaçons jusque chez vous afin de récupérer le véhicule et nous vous remettons l'argent
                    en mains propre ou via virement bancaire sécurisé.
                  </p>
                </div>
              </div>

              <Button
                onClick={scrollToForm}
                className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-3 font-semibold"
              >
                ESTIMER MA VOITURE
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Voiture moderne noire"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rachat de voiture */}
      <section className="py-0">
        <div className="grid md:grid-cols-2 min-h-[600px]">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Voiture sportive orange dans showroom"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-emerald-50 flex items-center p-12">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Rachat de voiture</h2>
              <p className="text-gray-700 mb-4">
                Nous proposons un service de <strong>rachat de votre voiture</strong> à un prix correct, quel que soit
                le modèle, la marque ou l'année de votre véhicule, nous sommes prêts à l'acheter pour vous simplifier la
                vie.
              </p>
              <p className="text-gray-700 mb-4">
                Notre point fort ? Nous <strong>achetons votre véhicule</strong> peut importe son état, la marque, le
                modèle ou l'année, votre véhicule a de la valeur. Même en panne ou accidentée.
              </p>
              <p className="text-gray-700 mb-6">Vendez-nous votre voiture en toute simplicité, et sans contraintes !</p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-600 text-lg">✓</span>
                  <span className="text-gray-700">Déplacement gratuit sous 24 à votre domicile.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-600 text-lg">✓</span>
                  <span className="text-gray-700">
                    Nous proposons un meilleur prix que les garages et concessionnaires
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-600 text-lg">✓</span>
                  <span className="text-gray-700">Notre service est entièrement gratuit et sans engagement.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-600 text-lg">✓</span>
                  <span className="text-gray-700">Paiement sécurisé immédiat</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                Si vous souhaitez <strong>vendre votre voiture</strong> rapidement, appelez-nous pour un service rapide
                et efficace.
              </p>

              <p className="text-gray-700 mb-8">
                Nous <strong>rachetons toutes types de véhicules</strong> tel que :{" "}
                <strong>
                  Citadine, monospaces, SUV, Camionnette, 4X4, Coupé, Pick Up, Berline, Break, Cabriolet, Utilitaire,
                  voitures de sociétés
                </strong>
                , quel que soit leur état, quelle que soit la marque, quelle que soit l'énergie : essence, diesel, GPL,
                bioéthanol, électrique, hybride.
              </p>

              <div className="flex space-x-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-6 py-3 font-semibold">
                  📞 0477 03 06 90
                </Button>
                <Button
                  onClick={scrollToForm}
                  className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-6 py-3 font-semibold"
                >
                  ESTIMER MA VOITURE →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-800">Nous contacter</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                  <div>
                    <h4 className="font-bold text-gray-800">Adresse</h4>
                    <p className="text-gray-600">123 Avenue des Voitures, 1000 Bruxelles, Belgique</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-emerald-600" />
                  <div>
                    <h4 className="font-bold text-gray-800">Téléphone</h4>
                    <p className="text-gray-600">+32 471 38 61 25</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-emerald-600" />
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">contact@autoexpert.be</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 rounded-lg overflow-hidden shadow-lg border-2 border-emerald-200">
              <InteractiveMap />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AUTO EXPERT</h3>
              <p className="text-emerald-100">
                Votre partenaire de confiance pour l'achat et la vente de véhicules en Belgique.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-emerald-100">
                <li>Vente de véhicules neufs</li>
                <li>Vente de véhicules d'occasion</li>
                <li>Rachat de voitures</li>
                <li>Financement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Marques</h4>
              <ul className="space-y-2 text-emerald-100">
                <li>BMW</li>
                <li>Audi</li>
                <li>Mercedes-Benz</li>
                <li>Volkswagen</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-emerald-100">
                <li>+32 471 38 61 25</li>
                <li>contact@autoexpert.be</li>
                <li>Bruxelles, Belgique</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-emerald-500 mt-8 pt-8 text-center text-emerald-100">
            <p>&copy; 2024 Auto Expert. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
