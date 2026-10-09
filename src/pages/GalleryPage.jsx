import { useState } from 'react'
import { Link } from 'react-router-dom'
import images from '../data/galleryImages'

const PAGE_SIZE = 12

function GalleryPage() {
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [selected, setSelected] = useState(null)

  function showPrev() {
    setSelected((selected - 1 + images.length) % images.length)
  }

  function showNext() {
    setSelected((selected + 1) % images.length)
  }

  return (
    <section className="min-h-screen bg-green-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Link to="/#gallery" className="text-sm font-bold uppercase text-green-700 hover:underline">
          ← Back to home
        </Link>

        <div className="mt-6 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-green-700">Gallery</p>
          <h1 className="mt-2 text-4xl font-extrabold uppercase">
            Life at the <span className="text-green-700">academy</span>
          </h1>
        </div>

        {images.length === 0 ? (
          <p className="mt-12 text-center text-gray-600">
            Add photos to src/assets/gallery to see them here.
          </p>
        ) : (
          <div className="mt-12 columns-2 gap-4 md:columns-3">
            {images.slice(0, visible).map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Sport for Hope photo ${index + 1}`}
                loading="lazy"
                onClick={() => setSelected(index)}
                className="mb-4 w-full cursor-pointer break-inside-avoid rounded-xl transition hover:opacity-90"
              />
            ))}
          </div>
        )}

        {visible < images.length && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setVisible(visible + PAGE_SIZE)}
              className="rounded bg-green-700 px-8 py-3 font-bold uppercase text-white hover:bg-green-800"
            >
              Show more
            </button>
          </div>
        )}
      </div>

      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute right-5 top-4 text-4xl text-white"
            aria-label="Close"
          >
            ✕
          </button>
          <button
            onClick={(event) => {
              event.stopPropagation()
              showPrev()
            }}
            className="absolute left-3 text-5xl text-white"
            aria-label="Previous photo"
          >
            ‹
          </button>
          <img
            src={images[selected]}
            alt={`Sport for Hope photo ${selected + 1}`}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-lg"
          />
          <button
            onClick={(event) => {
              event.stopPropagation()
              showNext()
            }}
            className="absolute right-3 text-5xl text-white"
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}

export default GalleryPage