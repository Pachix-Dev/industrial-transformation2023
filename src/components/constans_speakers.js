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
    name: 'Miguel Domínguez',
    company: 'Schneider Electric',
    rol: 'Inside Sales Manager',
    avatar: '/speakers/MiguelDominguez.webp',
    sketch: 'Líder para Inside Sales Manager All BU, tiene expertise en la industria eléctrica, acumulado a lo largo de más de diez años de dedicación y logros significativos dentro de la compañía. Su experiencia incluye un rol clave como Prescription Manager en la unidad de negocios de Home & Distribution, donde lideró estrategias exitosas en el ámbito de los desarrolladores de vivienda en México. Es Ingeniero Mecatrónico graduado de la Universidad Tecnológica de Pereira, en Colombia, y cuenta con una maestría en ingeniería eléctrica por el CINVESTAV (Centro de Investigación y de Estudios Avanzados del IPN).',
    sketch_eng: 'Leader for Inside Sales Manager All BU, has expertise in the electrical industry, accumulated through more than ten years of dedication and significant achievements within the company. His experience includes a key role as Prescription Manager in the Home & Distribution business unit, where he led successful strategies in the field of housing developers in Mexico. Miguel holds a degree in Mechatronics Engineering from the Universidad Tecnológica de Pereira in Colombia and a Master\'s degree in Electrical Engineering from CINVESTAV (Centro de Investigación y de Estudios Avanzados del IPN)'
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
  /* {
    id: 4,
    conference: 'Equidad e innovación: el rol vital de la mujer en la industria',
    name: 'Monserrat Puebla',
    company: 'Schneider Electric',
    rol: 'Industrial Automation Business Developer Manager',
    avatar: '/speakers/MonserratPuebla.webp',
    resume: 'Descubra cómo la diversidad de género impulsa la innovación y el crecimiento en el campo de la ingeniería, y cómo la inclusión de más mujeres en puestos técnicos y de liderazgo beneficia a toda la industria. A través de historias inspiradoras y experiencias personales, nuestros oradoras compartirán ideas y consejos sobre cómo superar los desafíos y lograr el éxito en un entorno tradicionalmente dominado por hombres.',
    sketch: 'Ingeniera en Comunicaciones y Electrónica con Especialidad en Control y Automatización, egresada de la ESIME Zacatenco IPN. Con 17 años de experiencia en diferentes áreas como Ingeniería de Aplicaciones y Servicios en la Industria del Petróleo y Gas, Desarrollo de Licitaciones para la Industria Privada, Mercadeo y Desarrollo de Negocios de Oferta de Automatización Industrial. Actualmente, es Gerente de Desarrollo de Negocios de Automatización Industrial en Schneider Electric México.',
    sketch_eng: 'Communications and Electronics Engineer with a Specialty in Control and Automation, graduated from ESIME Zacatenco IPN. With 17 years of experience in different areas such as Applications and Services Engineering in the Oil and Gas Industry, Development of Tenders for Private Industry, Marketing and Business Development of Industrial Automation Offer. She is currently Business Development Manager for Industrial Automation in Schneider Electric Mexico.'
  }, */
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
  /* {
    id: 13,
    conference: 'Digitalización Inteligente: Fortaleciendo la Industria y Protegiéndola de Amenazas Cibernéticas',
    name: 'Luis Gerónimo Parilli',
    company: 'Schneider Electric',
    rol: 'Digital Services Manager',
    avatar: '/speakers/LuisParilli.webp',
    sketch: 'Ingeniero Industrial, MBA con amplia trayectoria profesional en la gestión y administración de contratos de Ingeniería, operación y mantenimiento. Impulsador de negocios relacionados con productos y servicios, logrando que las empresas sean ambientalmente responsables (ahorro de energía, ahorro de agua y reciclaje de materiales), con más de 18 años de experiencia en empresas nacionales e internacionales. Actualmente se desempeña como Digital Services Manager para Schneider Electric México y CAM.',
    sketch_eng: 'Industrial Engineer, MBA with extensive professional experience in the management and administration of engineering, operation and maintenance contracts.  Business driver related to products and services, making companies environmentally responsible (energy saving, water saving and recycling of materials), with more than 18 years of experience in national and international companies. He currently serves as Digital Services Manager for Schneider Electric Mexico and CAM.'
  }, */
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
  /* {
    id: 17,
    conference: 'Reinventa la automatización industrial con EcoStruxure Automation Expert.',
    name: 'Victor Bulnes',
    company: 'Schneider Electric',
    rol: 'Product Application Engineer',
    avatar: '/speakers/VictorBulnes.webp',
    sketch: 'Con más de 15 años de experiencia en el ramo eléctrico, de automatización y mantenimiento, Victor Bulnes es egresado de la Universidad Autónoma de Nuevo León como Ingeniero Mecánico Electricista, sus áreas de especialidad son: automatización, redes industriales, control eléctrico, arranque motor, y distribución eléctrica. Victor es representante técnico en aplicaciones de producto, especializado en: PLCs y HMIs. Anteriormente, ocupó los cargos de Supervisor de Automatización para CCMs inteligentes e Ingeniero de Aplicaciones Senior dentro de la compañía Schneider Electric.',
    sketch_eng: 'With more than 15 years of experience in the electrical, automation and maintenance field, Victor Bulnes graduated from the Autonomous University of Nuevo León as an Electrical Mechanical Engineer. His areas of specialty are: automation, industrial networks, electrical control, starting engine, and electrical distribution. Victor is technical representative in product applications, specialized in: PLCs and HMIs. He previously held the positions of Automation Supervisor for intelligent CCMs and Senior Applications Engineer in Schneider Electric.'
  }, */
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
    sketch_eng: 'Engineer in Electronics and Communications from the Technological University of Mexico. With a Master in Domotics and Digital Home from the Universidad Politécnica de Madrid and an MBA from the Escuela Europea de Dirección de Empresas in Madrid, Spain. With more than 10 years of experience in the Industrial Automation sector. Ambassador of HeartBeat Technology Diagnostics, Verification and Monitoring Technology and the Digital Cloud Ecosystem "Netilion". Currently taking the challenge of developing and growing market share in the Chemical Industry in Mexico for Endress + Hauser Mexico equipment, services and solutions.'
  },
  {
    id: 21,
    conference: 'Leveraging Industry 4.0 and A.I. toward Zero-Downtime, Zero-Defects',
    name: 'Iliana Vera',
    company: 'Schneider Electric',
    rol: 'General Manager at LAING Business Solutions',
    avatar: '/speakers/ilianaVera.webp',
    sketch: 'Es Directora General de LAING Business Solutions. Tiene más de 20 años de experiencia en manufactura al servicio de empresas industriales como Magna y Nemak, con soluciones de Industria 4.0. Es Presidenta de la Cámara Canadiense de Coahuila. Es una defensora de los Negocios Internacionales y le apasiona ayudar a los fabricantes globales a impulsar la productividad en sus plantas y cadenas de suministro.',
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
    sketch_eng: 'Mexican businessman, with more than 28 years of experience, with businesses in the plastics industry, stone materials, real estate and agriculture, together with his constant activity as a representative of the business sector. He is currently President of the Business Coordinating Council (CCE). His professional career and business leadership, has led him to preside from 2018 to 2021, the Confederation of Industrial Chambers of the United Mexican States (CONCAMIN), driving a new Industrial Policy, actively promoting the Oaxaca Pact and the 2030 Committee for Sustainable Industry. He has served as a representative of the business sector, highlighting his participation in the boards of national institutions such as Nafinsa, Bancomext, IMSS, Infonavit and Fonacot. He has also been an advisor to the Business Summit and has chaired the Regional Chamber of the Sandstone Industry of the Federal District and the State of Mexico, the Council of Chambers and Business Associations of the State of Mexico (CONCAEM), the Mexican Business Council of Foreign Trade, Investment and Technology A.C. State of Mexico (COMCE), the Patronato Pro Construcción de las Unidades Académicas de la Universidad del Estado de México, the Comité Bilateral México COSTA RICA, the Consejo Mexicano de Comercio Exterior, he was Vice President of the Patronato de la Sinfónica del Estado de México. Former President of the Infrastructure Commission of the Business Coordinating Council (CCE).'
  },
  {
    id: 23,
    conference: 'El Nearshoring en el marco de la Política Industrial del siglo XXI',
    name: 'Arturo Oropeza García',
    company: 'Instituto para el Desarrollo Industrial y la Transformación Digital (INADI)',
    rol: 'Presidente',
    avatar: '/speakers/ArturoOropeza.webp',
    sketch: 'Doctor en Derecho por la Universidad Nacional Autónoma de México (UNAM), e Investigador del Instituto de Investigaciones Jurídicas de la UNAM, así como Presidente del Instituto para el Desarrollo Industrial y la Transformación Digital (INADI). Es Investigador del Sistema Nacional de Investigadores (SNI) y Árbitro de Solución de Controversias por parte de Brasil dentro del mecanismo del Mercosur. Especialista en temas globales de integración y comercio internacional de Asia y América del Norte y América Latina. Ha sido conferencista y profesor invitado en diversas Universidades e instituciones de América del Norte, Asia, China, Latinoamérica, Europa y África, entre ellas: la Academia China de Ciencias Sociales de la Universidad de Beijing, China; Universidad de Bangalore, India; Universidad de Chuo, Japón; Universidad Soongsil, Corea del Sur; Universidad Autónoma de    Lisboa, Portugal; Universidad de Johannesburgo, Sudáfrica; la Secretaría Iberoamericana (SEGIB) en España; la Organización de los Estados Americanos (OEA), la Comisión Económica para América Latina y el Caribe (CEPAL), entre muchas otras.',
    sketch_eng: 'D. in Law from the Universidad Nacional Autónoma de México (UNAM), and Researcher of the Instituto de Investigaciones Jurídicas de la UNAM, as well as President of the Instituto para el Desarrollo Industrial y la Transformación Digital (INADI). He is a Researcher of the National System of Researchers (SNI) and Arbitrator of Dispute Settlement on behalf of Brazil within the Mercosur mechanism. He is a specialist in global issues of integration and international trade in Asia, North America and Latin America. He has been a guest lecturer and professor at various universities and institutions in North America, Asia, China, Latin America, Europe and Africa, among them: Chinese Academy of Social Sciences, Beijing University, China; Bangalore University, India; Chuo University, Japan; Soongsil University, South Korea; Autonomous University of Lisbon, Portugal; University of Johannesburg, South Africa; the Ibero-American Secretariat (SEGIB) in Spain; the Organization of American States (OAS), the Economic Commission for Latin America and the Caribbean (ECLAC), among many others.'
  },
  {
    id: 24,
    conference: 'El Nearshoring en el marco de la Política Industrial del siglo XXI',
    name: 'José Guillermo Zozaya Délano',
    company: 'Asociación Mexicana de la Industria Automotriz',
    rol: 'Presidente Ejecutivo',
    avatar: '/speakers/JoseZozaya.webp',
    sketch: 'Es Presidente Ejecutivo de la Asociación Mexicana de la Industria Automotriz a partir de agosto del 2020. Fungió como Presidente, Gerente General y Representante Ejecutivo de Kansas City Southern de México, S.A. de C.V. (KCSM),empresa subsidiaria de Kansas City Southern (KCS) (NYSE: KSU), desde abril del 2006 a julio del 2020. Cuenta con más de 40 años de experiencia en relaciones gubernamentales, asuntos legales y asuntos internacionales, así como en fusiones y adquisiciones. Previo a ser Presidente Ejecutivo de Kansas City Southern de México, S.A. de C.V. (KCSM), fue Director Jurídico y de Relaciones Gubernamentales de ExxonMobil México, posición que ocupó durante nueve años. Tiene un Doctorado Honoris Causa otorgado por parte de la Academia Mexicana de Derecho Internacional y una Licenciatura en Derecho por la Universidad Iberoamericana. Realizó estudios avanzados en Derecho Corporativo y Competencia Económica en el Instituto Tecnológico Autónomo de México, cursó el programa ejecutivo de Administración de Empresas Internacionales en la Universidad Thunderbird en Arizona, el programa de gestión para abogados en la Universidad de Yale y el curso ejecutivo para miembros del consejo de administración en la Escuela de Negocios de Harvard. Fue también Presidente de la Asociación Mexicana de Ferrocarriles para el periodo 2020 – 2021; Vicepresidente de CONCAMIN desde 2018, miembro del Consejo de Administración de Afore Siglo XXI, de la empresa Ferrovalle y de la Cumbre de Negocios. Desde el 24 de mayo de 2016, fue nombrado Presidente del Consejo Binacional de Directores de la US-Mexico Chamber of Commerce. Fue Presidente del Consejo Mexicano del Transporte (2014 – 2016), Vicepresidente del Consejo Ejecutivo de Empresas Globales (2010 – 2013), Presidente Nacional de la American Chamber durante dos periodos (2010 – 2012), es miembro del Patronato de la Orquesta Sinfónica del Estado de México y miembro del board de Fomento Educacional A.C.',
    sketch_eng: 'He is Executive President of the Mexican Automotive Industry Association (Asociacion Mexicana de la Industria Automotriz) as of August 2020. Served as President, Chief Executive Officer and Executive Representative of Kansas City Southern de Mexico, S.A. de C.V. (KCSM), a subsidiary of Kansas City Southern (KCS) (NYSE: KSU), from April 2006 to July 2020. He has more than 40 years of experience in government relations, legal and international affairs, as well as mergers and acquisitions. Prior to becoming Chief Executive Officer of Kansas City Southern de Mexico, S.A. de C.V. (KCSM), he was Director of Legal and Government Relations for ExxonMobil Mexico, a position he held for nine years. He holds a Doctorate Honoris Causa from the Mexican Academy of International Law and a law degree from the Universidad Iberoamericana. He completed advanced studies in Corporate Law and Antitrust at the Instituto Tecnológico Autónomo de México, the Executive Program in International Business Administration at Thunderbird University in Arizona, the Management Program for Lawyers at Yale University and the Executive Course for Board Members at Harvard Business School. He was also President of the Mexican Association of Railroads for the period 2020 - 2021; Vice President of CONCAMIN since 2018, member of the Board of Directors of Afore Siglo XXI, of the company Ferrovalle and of the Business Summit. Since May 24, 2016, he was appointed Chairman of the Binational Board of Directors of the US-Mexico Chamber of Commerce. He was Chairman of the Mexican Transportation Council (2014 - 2016), Vice Chairman of the Executive Council of Global Enterprises (2010 - 2013), National President of the American Chamber for two terms (2010 - 2012), is a member of the Board of Trustees of the Symphony Orchestra of the State of Mexico and a member of the board of Fomento Educacional A.C.'
  },
  {
    id: 25,
    conference: 'Ciberseguridad 4.0: Estrategia y Táctica desde la Trinchera',
    name: 'Paco Bolaños',
    company: 'Cisco LATAM',
    rol: 'Arquitecto de IoT Transformación Digital',
    avatar: '/speakers/pacoBolanos.webp',
    sketch: 'Tiene 26 años de experiencia profesional en la industria de las telecomunicaciones y 23 años de experiencia en Cisco Systems, atendiendo sectores como Proveedores de Servicio, Sector Público, e Industriales, participando en el diseño y desarrollo de proyectos con cuentas estratégicas. Desde 2013, se desempeña como arquitecto para temas de Internet de las Cosas y Transformación Digital para Latinoamérica. Sus áreas de especialización incluyen: Internet de las cosas, Industria 4.0, Transformación Digital, Diseño de redes, Ciberseguridad para sistemas de control industrial, Petróleo y Gas, Energía, Manufactura, y Minería. Es Ingeniero en Electrónica y Comunicaciones por el Instituto Politécnico Nacional de México, tiene una Micro Maestría en Liderazgo y Gestión de Negocios Globales por la Universidad Estatal de Arizona, una Micro Maestría en Sistemas de Información por la Universidad de Indiana, y un Certificado Profesional en Transformación Digital por parte del Instituto Tecnológico de Massachussets (MIT) y diversos diplomas por las universidades Harvard, Arizona y el Banco Interamericano de Desarrollo. También ha participado como ponente en los siguientes foros: IEEE ROC México, Cisco Live, Instituto Mexicano del Petróleo, Rockwell’s RSTech Ed, Tec de Monterrey, UANL, ITAM, Congreso Internacional de Innovación Tecnológica CIIT Perú, Cámara de Comercio Americana de México, Frost & Sullivan, Nuevo León 4.0, Industrial Transformation Mexico, e Innovation for Realization (I4R). También ha escrito diversos blogs y artículos técnicos sobre temas de su especialidad en medios como el periódico El Occidental, la revista Infochannel, RedesTI, y el periódico El Economista, entre otros.',
    sketch_eng: 'He has 26 years of professional experience in the telecommunications industry and 23 years of experience in Cisco Systems, serving sectors such as Service Providers, Public Sector, and Industrial, participating in the design and development of projects with strategic accounts. Since 2013, he serves as an architect for Internet of Things and Digital Transformation topics for Latin America. His areas of expertise include: Internet of Things, Industry 4.0, Digital Transformation, Network Design, Cybersecurity for Industrial Control Systems, Oil & Gas, Energy, Manufacturing, and Mining. He holds a degree in Electronics and Communications Engineering from the National Polytechnic Institute of Mexico, a Micro Masters in Global Business Leadership and Management from Arizona State University, a Micro Masters in Information Systems from Indiana University, and a Professional Certificate in Digital Transformation from the Massachusetts Institute of Technology (MIT) and several diplomas from Harvard University, Arizona University and the Inter-American Development Bank. He has also participated as a speaker in the following forums: IEEE ROC Mexico, Cisco Live, Mexican Petroleum Institute, Rockwell\'s RSTech Ed, Tec de Monterrey, UANL, ITAM, International Congress of Technological Innovation CIIT Peru, American Chamber of Commerce of Mexico, Frost & Sullivan, Nuevo Leon 4.0, Industrial Transformation Mexico, and Innovation for Realization (I4R). He has also written several blogs and technical articles on topics of his expertise in media such as El Occidental newspaper, Infochannel magazine, RedesTI, and El Economista newspaper, among others.'
  },
  {
    id: 26,
    conference: 'Improving manufacturing: industrial robots & AI',
    name: 'Jeff Burnstein',
    company: 'Association for Advancing Automation (A3)',
    rol: 'Presidente',
    avatar: '/speakers/JeffBurnstein.webp',
    sketch: 'Jeff Burnstein es Presidente de Association for Advancing Automation (A3), el grupo de Comercio líder en Norteamérica, representando a más de 1160 compañías relacionadas a la Robótica, Inteligencia Artificial, Visión, Control de Movimiento y relacionados a las Tecnologías de la Automatización. Burnstein se unió a la asociación en 1983 y ha tenido variedad de altos cargos, culminando en su promoción a Presidente en 2007. Es columnista en medios de comunicación, debate a menudo cuestiones de Automatización con los responsables políticos, y participa regularmente en conferencias mundiales sobre temas como las tendencias mundiales de Automatización, el impacto de esta en los puestos de trabajo y el futuro de la Automatización más allá de la planta de producción. Burnstein también forma parte del Consejo Ejecutivo de la Federación Internacional de Robótica (IFR, por sus siglas en inglés). Recientemente, recibió el Premio Engelberger al Liderazgo, considerado como el “Premio Nobel de la Robótica”.',
    sketch_eng: 'Jeff Burnstein is President of the Association for Advancing Automation (A3), the leading North American trade group representing over 1160 global companies involved in robotics, artificial intelligence, vision, motion control and related automation technologies. Burnstein joined the association in 1983 and has held a variety of senior positions, culminating in his promotion to President in 2007.  He is a frequent commentator in the media, often discusses automation issues with policy makers, and regularly speaks at global conferences on issues such as global automation trends, the impact of automation on jobs and the future of automation beyond the factory floor. Burnstein also serves on the Executive Board of the International Federation of Robotics (IFR). He was recently honored with the Engelberger Award for Leadership, considered the “Nobel Prize of Robotics.”'
  },
  {
    id: 27,
    conference: 'A Rewiring of Global Value Chains',
    name: 'Horacio Leal',
    company: 'Kearney',
    rol: 'Principal',
    avatar: '/speakers/LealHoracio.webp',
    sketch: 'Es Directivo en Kearney, mayormente involucrado en Servicios Financieros, Operaciones, y Prácticas de Gobierno. Tiene más de 10 años de experiencia en Consultoría de Gestión, Banca Central y de Desarrollo, Políticas de Macroeconomía y de Industria. Ha apoyado a clientes en áreas como estrategia de producción e Industria 4.0, desarrollo económico, gestión de finanzas públicas y movilidad urbana. Ha servido a clientes en México, Europa, Sudamérica y el Medio Oriente Durante 2018, Horacio fue adscrito por Kearney al Foro Económico Mundial, donde contribuyó a desarrollar la agenda de la institución sobre el Futuro de la Producción en el contexto de la Cuarta Revolución Industrial, trabajando en un enfoque regional de preparación para la Industria 4.0 y desarrollando perspectivas sobre plataformas digitales y modelos de negocio. Tiene una Maestría en Administración de Empresas, por el MIT; una Maestría en Administración Pública en Desarrollo Internacional (MPA/ID), por la Universidad de Harvard; una B. A. en Economía, por el ITAM; y un B.Sc. en Matemáticas Aplicadas, por el ITAM.',
    sketch_eng: 'Horacio is Principal at Kearney mostly involved in the Financial Services, Operations, and Government practices. He has +10 years of experience in management consulting, central & development banking, macroeconomic & industry policy. His client support has lied in areas including production & Industry 4.0 strategy, economic development, public finance management, and urban mobility. He has served clients in Mexico, Europe, South America, and the Middle East During 2018, Horacio was seconded by Kearney to the World Economic Forum, where he contributed to develop the institution’s agenda on the Future of Production in the context of the Fourth Industrial Revolution (4IR), working on a regional 4IR readiness approach and developing insights on digital platforms and business models Horacio holds a Master in Business Administration from MIT, a Master in Public Administration in International Development (MPA/ID) from Harvard University, a B.A. in Economics from ITAM and a B.Sc. in Applied Mathematics from ITAM.'
  },
  {
    id: 28,
    conference: 'Sistemas de Gestión de Datos para el Control y Automatización de Procesos Industriales',
    name: 'Jason Deng',
    company: 'HollySys',
    rol: 'Principal',
    avatar: '/speakers/jasonDeng.webp',
    sketch: 'Especialista senior en soporte técnico de HollySys Automation. Más de 10 años de experiencia en soporte técnico de automatización.',
    sketch_eng: 'Senior technical support specialist from HollySys Automation. More than 10 years of experience in automation technical support.'
  },
  {
    id: 29,
    conference: 'Transformación Digital: Impulsando la sostenibilidad de las industrias',
    name: 'Valeria Rivera',
    company: 'SIEMENS MEXICO, CENTROAMERICA Y EL CARIBE',
    rol: 'Directora de Comunicación y Desarrollo de Negocios',
    avatar: '/speakers/VRivera.webp',
    sketch: 'Valeria Rivera, directora de Comunicación y Desarrollo de Negocios, Siemens México, Centroamérica y el Caribe.',
    sketch_eng: 'Valeria Rivera, directora de Comunicación y Desarrollo de Negocios, Siemens México, Centroamérica y el Caribe.'
  },
  {
    id: 30,
    conference: 'Transformación Digital: Impulsando la sostenibilidad de las industrias',
    name: 'Roger Guerrero',
    company: 'SIEMENS MEXICO, CENTROAMERICA Y EL CARIBE',
    rol: 'Head de Factory Automation and Motion Control',
    avatar: '/speakers/RGuerrero.webp',
    sketch: 'Roger Guerrero, Head de Factory Automation and Motion Control, Siemens México, Centroamérica y el Caribe.',
    sketch_eng: 'Roger Guerrero, Head de Factory Automation and Motion Control, Siemens México, Centroamérica y el Caribe.'
  },
  {
    id: 31,
    conference: 'Transformación Digital: Impulsando la sostenibilidad de las industrias',
    name: 'Jair Mexia',
    company: 'SIEMENS MEXICO, CENTROAMERICA Y EL CARIBE',
    rol: 'Head de Electrical Products',
    avatar: '/speakers/JairMexia.webp',
    sketch: 'Jair Mexia, Head de Electrical Products, Siemens México, Centroamérica y el Caribe.',
    sketch_eng: 'Jair Mexia, Head de Electrical Products, Siemens México, Centroamérica y el Caribe.'
  },
  {
    id: 32,
    conference: 'Transformación Digital: Impulsando la sostenibilidad de las industrias',
    name: 'Rodrigo Zavala',
    company: 'SIEMENS MEXICO, CENTROAMERICA Y EL CARIBE',
    rol: 'Head de Process Automation',
    avatar: '/speakers/RZavala.webp',
    sketch: 'Rodrigo Zavala, Head de Process Automation, Siemens México, Centroamérica y el Caribe.',
    sketch_eng: 'Rodrigo Zavala, Head de Process Automation, Siemens México, Centroamérica y el Caribe.'
  },
  /* {
    id: 33,
    conference: 'Transformación Digital: Impulsando la sostenibilidad de las industrias',
    name: 'Gonzalo Matteoda',
    company: 'SIEMENS MEXICO, CENTROAMERICA Y EL CARIBE',
    rol: 'Head de Customer Services',
    avatar: '/speakers/Gmatteoda.webp',
    sketch: 'Gonzalo Matteoda, Head de Customer Services, Siemens México, Centroamérica y el Caribe.',
    sketch_eng: ''
  }, */
  {
    id: 34,
    conference: 'Tres pilares de la Industria 4.0',
    name: 'Heiko Herden',
    company: 'Grupo de trabajo OPC UA para maquinaria',
    rol: 'Coordinador del proyecto VDMA y presidente del grupo de trabajo OPC UA para maquinaria',
    avatar: '/speakers/HerdenHeiko.webp',
    sketch: 'Responsable de la coordinación y el apoyo de unos 40 grupos de trabajo en el ámbito de la creación de “OPC UA Companion Specifications”. Jefe del grupo de armonización de OPC UA para Maquinaria, en el que se define la información básica para la comunicación de Industrie 4.0 a través de OPC UA para todo el ámbito de la ingeniería de maquinaria e instalaciones. Jefe del grupo de gestión del consumo de energía para la armonización de los datos de consumo de energía junto con PI y ODVA. Colaboración en el proyecto II4IP financiado por el Ministerio Federal de Economía y Protección del Clima de Alemania y participación en varios otros comités, por ejemplo, en la Asociación de Gemelos Digitales Industriales o con la Sociedad para la Cooperación Internacional.',
    sketch_eng: 'Responsible for the coordination and support of about 40 working groups in the scope of the creation of "OPC UA Companion Specifications". Head of the OPC UA harmonization group for Machinery, in which the basic information for Industrie 4.0 communication via OPC UA is defined for the entire field of machinery and plant engineering. Head of the energy consumption management group for the harmonization of energy consumption data together with PI and ODVA. Collaboration in the II4IP project funded by the German Federal Ministry of Economics and Climate Protection and participation in several other committees, e.g. in the Industrial Digital Twins Association or with the Society for International Cooperation.'
  },
  {
    id: 35,
    conference: 'Tres pilares de la Industria 4.0',
    name: 'Ricardo Ibáñez',
    company: 'Siemens Digital Industries',
    rol: 'Project Management Officer',
    avatar: '/speakers/ricardoIbanez.webp',
    sketch: 'Cuenta con más de 16 años de experiencia en la gestión de proyectos de Automatización, Transformación digital y Ciberseguridad. Actualmente, es titular de la Oficina de Proyectos (PMO), en Siemens Digital Industries, donde es responsable del diseño e implementación de procesos y estrategias de Ciberseguridad Industrial, alineados a los estándares internacionales y buenas prácticas de la Industria. Sus intereses giran en torno a brindar apoyo a las empresas en el desarrollo de estrategias de Transformación Digital y Ciberseguridad, alineadas a sus objetivos y capacidades.',
    sketch_eng: 'He has more than 16 years of experience in the management of Automation, Digital Transformation and Cybersecurity projects. Currently, he is head of the Project Office (PMO) at Siemens Digital Industries, where he is responsible for the design and implementation of Industrial Cybersecurity processes and strategies, aligned to international standards and industry best practices. Her interests revolve around providing support to companies in the development of Digital Transformation and Cybersecurity strategies, aligned to their objectives and capabilities.'
  },
  {
    id: 36,
    conference: 'Tres pilares de la Industria 4.0',
    name: 'Carlos Ramírez',
    company: 'WAGO',
    rol: 'Gerente Técnico',
    avatar: '/speakers/JCRV.webp',
    sketch: 'Estudió la carrera de Ingeniería en Sistemas con especialidad en Automatización y Control. Desde 2009 colaboró con un distribuidor/integrador principalmente en el área de automatización y soporte. En 2015, se unió a WAGO como gerente regional de la zona sureste, en 2016 inició actividades de soporte técnico de productos WAGO, especialmente en el área de Automatización, a nivel nacional como Ingeniero de Aplicaciones. En 2021 tomó el cargo de Gerente técnico, apoyando con el equipo, a usuarios internos y externos de WAGO en la preparación de su personal con capacitaciones, soporte, y selección de equipo para el desarrollo de sus aplicaciones en automatización. Actualmente, se encuentra estudiando el diplomado "European Energy Manager".',
    sketch_eng: 'Studied Systems Engineering with a major in Automation and Control. Since 2009 he collaborated with a distributor/integrator mainly in the area of automation and support. In 2015, he joined WAGO as regional manager of the southeast zone, in 2016 he started technical support activities for WAGO products, especially in the Automation area, nationwide as Applications Engineer. In 2021 he took the position of Technical Manager, supporting with the team, internal and external WAGO users in the preparation of their personnel with training, support, and equipment selection for the development of their applications in automation. He is currently studying for the "European Energy Manager" diploma.'
  },
  {
    id: 37,
    conference: 'Tres pilares de la Industria 4.0',
    name: 'Lilia de Diego',
    company: 'GIZ México',
    rol: 'Asesora Técnica, GIZ México',
    avatar: '/speakers/liliadeDiego.webp',
    sketch: 'Es asesora técnica del Proyecto Global Infraestructura de la Calidad (GPQI) comisionado por el Ministerio Federal de Economía y Protección del Clima (BMWK) de Alemania para facilitar el Diálogo Mexicano – Alemán en Infraestructura de la Calidad. Desde hace seis años colabora en la Cooperación Técnica Alemana (GIZ) en México en donde trabaja en temas de ciberseguridad e Industria 4.0. Tiene más de diez años de experiencia en innovación e industria y tiene una especialidad en gobernanza global por el Instituto Alemán para el Desarrollo y la Sustentabilidad (IDOS), con sede en Bonn, Alemania. Lilia es internacionalista por la Universidad Nacional Autónoma de México y tiene una maestría en Estudios Regionales por el Instituto Mora.',
    sketch_eng: 'She is technical advisor of the Global Quality Infrastructure Project (GPQI) commissioned by the German Federal Ministry of Economics and Climate Protection (BMWK) to facilitate the Mexican-German Dialogue on Quality Infrastructure. For the last six years he has been collaborating with the German Technical Cooperation (GIZ) in Mexico where he works on cybersecurity and Industry 4.0 issues. She has more than ten years of experience in innovation and industry and has a specialty in global governance from the German Institute for Development and Sustainability (IDOS), based in Bonn, Germany. Lilia is an internationalist from the National Autonomous University of Mexico and holds a master\'s degree in Regional Studies from the Mora Institute.'
  },
  {
    id: 38,
    conference: 'Descarbonización en la Industria 4.0',
    name: 'Alejandro Rodríguez Rosales',
    company: 'Siemens México, Centroamerica Y El Caribe',
    rol: 'Digital Industries, Sustainability Leader',
    avatar: '/speakers/AlejandroRodríguez.webp',
    sketch: 'Es Eléctrico Electrónico por la Facultad de Ingeniería, de la Universidad Nacional Autónoma de México. Cuenta con 10 años de experiencia en Energía y Sustentabilidad. Ha ocupado diversos roles en Latinoamérica con experiencia en proyectos de Eficiencia Energética, Generación Distribuida e Instalaciones Eléctricas. Actualmente, en Siemens desempeña el rol de Líder de Sustentabilidad en la División de Digital Industries para México y Centroamérica, enfocado en soluciones de descarbonización.',
    sketch_eng: 'He holds a degree in Electrical and Electronics Engineering from the Faculty of Engineering, Universidad Nacional Autónoma de México. He has 10 years of experience in Energy and Sustainability. He has held various roles in Latin America with experience in Energy Efficiency, Distributed Generation and Electrical Installations projects. Currently, in Siemens he plays the role of Sustainability Leader in the Digital Industries Division for Mexico and Central America, focused on decarbonization solutions.'
  },
  {
    id: 39,
    conference: 'Robótica Colaborativa y su impacto en la industria',
    name: 'Leonardo Zacarías Gómez Navarro',
    company: 'GUREGO',
    rol: 'Especialista en robótica y sistemas de visión',
    avatar: '/speakers/LeonardoZacarias.webp',
    sketch: 'Ingeniero en Robótica, egresado de la Universidad Politécnica de Guanajuato. Ha laborado dentro del sector industrial desde hace 9 años; comenzando su carrera como líder de proyectos de Automatización durante sus primeros 2 años en el sector agroindustrial. Continuó su carrera profesional durante 1 año como líder de programación de CNC para el sector metal-mecánico. Finalmente, hasta la fecha ha trabajado para la empresa GUREGO, donde comenzó como Asesor de Ventas Técnicas y a lo largo de su trayectoria se le han asignado nuevas responsabilidades, hasta actualmente ser el responsable de la línea de COBOTS DOOSAN y sistemas de visión artificial SOLOMON. Parte de sus conocimientos han sido desarrollados en áreas comerciales, tomando capacitaciones, cursos y diplomados en temas de Programación Neuro-Lingüística (PNL), Ventas Consultivas, Ventas, Negociaciones Estratégicas y Prospección Inteligente.',
    sketch_eng: 'Robotics Engineer, graduated from the Polytechnic University of Guanajuato. He has worked in the industrial sector for 9 years; starting his career as an Automation project leader during his first 2 years in the agro-industrial sector. He continued his professional career for 1 year as a CNC programming leader for the metal-mechanical sector. Finally, to date he has worked for the company GUREGO, where he started as Technical Sales Advisor and throughout his career he has been assigned new responsibilities, until currently being responsible for the line of DOOSAN COBOTS and SOLOMON machine vision systems. Part of his knowledge has been developed in commercial areas, taking trainings, courses and diplomas in Neuro-Linguistic Programming (NLP), Consultative Sales, Sales, Strategic Negotiations and Intelligent Prospecting.'
  },
  {
    id: 40,
    conference: 'Gestión inteligente de redes de agua',
    name: 'Sergio Gabriel Montes de Oca',
    company: 'Endress + Hauser Mexico',
    rol: 'Services and Solutions Product Manager',
    avatar: '/speakers/SergioMontes.webp',
    sketch: 'Gerente de Producto de servicio y soluciones en Endress + Hauser Mexico, con mas de 10 años de experiencia en la industria de automatización y Control, siendo por mas de 5 años Gerente de los laboratorios de metrología, gestionando los sistemas de calidad para mantener las acreditaciones con la EMA en las variables de flujo, presión, temperatura, densidad y volumen, ahora dedicado ha implementar soluciones innovadores a los clientes de la industria de procesos.',
    sketch_eng: 'Product Manager of service and solutions at Endress + Hauser Mexico, with more than 10 years of experience in the automation and control industry, being for more than 5 years Manager of the metrology laboratories, managing the quality systems to maintain accreditations with the EMA in the variables of flow, pressure, temperature, density and volume, now dedicated to implement innovative solutions to customers in the process industry.'
  },
  {
    id: 41,
    conference: 'Gestión inteligente de redes de agua',
    name: 'Argelia Ordaz Galvan',
    company: 'Endress + Hauser Mexico',
    rol: 'Gerente de la Industria del Agua',
    avatar: '/speakers/ArgeliaGalvan.webp',
    sketch: 'Gerente de la Industria del Agua en Endress + Hauser México, se desarrolla implementando sistemas de monitoreo y mejora a los clientes del país, adicionalmente cuenta con mas de 10 años como especialista en instrumentos de medición que permiten optimizar y controlar las principales aplicaciones de su industria.',
    sketch_eng: 'Water Industry Manager at Endress + Hauser Mexico, he develops implementing monitoring and improvement systems to customers in the country, additionally he has more than 10 years as a specialist in measuring instruments that allow optimizing and controlling the main applications of your industry.'
  },
  {
    id: 42,
    conference: 'Exploradores del mañana: “Un viaje al futuro con ayuda de la tecnología”',
    name: 'José Luis Ponce González',
    company: 'Ikusi',
    rol: 'Subdirector de Desarrollo de Soluciones y Servicios de Ciberseguridad',
    avatar: '/speakers/josePonce.webp',
    sketch: 'Egresado del Tecnológico de Monterrey de la carrera de Ingeniería de Sistemas Electrónicos, cuenta con más de 22 años de experiencia en Tecnologías de Comunicaciones e Información, especialmente en el ámbito de Ciberseguridad. Ha colaborado en empresas de telecomunicaciones y servicios especializados de IT globales. Actualmente, forma parte de la empresa IKUSI como Subdirector de Negocios de Ciberseguridad, apoyando a sus clientes a mejorar sus estrategias de ciberseguridad en los ámbitos de IT y OT.',
    sketch_eng: 'José Luis Ponce González is a graduate of the Tecnológico de Monterrey, Monterrey campus, with a degree in electronic systems engineering. He has more than 22 years of experience in communications and information technologies, particularly in the field of cybersecurity. He has collaborated in global telecommunications and specialized IT services companies. Currently, he is part of the company IKUSI as Deputy Director of Cybersecurity Business, assisting clients in enhancing their cybersecurity strategies in both the IT and OT domains.'
  },
  {
    id: 43,
    conference: 'Ciberseguridad OT Sostenible',
    name: 'Oscar Colin',
    company: 'SIEMENS MEXICO, CENTROAMERICA Y EL CARIBE',
    rol: 'Business Segment Manager, Digital Connectivity & Power',
    avatar: '/speakers/OscarColin.webp',
    sketch: 'Óscar es Ingeniero en Control y Automatización por el Instituto Politécnico Nacional. Cuenta con más de 10 años de experiencia en Siemens en el área comercial atendiendo diversas industrias como la energética, automotriz y petroquímica, entre otras.',
    sketch_eng: 'Oscar has a degree in Control and Automation Engineering from the National Polytechnic Institute. He has more than 10 years of experience in Siemens in the commercial area serving various industries such as energy, automotive and petrochemical, among others.'
  },
  {
    id: 44,
    conference: 'Sin automatización, no hay digitalización',
    name: 'Francia González Alfaro',
    company: 'SIEMENS MEXICO, CENTROAMERICA Y EL CARIBE',
    rol: 'Especialista de producto Factory Automation',
    avatar: '/speakers/FranciaGonzalezAlfaro.webp',
    sketch: 'Ingeniera Mecatrónica egresada de la Facultad de Ingeniería de la Universidad Nacional Autónoma de México. Ingresó a Siemens en el 2015 como ingeniera de servicio, fue uno de los 2 ingenieros que programaron y desarrollaron el primer proyecto implementado por ingenieros mexicanos de la empresa casi 100% automatizada, SUCROLIQ. Dentro de sus principales aportaciones como desarrolladora del proyecto fue la programación de los primeros filtros de placas automatizados del mundo. Especialista de producto para Factory Automation donde fue la responsable de marketing, temas técnicos y promoción del controlador más vendido de la casa S7-1200. Además, fue responsable del programa Siemens Coopera con la Educación, iniciativa de Siemens para lograr que Universidades y Escuelas con materias a fin de automatización puedan equipar y capacitar a estudiantes y profesores con los conocimientos que actualmente demanda la Industria alrededor de todo el mundo. En el año 2021 fue parte del programa internacional de talentos ITT, donde durante un año formó parte del Siemens Professional Education en Berlín, con el objetivo de obtener conocimientos de las nuevas tecnologías como Industria 4.0, Industria Edge, IoT, Inteligencia Artificial, Automatización y Virtual Commissioning. Como parte del programa fue parte del equipo PE 4 en la planta EWA en Amberg Alemania donde actualmente se fabrican los dispositivos más emblemáticos del catálogo de SIMATIC.',
    sketch_eng: 'Mechatronics Engineer graduated from the Faculty of Engineering of the National Autonomous University of Mexico. She joined Siemens in 2015 as a service engineer, she was one of the 2 engineers who programmed and developed the first project implemented by Mexican engineers of the almost 100% automated company, SUCROLIQ. Among her main contributions as project developer was the programming of the first automated plate filters in the world. Product specialist for Factory Automation where she was responsible for marketing, technical issues and promotion of the company\'s best-selling S7-1200 controller. In addition, she was responsible for the Siemens Cooperates with Education program, a Siemens initiative to enable Universities and Schools with subjects related to automation to equip and train students and teachers with the knowledge currently demanded by the Industry around the world. In 2021 he was part of the international ITT talent program, where for a year he was part of the Siemens Professional Education in Berlin, with the aim of gaining knowledge of new technologies such as Industry 4.0, Industry Edge, IoT, Artificial Intelligence, Automation and Virtual Commissioning. As part of the program he was part of the PE 4 team at the EWA plant in Amberg Germany where the most emblematic devices of the SIMATIC portfolio are currently manufactured.'
  },
  {
    id: 45,
    conference: 'Mantenimiento inteligente aplicado en la industria',
    name: 'Horacio Ceron Islas',
    company: 'SIEMENS MEXICO, CENTROAMERICA Y EL CARIBE',
    rol: 'Portfolio Sales Manager',
    avatar: '/speakers/HoracioCeron.webp',
    sketch: 'Es ingeniero eléctrico egresado de Instituto Politécnico Nacional, cuenta con más de 15 años en Siemens en las áreas de Desarrollo de Proyectos en Alta, Media y Baja tensión, ingeniería de producto y desarrollando soluciones para el sector industrial en la región México-Centroamérica.',
    sketch_eng: 'He has more than 15 years of experience in Siemens in the areas of High, Medium and Low Voltage Project Development, product engineering and developing solutions for the industrial sector in the Mexico-Central America region.'
  },
  {
    id: 46,
    conference: 'Importancia de la incorporación de herramientas digitales para el fortalecimiento de la competitividad de las MIPYMES',
    name: 'Andrea Carreón',
    company: 'GIZ',
    rol: 'Asesora Jr. del Diálogo Digital entre México y Alemania',
    avatar: '/speakers/AndreaCarreon.webp',
    sketch: 'Andrea Estefanía Carreón Guillén, Asesora jr. del Secretariado en México del Diálogo Digital entre México y Alemania.',
    sketch_eng: 'Andrea Estefanía Carreón Guillén, Asesora jr. del Secretariado en México del Diálogo Digital entre México y Alemania.'
  },
  {
    id: 47,
    conference: 'Importancia de la incorporación de herramientas digitales para el fortalecimiento de la competitividad de las MIPYMES',
    name: 'Andreas Jahn',
    company: 'BVMW',
    rol: 'Miembro del Comité Ejecutivo Federal de la Asociación Alemana de la Pequeña y Mediana Empresa',
    avatar: '/speakers/AndreasJahn.webp',
    sketch: 'Ha sido miembro del Comité Ejecutivo Federal de los departamentos de Política, Economía y Comercio Exterior, Asuntos Públicos, Prensa y Relaciones Públicas del BVMW. Además, es Secretario General de la Alianza de Pequeñas y Medianas Empresas con África, una iniciativa del BVMW que apoya a las empresas en su inserción en el mercado africano. También, es el Presidente del Foro Germano-Turcomano desde 2021. De 2009 a 2019, trabajó en el Parlamento Alemán como asesor de política exterior del Diputado Johannes Selle. Mantiene vínculos estrechos con importantes actores de la política nacional e internacional y ha viajado varias veces con delegaciones a África, Rusia y los Estados de la CEI, así como a otras regiones del mundo.',
    sketch_eng: 'He has been a member of the Federal Executive Committee of the BVMW\'s Policy, Economic and Foreign Trade, Public Affairs, Press and Public Relations departments. In addition, he is Secretary General of the Alliance of Small and Medium Enterprises with Africa, an initiative of the BVMW that supports companies in their insertion into the African market. Also, he is the President of the German-Turkmen Forum since 2021. From 2009 to 2019, he worked in the German Parliament as foreign policy advisor to MP Johannes Selle. He maintains close ties with important players in national and international politics and has traveled several times with delegations to Africa, Russia and the CIS states, as well as to other regions of the world.'
  },
  {
    id: 48,
    conference: 'Importancia de la incorporación de herramientas digitales para el fortalecimiento de la competitividad de las MIPYMES',
    name: 'Raúl Isaac Hernández Peña',
    company: 'CONCANACO SERVYTUR',
    rol: 'Vicepresidente de Innovación y Tecnología',
    avatar: '/speakers/RaulHernandez.webp',
    sketch: 'Ha llevado a cabo diferentes proyectos tanto en el sector público como privado, realizando diferentes plataformas como Check In Digital, para hoteles y restaurantes. Sanicam, prototipo automatizado orientado a desinfectar espacios a través del uso de tecnología UV. Así mismo, en el sector público el SIGH Magdalena, modelo de gestión estratégica implementando componentes innovadores al servicio de urgencias de la Unidad Médica de Alta Especialidad “Dr. Victorio de la Fuente Narváez” del IMSS. Como Vicepresidente de la Comisión de Innovación y Tecnología de CONCANACO SERVYTUR desde 2017, ha desarrollado diversas plataformas para la Confederación, como Plataforma CONCANACO Buen Fin, CONCACLICK, CONCATOURS y Proyecto Islas Marías en colaboración con la Secretaría de Marina. Ha participado en diferentes concursos de innovación tecnológica, en los cuales ha sido reconocido gracias a sus conocimientos en desarrollo de plataformas digitales. Siendo ganador del Reto Todos vs el cáncer infantil, Reto INDAABIN 2015, Premio Nacional a la Innovación Tecnológica en la Promoción Turística de los Pueblos Mágicos, Reto Zapopan, entre otros.',
    sketch_eng: 'He has carried out different projects in both the public and private sectors, creating different platforms such as Check In Digital, for hotels and restaurants. Sanicam, an automated prototype oriented to disinfect spaces through the use of UV technology. Also, in the public sector, SIGH Magdalena, a strategic management model implementing innovative components to the emergency service of the High Specialty Medical Unit "Dr. Victorio de la Fuente Narváez" of the IMSS. As Vice President of the Innovation and Technology Commission of CONCANACO SERVYTUR since 2017, he has developed several platforms for the Confederation, such as Plataforma CONCANACO Buen Fin, CONCACLICK, CONCATOURS and Proyecto Islas Marías in collaboration with the Secretary of the Navy. He has participated in different technological innovation contests, in which he has been recognized thanks to his knowledge in the development of digital platforms. Being winner of the Todos vs. Childhood Cancer Challenge, INDAABIN Challenge 2015, National Award for Technological Innovation in the Tourism Promotion of Magical Towns, Zapopan Challenge, among others.'
  },
  {
    id: 49,
    conference: 'Importancia de la incorporación de herramientas digitales para el fortalecimiento de la competitividad de las MIPYMES',
    name: 'Yuriana González Ulloa',
    company: 'Proyecto Recuperación Verde',
    rol: 'Asesora Técnica',
    avatar: '/speakers/YurianaGonzalez.webp',
    sketch: 'Yuriana González Ulloa, Asesora Técnica, Proyecto Recuperación Verde.',
    sketch_eng: 'Yuriana González Ulloa, Asesora Técnica, Proyecto Recuperación Verde.'
  },
  {
    id: 50,
    conference: 'Sistemas de transporte inteligente, el futuro en los procesos.',
    name: 'Alan González López',
    company: 'Beckhoff Automation SA de CV',
    rol: 'Gerente técnico',
    avatar: '/speakers/AlanGonzalez.webp',
    sketch: 'Desde el inicio de su carrera profesional, se ha inclinado por la parte técnica de su profesión. Ingeniero en Mecatrónica, con especialidad en Sistemas de Producción, por el Instituto Tecnológico de Tlalnepantla. Siempre enfocado en conocer más de los equipos de automatización. Ha participado en diversos proyectos. en muchos proyectos en Automatización.',
    sketch_eng: 'Since the beginning of my professional career, I have been inclined towards the technical part of my profession. Mechatronics Engineer with a specialty in production systems was what I studied at Instituto Tecnológico de Tlalnepantla in the State of Mexico. Always focused on learning more about automation equipment, I entered this world, after almost 12 years and now living in the city of Querétaro I have had the opportunity to participate in many projects. I enjoy sharing knowledge and always take advantage of any opportunity to share my passion, Automation!'
  },
  {
    id: 51,
    conference: 'La digitalización de la distribución eléctrica en la industria 4.0',
    name: 'Manuel Hernández',
    company: 'Hitachi Energy ',
    rol: 'Grid Automation Specialist México',
    avatar: '/speakers/ManuelHdzBaltazar.webp',
    sketch: 'Manuel es Grid Automation Specialist en Hitachi Energy México. Ha ocupado diversos cargos técnico-comerciales en otras Empresas Multinacionales del Sector Energético específicamente en las áreas de digitalización y automatización de redes eléctricas. En su posición, es responsable de promover la digitalización en el sector industrial y privado a través de las tecnologías de vanguardia de Hitachi Energy. Manuel cuenta con más de 13 años de experiencia en el sector energético. Tiene una Licenciatura en Ingeniería Eléctrica por parte del Instituto Politécnico Nacional en el cual es docente a Nivel Superior.',
    sketch_eng: 'Manuel is Grid Automation Specialist at Hitachi Energy Mexico. He has held various technical-commercial positions in other Multinational Companies in the Energy Sector specifically in the areas of digitization and automation of electrical grids. In his position, he is responsible for promoting digitization in the industrial and private sector through Hitachi Energy\'s cutting-edge technologies. Manuel has more than 13 years of experience in the energy sector. He holds a Bachelor\'s degree in Electrical Engineering from the National Polytechnic Institute where he teaches at a higher level.'
  },
  {
    id: 52,
    conference: 'Exploradores del mañana: “Un viaje al futuro con ayuda de la tecnología”',
    name: 'José Enrique Poceros Pérez',
    company: 'Roue',
    rol: 'CTO',
    avatar: '/speakers/JoseEnriquezPoceros.webp',
    sketch: 'Ingeniero en Comunicaciones y Electrónica. Cuenta con 9 años en la industria, donde ha logrado sobresalir gracias a su entusiasmo y conocimientos en Minería, Energías renovables, Gas y Petróleo; desarrollándose en las áreas de Ciberseguridad, IoT, Industrial Control Systems y soluciones de diversas tecnologías. Ha colaborado como arquitecto de soluciones como: Estandarización de ciberseguridad para parques fotovoltaicos y parques eólicos, así como el desarrollo y ejecución de proyectos como Arquitecturas: de comunicación para gasoductos, de ciberseguridad para terminales de refinados, de comunicación de parques eólicos, de comunicación y ciberseguridad de estaciones de servicio, de comunicación para sistema de manufactura de envases, y de comunicación inalámbrica para la industria petroquímica; así como arquitecto de soluciones en el Oil and Gas ATC y ahora en su transición hacia el IoT HUB, como parte de las inversiones de Cisco del programa Country Digital Acceleration.',
    sketch_eng: 'Engineer in Communications and Electronics. He has 9 years in the industry, where he has managed to excel thanks to his enthusiasm and knowledge in Mining, Renewable Energy, Gas and Oil; developing in the areas of Cybersecurity, IoT, Industrial Control Systems and solutions of various technologies. He has collaborated as architect of solutions such as: Cybersecurity standardization for photovoltaic parks and wind farms, as well as the development and execution of projects such as Architectures: Communication for gas pipelines, cybersecurity for refined terminals, communication for wind farms, communication and cybersecurity for gas stations, communication for packaging manufacturing system, and wireless communication for the petrochemical industry; as well as solutions architect in the Oil and Gas ATC and now in its transition to the IoT HUB, as part of Cisco\'s investments in the Country Digital Acceleration program.'
  },
  {
    id: 53,
    conference: 'La ciberseguridad en la fábrica del futuro',
    name: 'Sergio Navarrete',
    company: 'IQSEC',
    rol: 'Presidente',
    avatar: '/speakers/SergioNavarrete.webp',
    sketch: 'Sergio Navarrete, Presidente, IQSEC',
    sketch_eng: 'Sergio Navarrete, Presidente, IQSEC'
  },
  {
    id: 54,
    conference: 'Innovación y retos de la agricultura',
    name: 'Alejandro Valdés Romero',
    company: 'Siemens México, Centroamérica y el Caribe',
    rol: 'Account Manager para Agronegocios e industria llantera',
    avatar: '/speakers/A_Valdes.webp',
    sketch: 'Ingeniero Mecatrónico con más de 8 años de experiencia en automatización industrial, con alta especialización en gemelos digitales, digitalización y agricultura protegida. Actualmente colabora con los agronegocios y la industria de llantas para brindar valor a estos sectores a través de innovaciones tecnológicas.',
    sketch_eng: 'Mechatronic Engineer with more than 8 years of experience in industrial automation, with high specialization in digital twins, digitalization and protected agriculture. He currently collaborates with agribusiness and the tire industry to provide value to these sectors through technological innovations.'
  },
  {
    id: 55,
    conference: 'Oportunidades Industriales México - Japón',
    name: 'Takao Nakahata',
    company: 'JETRO',
    rol: 'Director General',
    avatar: '/speakers/takaoNakahata.webp',
    sketch: 'Director General, JETRO México, Japan External Trade Organization (JETRO), Licenciatura de Estudios Hispánicos, Universidad de Sofía en Tokio, Diploma de Estudios Internacionales y de América Latina, Diploma de Estudios Hispánicos, Universidad Complutense de Madrid. Especialidad Economía e industria de México y América Latina, Tratados de libre comercio de América Latina y sus reglas de origen Industria automotriz de América Latina',
    sketch_eng: 'General Director, JETRO Mexico, Japan External Trade Organization (JETRO), Bachelor of Hispanic Studies, Sophia University in Tokyo, Diploma of International and Latin American Studies, Diploma of Hispanic Studies, Universidad Complutense de Madrid. Specialty Economics and industry of Mexico and Latin America, Latin American Free Trade Agreements and their rules of origin Latin American automotive industry.'
  },
  {
    id: 56,
    conference: 'OT/IT Integration – La importancia de los datos en la producción para mejorar la productividad',
    name: 'Gonzalo Matteoda',
    company: 'Siemens Mexico, Centroamérica Y El Caribe',
    rol: 'Head of Customer Services',
    avatar: '/speakers/GonzaloMatteoda.webp',
    sketch: 'Es Ingeniero en Electrónica, egresado de la Universidad Nacional de Córdoba y cuenta con una Maestría en Administración de Negocios, en la Universidad Del Valle de México. Tiene más de 20 años de experiencia en la industria, desempeñando funciones como ingeniero de servicios en automatización, líder de proyectos, gerente de proyectos, gerente de contratos de mantenimiento, ventas y administración de negocios. Su carrera la inició en Argentina desarrollando servicios y proyectos en la industria siderúrgica, para luego emprender experiencias en diferentes países de la región y el mundo, como en Venezuela, Brasil, México, Estados Unidos, España y Sudáfrica, entre otros. Su carrera dentro de Siemens comenzó en el año 2009 como Gerente de Proyectos en Servicios de Automatización e Ingeniería Eléctrica para la industria siderúrgica y minera en Mesoamérica, logrando el desarrollo de importantes proyectos y contratos de servicios. Actualmente, Gonzalo es director de la unidad de negocios de Digital Industries Customer Services, que tiene como objetivo ofrecer soluciones con un portafolio clásico y servicios digitales en el que cuenta con el apoyo de más de 100 colaboradores; adicionalmente es responsable de la dirección de ventas para la región norte de México.',
    sketch_eng: 'He is an Electronics Engineer, graduated from the National University of Cordoba and has a Master\'s Degree in Business Administration from the Del Valle University of Mexico. He has more than 20 years of experience in the industry, performing functions such as automation services engineer, project leader, project manager, maintenance contracts manager, sales and business administration. He began his career in Argentina developing services and projects in the steel industry, and then undertook experiences in different countries in the region and the world, such as Venezuela, Brazil, Mexico, United States, Spain and South Africa, among others. His career within Siemens began in 2009 as Project Manager in Automation and Electrical Engineering Services for the steel and mining industry in Mesoamerica, achieving the development of important projects and service contracts. Currently, Gonzalo is director of the Digital Industries Customer Services business unit, which aims to offer solutions with a classic portfolio and digital services in which he has the support of more than 100 employees; additionally he is responsible for the sales management for the northern region of Mexico.'
  },
  {
    id: 57,
    conference: 'El futuro de la automatización en procesos industriales',
    name: 'César González',
    company: 'Siemens Mexico, Centroamérica y el Caribe',
    rol: 'Especialista de ventas en procesos de automatización',
    avatar: '/speakers/CesarGonzalez.webp',
    sketch: 'Ingeniero en Control y Automatización por el Instituto Politécnico Nacional. Cuenta con más de 20 años de experiencia en procesos de automatización, seguridad e ingeniería de desarrollo, en sectores energéticos como el del gas o el petróleo.',
    sketch_eng: 'Engineer in Control and Automation from the National Polytechnic Institute. He has more than 20 years of experience in automation processes, safety and development engineering in energy sectors such as gas and oil.'
  },
  {
    id: 58,
    conference: 'El talento no tiene género',
    name: 'Montserrat Montesinos',
    company: 'DICISA',
    rol: 'CEO',
    avatar: '/speakers/monserratMontesinos.webp',
    sketch: ' Montserrat Montesinos, CEO, DICISA ',
    sketch_eng: 'Montserrat Montesinos, CEO, DICISA '
  },
  {
    id: 59,
    conference: 'El talento no tiene género',
    name: 'Daniela Arce',
    company: 'Mitsubishi Electric Automation',
    rol: 'Head of Marketing Communications',
    avatar: '/speakers/DanielaArce.webp',
    sketch: 'Daniela Arce, Head of Marketing Communications, Mitsubishi Electric Automation',
    sketch_eng: 'Daniela Arce, Head of Marketing Communications, Mitsubishi Electric Automation'
  },
  {
    id: 60,
    conference: 'Oportunidades Industriales México - Japón',
    name: 'Víctor Fuentes',
    company: 'Mitsubishi Electric Automation',
    rol: 'Senior Manager Sales & Marketing',
    avatar: '/speakers/victorFuentes.webp',
    sketch: 'Víctor Fuentes, Senior Manager, Sales & Marketing at Mitsubishi Electric Automation',
    sketch_eng: 'Víctor Fuentes, Senior Manager, Sales & Marketing at Mitsubishi Electric Automation'
  },
  {
    id: 61,
    conference: 'Monozukuri, manufactura y digitalización',
    name: 'Felipe Rivera',
    company: 'Mitsubishi Electric Automation',
    rol: 'Director General',
    avatar: '/speakers/felipeRivera.webp',
    sketch: 'Felipe Rivera, Director General, Mitsubishi Electric Automation',
    sketch_eng: 'Felipe Rivera, Director General, Mitsubishi Electric Automation'
  },
  {
    id: 62,
    conference: 'Monozukuri, manufactura y digitalización',
    name: 'Javier Cárdenas',
    company: 'Mitsubishi Electric Automation',
    rol: 'Gerente de Producto',
    avatar: '/speakers/JavierCardenas.webp',
    sketch: 'Javier Cárdenas, Gerente de Producto, Mitsubishi Electric Automation',
    sketch_eng: 'Javier Cárdenas, Gerente de Producto, Mitsubishi Electric Automation'
  },
  {
    id: 63,
    conference: 'Experiencia de Mantenimiento Preventivo',
    name: 'Gonzalo Pineda',
    company: 'Mitsubishi Electric Automation',
    rol: 'Gerente Regional de Servicio',
    avatar: '/speakers/GonzaloPineda.webp',
    sketch: 'Gonzalo Pineda, Gerente Regional de Servicio, Mitsubishi Electric Automation ',
    sketch_eng: 'Gonzalo Pineda, Gerente Regional de Servicio, Mitsubishi Electric Automation'
  },
  {
    id: 64,
    conference: 'Una fábrica es tan inteligente como la red que la conecta',
    name: 'Bruno Luciano',
    company: 'Nokia',
    rol: 'Director de ventas empresariales',
    avatar: '/speakers/brunoLuciano.webp',
    sketch: 'Tiene más de 15 años de experiencia en el sector de telecomunicaciones, desempeñando diferentes roles en su carrera posicionando soluciones de Nokia para la industria, con amplio enfoque en Digitalización del sector Telco e industria para llevar a cabo la transformación hacia Industria 4.0 y Tecnología 5G; ha logrado aportar una visión tecnológica y de negocios global por haber vivido en diferentes países en los últimos años. Se ha logrado consolidar como un referente en el sector. Es Ingeniero Eléctrico y en Electrónica por la Universidad Bandeirantes y tiene un MBA ejecutivo por la Fundación Don Cabral, ambas ubicadas en Brasil.',
    sketch_eng: 'He has more than 15 years of experience in the telecommunications sector, playing different roles in his career positioning Nokia solutions for the industry, with a broad focus on digitization of the Telco sector and industry to carry out the transformation to Industry 4.0 and 5G technology; he has managed to bring a technological and global business vision for having lived in different countries in recent years. He has managed to consolidate himself as a reference in the sector. He holds a degree in Electrical Engineering and Electronics from Bandeirantes University and an Executive MBA from the Don Cabral Foundation, both located in Brazil.'
  },
  {
    id: 65,
    conference: 'Una fábrica es tan inteligente como la red que la conecta',
    name: 'Alfredo González Herrero',
    company: 'Nokia',
    rol: 'Director de desarrollo de negocios',
    avatar: '/speakers/AlfredoGonzalez.webp',
    sketch: 'Colabora con operadores de ferrocarriles, puertos y terminales marítimas, aeropuertos y operadores logísticos de América Latina en su transformación hacia Industria 4.0 con soluciones de redes de misión crítica y redes privadas 4G/5G de Nokia. Coordina una organización dedicada a desarrollar el negocio de NOKIA en nuevos proyectos de manufactura, infraestructura y de transporte y logística. También desarrolla nuevos socios y aliados en el sector. Anteriormente en Nokia, fue Director para Empresas y Gobierno en México, y también Director para la cuenta Telefónica Latinoamérica Norte. Tiene una Maestría en Ingeniería de Telecomunicaciones, por la Universidad Politécnica de Madrid, y un MBA por el IESE Business School de la Universidad de Navarra.',
    sketch_eng: 'He collaborates with railroad operators, ports and maritime terminals, airports and logistics operators in Latin America in their transformation to Industry 4.0 with Nokia\'s mission critical network solutions and private 4G/5G networks. He coordinates an organization dedicated to develop NOKIA\'s business in new manufacturing, infrastructure and transportation and logistics projects. He also develops new partners and allies in the sector. Previously at Nokia, he was Director for Enterprise and Government in Mexico, and also Director for the Telefonica Latin America North account. He holds a Master\'s degree in Telecommunications Engineering from the Polytechnic University of Madrid, and an MBA from the IESE Business School of the University of Navarra.'
  },
  {
    id: 66,
    conference: 'Una fábrica es tan inteligente como la red que la conecta',
    name: 'Santiago Escalona',
    company: 'Nokia',
    rol: 'Director de Marketing estratégico',
    avatar: '/speakers/SantiagoEscalona.webp',
    sketch: 'Cuenta con alrededor de 20 años de experiencia en el sector de telecomunicaciones, desempeñando roles tanto técnicos como comerciales, de liderazgo de ventas y marketing. Actualmente, dirige el posicionamiento de Nokia y ayuda a la generación de negocios en el mercado Latinoamericano, con amplio enfoque en Transformación Digital, Industria 4.0 y Tecnología 5G, logrando aportar una visión tecnológica y de negocios global por haber vivido 9 años en China, Nigeria, Ecuador, Panamá, Argelia, Marruecos y Suecia, lográndose consolidar como un referente en el sector. Es Ingeniero en Comunicaciones y Electrónica, por el Instituto Politécnico Nacional de México, y tiene un diplomado master en Marketing por Wharton School, de la Universidad de Pennsylvania.',
    sketch_eng: 'He has about 20 years of experience in the telecommunications sector, playing both technical and commercial roles, sales and marketing leadership. Currently, he leads the positioning of Nokia and helps to generate business in the Latin American market, with a broad focus on Digital Transformation, Industry 4.0 and 5G Technology, managing to bring a technological and global business vision for having lived 9 years in China, Nigeria, Ecuador, Panama, Algeria, Morocco and Sweden, managing to consolidate as a reference in the sector. He holds a degree in Communications and Electronics Engineering from the National Polytechnic Institute of Mexico, and a Master\'s degree in Marketing from the Wharton School of the University of Pennsylvania.'
  },
  {
    id: 67,
    conference: 'Industria 4.0: desde una perspectiva sustentable y humana',
    name: 'María de la Luz Alanís Uriarte',
    company: '',
    rol: 'Consultora ',
    avatar: '/speakers/LuzAlanis.webp',
    sketch: 'Promotora de la empatía profesional, de un desarrollo organizacional integral, inclusivo y sostenible. Máster en Gestión Ambiental, por la Escuela Europea de Dirección y Empresa. Tiene una década de experiencia en la industria de alimentos y bebidas. Ha participado en la generación e implementación de estrategias y herramientas de Industria 4.0 en más de 100 líneas de producción en 10 países distintos, incrementando el bienestar y seguridad de los colaboradores garantizando un payback saludable. Diseñó estrategias y material de capacitación de la estrategia de sustentabilidad en 27 plantas de producción en 11 países. Ha ejecutado cursos in situ. Diseñó, configuró e implementó un sistema de seguridad industrial en 13 plantas de producción en 8 países.',
    sketch_eng: 'Promoter of professional empathy, comprehensive, inclusive and sustainable organizational development. Master\'s degree in Environmental Management from the European School of Management and Business. She has a decade of experience in the food and beverage industry. She has participated in the generation and implementation of Industry 4.0 strategies and tools in more than 100 production lines in 10 different countries, increasing the welfare and safety of employees and ensuring a healthy payback. Designed strategies and training material for the sustainability strategy in 27 production plants in 11 countries. Executed on-site courses. Designed, configured and implemented an industrial safety system in 13 production plants in 8 countries.'
  },
  {
    id: 68,
    conference: 'Industria 4.0: desde una perspectiva sustentable y humana',
    name: 'Valeria Baudino',
    company: 'Nokia Enterprise',
    rol: 'Directora de Estrategia Comercial ',
    avatar: '/speakers/ValeriaBaudino.webp',
    sketch: 'Cuenta con más de 25 años de experiencia en el sector de telecomunicaciones, desempeñando distintos roles en operaciones y liderando proyectos en varios países de Latinoamérica. Actualmente, se desempeña como Directora de Estrategia Comercial para Latinoamérica para el mercado Enterprise, enfocado en los sectores de Gobierno e Industrias, tales como Energía, Minería, Transporte, Manufactura y Logística. Es Ingeniera Industrial por el Instituto Tecnológico de Buenos Aires, y tiene un MBA por la Universidad del CEMA de Buenos Aires, y un Máster en Program Management del Stevens Institute of Technology University.',
    sketch_eng: 'She has more than 25 years of experience in the telecommunications sector, playing different roles in operations and leading projects in several Latin American countries. Currently, she is the Director of Business Strategy for Latin America for the Enterprise market, focused on the Government and Industry sectors, such as Energy, Mining, Transportation, Manufacturing and Logistics. She holds an Industrial Engineering degree from the Instituto Tecnológico de Buenos Aires, an MBA from the Universidad del CEMA in Buenos Aires, and a Master\'s degree in Program Management from Stevens Institute of Technology University.'
  },
  {
    id: 69,
    conference: 'Industria 4.0: desde una perspectiva sustentable y humana',
    name: 'María del Mar López González',
    company: 'Siemens México, Centroamérica y el Caribe',
    rol: 'Process Engineer Manager',
    avatar: '/speakers/MariaMarLopez.webp',
    sketch: 'Cuenta con más de 10 años de experiencia en ingeniería de manufactura. Ha liderado equipos multifuncionales en el diseño de fábricas y en el desarrollo de nuevos procesos. El aumento de la capacidad y la expansión de la planta son algunos de los proyectos más desafiantes y favoritos en los que actualmente ha trabajado. Como gerente, su principal responsabilidad es asegurar que su equipo tenga todas las herramientas y recursos necesarios para completar proyectos, alcanzar objetivos y lograr todo con la más alta calidad, cumpliendo con todos los requisitos de los clientes al menor costo posible. Cuenta con 8 años de experiencia en el lanzamiento de la industria automotriz y en la metodología de preparación de nuevos productos para FORD, HONDA, TOYOTA y KIA (fuera de la herramienta de proceso, revisión de diseño, control de calidad, MRM, SOP, ESC).',
    sketch_eng: 'He has more than 10 years of experience in manufacturing engineering. He has led cross-functional teams in factory design and new process development. Capacity increase and plant expansion are some of the most challenging and favorite projects he has currently worked on. As a manager, his main responsibility is to ensure that his team has all the necessary tools and resources to complete projects, achieve goals and accomplish everything with the highest quality, meeting all customer requirements at the lowest possible cost. He has 8 years of experience in the automotive industry launch and new product preparation methodology for FORD, HONDA, TOYOTA and KIA (out of process tooling, design review, quality control, MRM, SOP, ESC).'
  },
  {
    id: 70,
    conference: 'Industria 4.0: desde una perspectiva sustentable y humana',
    name: 'Sandra Aun',
    company: 'MX Regional Ops - Mexico, Cisco Systems',
    rol: 'Gerente Direct Fulfillment',
    avatar: '/speakers/SandraAun2.webp',
    sketch: 'Es responsable de habilitar y administrar las acciones de manufactura y todas las actividades de la cadena de suministro y el cumplimiento de embarques directos. Se encarga de garantizar la continuidad del suministro, el dimensionamiento de la capacidad y el cumplimiento de los planes de construcción para lograr métricas clave, presupuestos y satisfacción del cliente. Con más de 18 años de experiencia en la cadena de suministro y operaciones de fabricación, ha ocupado varios puestos de liderazgo, donde ha guiado, construido y escalado equipos en México, Europa y América del Norte con logros en el desarrollo e implementación de estrategias de cadena de suministro completas con flexibilidad, competitividad de tiempos y costos y entrega a tiempo a clientes. Forma parte del último eslabón de la estrategia de Cisco de cadena de suministro. Es una firme defensora y patrocinadora de las mujeres. Apasionada por el liderazgo y por fomentar la próxima generación de mujeres a través de la acción y el ejemplo para ocupar puestos de liderazgo. Es Licenciada en Administración de Empresas, y tiene una maestría en Administración y Dirección de Empresas, del ITESM. Cuenta con Certificación en Compras y Control de Inventarios, así como en Green Belt del ISCM.',
    sketch_eng: 'Responsible for enabling and managing manufacturing actions and all supply chain activities and direct shipment fulfillment. He is responsible for ensuring continuity of supply, capacity sizing and compliance with build plans to achieve key metrics, budgets and customer satisfaction. With over 18 years of experience in supply chain and manufacturing operations, he has held various leadership positions, where he has guided, built and scaled teams in Mexico, Europe and North America with achievements in developing and implementing complete supply chain strategies with flexibility, time and cost competitiveness and on-time delivery to customers. She is part of the final link in Cisco\'s supply chain strategy. She is a strong advocate and supporter of women. Passionate about leadership and fostering the next generation of women through action and example into leadership roles. She holds a Bachelor\'s Degree in Business Administration and a Master\'s Degree in Business Administration from ITESM. She is certified in Purchasing and Inventory Control, as well as ISCM Green Belt.'
  },
  {
    id: 71,
    conference: 'Digital Transformation: Build smart apps, build apps smarter',
    name: 'Kenya Castellanos',
    company: 'Siemens Digital Industries Software Mexico, Centroamerica Y El Caribe',
    rol: 'Gerente Direct Fulfillment',
    avatar: '/speakers/KenyaCastellanos.webp',
    sketch: 'Ingeniera Industrial y de Sistemas con experiencia en todo el ciclo de vida del desarrollo de software (SDLC), incluido el diseño, la implementación y las pruebas.Especialista en el manejo de herramientas de desarrollo de software que incluyen Python, VBA, R, SQL, JS, entre otras, así como desarrollo en plataformas low – code.',
    sketch_eng: 'Industrial and Systems Engineer with experience in the entire software development lifecycle (SDLC), including design, implementation and testing, with expertise in the use of software development tools including Python, VBA, R, SQL, JS, among others, as well as development on low-code platforms.'
  },
  {
    id: 72,
    conference: 'Cómo aumentar la productividad y la calidad en el proceso de soldadura por resistencia',
    name: 'Rosario Ramírez Lugo',
    company: 'Bosch Rexroth',
    rol: 'Business Development Electrical Resistance Welding',
    avatar: '/speakers/RosarioRamirez.webp',
    sketch: 'Rosario es Ingeniero en Electrónica por el ITLM y obtuvo el grado de Maestro en Ingeniería Electrónica por la UASLP. Se ha desempeñado en la industria durante más de 10 años. Desde octubre del 2017 forma parte de Bosch Rexroth, donde se ha desempeñad0 en el puesto de Ingeniero de Aplicaciones de Automatización y Electrificación realizando actividades como: dimensionamiento, puesta en marcha, soporte y entrenamiento para proyectos en la industria. Actualmente es desarrollador de negocios de la tecnología ERW (Electrical Resistance Welding), cuyo rol consiste en promover esta tecnología a través del uso de las herramientas disponibles en el portafolio de Bosch Rexroth.',
    sketch_eng: 'Rosario holds a degree in Electronics Engineering from ITLM and a Master\'s degree in Electronics Engineering from UASLP. He has worked in the industry for more than 10 years. Since October 2017 he is part of Bosch Rexroth, where he has served in the position of Automation and Electrification Applications Engineer performing activities such as: sizing, commissioning, support and training for projects in the industry. He is currently a business developer of ERW (Electrical Resistance Welding) technology, whose role is to promote this technology through the use of the tools available in the Bosch Rexroth portfolio.'
  },
  {
    id: 73,
    conference: 'Exploradores del mañana: “Un viaje al futuro con ayuda de la tecnología”',
    name: 'Rubén Rojas',
    company: 'Plannet',
    rol: ' Colaboration Product Manager',
    avatar: '/speakers/rubenRojas.webp',
    sketch: 'Ruben Rojas, Colaboration Product Manager, Plannet',
    sketch_eng: 'Ruben Rojas, Jefe de Producto de Colaboración, Plannet'
  },
  {
    id: 74,
    conference: 'Trituradora Tlazazalca, Transformación 4.0 de procesos manuales a digitales',
    name: 'Alejandro Sánchez',
    company: 'ISAT Telecomunicaciones',
    rol: 'Director de Desarrollo en Integraciones',
    avatar: '/speakers/AlejandroChavez.webp',
    sketch: 'Alejandro Sánchez, Director de Desarrollo en Integraciones, ISAT Telecomunicaciones',
    sketch_eng: 'Alejandro Sánchez, Director de Desarrollo en Integraciones, ISAT Telecomunicaciones'
  },
  {
    id: 75,
    conference: 'MX-System - Automatización de máquinas y sistemas sin tableros de control',
    name: 'Jonathan David Ramírez Cruz',
    company: 'Beckhoff Automation',
    rol: 'Gerente de sector industrial',
    avatar: '/speakers/jonathanRamirez.webp',
    sketch: 'Jonathan David Ramirez Cruz, nacido en el Estado de México Egresado del Instituto Politécnico Nacional con el título de Ingeniero en control y automatización. Ha desarrollado una carrera profesional donde el interés principal ha sido la tecnología. Se ha enfocado a la automatización y control de los procesos industriales en os diferentes sectores industriales del país y centro américa cuenta con una experiencia en la industria de 13 años actualmente se desempeña como gerente de sector industrial dentro de Beckhoff México y busca dejar huella con cada uno de los clientes que asesora.',
    sketch_eng: 'Jonathan David Ramirez Cruz, born in the State of Mexico he graduated from the Instituto Politécnico Nacional with the title of Engineer in control and automation. He has developed a professional career where his main interest has been technology. he has focused on the automation and control of industrial processes in the different industrial sectors of the country and Central America. He has 13 years of experience in the industry. He currently works as an industrial sector manager within Beckhoff México and seeks to leave his mark with each of the clients he advises.'
  },
  {
    id: 76,
    conference: 'Desmitificando la Ciberseguridad OT',
    name: 'Oscar Alberto Aldana ',
    company: 'Cybolt',
    rol: 'Director de Arquitectura Cybolt',
    avatar: '/speakers/oscarAlberto.webp',
    sketch: 'Certificaciones de industria GIAC Response and Industrial Defense, GIAC Certified Incident Handler, GIAC Certified Forensic Examiner, GIAC Certified Forensic Analyst y GIAC Network Forensic Analyst, su desempeño lo llevaron a estar en el Advisory Board de GIAC.  También posee diversas certificaciones de fabricantes como lo son CCNP Security, CCNA, CCNA Security, CCNA CyberOps, entre otras.  Ha impartido diferentes conferencias cubriendo el ramo de seguridad y rendimiento en redes empresariales e industriales.',
    sketch_eng: 'Industry certifications GIAC Response and Industrial Defense, GIAC Certified Incident Handler, GIAC Certified Forensic Examiner, GIAC Certified Forensic Analyst and GIAC Network Forensic Analyst, his performance led him to be on the Advisory Board of GIAC.  He also holds several certifications from manufacturers such as CCNP Security, CCNA, CCNA Security, CCNA CyberOps, among others.  He has given several conferences covering security and performance in enterprise and industrial networks.'
  },
  {
    id: 77,
    conference: 'Desmitificando la Ciberseguridad OT',
    name: 'Christian Cruz Valdez',
    company: 'Claroty',
    rol: 'Regional Manager North Latam',
    avatar: '/speakers/ChristianCruz.webp',
    sketch: 'Con más de 20 años de experiencia en la industria de TI, gran parte ellos en el segmento de ciberseguridad, con empresas como Juniper, Nokia, Dell y A10.  Estuvo involucrado en proyectos emblemáticos de TI para México durante los últimos años. ahora responsable de desarrollar el mercado de seguridad OT para la industria de Manufactura para México y el Norte de Latinoamerica.',
    sketch_eng: 'With more than 20 years of experience in the IT industry, much of it in the cybersecurity segment, with companies such as Juniper, Nokia, Dell and A10.  He was involved in emblematic IT projects for Mexico during the last years. Now responsible for developing the OT security market for the Manufacturing industry for Mexico and Northern Latin America.'
  },
  {
    id: 78,
    conference: 'Revolucionando la forma de gestionar los activos con HxGN EAM',
    name: ' Carlos Odreman',
    company: 'Hexagon Channel Partner',
    rol: 'Experto en HxGN EAM ',
    avatar: '/speakers/Carlos-odreman.webp',
    sketch: 'Carlos es Ingeniero en sistemas con más de 25 años de experiencia como business solution senior consultant en todo lo concerniente a tecnologías de la información, especialmente en temas relacionados a gestión de mantenimiento y control de activos de grandes corporaciones. A participado en numerosos proyectos de implementación, en clientes de diferentes verticales industriales, ubicadas a lo largo de todo mundo; lo que le ha permitido forjar una reputación respetable en toda la base instalada del software HxGN EAM y convertirse en una referencia importante. Carlos posee su propia organización, de la cual hoy en día es el director general ofreciendo junto a su equipo, toda su experiencia a las empresas que deseen evolucionar hacia niveles de Madurez del Mantenimiento 4.0 y 5.0',
    sketch_eng: 'Carlos is a systems engineer with more than 25 years of experience as a senior business solution consultant in everything related to information technology, especially in issues related to maintenance management and asset control of large corporations. He has participated in numerous implementation projects for clients in different industry verticals, located throughout the world, which has allowed him to forge a respectable reputation throughout the installed base of HxGN EAM software and become an important reference. Carlos owns his own organization, of which today he is the CEO, offering, together with his team, all his experience to companies wishing to evolve towards Maintenance Maturity Levels 4.0 and 5.0.'
  },
  {
    id: 79,
    conference: 'Revolucionando la forma de gestionar los activos con HxGN EAM',
    name: 'Esteban Papp',
    company: 'Nifersa Information Technology',
    rol: ' Gerente de Comercial ',
    avatar: '/speakers/EstebanPapp.webp',
    sketch: 'Esteban cuenta con una amplia trayectoria en el área de Mantenimiento Industrial, con más de 25años en el sector Automotriz entre otros. Desempeñando cargos Gerenciales relacionado con Servicios Postventa, Operaciones y Logística, Producción, Proyectos y Comercialización. Esteban es Ingeniero Especializado en Tecnología Automotriz con Postgrado de Calidad y Productividad, Graduado en la Universidad de Carabobo, Venezuela. Actualmente su rol principal está enfocado en el desarrollo de la Industrias hacia niveles de Madurez del Mantenimiento 4.0 y 5.0 ',
    sketch_eng: 'Esteban has extensive experience in the Industrial Maintenance area, with more than 25 years in the Automotive sector among others. He has held management positions related to After Sales Services, Operations and Logistics, Production, Projects and Marketing. Esteban is an Engineer specialized in Automotive Technology with a postgraduate degree in Quality and Productivity, graduated from the University of Carabobo, Venezuela. Currently his main role is focused on the development of Industries towards Maintenance Maturity Levels 4.0 and 5.0.'
  },
  {
    id: 80,
    conference: 'Panel Twin-Transition – Eficiencia Energética – Energías Renovables',
    name: 'Enrique Chávez',
    company: 'Eaton N.n.',
    rol: 'Director de Operaciones LAN & Caribe',
    avatar: '/speakers/enriqueChavez.webp',
    sketch: 'Enrique Chávez: Director de Operaciones LAN & Caribe – Eaton N.n.',
    sketch_eng: 'Enrique Chávez: Director de Operaciones LAN & Caribe – Eaton N.n.'
  },
  {
    id: 81,
    conference: 'Panel Twin-Transition – Eficiencia Energética – Energías Renovables',
    name: 'Giorgia Negro',
    company: 'Siemens',
    rol: 'Energy Engineer',
    avatar: '/speakers/giorginaNegro.webp',
    sketch: 'Ingeniera en Energía por la Universidad Politécnica de Milan, Italia. Con experiencia en    múltiples proyectos de Eficiencia Energética e instalaciones eléctricas y de aire acondicionado. Actualmente desempeña el rol de Solutions Energy Engineer en la División de Energy & Performace Services en la compañía Siemens para México y Centro América.',
    sketch_eng: 'Energy Engineer from the Polytechnic University of Milan, Italy. With experience in multiple projects of Energy Efficiency and electrical and air conditioning installations. She currently holds the role of Solutions Energy Engineer in the Energy & Performance Services Division of Siemens for Mexico and Central America.'
  },
  {
    id: 82,
    conference: 'Panel Twin-Transition – Eficiencia Energética – Energías Renovables',
    name: 'Marco Antonio Guzman',
    company: 'ANES',
    rol: 'Vice-Presidente',
    avatar: '/speakers/marcoAntonio.webp',
    sketch: 'Es Ingeniero Eléctrico del Instituto Politécnico Nacional, trabajo en Telmex como directivo, coordinando a grupos de trabajo técnicos para el despliegue de Infraestructura eléctrica energizando Centrales de Transmisión, Conmutación y Data Center, Operó para el Grupo CARSO Planes de Acción de Eficiencia Energética para empresas de Telecom en México y en America Latina. Es profesor de Posgrado de la Universidad Autónoma de Nuevo León, enfocado en materias de Telecom y Eficiencia energética. Es miembro de la ANES y AMIF. Es coordinador opera=vo de la revisión de estándares de competencia en el CGC EE y ER del CONOCER',
    sketch_eng: 'He is an Electrical Engineer from the National Polytechnic Institute, worked in Telmex as a manager, coordinating technical working groups for the deployment of electrical infrastructure energizing Transmission, Switching and Data Centers, operated for the CARSO Group Energy Efficiency Action Plans for Telecom companies in Mexico and Latin America. He is a postgraduate professor at the Universidad Autónoma de Nuevo León, focused on Telecom and Energy Efficiency. He is a member of ANES and AMIF. He is the operational coordinator of the revision of competency standards in the CGC EE and ER of CONOCER.'
  },
  {
    id: 83,
    conference: 'Panel Twin-Transition – Eficiencia Energética – Energías Renovables',
    name: 'Andreas Müller',
    company: 'CAMEXA',
    rol: 'Director General Adjunto',
    avatar: '/speakers/andreasMuller.webp',
    sketch: 'Andreas Müller – Director General Adjunto de CAMEXA',
    sketch_eng: 'Andreas Müller – Director General Adjunto de CAMEXA'
  },
  {
    id: 84,
    conference: 'Automatización de la Gestión de Mantenimiento',
    name: 'Daniel Alejandro Gomez',
    company: 'Mantenimientos Industriales LIAN/Promotora Energética E3',
    rol: 'Director de Operaciones',
    avatar: '/speakers/DanielGomez.webp',
    sketch: 'Daniel es egresado de La Universidad del Zulia, Venezuela en Ingeniería Mecánica, con una maestría en automatización y control de procesos. Cuenta con 19 años de experiencia en diferentes sectores, incluyendo proyectos de ingeniería en sus diferentes fases (conceptual, básica y detalle) en las áreas de Procesos, Mecánica e Instrumentación para empresas de Oil & Gas. Luego 10 años como coordinador de proyectos y automatización en la industria petroquímica. Actualmente en el sector de Energía desempeña el rol de Director de Operaciones, específicamente en la industria del gas natural (en sus diferentes estados y procesos), biogás, biometano, entre otros combustibles, liderando un equipo técnico especializado para servicio post venta en la atención de tecnología de compresión y periféricos para los procesos productivos de sus clientes a nivel nacional.',
    sketch_eng: 'Daniel graduated from the University of Zulia, Venezuela in Mechanical Engineering, with a master\'s degree in automation and process control. He has 19 years of experience in different sectors, including engineering projects in their different phases (conceptual, basic and detail) in the areas of Processes, Mechanics and Instrumentation for Oil & Gas companies. Then 10 years as project and automation coordinator in the petrochemical industry. Currently in the Energy sector he plays the role of Director of Operations, specifically in the natural gas industry (in its different states and processes), biogas, biomethane, among other fuels, leading a specialized technical team for after-sales service in customer service. of compression technology and peripherals for the production processes of its clients nationwide.'
  },
  {
    id: 85,
    conference: 'Bosch Rexroth: sustentabilidad como habilitador en la Industria conectada',
    name: 'Fabian Badia Gutierrez',
    company: 'Bosch Rexroth',
    rol: 'Sales Regional Manager',
    avatar: '/speakers/fabianBadia.webp',
    sketch: 'Fabian Badia Gutierrez, Sales Regional Manager, Bosch Rexroth',
    sketch_eng: 'Fabian Badia Gutierrez, Sales Regional Manager, Bosch Rexroth'
  }

]
export { speakers }
