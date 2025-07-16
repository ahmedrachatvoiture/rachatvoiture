"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    L: any
  }
}

export default function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    // Charger Leaflet CSS
    if (!document.querySelector('link[href*="leaflet.css"]')) {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
      link.crossOrigin = ""
      document.head.appendChild(link)
    }

    // Charger Leaflet JS
    if (!window.L) {
      const script = document.createElement("script")
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
      script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
      script.crossOrigin = ""
      script.onload = initializeMap
      document.head.appendChild(script)
    } else {
      initializeMap()
    }

    function initializeMap() {
      if (!mapRef.current || mapInstanceRef.current) return

      // Initialiser la carte centrée sur la nouvelle adresse
      const map = window.L.map(mapRef.current).setView([50.7553, 4.3534], 15)
      mapInstanceRef.current = map

      // Ajouter les tuiles OpenStreetMap
      window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      // Créer un marqueur personnalisé avec les couleurs du site
      const customIcon = window.L.divIcon({
        html: `
          <div style="
            background-color: #059669; 
            width: 40px; 
            height: 40px; 
            border-radius: 50%; 
            border: 4px solid white; 
            box-shadow: 0 4px 15px rgba(5, 150, 105, 0.4);
            display: flex; 
            align-items: center; 
            justify-content: center;
            position: relative;
          ">
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
        `,
        className: "custom-marker",
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      })

      // Ajouter le marqueur avec popup
      window.L.marker([50.7553, 4.3534], { icon: customIcon })
        .addTo(map)
        .bindPopup(
          `
          <div style="
            text-align: center; 
            font-family: system-ui, -apple-system, sans-serif;
            padding: 10px;
            min-width: 200px;
          ">
            <div style="
              color: #059669; 
              font-size: 18px; 
              font-weight: bold; 
              margin-bottom: 8px;
              border-bottom: 2px solid #f59e0b;
              padding-bottom: 5px;
            ">
              🚗 AUTO EXPERT
            </div>
            <div style="color: #6b7280; margin-bottom: 5px;">
              📍 Chaussée de Waterloo 200/8
            </div>
            <div style="color: #6b7280; margin-bottom: 10px;">
              1640 Rhode-Saint-Genèse, Belgique
            </div>
            <div style="margin-top: 10px;">
              <a href="tel:+32471386125" style="
                color: #f59e0b; 
                text-decoration: none; 
                font-weight: bold;
                background: #fef3c7;
                padding: 5px 10px;
                border-radius: 5px;
                display: inline-block;
              ">
                📞 +32 471 38 61 25
              </a>
            </div>
            <div style="margin-top: 8px;">
              <a href="https://www.openstreetmap.org/directions?from=&to=50.7553%2C4.3534" 
                 target="_blank" 
                 style="
                   color: #059669; 
                   text-decoration: none; 
                   font-size: 14px;
                 ">
                🧭 Obtenir l'itinéraire
              </a>
            </div>
          </div>
        `,
          {
            maxWidth: 250,
            className: "custom-popup",
          },
        )
        .openPopup()
    }

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <div className="h-96 rounded-lg overflow-hidden shadow-lg border-2 border-emerald-200 bg-emerald-50">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  )
}
