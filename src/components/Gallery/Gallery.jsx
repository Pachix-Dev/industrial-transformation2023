import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import './Gallery.css'
import { useState } from 'react'
import { Pagination, Row } from 'react-bootstrap'

export function Gallery (props) {
  const itemsPerPage = 12
  const [activePage, setActivePage] = useState(1)

  // Calculate total number of pages
  const totalPages = Math.ceil(props?.galleryImgs?.length / itemsPerPage)
  // Get current page items
  const indexOfLastItem = activePage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = props?.galleryImgs?.slice(indexOfFirstItem, indexOfLastItem)

  // Handle pagination click
  const handlePageChange = (page) => {
    setActivePage(page)
  }

  const onInit = () => {
    console.log('lightGallery has been initialized')
  }

  return (
    <>
      {
        totalPages > 1 &&
          <Row className='gallery mt-4'>
            <Pagination>
              <Pagination.First onClick={() => handlePageChange(1)} />
              <Pagination.Prev
                onClick={() => handlePageChange(activePage - 1)}
                disabled={activePage === 1}
              />
              {activePage > 1 && <Pagination.Ellipsis />}
              {Array.from({ length: totalPages }).map((_, index) => (
                <Pagination.Item
                  key={index}
                  active={index + 1 === activePage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              {activePage < totalPages && <Pagination.Ellipsis />}
              <Pagination.Next
                onClick={() => handlePageChange(activePage + 1)}
                disabled={activePage === totalPages}
              />
              <Pagination.Last onClick={() => handlePageChange(totalPages)} />
            </Pagination>
          </Row>
      }

      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        {currentItems.map((img, index) => {
          return (
            <a
              key={index}
              data-src={img}
              className='gallery-item'
            >
              <img
                src={img}
                alt={`${props.galleryName}-${index}`}
                className='w-100 p-3'
                loading='lazy'
              />
              {props?.toolkitNamesImg && <p className='text-center'>{props?.toolkitNamesImg[index]}</p>}
            </a>
          )
        })}
      </LightGallery>

      {
        totalPages > 1 &&
          <Row className='gallery mt-4'>
            <Pagination>
              <Pagination.First onClick={() => handlePageChange(1)} />
              <Pagination.Prev
                onClick={() => handlePageChange(activePage - 1)}
                disabled={activePage === 1}
              />
              {activePage > 1 && <Pagination.Ellipsis />}
              {Array.from({ length: totalPages }).map((_, index) => (
                <Pagination.Item
                  key={index}
                  active={index + 1 === activePage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              {activePage < totalPages && <Pagination.Ellipsis />}
              <Pagination.Next
                onClick={() => handlePageChange(activePage + 1)}
                disabled={activePage === totalPages}
              />
              <Pagination.Last onClick={() => handlePageChange(totalPages)} />
            </Pagination>
          </Row>
      }
    </>
  )
}
