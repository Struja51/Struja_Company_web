// Language translations
const translations = {
    en: {
        // Header
        'Professional Solutions': 'Professional Solutions',
        'Services & Pricing': 'Services & Pricing',
        'Services': 'Services',
        'Our Services': 'Our Services',
        'Energy for the future': 'Energy for the future',
        'Welcome to Struja Company': 'Welcome to Struja Company',
        'Struja Company': 'Struja Company',
        
        // Navigation
        'Go to Services': 'Go to Services',
        'Go to About Us': 'Go to About Us',
        'What We Offer': 'What We Offer',
        'About Us': 'About Us',
        'About us': 'About us',
        'Back to Home': 'Back to Home',
        'View Services & Pricing →': 'View Services & Pricing →',
        
        // Main content
        'We provide comprehensive electronic solutions tailored to your specific needs. From custom development to expert diagnostics and repair.': 'We provide comprehensive electronic solutions tailored to your specific needs. From custom development to expert diagnostics and repair.',
        'We are Struja Company – specialized in advanced electronics, development, service, and customized technical solutions, focusing less on traditional electrical installations.': 'We are Struja Company – specialized in advanced electronics, development, service, and customized technical solutions, focusing less on traditional electrical installations.',
        
        // Home Services
        'Microcontroller Programming & Custom Circuits': 'Microcontroller Programming & Custom Circuits',
        'ESP32, Arduino and development of custom electronic circuits. Specialized in embedded systems and IoT platforms.': 'ESP32, Arduino and development of custom electronic circuits. Specialized in embedded systems and IoT platforms.',
        'Diagnostics and Repair of Electronics': 'Diagnostics and Repair of Electronics',
        'Service of complex and automotive electronics with detailed problem analysis and reliable solutions.': 'Service of complex and automotive electronics with detailed problem analysis and reliable solutions.',
        'IoT Systems and Custom Solutions': 'IoT Systems and Custom Solutions',
        'Development of sensor networks, smart solutions and prototyping systems tailored to your specific needs.': 'Development of sensor networks, smart solutions and prototyping systems tailored to your specific needs.',
        
        // Mission & Services Section
        'Our Mission': 'Our Mission',
        'We combine a passion for advanced electronics, microcontrollers, and precise engineering to bring custom solutions to life, solve complex technical challenges, and help devices and systems operate smarter and more reliably.': 'We combine a passion for advanced electronics, microcontrollers, and precise engineering to bring custom solutions to life, solve complex technical challenges, and help devices and systems operate smarter and more reliably.',
        'Explore our comprehensive range of professional services and competitive pricing options. We offer flexible packages tailored to your project needs, from consultation and custom development to expert repair and diagnostics.': 'Explore our comprehensive range of professional services and competitive pricing options. We offer flexible packages tailored to your project needs, from consultation and custom development to expert repair and diagnostics.',
        
        // Service items
        '🔧 Microcontroller Programming': '🔧 Microcontroller Programming',
        'Custom firmware development for ESP32, Arduino, and other microcontroller platforms. Build IoT solutions and embedded systems.': 'Custom firmware development for ESP32, Arduino, and other microcontroller platforms. Build IoT solutions and embedded systems.',
        
        '💻 IT Device Services': '💻 IT Device Services',
        'Professional repair and diagnostics of computers, laptops, and mobile devices with expert technical support.': 'Professional repair and diagnostics of computers, laptops, and mobile devices with expert technical support.',
        
        '🚗 Automotive Diagnostics': '🚗 Automotive Diagnostics',
        'Professional OBD diagnostics for all vehicles. Fast and accurate fault identification for cars and trucks.': 'Professional OBD diagnostics for all vehicles. Fast and accurate fault identification for cars and trucks.',
        
        '🏠 Appliances & Tools Service': '🏠 Appliances & Tools Service',
        'Repair and maintenance of household appliances, power tools, and electrical equipment with quality guarantee.': 'Repair and maintenance of household appliances, power tools, and electrical equipment with quality guarantee.',
        
        '💡 Lighting Solutions': '💡 Lighting Solutions',
        'Professional lighting installation, repair, and energy-efficient LED solutions for homes and businesses.': 'Professional lighting installation, repair, and energy-efficient LED solutions for homes and businesses.',
        
        '📡 IoT & Smart Solutions': '📡 IoT & Smart Solutions',
        'Development of sensor networks, smart home systems, and connected device solutions with cloud integration.': 'Development of sensor networks, smart home systems, and connected device solutions with cloud integration.',
        
        // Pricing section
        'Competitive Rates': 'Competitive Rates',
        'Our Service Pricing': 'Our Service Pricing',
        'Transparent and competitive pricing for all our professional services. All prices are listed in EUR and include professional consultation.': 'Transparent and competitive pricing for all our professional services. All prices are listed in EUR and include professional consultation.',
        
        // Consultation Services
        'Consultation Services': 'Consultation Services',
        'Service': 'Service',
        'Description': 'Description',
        'Price (EUR/hour)': 'Price (EUR/hour)',
        'Technical Consultation': 'Technical Consultation',
        'Expert advice on electronic design, system architecture, and technical strategies': 'Expert advice on electronic design, system architecture, and technical strategies',
        'Problem Analysis': 'Problem Analysis',
        'In-depth analysis of technical challenges and solution recommendations': 'In-depth analysis of technical challenges and solution recommendations',
        'Lighting Consultation': 'Lighting Consultation',
        'Professional advice on lighting solutions and energy efficiency': 'Professional advice on lighting solutions and energy efficiency',
        
        // Development Services
        'Development Services': 'Development Services',
        'Custom Firmware Development': 'Custom Firmware Development',
        'Microcontroller programming for ESP32, Arduino and embedded systems': 'Microcontroller programming for ESP32, Arduino and embedded systems',
        'IoT Solution Development': 'IoT Solution Development',
        'Sensor networks, smart home systems, and connected device solutions': 'Sensor networks, smart home systems, and connected device solutions',
        'Prototyping Services': 'Prototyping Services',
        'Rapid prototyping and proof-of-concept development': 'Rapid prototyping and proof-of-concept development',
        
        // IT Device Services
        'IT Device Services': 'IT Device Services',
        'Computer Diagnostics & Repair': 'Computer Diagnostics & Repair',
        'Complete diagnostics, troubleshooting, and repair of desktop and laptop computers': 'Complete diagnostics, troubleshooting, and repair of desktop and laptop computers',
        'Mobile Device Repair': 'Mobile Device Repair',
        'Professional repair of smartphones and tablets, including hardware diagnostics': 'Professional repair of smartphones and tablets, including hardware diagnostics',
        'Software & Driver Installation': 'Software & Driver Installation',
        'OS installation, driver updates, and software configuration for IT devices': 'OS installation, driver updates, and software configuration for IT devices',
        
        // Automotive & Vehicle Diagnostics
        'Automotive & Vehicle Diagnostics': 'Automotive & Vehicle Diagnostics',
        'Device Diagnostics': 'Device Diagnostics',
        'Complete diagnosis and fault identification of electronic devices': 'Complete diagnosis and fault identification of electronic devices',
        'Automotive Diagnostics': 'Automotive Diagnostics',
        'Professional OBD diagnostics and fault code analysis for all vehicles': 'Professional OBD diagnostics and fault code analysis for all vehicles',
        'Truck Diagnostics': 'Truck Diagnostics',
        'Specialized heavy-duty vehicle diagnostics using dedicated truck programs': 'Specialized heavy-duty vehicle diagnostics using dedicated truck programs',
        'Electronics Repair': 'Electronics Repair',
        'Professional repair of consumer and automotive electronics': 'Professional repair of consumer and automotive electronics',
        'Quality Testing': 'Quality Testing',
        'Comprehensive testing and validation of repaired devices': 'Comprehensive testing and validation of repaired devices',
        
        // Home Appliances, Tools & Equipment Services
        'Home Appliances, Tools & Equipment Services': 'Home Appliances, Tools & Equipment Services',
        'Small Appliance Repair': 'Small Appliance Repair',
        'Repair and diagnostics of small household appliances - kettles, toasters, fans, etc.': 'Repair and diagnostics of small household appliances - kettles, toasters, fans, etc.',
        'Power Tools Service': 'Power Tools Service',
        'Diagnostics, repair, and maintenance of electric power tools and equipment': 'Diagnostics, repair, and maintenance of electric power tools and equipment',
        'Lighting Installation & Repair': 'Lighting Installation & Repair',
        'Installation and repair of lighting systems, LED solutions, and electrical fixtures': 'Installation and repair of lighting systems, LED solutions, and electrical fixtures',
        'Equipment Diagnostics': 'Equipment Diagnostics',
        'Professional diagnostics of various household and industrial equipment': 'Professional diagnostics of various household and industrial equipment',
        
        // Why Choose Us
        'Why Choose Us?': 'Why Choose Us?',
        'Expert Team': 'Expert Team',
        'Years of experience in electronics, microcontrollers, and IoT systems with proven track record.': 'Years of experience in electronics, microcontrollers, and IoT systems with proven track record.',
        'Quality Assurance': 'Quality Assurance',
        'Every project goes through rigorous testing and quality checks to ensure reliability.': 'Every project goes through rigorous testing and quality checks to ensure reliability.',
        'Custom Solutions': 'Custom Solutions',
        'No off-the-shelf products. Every solution is tailored to your specific requirements.': 'No off-the-shelf products. Every solution is tailored to your specific requirements.',
        'Fast Turnaround': 'Fast Turnaround',
        'Efficient project management ensures quick delivery without compromising quality.': 'Efficient project management ensures quick delivery without compromising quality.',
        'Ongoing Support': 'Ongoing Support',
        'Comprehensive documentation and post-project support for all our solutions.': 'Comprehensive documentation and post-project support for all our solutions.',
        'Competitive Pricing': 'Competitive Pricing',
        'Best value for money with transparent pricing and no hidden costs.': 'Best value for money with transparent pricing and no hidden costs.',
        
        // Get Started
        'Get Started Today': 'Get Started Today',
        'Whether you need a quick consultation, a complex development project, or expert repair services, we\'re here to help. Contact us to discuss your requirements and get a personalized quote.': 'Whether you need a quick consultation, a complex development project, or expert repair services, we\'re here to help. Contact us to discuss your requirements and get a personalized quote.',
        
        // Footer & Notes
        'Need a custom package?': 'Need a custom package?',
        'Contact us for specialized projects, bulk discounts, and flexible payment terms. Maintenance contracts available.': 'Contact us for specialized projects, bulk discounts, and flexible payment terms. Maintenance contracts available.'
    },
    hr: {
        // Header
        'Professional Solutions': 'Profesionalna Rješenja',
        'Services & Pricing': 'Usluge & Cijenik',
        'Services': 'Usluge',
        'Our Services': 'Naše Usluge',
        'Energy for the future': 'Energija za budućnost',
        'Welcome to Struja Company': 'Dobrodošli u Struja Company',
        'Struja Company': 'Struja Company',
        
        // Navigation
        'Go to Services': 'Idi na Usluge',
        'Go to About Us': 'Idi na O Nama',
        'What We Offer': 'Što Nudimo',
        'About Us': 'O Nama',
        'About us': 'O nama',
        'Back to Home': 'Nazad na Početak',
        'View Services & Pricing →': 'Pogledaj Usluge & Cijenik →',
        
        // Main content
        'We provide comprehensive electronic solutions tailored to your specific needs. From custom development to expert diagnostics and repair.': 'Pružamo sveobuhvatna elektronička rješenja prilagođena vašim specifičnim potrebama. Od prilagođenog razvoja do stručne dijagnostike i popravka.',
        'We are Struja Company – specialized in advanced electronics, development, service, and customized technical solutions, focusing less on traditional electrical installations.': 'Mi smo Struja Company – specijalizirani za naprednu elektroniku, razvoj, servisiranje i prilagođena tehnička rješenja, sa manje fokusa na tradicionalne električne instalacije.',
        
        // Home Services
        'Microcontroller Programming & Custom Circuits': 'Programiranje Mikrokontrolera & Prilagođeni Krugovi',
        'ESP32, Arduino and development of custom electronic circuits. Specialized in embedded systems and IoT platforms.': 'ESP32, Arduino i razvoj prilagođenih elektroničkih krugova. Specijalizirani za ugrađene sustave i IoT platforme.',
        'Diagnostics and Repair of Electronics': 'Dijagnostika i Popravka Elektronike',
        'Service of complex and automotive electronics with detailed problem analysis and reliable solutions.': 'Servisiranje kompleksne i automobilske elektronike sa detaljnom analizom problema i pouzdanim rješenjima.',
        'IoT Systems and Custom Solutions': 'IoT Sustavi i Prilagođena Rješenja',
        'Development of sensor networks, smart solutions and prototyping systems tailored to your specific needs.': 'Razvoj mreža senzora, pametnih rješenja i sustava prototipiziranja prilagođenih vašim specifičnim potrebama.',
        
        // Mission & Services Section
        'Our Mission': 'Naša Misija',
        'We combine a passion for advanced electronics, microcontrollers, and precise engineering to bring custom solutions to life, solve complex technical challenges, and help devices and systems operate smarter and more reliably.': 'Kombiniramo strast za naprednu elektroniku, mikrokontrolerom i preciznu inženjeriju kako bismo realizirali prilagođena rješenja, riješili složene tehničke izazove i pomogli uređajima i sustavima da funkcioniraju pametnije i pouzdanije.',
        'Explore our comprehensive range of professional services and competitive pricing options. We offer flexible packages tailored to your project needs, from consultation and custom development to expert repair and diagnostics.': 'Istražite našu sveobuhvatnu ponudu profesionalnih usluga i konkurentne opcije cijena. Nudimo fleksibilne pakete prilagođene vašim potrebama projekta, od konzultacije i prilagođenog razvoja do stručne popravke i dijagnostike.',
        
        // Service items
        '🔧 Microcontroller Programming': '🔧 Programiranje Mikrokontrolera',
        'Custom firmware development for ESP32, Arduino, and other microcontroller platforms. Build IoT solutions and embedded systems.': 'Prilagođeni razvoj firmware-a za ESP32, Arduino i druge mikrokontrolerske platforme. Kreirajte IoT rješenja i ugrađene sustave.',
        
        '💻 IT Device Services': '💻 Servisi IT Uređaja',
        'Professional repair and diagnostics of computers, laptops, and mobile devices with expert technical support.': 'Profesionalna popravka i dijagnostika računala, prijenosnih računala i mobilnih uređaja sa stručnom tehničkom podrškom.',
        
        '🚗 Automotive Diagnostics': '🚗 Automobilska Dijagnostika',
        'Professional OBD diagnostics for all vehicles. Fast and accurate fault identification for cars and trucks.': 'Profesionalna OBD dijagnostika za sva vozila. Brza i točna identifikacija kvarova za automobile i kamione.',
        
        '🏠 Appliances & Tools Service': '🏠 Servisi Uređaja & Alata',
        'Repair and maintenance of household appliances, power tools, and electrical equipment with quality guarantee.': 'Popravka i održavanje kućanskih uređaja, električne alate i opremu sa jamstvom kvalitete.',
        
        '💡 Lighting Solutions': '💡 Rješenja za Osvjetljenje',
        'Professional lighting installation, repair, and energy-efficient LED solutions for homes and businesses.': 'Profesionalna instalacija osvjetljenja, popravka i energetski učinkovita LED rješenja za kućanstva i poduzeća.',
        
        '📡 IoT & Smart Solutions': '📡 IoT & Pametna Rješenja',
        'Development of sensor networks, smart home systems, and connected device solutions with cloud integration.': 'Razvoj mreža senzora, pametnih sustava za dom i rješenja povezanih uređaja sa integracijom u oblak.',
        
        // Pricing section
        'Competitive Rates': 'Konkurentne Cijene',
        'Our Service Pricing': 'Naš Pricing Usluga',
        'Transparent and competitive pricing for all our professional services. All prices are listed in EUR and include professional consultation.': 'Transparentno i konkurentno određivanje cijena za sve naše profesionalne usluge. Sve cijene su navedene u EUR-u i uključuju profesionalnu konzultaciju.',
        
        // Consultation Services
        'Consultation Services': 'Konzultantske Usluge',
        'Service': 'Usluga',
        'Description': 'Opis',
        'Price (EUR/hour)': 'Cijena (EUR/sat)',
        'Technical Consultation': 'Tehnička Konsultacija',
        'Expert advice on electronic design, system architecture, and technical strategies': 'Stručni savjet o elektroničkom dizajnu, arhitekturi sustava i tehničkim strategijama',
        'Problem Analysis': 'Analiza Problema',
        'In-depth analysis of technical challenges and solution recommendations': 'Detaljne analize tehničkih izazova i preporuke za rješenja',
        'Lighting Consultation': 'Konzultacija Osvjetljenja',
        'Professional advice on lighting solutions and energy efficiency': 'Stručni savjet o rješenjima osvjetljenja i energetskoj učinkovitosti',
        
        // Development Services
        'Development Services': 'Razvojne Usluge',
        'Custom Firmware Development': 'Prilagođeni Razvoj Firmware-a',
        'Microcontroller programming for ESP32, Arduino and embedded systems': 'Programiranje mikrokontrolera za ESP32, Arduino i ugrađene sustave',
        'IoT Solution Development': 'Razvoj IoT Rješenja',
        'Sensor networks, smart home systems, and connected device solutions': 'Mreže senzora, pametni sustavi za dom i rješenja povezanih uređaja',
        'Prototyping Services': 'Usluge Prototipiziranja',
        'Rapid prototyping and proof-of-concept development': 'Brza prototipizacija i razvoj proof-of-concept',
        
        // IT Device Services
        'IT Device Services': 'Servisi IT Uređaja',
        'Computer Diagnostics & Repair': 'Dijagnostika i Popravka Računala',
        'Complete diagnostics, troubleshooting, and repair of desktop and laptop computers': 'Potpuna dijagnostika, otklanjanje neispravnosti i popravka stolnih i prijenosnih računala',
        'Mobile Device Repair': 'Popravka Mobilnih Uređaja',
        'Professional repair of smartphones and tablets, including hardware diagnostics': 'Profesionalna popravka pametnih telefona i tableta, uključujući hardversku dijagnostiku',
        'Software & Driver Installation': 'Instalacija Softvera & Upravljačkih Programa',
        'OS installation, driver updates, and software configuration for IT devices': 'Instalacija OS-a, ažuriranja upravljačkih programa i konfiguracija softvera za IT uređaje',
        
        // Automotive & Vehicle Diagnostics
        'Automotive & Vehicle Diagnostics': 'Automobilska & Dijagnostika Vozila',
        'Device Diagnostics': 'Dijagnostika Uređaja',
        'Complete diagnosis and fault identification of electronic devices': 'Potpuna dijagnostika i identificiranje kvarova elektroničkih uređaja',
        'Automotive Diagnostics': 'Automobilska Dijagnostika',
        'Professional OBD diagnostics and fault code analysis for all vehicles': 'Profesionalna OBD dijagnostika i analiza kodova grešaka za sva vozila',
        'Truck Diagnostics': 'Dijagnostika Kamiona',
        'Specialized heavy-duty vehicle diagnostics using dedicated truck programs': 'Specijalizirana dijagnostika teških vozila korištenjem posvećenih programa za kamione',
        'Electronics Repair': 'Popravka Elektronike',
        'Professional repair of consumer and automotive electronics': 'Profesionalna popravka potrošačke i automobilske elektronike',
        'Quality Testing': 'Testiranje Kvalitete',
        'Comprehensive testing and validation of repaired devices': 'Sveobuhvatno testiranje i validacija popravljenih uređaja',
        
        // Home Appliances, Tools & Equipment Services
        'Home Appliances, Tools & Equipment Services': 'Servisi Kućanskih Uređaja, Alata & Opreme',
        'Small Appliance Repair': 'Popravka Malih Aparata',
        'Repair and diagnostics of small household appliances - kettles, toasters, fans, etc.': 'Popravka i dijagnostika malih kućanskih aparata - kuhala za vode, tostere, ventilatore, itd.',
        'Power Tools Service': 'Serviranje Električnih Alata',
        'Diagnostics, repair, and maintenance of electric power tools and equipment': 'Dijagnostika, popravka i održavanje električ

nih alata i opreme',
        'Lighting Installation & Repair': 'Instalacija & Popravka Osvjetljenja',
        'Installation and repair of lighting systems, LED solutions, and electrical fixtures': 'Instalacija i popravka sustava osvjetljenja, LED rješenja i električnih armatura',
        'Equipment Diagnostics': 'Dijagnostika Opreme',
        'Professional diagnostics of various household and industrial equipment': 'Profesionalna dijagnostika raznih kućanskih i industrijskih uređaja',
        
        // Why Choose Us
        'Why Choose Us?': 'Zašto Nas Odabrati?',
        'Expert Team': 'Stručan Tim',
        'Years of experience in electronics, microcontrollers, and IoT systems with proven track record.': 'Godina iskustva u elektronici, mikrokontrolerima i IoT sustavima sa dokazanim dosjeima.',
        'Quality Assurance': 'Jamstvo Kvalitete',
        'Every project goes through rigorous testing and quality checks to ensure reliability.': 'Svaki projekt prolazi kroz rigorozno testiranje i provjere kvalitete kako bi se osigurala pouzdanost.',
        'Custom Solutions': 'Prilagođena Rješenja',
        'No off-the-shelf products. Every solution is tailored to your specific requirements.': 'Bez proizvedenih proizvoda. Svako rješenje je prilagođeno vašim specifičnim potrebama.',
        'Fast Turnaround': 'Brz Obrt',
        'Efficient project management ensures quick delivery without compromising quality.': 'Učinkovito upravljanje projektima osigurava brzu isporuku bez kompromisa kvalitete.',
        'Ongoing Support': 'Kontinuirana Podrška',
        'Comprehensive documentation and post-project support for all our solutions.': 'Sveobuhvatna dokumentacija i podrška nakon projekta za sva naša rješenja.',
        'Competitive Pricing': 'Konkurentno Određivanje Cijena',
        'Best value for money with transparent pricing and no hidden costs.': 'Najbolja vrijednost za novac sa transparentnim određivanjem cijena i bez skrivenih troškova.',
        
        // Get Started
        'Get Started Today': 'Počnite Danas',
        'Whether you need a quick consultation, a complex development project, or expert repair services, we\'re here to help. Contact us to discuss your requirements and get a personalized quote.': 'Trebate li brzu konsultaciju, složeni razvojni projekt ili stručne servise popravke, tu smo da vam pomognemo. Kontaktirajte nas kako bi razgovarali o vašim potrebama i dobili personalizirani citat.',
        
        // Footer & Notes
        'Need a custom package?': 'Trebate prilagođeni paket?',
        'Contact us for specialized projects, bulk discounts, and flexible payment terms. Maintenance contracts available.': 'Kontaktirajte nas za specijalizirane projekte, količinske popuste i fleksibilne uvjete plaćanja. Dostupni su ugovori o održavanju.'
    }
};
        
        // Navigation
        'Go to Services': 'Go to Services',
        'What We Offer': 'What We Offer',
        'Back to Home': 'Back to Home',
        
        // Main content
        'We provide comprehensive electronic solutions tailored to your specific needs. From custom development to expert diagnostics and repair.': 'We provide comprehensive electronic solutions tailored to your specific needs. From custom development to expert diagnostics and repair.',
        
        // Service items
        '🔧 Microcontroller Programming': '🔧 Microcontroller Programming',
        'Custom firmware development for ESP32, Arduino, and other microcontroller platforms. Build IoT solutions and embedded systems.': 'Custom firmware development for ESP32, Arduino, and other microcontroller platforms. Build IoT solutions and embedded systems.',
        
        '💻 IT Device Services': '💻 IT Device Services',
        'Professional repair and diagnostics of computers, laptops, and mobile devices with expert technical support.': 'Professional repair and diagnostics of computers, laptops, and mobile devices with expert technical support.',
        
        '🚗 Automotive Diagnostics': '🚗 Automotive Diagnostics',
        'Professional OBD diagnostics for all vehicles. Fast and accurate fault identification for cars and trucks.': 'Professional OBD diagnostics for all vehicles. Fast and accurate fault identification for cars and trucks.',
        
        '🏠 Appliances & Tools Service': '🏠 Appliances & Tools Service',
        'Repair and maintenance of household appliances, power tools, and electrical equipment with quality guarantee.': 'Repair and maintenance of household appliances, power tools, and electrical equipment with quality guarantee.',
        
        '💡 Lighting Solutions': '💡 Lighting Solutions',
        'Professional lighting installation, repair, and energy-efficient LED solutions for homes and businesses.': 'Professional lighting installation, repair, and energy-efficient LED solutions for homes and businesses.',
        
        '📡 IoT & Smart Solutions': '📡 IoT & Smart Solutions',
        'Development of sensor networks, smart home systems, and connected device solutions with cloud integration.': 'Development of sensor networks, smart home systems, and connected device solutions with cloud integration.',
        
        // Pricing section
        'Competitive Rates': 'Competitive Rates',
        'Our Service Pricing': 'Our Service Pricing',
        'Transparent and competitive pricing for all our professional services. All prices are listed in EUR and include professional consultation.': 'Transparent and competitive pricing for all our professional services. All prices are listed in EUR and include professional consultation.',
        
        // Consultation Services
        'Consultation Services': 'Consultation Services',
        'Service': 'Service',
        'Description': 'Description',
        'Price (EUR/hour)': 'Price (EUR/hour)',
        'Technical Consultation': 'Technical Consultation',
        'Expert advice on electronic design, system architecture, and technical strategies': 'Expert advice on electronic design, system architecture, and technical strategies',
        'Problem Analysis': 'Problem Analysis',
        'In-depth analysis of technical challenges and solution recommendations': 'In-depth analysis of technical challenges and solution recommendations',
        'Lighting Consultation': 'Lighting Consultation',
        'Professional advice on lighting solutions and energy efficiency': 'Professional advice on lighting solutions and energy efficiency',
        
        // Development Services
        'Development Services': 'Development Services',
        'Custom Firmware Development': 'Custom Firmware Development',
        'Microcontroller programming for ESP32, Arduino and embedded systems': 'Microcontroller programming for ESP32, Arduino and embedded systems',
        'IoT Solution Development': 'IoT Solution Development',
        'Sensor networks, smart home systems, and connected device solutions': 'Sensor networks, smart home systems, and connected device solutions',
        'Prototyping Services': 'Prototyping Services',
        'Rapid prototyping and proof-of-concept development': 'Rapid prototyping and proof-of-concept development',
        
        // IT Device Services
        'IT Device Services': 'IT Device Services',
        'Computer Diagnostics & Repair': 'Computer Diagnostics & Repair',
        'Complete diagnostics, troubleshooting, and repair of desktop and laptop computers': 'Complete diagnostics, troubleshooting, and repair of desktop and laptop computers',
        'Mobile Device Repair': 'Mobile Device Repair',
        'Professional repair of smartphones and tablets, including hardware diagnostics': 'Professional repair of smartphones and tablets, including hardware diagnostics',
        'Software & Driver Installation': 'Software & Driver Installation',
        'OS installation, driver updates, and software configuration for IT devices': 'OS installation, driver updates, and software configuration for IT devices',
        
        // Automotive & Vehicle Diagnostics
        'Automotive & Vehicle Diagnostics': 'Automotive & Vehicle Diagnostics',
        'Device Diagnostics': 'Device Diagnostics',
        'Complete diagnosis and fault identification of electronic devices': 'Complete diagnosis and fault identification of electronic devices',
        'Automotive Diagnostics': 'Automotive Diagnostics',
        'Professional OBD diagnostics and fault code analysis for all vehicles': 'Professional OBD diagnostics and fault code analysis for all vehicles',
        'Truck Diagnostics': 'Truck Diagnostics',
        'Specialized heavy-duty vehicle diagnostics using dedicated truck programs': 'Specialized heavy-duty vehicle diagnostics using dedicated truck programs',
        'Electronics Repair': 'Electronics Repair',
        'Professional repair of consumer and automotive electronics': 'Professional repair of consumer and automotive electronics',
        'Quality Testing': 'Quality Testing',
        'Comprehensive testing and validation of repaired devices': 'Comprehensive testing and validation of repaired devices',
        
        // Home Appliances, Tools & Equipment Services
        'Home Appliances, Tools & Equipment Services': 'Home Appliances, Tools & Equipment Services',
        'Small Appliance Repair': 'Small Appliance Repair',
        'Repair and diagnostics of small household appliances - kettles, toasters, fans, etc.': 'Repair and diagnostics of small household appliances - kettles, toasters, fans, etc.',
        'Power Tools Service': 'Power Tools Service',
        'Diagnostics, repair, and maintenance of electric power tools and equipment': 'Diagnostics, repair, and maintenance of electric power tools and equipment',
        'Lighting Installation & Repair': 'Lighting Installation & Repair',
        'Installation and repair of lighting systems, LED solutions, and electrical fixtures': 'Installation and repair of lighting systems, LED solutions, and electrical fixtures',
        'Equipment Diagnostics': 'Equipment Diagnostics',
        'Professional diagnostics of various household and industrial equipment': 'Professional diagnostics of various household and industrial equipment',
        
        // Why Choose Us
        'Why Choose Us?': 'Why Choose Us?',
        'Expert Team': 'Expert Team',
        'Years of experience in electronics, microcontrollers, and IoT systems with proven track record.': 'Years of experience in electronics, microcontrollers, and IoT systems with proven track record.',
        'Quality Assurance': 'Quality Assurance',
        'Every project goes through rigorous testing and quality checks to ensure reliability.': 'Every project goes through rigorous testing and quality checks to ensure reliability.',
        'Custom Solutions': 'Custom Solutions',
        'No off-the-shelf products. Every solution is tailored to your specific requirements.': 'No off-the-shelf products. Every solution is tailored to your specific requirements.',
        'Fast Turnaround': 'Fast Turnaround',
        'Efficient project management ensures quick delivery without compromising quality.': 'Efficient project management ensures quick delivery without compromising quality.',
        'Ongoing Support': 'Ongoing Support',
        'Comprehensive documentation and post-project support for all our solutions.': 'Comprehensive documentation and post-project support for all our solutions.',
        'Competitive Pricing': 'Competitive Pricing',
        'Best value for money with transparent pricing and no hidden costs.': 'Best value for money with transparent pricing and no hidden costs.',
        
        // Get Started
        'Get Started Today': 'Get Started Today',
        'Whether you need a quick consultation, a complex development project, or expert repair services, we\'re here to help. Contact us to discuss your requirements and get a personalized quote.': 'Whether you need a quick consultation, a complex development project, or expert repair services, we\'re here to help. Contact us to discuss your requirements and get a personalized quote.',
        
        // Footer & Notes
        'Need a custom package?': 'Need a custom package?',
        'Contact us for specialized projects, bulk discounts, and flexible payment terms. Maintenance contracts available.': 'Contact us for specialized projects, bulk discounts, and flexible payment terms. Maintenance contracts available.'
    },
    hr: {
        // Header
        'Professional Solutions': 'Profesionalna Rješenja',
        'Services & Pricing': 'Usluge & Cijenik',
        'Services': 'Usluge',
        'Our Services': 'Naše Usluge',
        
        // Navigation
        'Go to Services': 'Idi na Usluge',
        'What We Offer': 'Što Nudimo',
        'Back to Home': 'Nazad na Početak',
        
        // Main content
        'We provide comprehensive electronic solutions tailored to your specific needs. From custom development to expert diagnostics and repair.': 'Pružamo sveobuhvatna elektronička rješenja prilagođena vašim specifičnim potrebama. Od prilagođenog razvoja do stručne dijagnostike i popravka.',
        
        // Service items
        '🔧 Microcontroller Programming': '🔧 Programiranje Mikrokontrolera',
        'Custom firmware development for ESP32, Arduino, and other microcontroller platforms. Build IoT solutions and embedded systems.': 'Prilagođeni razvoj firmware-a za ESP32, Arduino i druge mikrokontrolerske platforme. Kreirajte IoT rješenja i ugrađene sustave.',
        
        '💻 IT Device Services': '💻 Servisi IT Uređaja',
        'Professional repair and diagnostics of computers, laptops, and mobile devices with expert technical support.': 'Profesionalna popravka i dijagnostika računala, prijenosnih računala i mobilnih uređaja sa stručnom tehničkom podrškom.',
        
        '🚗 Automotive Diagnostics': '🚗 Automobilska Dijagnostika',
        'Professional OBD diagnostics for all vehicles. Fast and accurate fault identification for cars and trucks.': 'Profesionalna OBD dijagnostika za sva vozila. Brza i točna identifikacija kvarova za automobile i kamione.',
        
        '🏠 Appliances & Tools Service': '🏠 Servisi Uređaja & Alata',
        'Repair and maintenance of household appliances, power tools, and electrical equipment with quality guarantee.': 'Popravka i održavanje kućanskih uređaja, električne alate i opremu sa jamstvom kvalitete.',
        
        '💡 Lighting Solutions': '💡 Rješenja za Osvjetljenje',
        'Professional lighting installation, repair, and energy-efficient LED solutions for homes and businesses.': 'Profesionalna instalacija osvjetljenja, popravka i energetski učinkovita LED rješenja za kućanstva i poduzeća.',
        
        '📡 IoT & Smart Solutions': '📡 IoT & Pametna Rješenja',
        'Development of sensor networks, smart home systems, and connected device solutions with cloud integration.': 'Razvoj mreža senzora, pametnih sustava za dom i rješenja povezanih uređaja sa integracijom u oblak.',
        
        // Pricing section
        'Competitive Rates': 'Konkurentne Cijene',
        'Our Service Pricing': 'Naš Pricing Usluga',
        'Transparent and competitive pricing for all our professional services. All prices are listed in EUR and include professional consultation.': 'Transparentno i konkurentno određivanje cijena za sve naše profesionalne usluge. Sve cijene su navedene u EUR-u i uključuju profesionalnu konzultaciju.',
        
        // Consultation Services
        'Consultation Services': 'Konzultantske Usluge',
        'Service': 'Usluga',
        'Description': 'Opis',
        'Price (EUR/hour)': 'Cijena (EUR/sat)',
        'Technical Consultation': 'Tehnička Konsultacija',
        'Expert advice on electronic design, system architecture, and technical strategies': 'Stručni savjet o elektroničkom dizajnu, arhitekturi sustava i tehničkim strategijama',
        'Problem Analysis': 'Analiza Problema',
        'In-depth analysis of technical challenges and solution recommendations': 'Detaljne analize tehničkih izazova i preporuke za rješenja',
        'Lighting Consultation': 'Konzultacija Osvjetljenja',
        'Professional advice on lighting solutions and energy efficiency': 'Stručni savjet o rješenjima osvjetljenja i energetskoj učinkovitosti',
        
        // Development Services
        'Development Services': 'Razvojne Usluge',
        'Custom Firmware Development': 'Prilagođeni Razvoj Firmware-a',
        'Microcontroller programming for ESP32, Arduino and embedded systems': 'Programiranje mikrokontrolera za ESP32, Arduino i ugrađene sustave',
        'IoT Solution Development': 'Razvoj IoT Rješenja',
        'Sensor networks, smart home systems, and connected device solutions': 'Mreže senzora, pametni sustavi za dom i rješenja povezanih uređaja',
        'Prototyping Services': 'Usluge Prototipiziranja',
        'Rapid prototyping and proof-of-concept development': 'Brza prototipizacija i razvoj proof-of-concept',
        
        // IT Device Services
        'IT Device Services': 'Servisi IT Uređaja',
        'Computer Diagnostics & Repair': 'Dijagnostika i Popravka Računala',
        'Complete diagnostics, troubleshooting, and repair of desktop and laptop computers': 'Potpuna dijagnostika, otklanjanje neispravnosti i popravka stolnih i prijenosnih računala',
        'Mobile Device Repair': 'Popravka Mobilnih Uređaja',
        'Professional repair of smartphones and tablets, including hardware diagnostics': 'Profesionalna popravka pametnih telefona i tableta, uključujući hardversku dijagnostiku',
        'Software & Driver Installation': 'Instalacija Softvera & Upravljačkih Programa',
        'OS installation, driver updates, and software configuration for IT devices': 'Instalacija OS-a, ažuriranja upravljačkih programa i konfiguracija softvera za IT uređaje',
        
        // Automotive & Vehicle Diagnostics
        'Automotive & Vehicle Diagnostics': 'Automobilska & Dijagnostika Vozila',
        'Device Diagnostics': 'Dijagnostika Uređaja',
        'Complete diagnosis and fault identification of electronic devices': 'Potpuna dijagnostika i identificiranje kvarova elektroničkih uređaja',
        'Automotive Diagnostics': 'Automobilska Dijagnostika',
        'Professional OBD diagnostics and fault code analysis for all vehicles': 'Profesionalna OBD dijagnostika i analiza kodova grešaka za sva vozila',
        'Truck Diagnostics': 'Dijagnostika Kamiona',
        'Specialized heavy-duty vehicle diagnostics using dedicated truck programs': 'Specijalizirana dijagnostika teških vozila korištenjem posvećenih programa za kamione',
        'Electronics Repair': 'Popravka Elektronike',
        'Professional repair of consumer and automotive electronics': 'Profesionalna popravka potrošačke i automobilske elektronike',
        'Quality Testing': 'Testiranje Kvalitete',
        'Comprehensive testing and validation of repaired devices': 'Sveobuhvatno testiranje i validacija popravljenih uređaja',
        
        // Home Appliances, Tools & Equipment Services
        'Home Appliances, Tools & Equipment Services': 'Servisi Kućanskih Uređaja, Alata & Opreme',
        'Small Appliance Repair': 'Popravka Malih Aparata',
        'Repair and diagnostics of small household appliances - kettles, toasters, fans, etc.': 'Popravka i dijagnostika malih kućanskih aparata - kuhala za vode, tostere, ventilatore, itd.',
        'Power Tools Service': 'Serviranje Električnih Alata',
        'Diagnostics, repair, and maintenance of electric power tools and equipment': 'Dijagnostika, popravka i održavanje električnih alata i opreme',
        'Lighting Installation & Repair': 'Instalacija & Popravka Osvjetljenja',
        'Installation and repair of lighting systems, LED solutions, and electrical fixtures': 'Instalacija i popravka sustava osvjetljenja, LED rješenja i električnih armatura',
        'Equipment Diagnostics': 'Dijagnostika Opreme',
        'Professional diagnostics of various household and industrial equipment': 'Profesionalna dijagnostika raznih kućanskih i industrijskih uređaja',
        
        // Why Choose Us
        'Why Choose Us?': 'Zašto Nas Odabrati?',
        'Expert Team': 'Stručan Tim',
        'Years of experience in electronics, microcontrollers, and IoT systems with proven track record.': 'Godina iskustva u elektronici, mikrokontrolerima i IoT sustavima sa dokazanim dosjeima.',
        'Quality Assurance': 'Jamstvo Kvalitete',
        'Every project goes through rigorous testing and quality checks to ensure reliability.': 'Svaki projekt prolazi kroz rigorozno testiranje i provjere kvalitete kako bi se osigurala pouzdanost.',
        'Custom Solutions': 'Prilagođena Rješenja',
        'No off-the-shelf products. Every solution is tailored to your specific requirements.': 'Bez proizvedenih proizvoda. Svako rješenje je prilagođeno vašim specifičnim potrebama.',
        'Fast Turnaround': 'Brz Obrt',
        'Efficient project management ensures quick delivery without compromising quality.': 'Učinkovito upravljanje projektima osigurava brzu isporuku bez kompromisa kvalitete.',
        'Ongoing Support': 'Kontinuirana Podrška',
        'Comprehensive documentation and post-project support for all our solutions.': 'Sveobuhvatna dokumentacija i podrška nakon projekta za sva naša rješenja.',
        'Competitive Pricing': 'Konkurentno Određivanje Cijena',
        'Best value for money with transparent pricing and no hidden costs.': 'Najbolja vrijednost za novac sa transparentnim određivanjem cijena i bez skrivenih troškova.',
        
        // Get Started
        'Get Started Today': 'Počnite Danas',
        'Whether you need a quick consultation, a complex development project, or expert repair services, we\'re here to help. Contact us to discuss your requirements and get a personalized quote.': 'Trebate li brzu konsultaciju, složeni razvojni projekt ili stručne servise popravke, tu smo da vam pomognemo. Kontaktirajte nas kako bi razgovarali o vašim potrebama i dobili personalizirani citat.',
        
        // Footer & Notes
        'Need a custom package?': 'Trebate prilagođeni paket?',
        'Contact us for specialized projects, bulk discounts, and flexible payment terms. Maintenance contracts available.': 'Kontaktirajte nas za specijalizirane projekte, količinske popuste i fleksibilne uvjete plaćanja. Dostupni su ugovori o održavanju.',
        
        // Contact Section
        'Contact': 'Kontakt',
        'Instagram': 'Instagram',
        'struja_51': '@struja_51'
    }
};

// Initialize language
function initLanguage() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // Set HTML lang attribute
    document.documentElement.lang = savedLang;
    document.documentElement.setAttribute('lang', savedLang);
    document.documentElement.setAttribute('data-language', savedLang);
    document.documentElement.dir = 'ltr';
    
    setLanguage(savedLang);
}

// Set language
function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('lang', lang);
    
    // Set direction based on language (LTR for English, LTR for Croatian)
    document.documentElement.dir = 'ltr';
    
    // Add data attribute for CSS if needed
    document.documentElement.setAttribute('data-language', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Translate all elements
    translatePage(lang);
    
    // Trigger custom event for any additional language-specific functionality
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Translate page content
function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Event listeners for language buttons
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});

// Croatian language specific functionality
window.addEventListener('languageChanged', function(e) {
    const language = e.detail.language;
    
    if (language === 'hr') {
        // Aktiviraj hrvatsku lokalizaciju
        activateCroatianLocalization();
    } else if (language === 'en') {
        // Aktiviraj englesku lokalizaciju
        activateEnglishLocalization();
    }
});

// Croatian localization function
function activateCroatianLocalization() {
    // Postavi locale za datume i brojeve na hrvatski
    document.documentElement.setAttribute('data-locale', 'hr-HR');
    
    // Dodaj hrvatsku CSS klasu ako je potrebna
    document.body.classList.add('lang-hr');
    document.body.classList.remove('lang-en');
    
    // Log za provjeru
    console.log('✓ Hrvatski jezik aktiviran');
}

// English localization function
function activateEnglishLocalization() {
    // Postavi locale za datume i brojeve na engleski
    document.documentElement.setAttribute('data-locale', 'en-US');
    
    // Dodaj englesku CSS klasu ako je potrebna
    document.body.classList.add('lang-en');
    document.body.classList.remove('lang-hr');
    
    // Log za provjeru
    console.log('✓ English language activated');
}
