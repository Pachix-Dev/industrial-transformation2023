const speakers = [
  {
    id: 1,
    conference: 'Metaverso Industrial: ¿realidad o ficción?',
    name: 'Alejandro Preinfalk',
    company: 'Siemens México, Centroamérica y el Caribe',
    rol: 'Presidente y CEO',
    avatar: '/speakers/AlejandroPreinfalk.webp',
    sketch: 'Alejandro cuenta con una amplia trayectoria de más de 30 años en Siemens a nivel global. Ha desempeñado diversos cargos directivos en Costa Rica, Alemania, Rusia, Guatemala y México. Es Ingeniero Eléctrico, graduado en la Universidad de Costa Rica; con cursos realizados en Harvard, MIT, Stanford y la Universidad de Michigan. Es presidente de la Comisión México 4.0: Innovación y Digitalización Industrial de CONCAMIN (Confederación de Cámaras Industriales de los Estados Unidos Mexicanos), presidente de la Cámara Mexicano-Alemana de Comercio e Industria CAMEXA, miembro del Consejo de Empresas Globales CEG, mentor de Endeavor, panelista y miembro del consejo de Lateinamerika Verein (Asociación para América Latina). Actualmente, es el CEO y Presidente de Siemens México, Centroamérica y el Caribe, nombrado el 1 de julio de 2020; además de esta posición es el Vicepresidente Ejecutivo de Digital Industries.',
    sketch_eng: 'Alejandro has an extensive experience of more than 30 years in Siemens, globally. He has held various management positions in Costa Rica, Germany, Russia, Guatemala, and Mexico. He holds a Bachelor of Electrical Engineering from the University of Costa Rica, as well as diverse postgraduate courses from Harvard, MIT, Stanford, the University of Michigan and Singularity University. He is the President of the Commission Mexico 4.0: Industrial Innovation and Digitalization of CONCAMIN (Confederación de Cámaras Industriales de los Estados Unidos Mexicanos), President of the Mexican-German Chamber of Commerce and Industry CAMEXA (Cámara Mexicano-Alemana de Comercio e Industria), Member of the Council of Global Companies CEG (Consejo Empresas Globales), an Endeavor mentor and panelist and board member of Lateinamerika Verein (Association for Latin America). He is currently the CEO and President of Siemens Mexico, Central America, and the Caribbean, appointed on July 1, 2020, in addition to his position as Executive Vice President of Digital Industries.'
  },
  {
    id: 2,
    conference: 'Digitalización y automatización para una industria sostenible',
    name: 'Abraham Vela',
    company: 'Schneider Electric',
    rol: 'Offer Marketing Manager',
    avatar: '/speakers/AbrahamVela.webp',
    sketch: 'Profesional experto en negocios con más de 8 años de experiencia en la industria eléctrica. Trabaja día a día para mejorar el futuro de nuestro mundo construyendo un uso sostenible y eficiente de la energía que nos permita combatir el cambio climático. Es promotor del desarrollo de las personas a través de un alto desempeño, apoyando la mejora de sus capacidades, gestionando la conciliación de la vida personal y laboral y mejorando la cultura organizacional.',
    sketch_eng: 'Expert business professional with more than 8 years of experience in the electrical industry. Abraham Vela works every day to improve the future of our world by building a sustainable and efficient use of energy that allows us to combat climate change. Promoter of people\'s development through high performance, supporting the improvement of their skills, managing the reconciliation of personal and work life and improving the organizational culture.'
  },
  {
    id: 3,
    conference: 'Digitalización y automatización para una industria sostenible',
    name: 'Fernanda Silva',
    company: 'Schneider Electric',
    rol: 'Sales Manager',
    avatar: '/speakers/MariaFernandaSilva.webp',
    resume: 'La combinación de tecnologías digitales y automatización están impulsando una transformación sostenible en el sector industrial. Descubrirás cómo la integración de soluciones inteligentes, como la digitalización de la red eléctrica y la gestión eficiente de la energía, está promoviendo la eficiencia energética, reduciendo las emisiones y fomentando la sostenibilidad en las industrias.',
    sketch: 'Actual líder del equipo de Ventas a Contratistas y Especificación de Schneider Electric a nivel nacional. Profesionista egresada del Tecnológico de Monterrey como Ingeniera Industrial y de Sistemas, con estudios de posgrado en Administración Financiera. Fernanda cuenta con una trayectoria dinámica y exitosa dentro de Schneider Electric, con 10 años de experiencia en Administración de Proyectos desde la concepción, ventas hasta la ejecución para la industria en segmentos de transporte, automotriz y edificios.',
    sketch_eng: 'Current leader of the Schneider Electric Contractor Sales and Specification team nationwide. Professional graduated from the Tecnológico de Monterrey as an Industrial and Systems Engineer, with postgraduate studies in Financial Administration. Fernanda has a dynamic and successful career within Schneider Electric, with 10 years of experience in Project Management from conception, sales to execution for the industry in the transportation, automotive and building segments.'
  },
  {
    id: 4,
    conference: 'Equidad e innovación: el rol vital de la mujer en la industria',
    name: 'Monserrat Puebla',
    company: 'Schneider Electric',
    rol: 'Industrial Automation Business Developer Manager',
    avatar: '/speakers/MonserratPuebla.webp',
    resume: 'Descubra cómo la diversidad de género impulsa la innovación y el crecimiento en el campo de la ingeniería, y cómo la inclusión de más mujeres en puestos técnicos y de liderazgo beneficia a toda la industria. A través de historias inspiradoras y experiencias personales, nuestros oradoras compartirán ideas y consejos sobre cómo superar los desafíos y lograr el éxito en un entorno tradicionalmente dominado por hombres.',
    sketch: 'Ingeniera en Comunicaciones y Electrónica con Especialidad en Control y Automatización, egresada de la ESIME Zacatenco IPN. Con 17 años de experiencia en diferentes áreas como Ingeniería de Aplicaciones y Servicios en la Industria del Petróleo y Gas, Desarrollo de Licitaciones para la Industria Privada, Mercadeo y Desarrollo de Negocios de Oferta de Automatización Industrial. Actualmente, es Gerente de Desarrollo de Negocios de Automatización Industrial en Schneider Electric México.',
    sketch_eng: 'Communications and Electronics Engineer with a Specialty in Control and Automation, graduated from ESIME Zacatenco IPN. With 17 years of experience in different areas such as Applications and Services Engineering in the Oil and Gas Industry, Development of Tenders for Private Industry, Marketing and Business Development of Industrial Automation Offer. She is currently Business Development Manager for Industrial Automation in Schneider Electric Mexico.'
  },
  {
    id: 5,
    conference: 'Equidad e innovación: el rol vital de la mujer en la industria',
    name: 'Iris Rodríguez',
    company: 'Schneider Electric',
    rol: 'Channel & Development Manager',
    avatar: '/speakers/IrisRodriguez.webp',
    resume: 'Descubra cómo la diversidad de género impulsa la innovación y el crecimiento en el campo de la ingeniería, y cómo la inclusión de más mujeres en puestos técnicos y de liderazgo beneficia a toda la industria. A través de historias inspiradoras y experiencias personales, nuestros oradoras compartirán ideas y consejos sobre cómo superar los desafíos y lograr el éxito en un entorno tradicionalmente dominado por hombres.',
    sketch: 'Ingeniera en Mecatrónica egresada del Tecnológico de Monterrey; con maestría en Negocios Internacionales de Hult International Business School. Cuenta con más de 10 años de experiencia en automatización y gestión de proyectos. Actualmente, se desempeña como Gerente de Desarrollo de Negocios para Energía Digital en Schneider Electric México.',
    sketch_eng: 'Mechatronics Engineer graduated from Tecnológico de Monterrey with a master\'s degree in International Business from Hult International Business School. She has more than 10 years of experience in automation and project management. Currently, she works as Business Development Manager for Digital Energy in Schneider Electric Mexico.'
  },
  {
    id: 6,
    conference: 'Mejores prácticas de inclusión de mujeres en las empresas',
    name: 'Fernanda García Sánchez',
    company: 'Instituto Mexicano para la Competitividad',
    rol: 'Coordinadora de Mujer en la Economía',
    avatar: '/speakers/FernandaGarcia.webp',
    resume: 'La promoción de la equidad de género dentro de las empresas cada vez va adquiriendo una mayor relevancia en México. Sin embargo, a pesar de los esfuerzos que se han hecho para atraer y retener el talento de las mujeres, siguen estando subrepresentadas al interior de las organizaciones, especialmente en los puestos de mayor nivel jerárquico. Para hacer frente a esta realidad y brindar propuestas de acción, la Fundación Konrad Adenauer (KAS) México, en colaboración con el Instituto Mexicano para la Competitividad (IMCO), presenta las mejores prácticas y políticas corporativas implementadas por empresas mexicanas para sumar e incluir a más mujeres en toda la estructura organizacional.',
    sketch: 'Maestra en Políticas Públicas en la London School of Economics and Political Science (LSE), Politóloga del Instituto Tecnológico Autónomo de México (ITAM). Ha colaborado en el diseño y evaluación de políticas públicas, así como análisis legislativo y político-electoral para distintos sectores como derechos de propiedad intelectual y movilidad urbana. Actualmente, colabora en el Instituto Mexicano para la Competitividad (IMCO), como Coordinadora de Mujer en la Economía en el área de Sociedad Incluyente, principalmente en temas de género y educación.',
    sketch_eng: 'Master in Public Policy at the London School of Economics and Political Science (LSE), Political Scientist at the Autonomous Technological Institute of Mexico (ITAM). She has collaborated in the design and evaluation of public policies, as well as legislative and political-electoral analysis for different sectors, such as intellectual property rights and urban mobility. She currently collaborates at the Mexican Institute for Competitiveness (IMCO), as Coordinator of Women in the Economy in the Inclusive Society area, mainly on gender and education issues.'
  },
  {
    id: 7,
    conference: 'Mejores prácticas de inclusión de mujeres en las empresas',
    name: 'Luis Téllez Live',
    company: 'Fundación Konrad Adenauer (KAS) México',
    rol: 'Gerente de Proyectos',
    avatar: '/speakers/LuisTellez.webp',
    resume: 'La promoción de la equidad de género dentro de las empresas cada vez va adquiriendo una mayor relevancia en México. Sin embargo, a pesar de los esfuerzos que se han hecho para atraer y retener el talento de las mujeres, siguen estando subrepresentadas al interior de las organizaciones, especialmente en los puestos de mayor nivel jerárquico. Para hacer frente a esta realidad y brindar propuestas de acción, la Fundación Konrad Adenauer (KAS) México, en colaboración con el Instituto Mexicano para la Competitividad (IMCO), presenta las mejores prácticas y políticas corporativas implementadas por empresas mexicanas para sumar e incluir a más mujeres en toda la estructura organizacional.',
    sketch: 'Maestro en Políticas Públicas por la Universidad de Erfurt, Alemania. Economista por la Universidad Nacional Autónoma de México (UNAM). Ha colaborado en centros de investigación como El Colegio de México y el Instituto de Investigaciones Económicas de la UNAM. Actualmente es responsable de los proyectos de política económica y social, desarrollo sustentable y economía social de mercado en las KAS México, además de ser parte del Comité Ejecutivo del Premio Alemán de Periodismo Walter Reuter.',
    sketch_eng: 'Master in Public Policy from the University of Erfurt, Germany. Economist from the National Autonomous University of Mexico (UNAM). He has collaborated in research centers such as El Colegio de México and the Institute for Economic Research at UNAM. He is currently responsible for the economic and social policy, sustainable development and social market economy projects at KAS Mexico; Luis is also part of the Executive Committee of the German Journalism Prize.'
  },
  {
    id: 8,
    conference: 'Manufactura con liderazgo Femenino',
    name: 'Silvia Ortiz Ruiz',
    company: 'Medio de comunicación digital B2B',
    rol: 'Directora General de Vanguardia Industrial',
    avatar: '/speakers/SilviaOrtizRuiz.webp',
    resume: 'Dar a conocer el libro: Manufactura con liderazgo femenino, una publicación con el sello de Vanguardia Industrial, que ofrece una semblanza de 15 mujeres que contribuyen al desarrollo y competitividad de la industria manufacturera. A través de un trabajo periodístico minucioso y de investigación, esta publicación, la primera en su tipo en México, aborda desde un ángulo personal y retrospectivo, la trayectoria de estas mujeres y su incursión en industrias donde los hombres son mayoría. En esta publicación exponen sus logros, fracasos y aprendizajes en este sector, en el que se demanda la proliferación de mujeres que contribuyan al desarrollo de la industria manufacturera.',
    sketch: 'Silvia Ortiz es directora y fundadora de la empresa de Comunicación y Relaciones Públicas, Strategic, Business Communication. Es directora general de Vanguardia Industrial, medio digital de comunicación B2B de manufactura, con presencia nacional e internacional, creado hace más de 10 años. Es columnista en W radio, tiene más de 20 años de experiencia en Periodismo, en los ámbitos de Política, Negocios y Manufactura. Ha trabajado en medios como Grupo Expansión, Radio Centro, El Universal, Proceso, El Día y W Noticias con Carmen Aristegui y Carlos Loret de Mola. Es conductora del podcast de Vanguardia Industrial y condujo un programa especializado de la industria manufacturera en las estaciones de radio ABC y Heraldo.  Sus estudios profesionales los realizó en la UNAM y en el Tec de Monterrey. Ha sido conferencista con reconocimientos en la Cámara Nacional de Radio y Televisión (CIRT). ',
    sketch_eng: 'Silvia Ortiz is director and founder of Strategic, Business Communication, a communications and public relations company. She is the CEO of Vanguardia Industrial, a B2B digital media of manufacturing, with national and international presence, created more than 10 years ago. She is a columnist at W radio, has more than 20 years of experience in Journalism, in the fields of Politics, Business and Manufacturing. She has worked in media such as Grupo Expansión, Radio Centro, El Universal, Proceso, El Día and W Noticias with Carmen Aristegui and Carlos Loret de Mola. She is the host of the Vanguardia Industrial podcast and hosted a specialized manufacturing industry program on ABC and Heraldo radio stations. She completed her professional studies at UNAM and Tec de Monterrey. She has been an award-winning speaker at the National Chamber of Radio and Television (CIRT).'
  },
  {
    id: 9,
    conference: 'Automatización del futuro: IEC 61499',
    name: 'Roberto Tepoz',
    company: 'Schneider Electric',
    rol: 'System & Architecture Senior Engineer ',
    avatar: '/speakers/RobertoTepoz.webp',
    resume: 'La norma IEC 61499 revoluciona la automatización industrial desde la flexibilidad y modularidad hasta la interoperabilidad y reutilización de componentes. Aprenderás cómo la IEC 61499 impulsa la eficiencia, la escalabilidad y la agilidad en los procesos industriales, abriendo el camino hacia las Industrias del Futuro.',
    sketch: 'Ingeniero Mecánico Eléctrico graduado del Instituto Tecnológico y de Estudios Superiores de Monterrey, con un Master en Industria 4.0 y Automatización de Procesos por la Universidad Politécnica de Catalunya. Cuenta con certificaciones de Green Belt Six Sigma, Cyberseguridad - ISA, Telecomunicaciones, entre otras.',
    sketch_eng: 'Electrical Mechanical Engineer graduated from the Instituto Tecnológico y de Estudios Superiores de Monterrey with a Master’s Degree in Industry 4.0 and Process Automation by the Polytechnic University of Catalonia. He has certifications of Green Belt Six Sigma, Cybersecurity-ISA, Telecommunications, among others.'
  },
  {
    id: 10,
    conference: 'Automatización del futuro: IEC 61499',
    name: 'Eduardo Espino',
    company: 'Schneider Electric',
    rol: 'System & Architecture Senior Engineer ',
    avatar: '/speakers/EduardoEspino.webp',
    sketch: 'Ingeniero Industrial Mecánico por la Universidad del Valle de México, con Maestría en Tecnologías de la Información y la Comunicación; consultor certificado con más de 20 años de experiencia en la asesoría, implementación y soporte de soluciones basadas en software para las áreas de Producción y Mantenimiento. Apasionado de la tecnología y su impacto en la sociedad. En la actualidad, trabaja como el especialista de software de AVEVA y ProLeiT dentro de la unidad de negocios de Industrial Automation para Schneider Electric México.',
    sketch_eng: 'Mechanical Industrial Engineer from the Universidad del Valle de México, with a Master\'s Degree in Information and Communication Technologies; Certified consultant with more than 20 years of experience in advising, implementing and supporting software-based solutions for the Production and Maintenance areas. Passionate about technology and its impact on society. Currently, he works as the AVEVA and ProLeiT software specialist within the Industrial Automation business unit for Schneider Electric México.'
  },
  {
    id: 11,
    conference: 'Desbloquea el potencial de los Servicios Digitales para la Industria 4.0',
    name: 'Javier de Jesús García',
    company: 'Schneider Electric',
    rol: 'Offer Manager Digital Services MX & CAM ',
    avatar: '/speakers/JavierJesusGarcía.webp',
    resume: 'El monitoreo en tiempo real y el análisis avanzado de datos pueden optimizar la eficiencia operativa, prevenir fallas y maximizar la vida útil de los activos industriales. Descubre cómo los Servicios Digitales están revolucionando la forma en que las industrias operan y toman decisiones estratégicas.',
    sketch: 'Ing. Eléctrico Electrónico por parte de la UNAM, con más de 10 años de experiencia en rubros como calidad de la energía, manejo de energía, sistemas de medición y monitoreo. Se ha desempeñado en áreas como desarrollo de negocios, marketing y ventas. Actualmente es responsable del desarrollo de oferta de Servicios Digitales para México y Centroamérica.',
    sketch_eng: 'Electrical Electronic Engineer from UNAM, with more than 10 years of experience in areas such as energy quality, energy management, measurement and monitoring systems. He has worked in areas such as business development, marketing and sales. He is currently responsible for the development of Digital Services offer for Mexico and Central America.'
  },
  {
    id: 12,
    conference: 'Digitalización Inteligente: Fortaleciendo la Industria y Protegiéndola de Amenazas Cibernéticas',
    name: 'Samuel Aceves',
    company: 'Schneider Electric',
    rol: 'Cybersecurity Leader Mexico & Central America',
    avatar: '/speakers/SamuelAceves.webp',
    sketch: 'Cybersecurity Leader Mexico & Central America Ingeniero Industrial y de Sistemas con Diplomado en Dirección Estratégica de Negocios con más de 13 años de experiencia en empresas transnacionales en México, Estados Unidos y Canadá en campos de aplicación como Ciberseguridad Industrial en múltiples segmentos de aplicación.',
    sketch_eng: 'Industrial and Systems Engineer with a Diploma in Strategic Business Management with more than 13 years of experience in transnational companies in Mexico, the United States and Canada in application fields such as Industrial Cybersecurity in multiple application segments.'
  },
  {
    id: 13,
    conference: 'Digitalización Inteligente: Fortaleciendo la Industria y Protegiéndola de Amenazas Cibernéticas',
    name: 'Luis Gerónimo Parilli',
    company: 'Schneider Electric',
    rol: 'Digital Services Manager',
    avatar: '/speakers/LuisParilli.webp',
    sketch: 'Ingeniero Industrial, MBA con amplia trayectoria profesional en la gestión y administración de contratos de Ingeniería, operación y mantenimiento. Impulsador de negocios relacionados con productos y servicios, logrando que las empresas sean ambientalmente responsables (ahorro de energía, ahorro de agua y reciclaje de materiales), con más de 18 años de experiencia en empresas nacionales e internacionales. Actualmente se desempeña como Digital Services Manager para Schneider Electric México y CAM.',
    sketch_eng: 'Industrial Engineer, MBA with extensive professional experience in the management and administration of engineering, operation and maintenance contracts.  Business driver related to products and services, making companies environmentally responsible (energy saving, water saving and recycling of materials), with more than 18 years of experience in national and international companies. He currently serves as Digital Services Manager for Schneider Electric Mexico and CAM.'
  },
  {
    id: 14,
    conference: 'Soluciones de misión de crítica para la Industrias actual y del futuro (3pH)',
    name: 'César Arteaga',
    company: 'Schneider Electric',
    rol: 'UPS Business Developer',
    avatar: '/speakers/CesarArteaga.webp',
    sketch: 'Jefe de producto con más de 10 años de experiencia exitosa demostrada en Ventas, Mercadotecnia e Ingeniería. Con experiencia internacional y multicultural como líder en estrategia de desarrollo de México con Francia, Italia y Estados Unidos. Cuenta con habilidades para Análisis de Mercados, Análisis de Datos, Desarrollo de Productos, Creación y Desarrollo de Nuevas Empresas, Negociaciones, Desarrollo de Estrategias B2B y B2C.',
    sketch_eng: 'Product Manager with more than 10 years of proven successful experience in Sales, Marketing and Engineering. With international and multicultural experience as a leader in the development strategy of Mexico with France, Italy and the United States. He has skills for Market Analysis, Data Analysis, Product Development, Creation and Development of New Companies, Negotiations, Development of B2B and B2C Strategies.'
  },
  {
    id: 15,
    conference: 'Innovación en tecnologías de Media Tensión digitales y verdes para el Net Zero',
    name: 'Majo Jiménez',
    company: 'Schneider Electric',
    rol: 'Business Development Manager',
    avatar: '/speakers/MajoJimenez.webp',
    sketch: 'María José Jiménez Ocampo se desempeña como Business Development Manager con especialidad en Distribución Secundaria de Media Tensión, en Schneider Electric. Es ingeniera industrial con más de 4 años de experiencia en manufactura, calidad, distribución eléctrica y desarrollo de negocio.',
    sketch_eng: 'María José Jiménez Ocampo works as a Business Development Manager specializing in Medium Voltage Secondary Distribution for Schneider Electric. She is an industrial engineer with more than 4 years of experience in manufacturing, quality, electrical distribution, and business development.'
  },
  {
    id: 16,
    conference: 'Innovación en tecnologías de Media Tensión digitales y verdes para el Net Zero',
    name: 'Juan Alberto López',
    company: 'Schneider Electric',
    rol: 'Business Development Manager',
    avatar: '/speakers/JuanAlbertoLopez.webp',
    sketch: 'Juan Alberto López Pérez es Business Development Manager para Medium Voltage Primary Distribution en Schneider Electric. Ingeniero Eléctrico con más 13 años de experiencia con equipos de Media Tensión en las áreas de Ingeniería y desarrollo de negocio.',
    sketch_eng: 'Juan Alberto López Pérez is Business Development Manager for Medium Voltage Primary Distribution at Schneider Electric. He is an Electrical Engineer with more than 13 years of experience with Medium Voltage equipment in the areas of Engineering and business development.'
  },
  {
    id: 17,
    conference: 'Reinventa la automatización industrial con EcoStruxure Automation Expert.',
    name: 'Victor Bulnes',
    company: 'Schneider Electric',
    rol: 'Product Application Engineer',
    avatar: '/speakers/VictorBulnes.webp',
    sketch: 'Con más de 15 años de experiencia en el ramo eléctrico, de automatización y mantenimiento, Victor Bulnes es egresado de la Universidad Autónoma de Nuevo León como Ingeniero Mecánico Electricista, sus áreas de especialidad son: automatización, redes industriales, control eléctrico, arranque motor, y distribución eléctrica. Victor es representante técnico en aplicaciones de producto, especializado en: PLCs y HMIs. Anteriormente, ocupó los cargos de Supervisor de Automatización para CCMs inteligentes e Ingeniero de Aplicaciones Senior dentro de la compañía Schneider Electric.',
    sketch_eng: 'With more than 15 years of experience in the electrical, automation and maintenance field, Victor Bulnes graduated from the Autonomous University of Nuevo León as an Electrical Mechanical Engineer. His areas of specialty are: automation, industrial networks, electrical control, starting engine, and electrical distribution. Victor is technical representative in product applications, specialized in: PLCs and HMIs. He previously held the positions of Automation Supervisor for intelligent CCMs and Senior Applications Engineer in Schneider Electric.'
  },
  {
    id: 18,
    conference: 'Innovación para la eficiencia y la sostenibilidad en instalaciones comerciales e industriales',
    name: 'Abigail Carrillo',
    company: 'Schneider Electric',
    rol: 'Metering Business Developer',
    avatar: '/speakers/AbigailCarrillo.webp',
    sketch: 'Abigail Carrillo Lugo es ingeniera mecánica por la Escuela Superior de Ingeniería Mecánica y Eléctrica del Instituto Politécnico Nacional, con estudios en automatización industrial en la Universidad de Tecnología de Troyes, Francia. Actualmente, es desarrolladora de negocios de equipos de medición de potencia, software de control, monitoreo y eficiencia energética para Schneider Electric México.',
    sketch_eng: 'Abigail Carrillo Lugo is mechanical engineer from the Higher School of Mechanical and Electrical Engineering of the National Polytechnic Institute, with studies in industrial automation at the Troyes University of Technology, France. Currently, she is a business developer of power measurement equipment, control software, monitoring and energy efficiency for Schneider Electric Mexico.'
  },
  {
    id: 19,
    conference: 'Innovación para la eficiencia y la sostenibilidad en instalaciones comerciales e industriales',
    name: 'Virginia Guerere',
    company: 'Schneider Electric',
    rol: 'Buildings Automation Business Developer',
    avatar: '/speakers/VirginiaGuerere.webp',
    sketch: 'Ingeniera Eléctrica egresada de la Universidad del Zulia, experta en habilitar la oferta y equipos de automatización de edificios, para el desarrollo del negocio de BMS (Buildings Management Systems) en México y Centroamérica.',
    sketch_eng: 'Electrical Engineer graduated from the University of Zulia, expert in enabling the supply and building automation equipment, for the development of the BMS (Buildings Management Systems) business in Mexico and Central America. '
  },
  {
    id: 20,
    conference: '¿Cómo la industria de Procesos se aprovecha del IIoT?',
    name: 'Astrid Enelda Gonzalez Andrade',
    company: 'Endress + Hauser Mexico',
    rol: 'Chemical Industry Manager',
    avatar: '/speakers/AstridGonzalez.webp',
    sketch: 'Ingeniera en Electrónica y Comunicaciones por la Universidad Tecnológica de México. Con maestría en Domótica y Hogar Digital por la Universidad Politécnica de Madrid y un MBA por la Escuela Europea de Dirección de Empresas en Madrid, España. Con más de 10 años de experiencia en el sector de Automatización Industrial. Embajadora de la Tecnología de Diagnóstico, Verificación y Monitoreo HeartBeat Technology y del Ecosistema Digital en la Nube “Netilion”. Actualmente tomando el reto de desarrollar y crecer la participación de mercado en la Industria Química en México para equipos, servicios y soluciones de Endress + Hauser México.',
    sketch_eng: ' '
  },
  {
    id: 21,
    conference: 'Leveraging Industry 4.0 and A.I. toward Zero-Downtime, Zero-Defects',
    name: 'Iliana Vera',
    company: 'Schneider Electric',
    rol: 'General Manager at LAING Business Solutions',
    avatar: '/speakers/ilianaVera.webp',
    sketch: 'Iliana Vera es la Directora General de LAING Business Solutions. Aporta más de 20 años de experiencia en manufactura al servicio de empresas industriales como Magna y Nemak con soluciones de Industria 4.0. Iliana es también la Presidenta de la Cámara Canadiense de Coahuila. Es una defensora de los Negocios Internacionales y le apasiona ayudar a los fabricantes globales a impulsar la productividad en sus plantas y cadenas de suministro.',
    sketch_eng: 'Iliana Vera is the General Manager at LAING Business Solutions. She brings over 20 years of manufacturing experience serving industrial companies like Magna and Nemak with Industry 4.0 solutions. Iliana is also the President of the Canadian Chamber of Coahuila. She is an International Business advocate and is passionate about helping global manufacturers drive productivity in their plants and supply chains. '
  },
  {
    id: 22,
    conference: 'El Nearshoring en el marco de la Política Industrial del siglo XXI',
    name: 'Francisco Cervantes Díaz',
    company: 'Consejo Coordinador Empresarial',
    rol: 'Presidente',
    avatar: '/speakers/franciscoCervantes.webp',
    sketch: 'Empresario Mexicano, con más de 28 años de experiencia, con negocios en los ámbitos de la industria del plástico, materiales pétreos, sector inmobiliario y agropecuario, conjuntamente con su constante actividad    como representante del sector empresarial. Actualmente Presidente del Consejo Coordinador Empresarial (CCE). Su trayectoria profesional y su liderazgo empresarial, le ha llevado a presidir de 2018 a 2021, la Confederación de Cámaras Industriales de los Estados Unidos Mexicanos (CONCAMIN), impulsando una nueva Política Industrial, promoviendo activamente el Pacto Oaxaca y el Comité 2030 de la Industria Sostenible. Se ha desempeñado como representante del sector empresarial, destacando participación en los consejos de instituciones nacionales como Nafinsa, Bancomext, IMSS, Infonavit y Fonacot. Así mismo ha sido consejero de la Cumbre de Negocios y ha presidido la Cámara Regional de la Industria Arenera del Distrito Federal y del Estado de México, el Consejo de Cámaras y Asociaciones Empresariales del Estado de México (CONCAEM), el Consejo Empresarial Mexicano del Comercio Exterior, Inversión y Tecnología A.C. Estado de México (COMCE), el Patronato Pro Construcción de las Unidades Académicas de la Universidad del Estado de México, el Comité Bilateral México COSTA RICA, de Consejo Mexicano de Comercio Exterior, fue Vicepresidente del Patronato de la Sinfónica del Estado de México. Y expresidente de la Comisión de Infraestructura del Consejo Coordinador Empresarial (CCE).',
    sketch_eng: ''
  },
  {
    id: 23,
    conference: 'El Nearshoring en el marco de la Política Industrial del siglo XXI',
    name: 'Arturo Oropeza García',
    company: 'Instituto para el Desarrollo Industrial y la Transformación Digital (INADI)',
    rol: 'Presidente',
    avatar: '/speakers/ArturoOropeza.webp',
    sketch: 'Doctor en Derecho por la Universidad Nacional Autónoma de México (UNAM), e Investigador del Instituto de Investigaciones Jurídicas de la UNAM, así como Presidente del Instituto para el Desarrollo Industrial y la Transformación Digital (INADI). Es Investigador del Sistema Nacional de Investigadores (SNI) y Árbitro de Solución de Controversias por parte de Brasil dentro del mecanismo del Mercosur. Especialista en temas globales de integración y comercio internacional de Asia y América del Norte y América Latina. Ha sido conferencista y profesor invitado en diversas Universidades e instituciones de América del Norte, Asia, China, Latinoamérica, Europa y África, entre ellas: la Academia China de Ciencias Sociales de la Universidad de Beijing, China; Universidad de Bangalore, India; Universidad de Chuo, Japón; Universidad Soongsil, Corea del Sur; Universidad Autónoma de    Lisboa, Portugal; Universidad de Johannesburgo, Sudáfrica; la Secretaría Iberoamericana (SEGIB) en España; la Organización de los Estados Americanos (OEA), la Comisión Económica para América Latina y el Caribe (CEPAL), entre muchas otras.',
    sketch_eng: ''
  },
  {
    id: 24,
    conference: 'El Nearshoring en el marco de la Política Industrial del siglo XXI',
    name: 'José Guillermo Zozaya Délano',
    company: 'Asociación Mexicana de la Industria Automotriz',
    rol: 'Presidente Ejecutivo',
    avatar: '/speakers/JoseZozaya.webp',
    sketch: 'El Dr. Zozaya es Presidente Ejecutivo de la Asociación Mexicana de la Industria Automotriz a partir de Agosto del 2020. Fungió como Presidente, Gerente General y Representante Ejecutivo de Kansas City Southern de México, S.A. de C.V. (KCSM),empresa subsidiaria de Kansas City Southern (KCS) (NYSE: KSU), desde Abril del 2006 a Julio del 2020. Cuenta con más de 40 años de experiencia en relaciones gubernamentales, asuntos legales y asuntos internacionales, así como en fusiones y adquisiciones. Previo a ser Presidente Ejecutivo de Kansas City Southern de México, S.A. de C.V. (KCSM), fue Director Jurídico y de Relaciones Gubernamentales de ExxonMobil México, posición que ocupó durante nueve años. Tiene un Doctorado Honoris Causa otorgado por parte de la Academia Mexicana de Derecho Internacional y una Licenciatura en Derecho por la Universidad Iberoamericana. Realizó estudios avanzados en Derecho Corporativo y Competencia Económica en el Instituto Tecnológico Autónomo de México, cursó el programa ejecutivo de Administración de Empresas Internacionales en la Universidad Thunderbird en Arizona, el programa de gestión para abogados en la Universidad de Yale y el curso ejecutivo para miembros del consejo de administración en la Escuela de Negocios de Harvard. Fue también Presidente de la Asociación Mexicana de Ferrocarriles para el periodo 2020 – 2021; Vicepresidente de CONCAMIN desde 2018, miembro del Consejo de Administración de Afore Siglo XXI, de la empresa Ferrovalle y de Cumbre de Negocios. Desde el 24 de mayo de 2016, fue nombrado Presidente del Consejo Binacional de Directores de la US-Mexico Chamber of Commerce. Fue Presidente del Consejo Mexicano del Transporte (2014 – 2016), Vicepresidente del Consejo Ejecutivo de Empresas Globales (2010 – 2013), Presidente Nacional de la American Chamber durante dos periodos (2010 – 2012), es miembro del Patronato de la Orquesta Sinfónica del Estado de México y miembro del board de Fomento Educacional A.C.',
    sketch_eng: ''
  }
]
export { speakers }
