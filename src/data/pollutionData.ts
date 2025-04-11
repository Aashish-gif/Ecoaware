import { Factory, Droplets, Leaf, Radio, Trash2, Car } from 'lucide-react';

export const pollutionData = [
  {
    type: "air",
    title: "Air Pollution",
    description: "Contamination of air by smoke, gases, and harmful particles that affect respiratory health and contribute to climate change.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800",
    detailImage: "https://images.unsplash.com/photo-1569097026578-2ca3f0436045?auto=format&fit=crop&w=1920",
    delay: 0.2,
    causes: [
      "Industrial emissions and factory smoke",
      "Vehicle exhaust fumes",
      "Burning of fossil fuels",
      "Agricultural activities and burning of crop residue",
      "Construction and demolition activities"
    ],
    prevention: [
      "Use of renewable energy sources",
      "Regular vehicle maintenance",
      "Implementation of emission control technologies",
      "Promotion of public transportation",
      "Green building practices"
    ],
    impact: [
      "Respiratory diseases and health issues",
      "Global warming and climate change",
      "Acid rain formation",
      "Damage to plants and crops",
      "Reduced air quality in urban areas"
    ],
    solutions: "Recent technological innovations include air purification towers in cities, development of carbon capture technologies, and the rise of electric vehicles. Many cities are also implementing green corridors and vertical gardens to naturally filter air pollutants."
  },
  {
    type: "water",
    title: "Water Pollution",
    description: "Contamination of water bodies by chemicals, plastics, and waste materials that harm aquatic life and drinking water sources.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=800",
    detailImage: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?auto=format&fit=crop&w=1920",
    delay: 0.4,
    causes: [
      "Industrial waste discharge",
      "Agricultural runoff",
      "Oil spills",
      "Sewage and wastewater",
      "Plastic waste disposal"
    ],
    prevention: [
      "Proper waste treatment",
      "Reducing plastic usage",
      "Water conservation",
      "Sustainable farming practices",
      "Regular water quality monitoring"
    ],
    impact: [
      "Death of aquatic life",
      "Contamination of drinking water",
      "Disruption of ecosystems",
      "Waterborne diseases",
      "Economic impact on fishing communities"
    ],
    solutions: "Advanced water treatment technologies, including microorganism-based purification systems and smart sensors for detecting contamination, are being developed. Innovative solutions like floating barriers for plastic collection and bio-remediation techniques are showing promising results."
  },
  {
    type: "soil",
    title: "Soil Pollution",
    description: "Degradation of land quality due to chemicals, waste disposal, and agricultural practices that affect soil fertility.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1597495591799-652a1e5d1b13?auto=format&fit=crop&w=800",
    detailImage: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?auto=format&fit=crop&w=1920",
    delay: 0.6,
    causes: [
      "Excessive use of pesticides",
      "Industrial waste dumping",
      "Mining activities",
      "Improper waste disposal",
      "Oil leaks and spills"
    ],
    prevention: [
      "Organic farming practices",
      "Proper waste management",
      "Soil testing and monitoring",
      "Reduced chemical pesticide use",
      "Reforestation and soil conservation"
    ],
    impact: [
      "Reduced soil fertility",
      "Loss of biodiversity",
      "Food chain contamination",
      "Groundwater pollution",
      "Health risks from contaminated crops"
    ],
    solutions: "Modern soil remediation techniques include phytoremediation using specific plants, biochar application for soil improvement, and the development of biodegradable alternatives to harmful pesticides. Smart farming practices utilizing IoT sensors help in maintaining soil health."
  },
  {
    type: "noise",
    title: "Noise Pollution",
    description: "Excessive noise from vehicles, industries, and urban activities that impact mental health and wildlife behavior.",
    icon: Radio,
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800",
    detailImage: "https://images.unsplash.com/photo-1498736297812-3a08021f206f?auto=format&fit=crop&w=1920",
    delay: 0.8,
    causes: [
      "Traffic and transportation",
      "Industrial machinery",
      "Construction activities",
      "Entertainment venues",
      "Aircraft and airports"
    ],
    prevention: [
      "Sound barriers installation",
      "Vehicle noise regulations",
      "Urban planning and zoning",
      "Use of noise-reducing materials",
      "Time restrictions on noisy activities"
    ],
    impact: [
      "Hearing loss",
      "Sleep disturbance",
      "Mental health issues",
      "Wildlife behavioral changes",
      "Reduced quality of life"
    ],
    solutions: "Innovation in noise reduction includes the development of smart windows that reduce outside noise, noise-canceling urban design features, and the implementation of 'quiet zones' in cities. Electric vehicles and improved construction techniques are also helping reduce urban noise levels."
  },
  {
    type: "plastic",
    title: "Plastic Pollution",
    description: "Accumulation of plastic waste in environments, particularly affecting marine ecosystems and wildlife.",
    icon: Trash2,
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800",
    detailImage: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1920",
    delay: 1,
    causes: [
      "Single-use plastics",
      "Poor waste management",
      "Packaging industry",
      "Microplastics in products",
      "Improper disposal habits"
    ],
    prevention: [
      "Reduce, Reuse, Recycle",
      "Ban on single-use plastics",
      "Alternative packaging materials",
      "Proper waste segregation",
      "Community cleanup initiatives"
    ],
    impact: [
      "Marine life endangerment",
      "Microplastic contamination",
      "Soil degradation",
      "Visual pollution",
      "Health risks to humans"
    ],
    solutions: "Breakthrough innovations include biodegradable plastics made from plant materials, plastic-eating bacteria for waste management, and advanced recycling technologies that can process multiple types of plastics. Ocean cleanup projects using autonomous systems are showing promising results in removing plastic waste from marine environments."
  },
  {
    type: "vehicle",
    title: "Vehicle Pollution",
    description: "Emissions from vehicles that contribute to smog, acid rain, and greenhouse gas accumulation in the atmosphere.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800",
    detailImage: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=1920",
    delay: 1.2,
    causes: [
      "Fossil fuel combustion",
      "Poor vehicle maintenance",
      "Traffic congestion",
      "Old vehicle emissions",
      "Lack of emission controls"
    ],
    prevention: [
      "Regular vehicle maintenance",
      "Use of public transportation",
      "Electric vehicle adoption",
      "Carpooling and ride-sharing",
      "Implementation of emission standards"
    ],
    impact: [
      "Air quality degradation",
      "Respiratory health issues",
      "Contribution to global warming",
      "Urban smog formation",
      "Environmental damage"
    ],
    solutions: "The automotive industry is rapidly evolving with electric vehicles, hydrogen fuel cells, and improved battery technology. Smart traffic management systems and autonomous vehicles are being developed to reduce emissions through optimized routing and reduced congestion."
  }
];