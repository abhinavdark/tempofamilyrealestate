// Tempo Family Real Estate - Authentic Properties Dataset
// Sourced directly from tempofamilyrealestate.es genuine property listings

export interface Property {
  id: string;
  ref: string;
  title: string;
  subtitle: string;
  location: string;
  zone: string;
  type: string;
  operation: 'Venta' | 'Alquiler';
  price: number;
  priceFormatted: string;
  bedrooms: number;
  bathrooms: number;
  areaBuilt: number;
  areaPlot?: number | null;
  tag?: string;
  featured: boolean;
  energyRating: string;
  yearBuilt: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  lat: number;
  lng: number;
}

export const PROPERTIES: Property[] = [
  {
    "id": "1621094",
    "ref": "LUX0002",
    "title": "Villa de Lujo en Hinojedo con Piscina",
    "subtitle": "Espectacular villa de obra nueva con diseño contemporáneo, acabados de alta gama y jardín privado a minutos de las playas de Suances",
    "location": "Hinojedo, Cantabria",
    "zone": "Hinojedo",
    "type": "Villa de Lujo",
    "operation": "Venta",
    "price": 975000,
    "priceFormatted": "975.000 €",
    "bedrooms": 4,
    "bathrooms": 3,
    "areaBuilt": 260,
    "areaPlot": 850,
    "tag": "Lujo Exclusivo",
    "featured": true,
    "energyRating": "A",
    "yearBuilt": 2024,
    "image": "/images/properties/1621094_lux0002.webp",
    "gallery": [
      "/images/properties/1621094_lux0002.webp"
    ],
    "description": "Le presentamos una espectacular vivienda unifamiliar de obra nueva, ubicada en una de las zonas residenciales más cotizadas y tranquilas de Hinojedo (municipio de Suances). Concebida con una arquitectura de líneas depuradas, grandes ventanales de suelo a techo y una distribución que fusiona los espacios interiores con el paisaje cántabro.\n\nLa propiedad cuenta con un salón comedor de doble altura inundado de luz natural, cocina de diseño integrada con isla central y electrodomésticos de primera gama, cuatro dormitorios dobles (suite principal con vestidor y baño en suite con bañera exenta), tres baños completos y zona de lavandería independiente.\n\nEn el exterior, una magnífica piscina privada con solárium de tarja tecnológica y un jardín consolidado diseñado para el máximo disfrute y privacidad. Calefacción por aerotermia mediante suelo radiante refrescante, carpintería con rotura de puente térmico y triple acristalamiento, y garaje cerrado para dos vehículos con cargador para coche eléctrico.",
    "features": [
      "Piscina privada con iluminación LED",
      "Aerotermia y suelo radiante/refrescante",
      "Certificación energética A",
      "Jardín privado de 850 m²",
      "Garaje cerrado para 2 vehículos",
      "Preinstalación de cargador para vehículo eléctrico",
      "Grandes ventanales con triple acristalamiento",
      "Cocina de diseño con electrodomésticos integrados",
      "Suite principal con vestidor y baño privado",
      "A 5 minutos de las playas de Suances"
    ],
    "lat": 43.402746073421,
    "lng": -4.0473571774841
  },
  {
    "id": "1675900",
    "ref": "PIS0021",
    "title": "Piso Exclusivo en Sunrise Golf Residences",
    "subtitle": "Vivienda de lujo en primera línea de La Cala Golf con vistas panorámicas, amplias terrazas y resort privado",
    "location": "Mijas, Cantabria",
    "zone": "Mijas",
    "type": "Piso de Lujo",
    "operation": "Venta",
    "price": 729900,
    "priceFormatted": "729.900 €",
    "bedrooms": 3,
    "bathrooms": 2,
    "areaBuilt": 240,
    "areaPlot": null,
    "tag": "Primera Línea Golf",
    "featured": true,
    "energyRating": "A",
    "yearBuilt": 2024,
    "image": "/images/properties/1675900_pis0021.webp",
    "gallery": [
      "/images/properties/1675900_pis0021.webp"
    ],
    "description": "Sunrise Golf Residences es un exclusivo complejo residencial situado en primera línea de La Cala Golf, que combina una arquitectura contemporánea vanguardista con unas calidades insuperables y vistas abiertas al campo de golf y al mar Mediterráneo.\n\nEsta vivienda destaca por su concepto de vida diáfano, donde la sala de estar se prolonga naturalmente hacia una terraza panorámica de más de 60 m². Cocina gourmet de concepto abierto totalmente amueblada y equipada con electrodomésticos de primeras marcas europeas. Tres amplios dormitorios con armarios empotrados a medida y dos baños de diseño con griferías termostáticas.\n\nEl residencial cuenta con seguridad 24 horas, piscinas comunitarias de agua salada, gimnasio de última generación, spa con sauna y zonas ajardinadas con paisajismo tropical.",
    "features": [
      "Primera línea de campo de golf",
      "Terraza panorámica de más de 60 m²",
      "Piscina infinita comunitaria y spa",
      "Gimnasio privado para residentes",
      "Seguridad y control de acceso 24h",
      "2 plazas de garaje y trastero incluidos",
      "Climatización por aerotermia zonificada",
      "Orientación suroeste con máxima luminosidad"
    ],
    "lat": 36.557076041147,
    "lng": -4.6396868445356
  },
  {
    "id": "1666442",
    "ref": "CHA0049",
    "title": "Casona Montañesa y Complejo en Ruente",
    "subtitle": "Extraordinaria oportunidad residencial e inversora con licencia turística en el corazón del Valle de Cabuérniga",
    "location": "Ruente, Cantabria",
    "zone": "Ruente",
    "type": "Casa / Casona",
    "operation": "Venta",
    "price": 800000,
    "priceFormatted": "800.000 €",
    "bedrooms": 8,
    "bathrooms": 4,
    "areaBuilt": 308,
    "areaPlot": 2200,
    "tag": "Licencia Turística",
    "featured": true,
    "energyRating": "C",
    "yearBuilt": 2012,
    "image": "/images/properties/1666442_cha0049.webp",
    "gallery": [
      "/images/properties/1666442_cha0049.webp"
    ],
    "description": "Descubre esta exclusiva oportunidad de inversión en uno de los enclaves más pintorescos y auténticos de Cantabria: Ruente, en el corazón del Valle de Cabuérniga y la Reserva del Saja.\n\nEsta imponente propiedad tradicional cántabra cuenta con licencia turística activa y una excelente rentabilidad demostrable. Dividida en varios apartamentos totalmente independientes y equipados con calidades de primer nivel, conserva toda la esencia de la arquitectura tradicional: muros de mampostería de piedra de sillería, balconadas de roble y techos de vigas vistas.\n\nCuenta con 8 dormitorios, 4 baños, amplios salones comunes con chimenea, terrazas privadas, jardín perimetral con vistas a la montaña y fácil aparcamiento.",
    "features": [
      "Licencia turística en vigor y alta rentabilidad",
      "Arquitectura tradicional en piedra y roble",
      "8 dormitorios y 4 baños completos",
      "Finca perimetral de más de 2.200 m²",
      "Vistas panorámicas a la Reserva del Saja",
      "Calefacción centralizada independiente",
      "Zona de parking privada para huéspedes",
      "A 20 minutos de la costa y Comillas"
    ],
    "lat": 43.232494877724,
    "lng": -4.2812136356387
  },
  {
    "id": "1666471",
    "ref": "CHA0051",
    "title": "Residencia de Diseño en Santa Cruz de Bezana",
    "subtitle": "Chalet independiente de autor en el prestigioso entorno residencial de Mompía con máximas calidades y privacidad",
    "location": "Santa Cruz de Bezana, Cantabria",
    "zone": "Santa Cruz de Bezana",
    "type": "Casa / Chalet",
    "operation": "Venta",
    "price": 720000,
    "priceFormatted": "720.000 €",
    "bedrooms": 4,
    "bathrooms": 3,
    "areaBuilt": 320,
    "areaPlot": 900,
    "tag": "Lujo Exclusivo",
    "featured": true,
    "energyRating": "A",
    "yearBuilt": 2023,
    "image": "/images/properties/1666471_cha0051.webp",
    "gallery": [
      "/images/properties/1666471_cha0051.webp"
    ],
    "description": "En el selecto entorno residencial de Mompía (Santa Cruz de Bezana), presentamos esta residencia independiente de diseño vanguardista, situada a tan solo 8 minutos de las playas de Liencres y de la capital, Santander.\n\nCon una superficie de 320 m² construidos sobre una parcela privada ajardinada de 900 m², la casa destaca por su equilibrio volumétrico, grandes paños acristalados y acabados nobles. La planta principal acoge un salón con techos de triple altura, cocina Bulthaup de diseño con electrodomésticos Neff, y suite de invitados en planta baja.\n\nEn la planta superior, tres dormitorios dobles, destacando la suite principal con vestidor y baño spa. Sistema de climatización geotérmico, domótica integral y garaje cerrado.",
    "features": [
      "Diseño arquitectónico contemporáneo de autor",
      "Cocina de diseño equipada con marcas premium",
      "Sistema de climatización geotérmica eficiente",
      "Domótica integral para iluminación y seguridad",
      "Parcela ajardinada de 900 m² con privacidad total",
      "A pocos minutos de Santander y playas de Costa Quebrada",
      "Garaje cubierto para dos coches grandes",
      "Acabados en piedra caliza y maderas naturales"
    ],
    "lat": 43.440030614141,
    "lng": -3.9190838076084
  },
  {
    "id": "1410686",
    "ref": "DUP0001",
    "title": "Espectacular Dúplex en Torrelavega Centro",
    "subtitle": "Vivienda dúplex señorial con ascensor, acabados de primera calidad y terraza soleada en la mejor zona de Torrelavega",
    "location": "Torrelavega, Cantabria",
    "zone": "Torrelavega",
    "type": "Dúplex",
    "operation": "Venta",
    "price": 412500,
    "priceFormatted": "412.500 €",
    "bedrooms": 4,
    "bathrooms": 3,
    "areaBuilt": 165,
    "areaPlot": null,
    "tag": "Novedad Exclusiva",
    "featured": true,
    "energyRating": "B",
    "yearBuilt": 2019,
    "image": "/images/properties/1410686_dup0001.webp",
    "gallery": [
      "/images/properties/1410686_dup0001.webp"
    ],
    "description": "En una de las zonas más privilegiadas y tranquilas de Torrelavega se encuentra este espectacular dúplex que combina elegancia, amplitud y confort urbano.\n\nDistribuido en dos cómodas plantas conectadas por una escalera de diseño ligero: en la primera planta encontramos un gran salón comedor con salida a balcón, cocina moderna con despensa y office, un dormitorio y un baño completo. La planta superior alberga tres amplios dormitorios abuhardillados con techos altos de madera y dos baños completos adicionales.\n\nEdificio de reciente construcción con ascensor a cota cero, plaza de garaje directa y trastero incluidos en el precio.",
    "features": [
      "Ubicación céntrica y privilegiada en Torrelavega",
      "Edificio moderno con ascensor a cota cero",
      "Plaza de garaje y trastero incluidos",
      "Salón comedor con terraza exterior soleada",
      "4 dormitorios dobles y 3 baños completos",
      "Calefacción individual por suelo radiante",
      "Carpintería lacada en blanco y suelos de madera",
      "Excelente aislamiento térmico y acústico"
    ],
    "lat": 43.346839300101,
    "lng": -4.0536334039445
  },
  {
    "id": "1354564",
    "ref": "HOT0001",
    "title": "Hotel Boutique Histórico en Novales",
    "subtitle": "Emblemático hotel en funcionamiento con gran parcela ajardinada en el pueblo de los limoneros, referente turístico de Cantabria",
    "location": "Novales, Cantabria",
    "zone": "Novales",
    "type": "Hotel / Singular",
    "operation": "Venta",
    "price": 670000,
    "priceFormatted": "670.000 €",
    "bedrooms": 10,
    "bathrooms": 11,
    "areaBuilt": 360,
    "areaPlot": 1490,
    "tag": "Oportunidad Inversores",
    "featured": false,
    "energyRating": "C",
    "yearBuilt": 2010,
    "image": "/images/properties/1354564_hot0001.webp",
    "gallery": [
      "/images/properties/1354564_hot0001.webp"
    ],
    "description": "OPORTUNIDAD DE VIVIENDA Y NEGOCIO EN UNO DE LOS PUEBLOS MÁS BONITOS DE CANTABRIA.\n\nSituada en Novales (Alfoz de Lloredo), célebre por su microclima y sus limoneros, esta magnífica propiedad funciona actualmente como hotel rural con encanto y máxima puntuación en los principales portales de reservas.\n\nDispone de 10 habitaciones completas con baño privado decoradas con exquisito estilo rústico provenzal, recepción, salón con chimenea para huéspedes, comedor para desayunos y una espectacular finca llana de 1.490 m² con limoneros centenarios, terrazas al aire libre y vistas despejadas al valle.",
    "features": [
      "Hotel boutique en pleno funcionamiento con clientela fidelizada",
      "10 habitaciones en suite con baño completo privado",
      "Parcela llana ajardinada de 1.490 m² con limoneros",
      "Salón social con chimenea y comedor de desayunos",
      "Zona de aparcamiento privado para clientes",
      "A 4 km de las playas de Cóbreces y Comillas",
      "Totalmente amueblado y equipado para continuar la actividad",
      "Alta calificación turística y excelentes valoraciones"
    ],
    "lat": 43.381165573717,
    "lng": -4.1871005307708
  },
  {
    "id": "1388522",
    "ref": "CHA0011",
    "title": "Casa Señorial en La Veguilla (Reocín)",
    "subtitle": "Joya arquitectónica rodeada de naturaleza con infinitas posibilidades de desarrollo residencial o turístico",
    "location": "La Veguilla, Cantabria",
    "zone": "La Veguilla",
    "type": "Casa / Casona",
    "operation": "Venta",
    "price": 570000,
    "priceFormatted": "570.000 €",
    "bedrooms": 8,
    "bathrooms": 2,
    "areaBuilt": 477,
    "areaPlot": 3500,
    "tag": "Inversores",
    "featured": false,
    "energyRating": "E",
    "yearBuilt": 1950,
    "image": "/images/properties/1388522_cha0011.webp",
    "gallery": [
      "/images/properties/1388522_cha0011.webp"
    ],
    "description": "Descubre una joya oculta en el corazón de La Veguilla, Reocín, un remanso de paz y belleza natural a un paso de Santillana del Mar y Puente San Miguel.\n\nEsta finca señorial de 477 m² construidos sobre una generosa parcela de 3.500 m² ofrece una solidez constructiva inigualable con sus muros de piedra vista y carpintería tradicional. Dispone de 8 amplias estancias, antiguos lagares, bodegas y buhardilla diáfana con gran potencial para proyecto residencial exclusivo o reconversión en establecimiento hotelero rural.",
    "features": [
      "Finca privada de 3.500 m² con arbolado autóctono",
      "Construcción señorial con muros de piedra de sillería",
      "477 m² construidos con gran amplitud de espacios",
      "A 5 minutos de la autovía A-8 y Torrelavega",
      "Excelente orientación solar con luz durante todo el día",
      "Manantial propio y acceso asfaltado"
    ],
    "lat": 43.360263604908,
    "lng": -4.1006100084633
  },
  {
    "id": "1541712",
    "ref": "CHA0022",
    "title": "Chalet Independiente en Santa Olalla (Molledo)",
    "subtitle": "Un oasis de luz, paz y serenidad en el Valle de Iguña con vistas panorámicas a las montañas cántabras",
    "location": "Molledo, Cantabria",
    "zone": "Molledo",
    "type": "Casa / Chalet",
    "operation": "Venta",
    "price": 375000,
    "priceFormatted": "375.000 €",
    "bedrooms": 4,
    "bathrooms": 2,
    "areaBuilt": 179,
    "areaPlot": 1100,
    "tag": "Precio Reducido",
    "featured": false,
    "energyRating": "C",
    "yearBuilt": 2015,
    "image": "/images/properties/1541712_cha0022.webp",
    "gallery": [
      "/images/properties/1541712_cha0022.webp"
    ],
    "description": "Bienvenido a tu futuro hogar, un oasis de luz y serenidad ubicado en el corazón de Santa Olalla, Molledo. Rodeada de exuberante vegetación y con vistas despejadas al valle de Iguña, esta vivienda unifamiliar es el refugio perfecto para quienes buscan desconectar sin renunciar a la buena comunicación con Torrelavega y Santander.\n\nConstruida en 2015 con criterios de eficiencia energética, ofrece un luminoso salón con ventanales hacia las montañas, cocina moderna totalmente equipada, cuatro dormitorios dobles y dos baños. Jardín perimetral de más de 1.100 m² con porche exterior techado.",
    "features": [
      "Parcela de 1.100 m² con vistas panorámicas",
      "Vivienda eficiente construida en 2015",
      "Porche cubierto exterior ideal para comidas al aire libre",
      "4 dormitorios dobles muy luminosos",
      "Calefacción con estufa de pellets y radiadores de bajo consumo",
      "Conexión directa por autovía A-67"
    ],
    "lat": 43.137399563468,
    "lng": -4.0463051500721
  },
  {
    "id": "1663500",
    "ref": "CHA0048",
    "title": "Chalet Pareado en Tanos",
    "subtitle": "Chalet moderno con jardín privado en la zona residencial más demandada y cotizada de Torrelavega",
    "location": "Tanos, Cantabria",
    "zone": "Tanos",
    "type": "Casa / Chalet",
    "operation": "Venta",
    "price": 399999,
    "priceFormatted": "399.999 €",
    "bedrooms": 4,
    "bathrooms": 2,
    "areaBuilt": 100,
    "areaPlot": 250,
    "tag": "Zona Residencial",
    "featured": false,
    "energyRating": "B",
    "yearBuilt": 2021,
    "image": "/images/properties/1663500_cha0048.webp",
    "gallery": [
      "/images/properties/1663500_cha0048.webp"
    ],
    "description": "Se vende este encantador chalet pareado situado en Tanos, una de las zonas residenciales más demandadas por su tranquilidad, calidad de vida y cercanía a todos los colegios y servicios de Torrelavega.\n\nDistribuido de forma óptima para la vida familiar, dispone de cocina actual con isla, salón acogedor con acceso directo al jardín privado, cuatro habitaciones con armarios empotrados y dos baños completos. Jardín privado ideal para barbacoas y juegos infantiles.",
    "features": [
      "Ubicación premium en Tanos con máxima tranquilidad",
      "Jardín privado cerrado con orientación óptima",
      "4 dormitorios completos y 2 baños modernos",
      "Cocina amueblada y equipada de diseño contemporáneo",
      "A un paso de la estación de tren de Tanos y colegios",
      "Plaza de garaje privada"
    ],
    "lat": 43.330388765285,
    "lng": -4.0432157765308
  },
  {
    "id": "1612179",
    "ref": "CHA0032",
    "title": "Chalet Pareado en Vioño de Piélagos",
    "subtitle": "Amplia vivienda familiar de 218 m² con garaje privado, jardín y excelentes calidades en el Valle de Piélagos",
    "location": "Piélagos, Cantabria",
    "zone": "Piélagos",
    "type": "Casa / Chalet",
    "operation": "Venta",
    "price": 330000,
    "priceFormatted": "330.000 €",
    "bedrooms": 4,
    "bathrooms": 3,
    "areaBuilt": 218,
    "areaPlot": 320,
    "tag": "Oportunidad Familiar",
    "featured": false,
    "energyRating": "B",
    "yearBuilt": 2017,
    "image": "/images/properties/1612179_cha0032.webp",
    "gallery": [
      "/images/properties/1612179_cha0032.webp"
    ],
    "description": "Te presentamos esta magnífica vivienda unifamiliar pareada situada en el encantador pueblo de Vioño, en el corazón del municipio de Piélagos. Un entorno idílico que combina la calma del campo con una conexión inmejorable hacia Santander y Torrelavega.\n\nCon 218 m² construidos, la propiedad cuenta con un amplio garaje para dos coches en planta sótano, gran salón comedor con salida a terraza y jardín, cocina espaciosa con zona de comedor diario, cuatro dormitorios (el principal con baño en suite) y tres baños completos.",
    "features": [
      "218 m² de vivienda con excelentes acabados",
      "Garaje cerrado para 2 coches y zona de taller",
      "Jardín perimetral privado y soleado",
      "4 dormitorios dobles y 3 baños completos",
      "Cercanía al tren de cercanías y autovía A-67",
      "Calefacción individual por gas natural"
    ],
    "lat": 43.357537037361,
    "lng": -3.9760425819192
  },
  {
    "id": "1636207",
    "ref": "PIS0014",
    "title": "Piso Señorial Junto al Ayuntamiento de Torrelavega",
    "subtitle": "Gran vivienda céntrica de 142 m² con ascensor, ideal tanto para residencia familiar como para despacho profesional",
    "location": "Torrelavega, Cantabria",
    "zone": "Torrelavega",
    "type": "Piso",
    "operation": "Venta",
    "price": 180000,
    "priceFormatted": "180.000 €",
    "bedrooms": 3,
    "bathrooms": 1,
    "areaBuilt": 142,
    "areaPlot": null,
    "tag": "Céntrico",
    "featured": false,
    "energyRating": "D",
    "yearBuilt": 1978,
    "image": "/images/properties/1636207_pis0014.webp",
    "gallery": [
      "/images/properties/1636207_pis0014.webp"
    ],
    "description": "¿Buscas una vivienda en el corazón de la ciudad o un espacio amplio para tu despacho profesional? ¡Este piso en Torrelavega lo tiene todo!\n\nSituado a escasos metros de la plaza del Ayuntamiento, este inmueble de 142 m² destaca por la generosidad de sus estancias, sus techos altos y su luminosidad. Consta de amplio hall recibidor, gran salón con mirador exterior, tres dormitorios de grandes dimensiones, cocina con galería y baño completo. Edificio adaptado con ascensor.",
    "features": [
      "Ubicación inmejorable en el centro neurálgico de Torrelavega",
      "142 m² construidos con techos altos y gran amplitud",
      "Edificio con ascensor a cota cero",
      "Gran potencial de reforma y redistribución personalizada",
      "Perfecto para vivienda familiar o despacho profesional",
      "Todos los servicios, comercios y transporte a pie de calle"
    ],
    "lat": 43.349526954819,
    "lng": -4.050425366865
  },
  {
    "id": "1545945",
    "ref": "LOC0001",
    "title": "Local Comercial en Calle Castilla (Santander)",
    "subtitle": "Amplio local comercial en 2 plantas en una de las arterias comerciales con mayor tránsito de Santander",
    "location": "Santander, Cantabria",
    "zone": "Santander",
    "type": "Local Comercial",
    "operation": "Alquiler",
    "price": 600,
    "priceFormatted": "600 €/mes",
    "bedrooms": 0,
    "bathrooms": 2,
    "areaBuilt": 205,
    "areaPlot": null,
    "tag": "Alquiler Comercial",
    "featured": false,
    "energyRating": "D",
    "yearBuilt": 1985,
    "image": "/images/properties/1545945_loc0001.webp",
    "gallery": [
      "/images/properties/1545945_loc0001.webp"
    ],
    "description": "Se alquila local comercial en Santander, zona calle Castilla. El local cuenta con 205 m² distribuidos en dos plantas diáfanas: planta baja comercial de 115 m² a pie de calle con gran escaparate y excelente visibilidad, y entreplanta/sótano de 90 m² ideal para almacén o despachos.\n\nDispone de dos aseos, salida de humos y preinstalación eléctrica trifásica.",
    "features": [
      "Excelente visibilidad en calle con mucho tránsito peatonal y rodado",
      "205 m² construidos repartidos en 2 plantas",
      "Amplio escaparate acristalado",
      "2 aseos independientes",
      "A 2 minutos de las estaciones de tren y autobús de Santander",
      "Ideal para comercio, clínica, oficina o franquicia"
    ],
    "lat": 43.455834638714,
    "lng": -3.8154639796837
  },
  {
    "id": "1646788",
    "ref": "PISAlisal",
    "title": "Piso en Urbanización Privada en San Román (Santander)",
    "subtitle": "Precioso piso de 4 dormitorios con piscina comunitaria, pistas deportivas y garaje en la zona de El Alisal / San Román",
    "location": "Santander, Cantabria",
    "zone": "Santander",
    "type": "Piso",
    "operation": "Alquiler",
    "price": 1350,
    "priceFormatted": "1.350 €/mes",
    "bedrooms": 4,
    "bathrooms": 2,
    "areaBuilt": 113,
    "areaPlot": null,
    "tag": "Urbanización con Piscina",
    "featured": false,
    "energyRating": "B",
    "yearBuilt": 2020,
    "image": "/images/properties/1646788_pisalisal.webp",
    "gallery": [
      "/images/properties/1646788_pisalisal.webp"
    ],
    "description": "¡Prepárate para alquilar el hogar de tus sueños! Ubicado en la apacible zona de San Román / El Alisal, te presentamos un piso impecable en una de las mejores urbanizaciones residenciales privadas de Santander.\n\nConsta de 113 m² distribuidos en luminoso salón comedor con terraza, cocina equipada con electrodomésticos de alta eficiencia energética, cuatro dormitorios con armarios empotrados y dos baños completos. La urbanización ofrece piscina de adultos e infantil, pista de pádel, zonas de juegos y amplios jardines.",
    "features": [
      "Urbanización privada con piscina comunitaria y pádel",
      "4 dormitorios dobles y 2 baños completos",
      "Terraza exterior soleada con vistas despejadas",
      "Plaza de garaje subterránea y trastero incluidos",
      "Calefacción por gas natural con termostato inteligente",
      "Rápido acceso a S-20 y centros comerciales"
    ],
    "lat": 43.464403876483,
    "lng": -3.8591196077315
  },
  {
    "id": "1629610",
    "ref": "CHA0034",
    "title": "Chalet de Diseño en Udías con Vistas",
    "subtitle": "Moderna vivienda unifamiliar de arquitectura contemporánea rodeada de prados verdes y a 5 minutos de Comillas",
    "location": "Udías, Cantabria",
    "zone": "Udías",
    "type": "Casa / Chalet",
    "operation": "Alquiler",
    "price": 800,
    "priceFormatted": "800 €/mes",
    "bedrooms": 2,
    "bathrooms": 1,
    "areaBuilt": 60,
    "areaPlot": 400,
    "tag": "Diseño Moderno",
    "featured": false,
    "energyRating": "A",
    "yearBuilt": 2022,
    "image": "/images/properties/1629610_cha0034.webp",
    "gallery": [
      "/images/properties/1629610_cha0034.webp"
    ],
    "description": "Te presentamos este chalet de diseño moderno, construido en 2022, que combina confort, estilo y una ubicación privilegiada en Udías, a un paso de Comillas y San Vicente de la Barquera.\n\nConstruido con materiales de vanguardia y aislamiento de alta eficiencia, ofrece un espacio diáfano con salón-cocina acristalado con vistas directas al jardín y al valle, dos dormitorios dobles con carpintería a medida y un baño completo con plato de ducha de resina.",
    "features": [
      "Construcción de diseño vanguardista año 2022",
      "Jardín privado de 400 m² con vistas abiertas",
      "Aislamiento térmico superior y aerotermia",
      "A 5 minutos de Comillas y las playas de Oyambre",
      "Completamente amueblado y decorado con gusto",
      "Espacio de aparcamiento privado para 2 vehículos"
    ],
    "lat": 43.345012963073,
    "lng": -4.2697658561783
  },
  {
    "id": "1364551",
    "ref": "PIS002",
    "title": "Piso con Encanto en el Centro de Santander",
    "subtitle": "Vivienda rehabilitada con techos altos y miradores en una de las calles más exclusivas del centro de Santander",
    "location": "Santander, Cantabria",
    "zone": "Santander",
    "type": "Piso",
    "operation": "Alquiler",
    "price": 1100,
    "priceFormatted": "1.100 €/mes",
    "bedrooms": 2,
    "bathrooms": 2,
    "areaBuilt": 56,
    "areaPlot": null,
    "tag": "Centro Santander",
    "featured": false,
    "energyRating": "C",
    "yearBuilt": 1930,
    "image": "/images/properties/1364551_pis002.webp",
    "gallery": [
      "/images/properties/1364551_pis002.webp"
    ],
    "description": "¡Vive en el corazón de Santander! Este magnífico piso en alquiler, ubicado en la codiciada zona centro, junto al Paseo de Pereda y el Centro Botín, ha sido completamente reformado con calidades de lujo conservando sus elementos históricos.\n\nConsta de salón comedor con clásico mirador de madera cántabro, dos dormitorios con armarios vestidos a medida, cocina de diseño equipada con electrodomésticos integrados y dos baños completos con acabados en porcelánico de gran formato.",
    "features": [
      "Ubicación premium a pasos del Paseo de Pereda y Centro Botín",
      "Completamente reformado con diseño y materiales de lujo",
      "Clásico mirador tradicional cántabro restaurado",
      "2 dormitorios y 2 baños completos",
      "Edificio señorial con ascensor",
      "Calefacción de gas individual"
    ],
    "lat": 43.461916849189,
    "lng": -3.8110436620989
  }
];

export const COMPANY_INFO = {
  name: 'Tempo Family Real Estate',
  legalName: 'Tempo Family Real Estate S.L.',
  tagline: 'Cada familia tiene su historia, ven y conoce la nuestra',
  founded: 2020,
  address: {
    street: 'Calle San Roque, 15',
    postalCode: '39311',
    city: 'Cartes',
    province: 'Cantabria',
    country: 'España'
  },
  phone: '+34 636 735 856',
  phoneFormatted: '+34 636 73 58 56',
  phoneRaw: '34636735856',
  email: 'info@tempofamilyrealestate.es',
  website: 'https://tempofamilyrealestate.es',
  schedule: 'Lunes a Viernes: 9:30 - 13:30 | 16:30 - 20:00 (Sábados con cita previa)',
  social: {
    instagram: 'https://www.instagram.com/tempofamilyrealestate/',
    pinterest: 'https://www.pinterest.com/tempofamilyrealestate/'
  }
};
