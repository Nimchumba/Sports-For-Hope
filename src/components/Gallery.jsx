import { Link } from 'react-router-dom'
import images from '../data/galleryImages'

function Gallery() {
  const preview = images.slice(0, 5)

  return (
    <section id="gallery" className="bg-green-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-green-700">Gallery</p>
          <h2 className="mt-2 text-4xl font-extrabold uppercase">
            Life at the <span className="text-green-700">academy</span>
          </h2>
        </div>

        {preview.length === 0 ? (
          <p className="mt-12 text-center text-gray-600">
            Add photos to src/assets/gallery to see them here.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
            {preview.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Sport for Hope photo ${index + 1}`}
                loading="lazy"
                className="relative transition duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl aspect-square w-full rounded-xl object-cover first:col-span-2 first:aspect-[2/1] md:first:col-span-1 md:first:aspect-square"
              />
            ))}
          </div>
        )}

        {images.length > 5 && (
          <div className="mt-8 text-center">
            <Link
              to="/gallery"
              className="inline-block rounded bg-green-700 px-8 py-3 font-bold uppercase text-white hover:bg-green-800"
            >
              See more
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery