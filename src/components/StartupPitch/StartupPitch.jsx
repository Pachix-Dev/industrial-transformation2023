import posterStartupPitch from '../../assets/PosterStartupPitch.webp'
import { Accordion, Col, Container, Row } from 'react-bootstrap'

import './StartupPitch.css'
export function StartupPitch () {
  return (
    <>
      <Container>
        <div className='position-relative mt-5'>
          <video
            width='100%'
            height='auto'
            muted
            loop
            autoPlay
            playsInline
            poster={posterStartupPitch}
          >
            <source
              src='/STARTUP-PITCH-ITM-2023.webm'
              type='video/webm'
            />
          </video>
        </div>
        <p className='mt-5'>
          Te invitamos a presentar tus soluciones en Industrial Transformation México 2023 en nuestra segunda edición del Startup Pitch. Participa y sé uno de los cuatro finalistas que presente ante inversionistas y miembros del jurado en ITM, que tendrá lugar del 4 – 6 de octubre, 2023 en Poliforum León, Guanajuato. Para ser parte del Startup Pitch @ITM2022 sigue los siguientes pasos y envía tu expediente a más tardar el 21 de julio del presente año.
        </p>
        <div className='startup-links-first'>
          <a href='#beneficios'>
            Beneficios
          </a>
        </div>
        <div className='startup-links-first'>
          <a href='/files/startupFAQS.pdf' target='_blank'>
            FAQ
          </a>
        </div>
        <Row className='mt-5'>
          <Col md>
            <div className='header-startup'>
              Etapas del Concurso
            </div>
            <p className='mt-4'>Publicación de la Convocatoria<br />
              Sesiones informativas<br />
              Cierre de Convocatoria<br />

              Publicación de emprendedor seleccionados<br />
              Preparación de pitch y mentorías<br />
              Ensayos on stage @ITM<br />
              Startup Pitch – Demo Day
            </p>
          </Col>
          <Col md>
            <div className='header-startup'>
              Fecha
            </div>
            <p className='mt-4'>
              Junio 2023<br />
              28 de junio y 26 de julio<br />
              04 de agosto<br />
              1 de septiembre<br />
              Del 5 al 30 de septiembre<br />
              05 de octubre<br />
              06 de octubre<br />
            </p>
          </Col>
        </Row>
        <div className='wrapper-startup-links'>
          <a className='startup-links' href='/files/CONVOCATORIA STARTUP PITCH 2023-new.pdf' target='_blank'>DESCARGA LA CONVOCATORIA</a>

          <a className='startup-links' href='https://forms.gle/5iHbJU7Yf1dMcusS9' target='_blank' rel='noreferrer'>ENVÍA TU EXPEDIENTE</a>

          <a className='startup-links' href='/files/startup-AVISOS-DE-PRIVACIDAD.pdf' target='_blank'>AVISOS DE PRIVACIDAD</a>

          <a className='startup-links' href='/files/startupFAQS.pdf' target='_blank'>FAQS</a>
        </div>
        <h1 className='fw-bold text-center mt-5'>Fecha límite de inscripción 04 de agosto de 2023</h1>
        <p className='text-center'>¿Tienes alguna duda sobre el proceso? Contáctanos al
          correo <a href='mailto:eder.rangel@hfmexico.mx' target='_blank' rel='noreferrer'>eder.rangel@hfmexico.mx</a>
        </p>
        <h4 className='mt-5 mb-5 text-danger'>Participa en alguna de las siguientes categorías:</h4>

        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>ÁREAS DE ENFOQUE</Accordion.Header>
            <Accordion.Body>
              1. AI & Machine Learning<br />
              2. Descarbonización<br />
              3. Economía Circular<br />
              4. Logística 4.0
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>TIPO DE TECNOLOGÍA:</Accordion.Header>
            <Accordion.Body>
              1. Data Analytics<br />
              2. Cloud Computing<br />
              3. Sensores<br />
              4. Internet de las Cosas<br />
              5. Inteligencia artificial<br />
              6. Realidad virtual o aumentada<br />
              7. Impresión 3D
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>ÁREAS DE APLICACIÓN: </Accordion.Header>
            <Accordion.Body>
              1. Fábrica digital<br />
              2. Automatización<br />
              3. Manufactura aditiva<br />
              4. Automatización ambiental
            </Accordion.Body>
          </Accordion.Item>
          {/* <Accordion.Item eventKey='3'>
            <Accordion.Header>CATEGORÍA ESPECIAL RETO JETRO: VEHÍCULO CERO EMISIÓN</Accordion.Header>
            <Accordion.Body>
              <img src={logojetro} alt='JETRO' width={250} />
              Participa en esta categoría especial, la cual busca startups dentro de la cadena de suministro de vehículos de cero emisiones. En este sentido se buscan soluciones de vehículos eléctricos, enfocados a las partes, proveeduría, software y todo lo relacionado a este tipo de soluciones.
            </Accordion.Body>
          </Accordion.Item> */}
        </Accordion>
      </Container>
      <section className='mt-5 bg-startup-participar'>
        <Container>
          <h4 className='fw-bold'>Elige participar en alguna de las siguientes etapas de emprendimiento:</h4>
          <p>
            Seed:<br /><br />

            Cuenta con un producto mínimo viable en el mercado, con clientes que comienzan a tener crecimiento (poder demostrar tu tracción de datos). Se cuentan con ventas iniciales. Aquí el foco principal es en la iteración y desarrollo del producto, crecer en usuarios y retención de clientes. Lo ideal es que tenga un inversionista institucional pero no es requerido.<br /><br />

            Serie A:<br /><br />

            Contar con un proyecto de ventas de entre 1 y 2.5 millones de pesos anuales. Cuentas con un producto que encaja en el mercado, deseas tener un escalamiento comercial. Cuenta con equipo de ventas y estás iniciando la creación de un equipo enfocado al cliente para el aumento de ventas y retención del cliente.
          </p>
        </Container>
      </section>
      <Container className='mt-5'>
        <h4 className='fw-bold text-danger'>Prepara tu expediente con los siguientes requisitos:</h4>

        <ul>
          <li>Descripción de tu proyecto en máximo una cuartilla en formato Word o PDF, donde señales claramente la categoría, áreas de aplicación y etapa del emprendimiento a la que estás aplicando.</li>
          <li>
            Documento en Word o PDF la valuación de proyecto.
          </li>
          <li>
            Pitch inicial de 3 minutos en formato de video mp4 o mov.
          </li>
          <li>
            Semblanza o CV de quienes conforman el equipo de trabajo.
          </li>
          <li>
            Cuestionario de postulación que se encuentra en nuestro sitio web.
          </li>
          <li>
            Expediente administrativo.
          </li>
        </ul>
        <p>
          <strong>Persona Física:</strong><br />

          Identificación del representante legal.<br />

          RFC del representante legal.<br />

          Comprobante de domicilio.<br />

          <strong>Persona Moral:</strong><br />

          Acta constitutiva (en caso de aplicar).<br />

          Comprobante de domicilio de la empresa.<br />

          Identificación del representante legal.<br />

          RFC del representante legal.
          <br />
          <br />
          Envía tu expediente a más tardar el 04 de agosto a través de la siguiente forma de Google.
          Recuerda que, para poder completar tu aplicación a la presente convocatoria, deberás asegurarte de que el cuestionario esté completamente lleno con todos los requisitos.

        </p>
        <div id='beneficios'>
          <h4 className='text-danger fw-bold'>Beneficios</h4>

          <p>Acceso a Industrial Transformation México 2023.<br /><br />
            Mentorías de preparación para presentación de Pitch.<br /><br />
            Los proyectos seleccionados para la etapa final, podrán asistir al exclusivo evento de la Noche de Industriales el 3 de octubre en el marco de Industrial Transformation México 2023. (En caso de ser seleccionado, considera tu llegada para esta fecha).<br /><br />
            Al proyecto seleccionado se le otorgará un stand para su participación en la Hannover Messe 2024 en Alemania en el área de Young Tech Enterprises.
          </p>
          {/* <div>
            <img src={logojetro} alt='logo-jetro' width={250} />
            <h4 className='text-danger fw-bold'>Beneficios exclusivos del Reto Jetro
            </h4>
            <ul>
              <li>
                Diagnósticos especiales de parte de JETRO, quien visitará la empresa y difundirá el diagnóstico con su traducción al japonés para poder tener alcance con empresas japonesas.
              </li>
              <li>
                Se agregarán a la base de datos de proveedores mexicanos de JETRO: <a href='https://www.jetro.go.jp/mexico/indusporte.html' target='_blank' className='text-danger text-break' rel='noreferrer'>https://www.jetro.go.jp/mexico/indusporte.html</a>
              </li>
              <li>
                Se le dará una recomendación especial para los eventos de innovación que se celebran en Japón.
              </li>
              <li>
                Estos beneficios son únicamente para esta categoría, no aplican para las demás categorías.
              </li>
            </ul>
        </div> */}
        </div>
      </Container>
      <section className='startup-expediente text-light'>
        <Container>
          <h4>¿Tienes alguna duda sobre el proceso? Contáctanos al correo eder.rangel@hfmexico.mx
          </h4>
          <br /><br />
          <a href='https://forms.gle/5iHbJU7Yf1dMcusS9' target='_blank' rel='noreferrer'>ENVÍA TU EXPEDIENTE</a>
          <p className='mt-5 fw-bold fs-2'>Fecha límite de inscripción 04 de agosto de 2023
          </p>
        </Container>
      </section>
    </>
  )
}
