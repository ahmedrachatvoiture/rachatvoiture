"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  Car,
  Shield,
  Clock,
  Wrench,
  MessageCircle,
  CheckCircle,
  Zap,
  ShieldCheck,
  Banknote,
  Rocket,
  Gem,
} from "lucide-react"
import InteractiveMap from "@/components/map"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function CarDealershipPage() {
  const isMobile = useIsMobile()
  const [isAlertOpen, setIsAlertOpen] = useState(false)

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

  const currentYear = new Date().getFullYear()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Formatage amélioré du message WhatsApp
    const message = `NOUVELLE DEMANDE DE CONTACT

INFORMATIONS PERSONNELLES
- Nom : ${formData.nom}
- Prénom : ${formData.prenom}
- Email : ${formData.email}
- Téléphone : ${formData.telephone}

VÉHICULE RECHERCHÉ
- Marque : ${formData.marque || "Non spécifiée"}
- Modèle : ${formData.modele || "Non spécifié"}
- Année : ${formData.annee || "Non spécifiée"}
- Kilométrage : ${formData.kilometrage || "Non spécifié"}
- Énergie : ${formData.energie || "Non spécifiée"}
- État : ${formData.etat || "Non spécifié"}

BUDGET
- Budget souhaité : ${formData.budget || "Non spécifié"}

MESSAGE COMPLÉMENTAIRE
${formData.message || "Aucun message supplémentaire"}

Note importante :
Les photos du véhicule peuvent être envoyées séparément via WhatsApp après cette première prise de contact.

---
Message envoyé depuis le site web Rachat Voiture Direct`

    const whatsappUrl = `https://wa.me/32471386125?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const openWhatsApp = () => {
    const defaultMessage =
      "Bonjour, Je cherche à vendre mon véhicule, je vous contacte depuis votre site web, pouvons-nous en discuter ? Merci."
    const whatsappUrl = `https://wa.me/32471386125?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, "_blank")
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
      formElement.classList.add("ring-4", "ring-ahmed-blue/30", "ring-opacity-50")
      setTimeout(() => {
        formElement.classList.remove("ring-4", "ring-ahmed-blue/30", "ring-opacity-50")
      }, 2000)
    }
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-whatsapp-green hover:bg-whatsapp-green-dark text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-colors flex items-center"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline sm:ml-2">Contactez-nous</span>
      </button>

      {/* Navigation */}
      <nav className="bg-ahmed-blue text-white py-4 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="text-xl font-bold text-white">RACHAT VOITURE DIRECT</div>
            {/* <Image src="/images/logo.jpeg" alt="Rachat Voiture Direct" width={100} height={100} /> */}
            {/* Belgian Flag */}
            <div className="w-6 h-4 flex border border-gray-300">
              <div className="w-1/3 h-full bg-black"></div>
              <div className="w-1/3 h-full bg-yellow-400"></div>
              <div className="w-1/3 h-full bg-red-600"></div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#accueil" className="hover:text-gray-300 transition-colors font-heading font-medium text-white">
              ACCUEIL
            </a>
            <a href="#vehicules" className="hover:text-gray-300 transition-colors font-heading font-medium text-white">
              VÉHICULES
            </a>
            <a href="#services" className="hover:text-gray-300 transition-colors font-heading font-medium text-white">
              SERVICES
            </a>
            <a href="#occasion" className="hover:text-gray-300 transition-colors font-heading font-medium text-white">
              OCCASION
            </a>
            <a href="#contact" className="hover:text-gray-300 transition-colors font-heading font-medium text-white">
              À PROPOS
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={scrollToForm}
              className="hidden md:block bg-white text-ahmed-blue hover:bg-gray-100 font-semibold"
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
          <div className="md:hidden bg-ahmed-blue/95 border-t border-ahmed-blue/50">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a
                href="#accueil"
                className="block hover:text-gray-300 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ACCUEIL
              </a>
              <a
                href="#vehicules"
                className="block hover:text-gray-300 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                VÉHICULES
              </a>
              <a
                href="#services"
                className="block hover:text-gray-300 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SERVICES
              </a>
              <a
                href="#occasion"
                className="block hover:text-gray-300 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                OCCASION
              </a>
              <a
                href="#contact"
                className="block hover:text-gray-300 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À PROPOS
              </a>
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  scrollToForm()
                }}
                className="w-full bg-white text-ahmed-blue hover:bg-gray-100 font-semibold"
              >
                CONTACT
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center pt-16 pb-8 sm:pb-0 px-4 sm:px-0">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Voiture de luxe"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ahmed-blue bg-opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                VENDEZ VOTRE VOITURE AU MEILLEUR PRIX!
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
                Grâce à notre plateforme en ligne, vous obtenez une estimation GRATUITE en quelques minutes, sans
                engagement.
                <br />
                Nous nous déplaçons partout en Belgique pour conclure la vente rapidement, avec un paiement immédiat et
                zéro frais caché.
              </p>
              <Button
                onClick={scrollToForm}
                className="bg-white text-ahmed-blue hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 font-semibold w-full sm:w-auto mb-8 sm:mb-0"
              >
                DÉCOUVRIR
              </Button>
            </div>

            {/* Contact Form */}
            <Card
              id="contact-form"
              className="bg-white p-4 sm:p-6 shadow-xl border-t-4 border-ahmed-blue transition-all duration-300 order-1 lg:order-2 w-full max-w-lg mx-auto lg:max-w-none"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
                DEMANDE DE CONTACT
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Input
                    name="nom"
                    placeholder="Nom *"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-ahmed-blue focus:ring-ahmed-blue text-sm sm:text-base"
                  />
                  <Input
                    name="prenom"
                    placeholder="Prénom *"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-ahmed-blue focus:ring-ahmed-blue text-sm sm:text-base"
                  />
                </div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-gray-300 focus:border-ahmed-blue focus:ring-ahmed-blue text-sm sm:text-base"
                />
                <Input
                  name="telephone"
                  placeholder="Téléphone *"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  required
                  className="border-gray-300 focus:border-ahmed-blue focus:ring-ahmed-blue text-sm sm:text-base"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <select
                    name="marque"
                    value={formData.marque}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:border-ahmed-blue focus:ring-ahmed-blue text-sm sm:text-base"
                    required
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
                    className="border-gray-300 focus:border-ahmed-blue focus:ring-ahmed-blue text-sm sm:text-base"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Input
                    name="annee"
                    placeholder="Année"
                    type="number"
                    min="1980"
                    max={currentYear.toString()}
                    value={formData.annee}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-ahmed-blue focus:ring-ahmed-blue text-sm sm:text-base"
                    required
                  />
                  <Input
                    name="kilometrage"
                    placeholder="Kilométrage"
                    value={formData.kilometrage}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-ahmed-blue focus:ring-ahmed-blue text-sm sm:text-base"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <select
                    name="energie"
                    value={formData.energie}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:border-ahmed-blue focus:ring-ahmed-blue text-sm sm:text-base"
                    required
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
                    className="w-full p-2 border border-gray-300 rounded-md focus:border-ahmed-blue focus:ring-ahmed-blue text-sm sm:text-base"
                    required
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
                  className="w-full p-2 border border-gray-300 rounded-md focus:border-ahmed-blue focus:ring-ahmed-blue text-sm sm:text-base"
                  required
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
                  className="border-gray-300 focus:border-ahmed-blue focus:ring-ahmed-blue text-sm sm:text-base"
                />
                <p className="text-xs sm:text-sm text-gray-600">
                  * Tous les champs sont obligatoires sauf le message complémentaire. Les photos peuvent être envoyées
                  séparément via WhatsApp après la soumission du formulaire.
                </p>
                <Button
                  type="submit"
                  className="w-full bg-ahmed-blue hover:bg-ahmed-blue/90 text-white font-semibold text-sm sm:text-base"
                >
                  ENVOYER VIA WHATSAPP
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">📌 Qui sommes-nous ?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-lg max-w-none font-heading text-lg font-bold">
              <p>
                Chez Rachat Voiture Direct, notre mission est simple : vous permettre de vendre votre voiture
                rapidement, en toute confiance et sans complications, partout en Belgique.
              </p>
              <p>
                Depuis notre création en 2020, nous sommes spécialisés dans le rachat immédiat de véhicules d’occasion,
                quelles que soient leur marque, leur année ou leur condition :
              </p>
              <br></br>
              <ul className="space-y-2 !pl-0">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-ahmed-blue mr-3" />
                  <span>Récents ou anciens</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-ahmed-blue mr-3" />
                  <span>Roulants ou non</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-ahmed-blue mr-3" />
                  <span>Avec ou sans contrôle technique</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg shadow-inner border border-blue-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">✨ Notre promesse</h3>
              <p className="text-center text-xl sm:text-2xl font-semibold text-ahmed-blue">
                👉 Un clic, une offre, c’est direct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="vehicules" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Les véhicules que nous achetons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="overflow-hidden shadow-lg transition-transform hover:scale-105 bg-white border-2 border-gray-200 hover:border-ahmed-blue flex flex-col">
              <CardContent className="p-0 flex flex-col flex-grow">
                <div className="relative h-56">
                  <Image
                    src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    alt="Voiture en bon état"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                    <h3 className="text-white text-xl font-semibold text-center">RACHAT DE VOITURE EN BON ÉTAT</h3>
                  </div>
                </div>
                <div className="p-6 bg-white flex-grow">
                  <p className="text-gray-700 text-base font-semibold">
                    Votre voiture est en parfait état ? C'est une excellente nouvelle ! Obtenez une offre
                    exceptionnelle et une vente rapide. Nous valorisons votre entretien et vous proposons le meilleur
                    prix du marché.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg transition-transform hover:scale-105 bg-white border-2 border-gray-200 hover:border-ahmed-blue flex flex-col">
              <CardContent className="p-0 flex flex-col flex-grow">
                <div className="relative h-56">
                  <Image
                    src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    alt="Voiture en panne"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                    <h3 className="text-white text-xl font-semibold text-center">
                      RACHAT DE VOITURE EN PANNE OU BEAUCOUP DE KM
                    </h3>
                  </div>
                </div>
                <div className="p-6 bg-white flex-grow">
                  <p className="text-gray-700 text-base font-semibold">
                    Un moteur fatigué ou un compteur qui a fait le tour du monde ? Votre voiture a encore de la valeur
                    pour nous. Nous l'évaluons et nous déplaçons pour la récupérer, sans tracas.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg transition-transform hover:scale-105 bg-white border-2 border-gray-200 hover:border-ahmed-blue flex flex-col">
              <CardContent className="p-0 flex flex-col flex-grow">
                <div className="relative h-56">
                  <Image
                    src="/images/ct-voiture-rachat-belgique.jpg"
                    alt="Voiture sans contrôle technique"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                    <h3 className="text-white text-xl font-semibold text-center">
                      RACHAT DE VOITURE SANS CONTRÔLE TECHNIQUE
                    </h3>
                  </div>
                </div>
                <div className="p-6 bg-white flex-grow">
                  <p className="text-gray-700 text-base font-semibold">
                    Le contrôle technique est refusé ou périmé ? Évitez les frais et les tracas des réparations. Nous
                    achetons votre véhicule en l'état, simplement et sans complications.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg transition-transform hover:scale-105 bg-white border-2 border-gray-200 hover:border-ahmed-blue flex flex-col">
              <CardContent className="p-0 flex flex-col flex-grow">
                <div className="relative h-56">
                  <Image
                    src="/images/voiture-accident-rachat-voiture-belgique.jpeg"
                    alt="Voiture accidentée"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                    <h3 className="text-white text-xl font-semibold text-center">RACHAT DE VOITURE ACCIDENTÉE</h3>
                  </div>
                </div>
                <div className="p-6 bg-white flex-grow">
                  <p className="text-gray-700 text-base font-semibold">
                    Même accidentée, votre voiture n'est pas bonne pour la casse. Nous vous aidons à tourner la page
                    en vous proposant un rachat juste et rapide, peu importe l'étendue des dégâts.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg transition-transform hover:scale-105 bg-white border-2 border-gray-200 hover:border-ahmed-blue flex flex-col">
              <CardContent className="p-0 flex flex-col flex-grow">
                <div className="relative h-56">
                  <Image
                    src="/images/camion-rachat-voiture-belgique.png"
                    alt="Camionnette"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                    <h3 className="text-white text-xl font-semibold text-center">
                      RACHAT DE VOITURES UTILITAIRES & CAMIONNETTES
                    </h3>
                  </div>
                </div>
                <div className="p-6 bg-white flex-grow">
                  <p className="text-gray-700 text-base font-semibold">
                    Vous renouvelez votre flotte professionnelle ? Nous rachetons vos utilitaires, camionnettes et
                    véhicules de société au meilleur prix. Un service efficace pour les pros.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section id="services" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
              Vendez votre voiture rapidement et simplement
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <Car className="w-12 h-12 text-ahmed-blue" />,
                title: "ÉVALUATION GRATUITE",
                description: "Estimation précise et gratuite de votre véhicule par nos experts",
              },
              {
                icon: <Shield className="w-12 h-12 text-ahmed-blue" />,
                title: "GARANTIE SÉCURISÉE",
                description: "Transaction sécurisée avec garantie complète sur tous nos services",
              },
              {
                icon: <Clock className="w-12 h-12 text-ahmed-blue" />,
                title: "RACHAT RAPIDE",
                description: "Rachat immédiat de votre véhicule sous 24h maximum",
              },
              {
                icon: <Wrench className="w-12 h-12 text-ahmed-blue" />,
                title: "SERVICE COMPLET",
                description: "Prise en charge complète de toutes les démarches administratives",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow border-t-4 border-ahmed-blue"
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
              className="bg-ahmed-blue hover:bg-ahmed-blue/90 text-white text-lg px-8 py-3 font-semibold"
            >
              DEMANDER UNE ÉVALUATION
            </Button>
          </div>
        </div>
      </section> */}

      {/* Engagements Section */}
      <section id="engagements" className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">💎 Nos engagements</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-ahmed-blue" />,
                title: "Simplicité",
                description:
                  "Vendez votre véhicule sans démarches compliquées ni paperasse inutile. Nous nous occupons de tout.",
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-ahmed-blue" />,
                title: "Confiance",
                description: "Une relation claire, honnête et transparente. Nos offres sont fermes et sans surprise.",
              },
              {
                icon: <Banknote className="w-12 h-12 text-ahmed-blue" />,
                title: "Sécurité du paiement",
                description: "La vente est conclue en toute sécurité, avec un paiement immédiat et garanti.",
              },
              {
                icon: <Rocket className="w-12 h-12 text-ahmed-blue" />,
                title: "Rapidité d’achat",
                description: "Recevez une offre sous 24h et finalisez la vente en un temps record.",
              },
              {
                icon: <Gem className="w-12 h-12 text-ahmed-blue" />,
                title: "Le meilleur prix",
                description: "Nous évaluons votre voiture au juste prix, selon sa valeur réelle sur le marché.",
              },
              {
                icon: <MapPin className="w-12 h-12 text-ahmed-blue" />,
                title: "Proximité",
                description: "Nous intervenons partout en Belgique, avec un service humain, à l’écoute et réactif.",
              },
            ].map((engagement, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow border-t-4 border-ahmed-blue"
              >
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{engagement.icon}</div>
                  <h3 className="font-bold text-lg text-gray-800">✅ {engagement.title}</h3>
                  <p className="text-gray-600">{engagement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Used Cars Section */}
      <section id="occasion" className="py-16 bg-ahmed-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">RACHAT DE VOITURES D'OCCASION</h2>
              <p className="text-2xl md:text-3xl mb-8">
                Nous rachetons votre véhicule au meilleur prix du marché. Évaluation gratuite et paiement immédiat.
              </p>
              <Button
                onClick={scrollToForm}
                className="bg-white text-ahmed-blue hover:bg-gray-100 text-lg px-8 py-3 font-semibold"
              >
                ESTIMER MA VOITURE
              </Button>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/voiture-vw-rachat-voiture-belgique.jpg"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[600px]">
          <div className="bg-ahmed-blue-light flex items-center p-6 sm:p-8 lg:p-12 order-2 lg:order-1">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
                Vendre ma voiture
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                Si vous envisagez de <strong>vendre votre voiture</strong> d'occasion, vous êtes au bon endroit ! Notre
                estimation est gratuite et sans engagement pour <strong>vendre sa voiture</strong> rapidement.
              </p>

              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Comment fonctionne ?</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                Pour <strong>vendre votre voiture</strong> il vous suffit de suivre les 3 étapes clés.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start space-x-3">
                  <span className="bg-ahmed-blue text-white font-bold w-6 h-6 rounded flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <p className="text-sm sm:text-base text-gray-700">
                    Complétez notre formulaire, nous vous contacterons ensuite afin d'établir une offre de prix sans
                    engagement.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-ahmed-blue text-white font-bold w-6 h-6 rounded flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <p className="text-sm sm:text-base text-gray-700">
                    Notre offre vous convient ? Parfait ! Nous nous occupons de toutes les démarches nécessaires à la
                    cessation de votre véhicule.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-ahmed-blue text-white font-bold w-6 h-6 rounded flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <p className="text-sm sm:text-base text-gray-700">
                    Nous nous déplaçons jusque chez vous afin de récupérer le véhicule et nous vous remettons l'argent
                    en mains propre ou via virement bancaire sécurisé.
                  </p>
                </div>
              </div>

              <Button
                onClick={scrollToForm}
                className="bg-ahmed-blue hover:bg-ahmed-blue/90 text-white text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2 sm:py-3 font-semibold w-full sm:w-auto"
              >
                ESTIMER MA VOITURE
              </Button>
            </div>
          </div>
          <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] order-1 lg:order-2">
            <Image
              src="/images/peugeot-rachat-belgique.jpg"
              alt="Voiture moderne noire"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rachat de voiture */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[600px]">
          <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] order-1">
            <Image
              src="/images/voiture-vw-rachat-voiture-belgique.jpg"
              alt="Voiture sportive orange dans showroom"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-ahmed-blue-light flex items-center p-6 sm:p-8 lg:p-12 order-2">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
                Rachat de voiture
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                Nous proposons un service de <strong>rachat de votre voiture</strong> à un prix correct, quel que soit
                le modèle, la marque ou l'année de votre véhicule, nous sommes prêts à l'acheter pour vous simplifier la
                vie.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                Notre point fort ? Nous <strong>achetons votre véhicule</strong> peut importe son état, la marque, le
                modèle ou l'année, votre véhicule a de la valeur. Même en panne ou accidentée.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                Vendez-nous votre voiture en toute simplicité, et sans contraintes !
              </p>

              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-ahmed-blue text-lg flex-shrink-0">✓</span>
                  <span className="text-base sm:text-lg text-gray-700">
                    Déplacement gratuit sous 24 à votre domicile.
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-ahmed-blue text-lg flex-shrink-0">✓</span>
                  <span className="text-base sm:text-lg text-gray-700">
                    Nous proposons un meilleur prix que les garages et concessionnaires
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-ahmed-blue text-lg flex-shrink-0">✓</span>
                  <span className="text-base sm:text-lg text-gray-700">
                    Notre service est entièrement gratuit et sans engagement.
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-ahmed-blue text-lg flex-shrink-0">✓</span>
                  <span className="text-base sm:text-lg text-gray-700">Paiement sécurisé immédiat</span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                Si vous souhaitez <strong>vendre votre voiture</strong> rapidement, appelez-nous pour un service rapide
                et efficace.
              </p>

              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                Nous <strong>rachetons toutes types de véhicules</strong> tel que :{" "}
                <strong>
                  Citadine, monospaces, SUV, Camionnette, 4X4, Coupé, Pick Up, Berline, Break, Cabriolet, Utilitaire,
                  voitures de sociétés
                </strong>
                , quel que soit leur état, quelle que soit la marque, quelle que soit l'énergie : essence, diesel, GPL,
                bioéthanol, électrique, hybride.
              </p>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                {isMobile ? (
                  <a href="tel:+32471386125">
                    <Button className="bg-ahmed-blue hover:bg-ahmed-blue/90 text-white text-base sm:text-lg lg:text-xl px-4 sm:px-6 py-2 sm:py-3 font-semibold w-full">
                      Appellez-nous
                    </Button>
                  </a>
                ) : (
                  <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                    <AlertDialogTrigger asChild>
                      <Button className="bg-ahmed-blue hover:bg-ahmed-blue/90 text-white text-base sm:text-lg lg:text-xl px-4 sm:px-6 py-2 sm:py-3 font-semibold w-full">
                        Appellez-nous
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Appeler ce numéro</AlertDialogTitle>
                        <AlertDialogDescription>
                          Pour nous appeler, veuillez composer le numéro suivant sur votre téléphone :{" "}
                          <strong>+32 471 38 61 25</strong>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Fermer</AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
                <Button
                  onClick={scrollToForm}
                  className="bg-white text-ahmed-blue hover:bg-gray-100 border border-ahmed-blue text-base sm:text-lg lg:text-xl px-4 sm:px-6 py-2 sm:py-3 font-semibold"
                >
                  ESTIMER MA VOITURE →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rachat de voiture en panne */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[600px]">
          <div className="bg-ahmed-blue-light flex items-center p-6 sm:p-8 lg:p-12 order-2 lg:order-1">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
                Rachat de voiture en panne
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                Vous avez une voiture en panne, accidentée ou qui ne démarre plus ?
                <br />
                Chez Rachat Voiture Direct, nous rachetons aussi les véhicules hors d’usage, rapidement et en toute
                simplicité.
              </p>

              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-ahmed-blue text-lg flex-shrink-0">✔</span>
                  <span className="text-base sm:text-lg text-gray-700">Évaluation gratuite</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-ahmed-blue text-lg flex-shrink-0">✔</span>
                  <span className="text-base sm:text-lg text-gray-700">Offre immédiate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-ahmed-blue text-lg flex-shrink-0">✔</span>
                  <span className="text-base sm:text-lg text-gray-700">Paiement sécurisé</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-ahmed-blue text-lg flex-shrink-0">✔</span>
                  <span className="text-base sm:text-lg text-gray-700">
                    Enlèvement possible partout en Belgique
                  </span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                Ne laissez plus votre voiture immobilisée : vendez-la au meilleur prix, sans stress ni tracas !
              </p>
            </div>
          </div>
          <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] order-1 lg:order-2">
            <Image
              src="/images/voiture-panne-belgique-rachat-voiture.jpg"
              alt="Voiture en panne"
              fill
              className="object-cover"
            />
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
                  <MapPin className="w-6 h-6 text-ahmed-blue" />
                  <div>
                    <h4 className="font-bold text-gray-800">Adresse</h4>
                    <p className="text-gray-600 text-2xl">Chaussée de Waterloo 200/8, 1640 Rhode-Saint-Genèse, Belgique</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-ahmed-blue" />
                  <div>
                    <h4 className="font-bold text-gray-800">Téléphone</h4>
                    <p className="text-gray-600 text-2xl">+32 471 38 61 25</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-ahmed-blue" />
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600 text-2xl">r.linecars187@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 rounded-lg overflow-hidden shadow-lg border-2 border-ahmed-blue/20">
              <InteractiveMap />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ahmed-blue text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Rachat Voiture Direct</h3>
              <p className="text-base sm:text-lg text-gray-200">
                Votre partenaire de confiance pour l'achat et la vente de véhicules en Belgique.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Services</h4>
              <ul className="space-y-1 sm:space-y-2 text-base sm:text-lg text-gray-200">
                <li>Vente de véhicules neufs</li>
                <li>Vente de véhicules d'occasion</li>
                <li>Rachat de voitures</li>
                <li>Financement</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Marques</h4>
              <ul className="space-y-1 sm:space-y-2 text-base sm:text-lg text-gray-200">
                <li>BMW</li>
                <li>Audi</li>
                <li>Mercedes-Benz</li>
                <li>Volkswagen</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contact</h4>
              <ul className="space-y-1 sm:space-y-2 text-base sm:text-lg text-gray-200">
                <li>+32 471 38 61 25</li>
                <li>r.linecars187@gmail.com</li>
                <li>Bruxelles, Belgique</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-500 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-base sm:text-lg text-gray-200">
            <p>&copy; 2025 Rachat Voiture Direct. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
