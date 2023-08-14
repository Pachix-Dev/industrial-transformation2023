import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './WhyVisit.css'
import { GalleryPage } from '../GalleryPage/GalleryPage'
export function WhyVisit () {
  const { t } = useTranslation()
  return (
    <div className='whyvisit-bg pt-5 pb-5'>
      <Container>
        <h1>
          <svg className='pe-3' fill='#e7001e' width={62} viewBox='0 -3.19 54.13 54.13' id='Layer_1' xmlns='http://www.w3.org/2000/svg'>
            <g id='SVGRepo_bgCarrier' strokeWidth='0' />
            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
            <g id='SVGRepo_iconCarrier'>
              <title>cogs</title>
              <path d='M59.77,37.11l-.41-1c1.4-3.17,1.31-3.27,1-3.54l-1.79-1.75-.18-.15h-.21c-.11,0-.44,0-3.16,1.23l-1-.4c-1.3-3.21-1.43-3.21-1.81-3.21H49.72c-.38,0-.52,0-1.73,3.22l-1,.4a17.37,17.37,0,0,0-3.21-1.17h-.24l-1.93,1.89c-.29.28-.39.37,1.09,3.49l-.41,1C39,38.4,39,38.52,39,38.91v2.48c0,.39,0,.52,3.29,1.7l.41,1c-1.4,3.17-1.31,3.26-1,3.54l1.8,1.75.17.15h.21c.11,0,.43,0,3.16-1.24l1,.41c1.3,3.21,1.43,3.21,1.81,3.21h2.53c.38,0,.52,0,1.73-3.22l1-.41a17,17,0,0,0,3.2,1.18h.24l1.95-1.9c.27-.28.37-.38-1.11-3.49l.41-1c3.29-1.27,3.29-1.41,3.29-1.79V38.81C63.07,38.42,63.07,38.28,59.77,37.11ZM51,44.22a4.12,4.12,0,1,1,4.2-4.12A4.16,4.16,0,0,1,51,44.22Z' transform='translate(-8.93 -4.12)' /><path d='M36,22.79l-.53-1.27c1.83-4.14,1.71-4.26,1.35-4.62l-2.34-2.29-.23-.19H34c-.14,0-.57,0-4.13,1.61l-1.31-.53c-1.69-4.19-1.86-4.19-2.36-4.19h-3.3c-.49,0-.68,0-2.25,4.21l-1.31.53a21.5,21.5,0,0,0-4.19-1.53h-.31L12.33,17c-.38.36-.51.49,1.42,4.57l-.53,1.26c-4.29,1.66-4.29,1.82-4.29,2.32v3.24c0,.51,0,.69,4.3,2.23l.54,1.26c-1.83,4.13-1.71,4.26-1.36,4.61l2.34,2.29L15,39h.27c.14,0,.56,0,4.12-1.61l1.31.53c1.69,4.19,1.86,4.19,2.36,4.19h3.3c.51,0,.69,0,2.26-4.21l1.31-.53a21.5,21.5,0,0,0,4.19,1.53h.31L37,36.38c.36-.36.48-.49-1.44-4.55l.53-1.26c4.29-1.66,4.29-1.83,4.29-2.33V25C40.34,24.5,40.34,24.32,36,22.79ZM24.64,32.08a5.39,5.39,0,1,1,5.48-5.39A5.46,5.46,0,0,1,24.64,32.08Z' transform='translate(-8.93 -4.12)' /><path d='M58,11.62l-.35-.83c1.2-2.71,1.12-2.79.89-3L57,6.28l-.15-.13h-.18A9.91,9.91,0,0,0,54,7.2l-.86-.34c-1.1-2.74-1.22-2.74-1.54-2.74H49.47c-.33,0-.45,0-1.48,2.75l-.85.34a14.14,14.14,0,0,0-2.74-1h-.2L42.56,7.83c-.25.24-.34.32.92,3l-.34.83c-2.8,1.08-2.8,1.18-2.8,1.51v2.12c0,.33,0,.45,2.8,1.45l.35.82c-1.19,2.71-1.11,2.79-.88,3l1.53,1.49.15.14h.18a10,10,0,0,0,2.69-1.06l.85.35c1.11,2.73,1.22,2.73,1.55,2.73h2.15c.33,0,.45,0,1.48-2.74l.85-.35a14.89,14.89,0,0,0,2.73,1H57l1.66-1.62c.23-.23.31-.32-.94-3L58,16.7c2.8-1.09,2.8-1.2,2.8-1.52V13.07C60.84,12.73,60.84,12.62,58,11.62Zm-7.44,6.06a3.52,3.52,0,1,1,3.58-3.51A3.56,3.56,0,0,1,50.59,17.68Z' transform='translate(-8.93 -4.12)' />
            </g>
          </svg>
          {t('visitorReasons.title_1')}
        </h1>
        <h4>{t('visitorReasons.title_2')}</h4>
        <p>
          {t('visitorReasons.description_1')}
        </p>
        <p>
          {t('visitorReasons.description_2')}
        </p>
        <Row>
          <Col>
            <ul className='whyvisit-list'>
              <li>
                <img src='/whyvisit_1.png' alt='digital transformation' width={85} /> {t('visitorReasons.description_4')}
              </li>
              <li>
                <img src='/whyvisit_2.png' alt='digital transformation' width={85} /> {t('visitorReasons.description_5')}
              </li>
              <li>
                <img src='/whyvisit_3.png' alt='digital transformation' width={85} /> {t('visitorReasons.description_6')}
              </li>
            </ul>
          </Col>
          <Col>
            <ul className='whyvisit-list'>
              <li>
                <img src='/whyvisit_4.png' alt='digital transformation' width={85} /> {t('visitorReasons.description_7')}
              </li>
              <li>
                <img src='/whyvisit_5.png' alt='digital transformation' width={85} /> {t('visitorReasons.description_8')}
              </li>
              <li>
                <svg width={85} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='#ffffff'><g id='SVGRepo_bgCarrier' stroke-width='0' /><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round' /><g id='SVGRepo_iconCarrier'><path d='M2.898 12.581a2.467 2.467 0 0 1 2.073-.538 2.38 2.38 0 0 1 1.42.871l.419-1.023a3.39 3.39 0 0 0-.707-.489 2.5 2.5 0 1 0-3.215-.006 3.454 3.454 0 0 0-.631.418A3.491 3.491 0 0 0 1 14.5V16h1v-1.5a2.492 2.492 0 0 1 .898-1.919zM3 9.5A1.5 1.5 0 1 1 4.5 11 1.502 1.502 0 0 1 3 9.5zm18.103 1.902a2.5 2.5 0 1 0-3.215-.007 3.448 3.448 0 0 0-.631.419c-.026.021-.044.05-.07.072l.412 1.006a2.407 2.407 0 0 1 2.372-.849A2.608 2.608 0 0 1 22 14.646V16h1v-1.354a3.647 3.647 0 0 0-1.897-3.244zM18 9.5a1.5 1.5 0 1 1 1.5 1.5A1.502 1.502 0 0 1 18 9.5zM10 9V8a1.99 1.99 0 0 1 .764-1.572 2.02 2.02 0 0 1 1.739-.367A2.08 2.08 0 0 1 14 8.119V9h1v-.88a3.173 3.173 0 0 0-1.445-2.678 2.5 2.5 0 1 0-3.1.009 2.956 2.956 0 0 0-.31.192A2.984 2.984 0 0 0 9 8v1zm.5-5.5A1.5 1.5 0 1 1 12 5a1.502 1.502 0 0 1-1.5-1.5zm9.463 17.81l-.926.38L14.664 11H9.336L4.963 21.69l-.926-.38L8.41 10.622A.997.997 0 0 1 9.336 10h5.328a.996.996 0 0 1 .925.62z' /><path fill='none' d='M0 0h24v24H0z' /></g></svg> {t('visitorReasons.description_9')}
              </li>
            </ul>
          </Col>
        </Row>
        <GalleryPage />

        <div className='visitorprofile-description'>
          <h1>{t('visitorProfile.buyers.title')}</h1>
          <p>{t('visitorProfile.buyers.item_1')}</p>
          <h5>{t('visitorProfile.buyers.item_2')}</h5>
          <p>{t('visitorProfile.buyers.item_3')}</p>
        </div>
        <h2>{t('visitorProfile.industry.title')}</h2>
        <ul className='whyvisit-list mt-3'>
          <li>
            {t('visitorProfile.industry.item_1')}
          </li>
          <li>
            {t('visitorProfile.industry.item_2')}
          </li>
          <li>
            {t('visitorProfile.industry.item_3')}
          </li>
          <li>
            {t('visitorProfile.industry.item_4')}
          </li>
          <li>
            {t('visitorProfile.industry.item_5')}
          </li>
          <li>
            {t('visitorProfile.industry.item_6')}
          </li>
          <li>
            {t('visitorProfile.industry.item_7')}
          </li>
          <li>
            {t('visitorProfile.industry.item_8')}
          </li>
          <li>
            {t('visitorProfile.industry.item_9')}
          </li>
          <li>
            {t('visitorProfile.industry.item_10')}
          </li>
          <li>
            {t('visitorProfile.industry.item_11')}
          </li>
          <li>
            {t('visitorProfile.industry.item_12')}
          </li>
          <li>
            {t('visitorProfile.industry.item_13')}
          </li>
        </ul>

      </Container>
    </div>

  )
}
