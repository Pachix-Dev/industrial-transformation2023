import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import './Gallery.css'
import { useState } from 'react'
import { Pagination } from 'react-bootstrap'

export function Gallery (props) {
  const itemsPerPage = 12

  const [activePage, setActivePage] = useState(1)
  const totalPages = Math.ceil(props?.galleryImgs?.length / itemsPerPage)
  const indexOfLastItem = activePage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = props?.galleryImgs?.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (page) => {
    setActivePage(page)
  }

  return (
    <>
      {
        totalPages > 1 &&
          <div className='gallery mt-4'>
            <Pagination>
              <Pagination.First onClick={() => handlePageChange(1)} />
              <Pagination.Prev
                onClick={() => handlePageChange(activePage - 1)}
                disabled={activePage === 1}
              />
              {activePage > 3 && <Pagination.Ellipsis />}
              {activePage > 2 && (
                <Pagination.Item onClick={() => handlePageChange(activePage - 2)}>
                  {activePage - 2}
                </Pagination.Item>
              )}
              {activePage > 1 && (
                <Pagination.Item onClick={() => handlePageChange(activePage - 1)}>
                  {activePage - 1}
                </Pagination.Item>
              )}
              <Pagination.Item active>{activePage}</Pagination.Item>
              {activePage < totalPages && (
                <Pagination.Item onClick={() => handlePageChange(activePage + 1)}>
                  {activePage + 1}
                </Pagination.Item>
              )}
              {activePage < totalPages - 1 && (
                <Pagination.Item onClick={() => handlePageChange(activePage + 2)}>
                  {activePage + 2}
                </Pagination.Item>
              )}
              {activePage < totalPages - 2 && <Pagination.Ellipsis />}
              <Pagination.Next
                onClick={() => handlePageChange(activePage + 1)}
                disabled={activePage === totalPages}
              />
              <Pagination.Last onClick={() => handlePageChange(totalPages)} />
            </Pagination>
          </div>
      }

      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        {currentItems.map((img, index) => {
          return (
            <div
              key={index}
              data-src={img}
              data-sub-html=' '
              className='gallery-item'
            >
              <img
                src={img}
                alt={`${props.galleryName}-${index}`}
                className='w-100 p-3'
                loading='lazy'
              />
              {props?.toolkitNamesImg && <p className='text-center'>{props?.toolkitNamesImg[index]}</p>}
            </div>
          )
        })}
      </LightGallery>

      {
        totalPages > 1 &&
          <div className='gallery mt-4'>
            <Pagination>
              <Pagination.First onClick={() => handlePageChange(1)} />
              <Pagination.Prev
                onClick={() => handlePageChange(activePage - 1)}
                disabled={activePage === 1}
              />
              {activePage > 3 && <Pagination.Ellipsis />}
              {activePage > 2 && (
                <Pagination.Item onClick={() => handlePageChange(activePage - 2)}>
                  {activePage - 2}
                </Pagination.Item>
              )}
              {activePage > 1 && (
                <Pagination.Item onClick={() => handlePageChange(activePage - 1)}>
                  {activePage - 1}
                </Pagination.Item>
              )}
              <Pagination.Item active>{activePage}</Pagination.Item>
              {activePage < totalPages && (
                <Pagination.Item onClick={() => handlePageChange(activePage + 1)}>
                  {activePage + 1}
                </Pagination.Item>
              )}
              {activePage < totalPages - 1 && (
                <Pagination.Item onClick={() => handlePageChange(activePage + 2)}>
                  {activePage + 2}
                </Pagination.Item>
              )}
              {activePage < totalPages - 2 && <Pagination.Ellipsis />}
              <Pagination.Next
                onClick={() => handlePageChange(activePage + 1)}
                disabled={activePage === totalPages}
              />
              <Pagination.Last onClick={() => handlePageChange(totalPages)} />
            </Pagination>
          </div>
      }

    </>
  )
}
