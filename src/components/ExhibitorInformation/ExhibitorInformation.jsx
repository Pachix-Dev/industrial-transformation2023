import { Container } from "react-bootstrap";
import { useTranslation } from 'react-i18next'

import "./ExhibitorInformation.css"
import '../ExhibitorProfile/ExhibitorProfile.css'


export function ExhibitorInformation() {
    const { t, i18n } = useTranslation()
    return(
        <>
            <Container fluid className="exhibition-back d-flex justify-content-center align-items-center flex-column">
                <p className="fs-1 fw-bolder mb-5 text-center"> {t("exhibitorReasons.title-exhibitor")} </p><br /><br />
                <div className='gap-5 row row-cols-auto justify-content-center align-items-start' >
                    <a
                        className='home-register col text-center mb-3 text-decoration-none text-white py-3 px-3'
                        href="/hotels"
                        rel='noreferrer'
                    >
                        <span className='d-flex justify-content-evenly align-items-center fw-bold fs-4'>
                            {t("hotels.title")}
                        </span>
                    </a>
                    <a className='home-register col text-center text-decoration-none text-white py-3 px-3' href='/toolkit'>
                        <span className='d-flex justify-content-evenly align-items-center fw-bold fs-4'>
                            Toolkit ITM
                        </span>
                    </a>
                    <a
                        className='home-register col text-center mb-3 text-decoration-none text-white py-3 px-3'
                        href='/files/Floorplan_ITM_2024_31.05.2023.pdf'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <span className='d-flex justify-content-evenly align-items-center fw-bold fs-4'>
                            {t('menu.exhibitors_5')}
                        </span>
                    </a>
                </div>
            </Container>
        </>
    )
}