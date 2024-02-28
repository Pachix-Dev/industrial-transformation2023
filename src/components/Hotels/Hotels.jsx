import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { hotels } from './constans_hotels'

export function Hotels(){
    const {i18n,t} = useTranslation()
    
    function Start(numberStart){
        let startIcon=''
        for(let i=0;i < numberStart; i++ ){
            startIcon+=`<svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
          `
        }
    
        return startIcon
    }
    
    return(
        <section className='mt-4 mb-4'>
            <Container>
                <h1 className='text-bold'>{t('hotels.title')}</h1>
                <p dangerouslySetInnerHTML={{__html:t('hotels.description')}}></p>
                <Row className='mt-5 hotels'>
                    {hotels.map((hotel, index) => {
                        return (
                            <Col md={3} className='pt-5'>
                                <Card
                                    style={{ width: '18rem', border: '1px solid #ddd' }}
                                    key={index}
                                >
                                    <Card.Img
                                    variant='top'
                                    src={hotel.src}
                                    height={280}
                                    className='object-fit-cover'
                                    />
                                    <Card.Body style={{ flex: '0' }}>
                                    <Card.Title className='text-description'>
                                        {hotel.name}
                                        <p dangerouslySetInnerHTML={{__html:Start(hotel.start)}}></p>
                                    </Card.Title>
                                    <Card.Text className='text-description'>
                                        <p>{hotel.address}</p>
                                        
                                        <p>
                                            <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        width={20}
                                        >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
                                        />
                                            </svg> {hotel.phone_mexico}<br />
                                        </p>
                                        {hotel.phone_international === ''
                                            ? 
                                                ''
                                            :
                                                <p> 
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        fill='none'
                                                        viewBox='0 0 24 24'
                                                        strokeWidth={1.5}
                                                        stroke='currentColor'
                                                        width={20}
                                                        >
                                                        <path
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                            d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
                                                        />
                                                    </svg>{hotel?.phone_international}
                                                </p>
                                        }
                                    {hotel.celular ===  ''
                                            ? 
                                                ''
                                            :
                                                <p> 
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        fill='none'
                                                        viewBox='0 0 24 24'
                                                        strokeWidth={1.5}
                                                        stroke='currentColor'
                                                        width={20}
                                                        >
                                                        <path
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                            d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
                                                        />
                                                    </svg>{hotel?.celular}
                                                </p>
                                        }

                                    </Card.Text>
                                    </Card.Body>
                                    <ListGroup className='list-group-flush text-description'>
                                        <ListGroup.Item>
                                            {i18n.language=== 'en' ? hotel.rate_en : hotel.rate_es}
                                            
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <a href={`mailto:${hotel.email}`}>{hotel.email}</a><br />
                                            <a href={`mailto:${hotel.cc}`}>{hotel?.cc}</a>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            {t('hotels.code_reservation')} <strong>{hotel.code}</strong>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <img src='/hoteles/walk_icon.webp' width={20} />{' '}
                                            {hotel.time_walk}
                                        </ListGroup.Item>
                                    </ListGroup>
                                    
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )

}