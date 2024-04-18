import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import './GermanPavilion.css'

export function GermanPavilion() {
    const { t, i18n } = useTranslation()
    return (
        <>
            <Container fluid className="pavilion-back d-flex justify-content-center align-items-center flex-column">
                <p className="fs-1 fw-bolder mb-5 text-center"> {t("germanPavilion.title-exhibitor")} </p><br /><br />
                <div className='gap-5 row row-cols-auto justify-content-center align-items-start' >
                    <a
                        className='home-register col text-center mb-3 text-decoration-none text-white py-3 px-3'
                        href="/files/Fact Sheet German Pavilion_DE.pdf" target="_blank"
                        rel='noreferrer'
                    >
                        <span className='d-flex justify-content-evenly align-items-center fw-bold fs-4'>
                            Facsheet DE
                        </span>
                    </a>
                    <a className='home-register col text-center text-decoration-none text-white py-3 px-3' href='/files/Fact Sheet German Pavilion_EN.pdf' target="_blank">
                        <span className='d-flex justify-content-evenly align-items-center fw-bold fs-4'>
                            Facsheet ENG
                        </span>
                    </a>
                    <a
                        className='home-register col text-center mb-3 text-decoration-none text-white py-3 px-3'
                        href='/files/ITM2024-German Pavilion_Contract.pdf'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <span className='d-flex justify-content-evenly align-items-center fw-bold fs-4'>
                            {t("germanPavilion.agreement")}
                        </span>
                    </a>
                </div>
            </Container>
        </>
    );
}
