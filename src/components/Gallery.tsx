import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// ── Gallery data ──────────────────────────────────────────
// TODO: Add your real images to /public/images/gallery/
// and update this array.
const galleryImages: { src: string; alt: string; caption?: string }[] = [
  {
    src: '/images/gallery/placeholder-1.jpg',
    alt: 'Gallery image 1',
    caption: 'Add your images to /public/images/gallery/',
  },
  {
    src: '/images/gallery/placeholder-2.jpg',
    alt: 'Gallery image 2',
    caption: 'Replace placeholder paths in src/components/Gallery.tsx',
  },
];

// Placeholder card shown when image fails or src is placeholder
function PlaceholderCard({ index }: { index: number }) {
  return (
    <div className="aspect-square rounded-md bg-bg-elevated border border-border-primary card-inset-shadow flex items-center justify-center">
      <span className="text-text-muted text-xs font-instrumentsans text-center px-4 leading-relaxed">
        📷 Image {index + 1}<br />
        <span className="opacity-50">Add to /public/images/gallery/</span>
      </span>
    </div>
  );
}

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const isPlaceholderSrc = (src: string) => src.includes('placeholder');

  return (
    <section id="gallery" className="w-full flex justify-center items-center px-4 lg:px-0 mb-12">
      <div className="max-w-2xl w-full flex flex-col h-full">
        <div className="mb-2">
          <h2 className="text-4xl font-light text-text-primary text-start font-instrumentserif">
            Gallery.
          </h2>
          <p className="text-sm text-text-muted font-instrumentsans mt-1">
            Moments, hackathons, and milestones.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              data-gallery-reveal
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="cursor-pointer"
              onClick={() => !isPlaceholderSrc(img.src) && setSelected(i)}
            >
              {isPlaceholderSrc(img.src) ? (
                <PlaceholderCard index={i} />
              ) : (
                <div className="aspect-square rounded-md overflow-hidden border border-border-primary card-inset-shadow group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && !isPlaceholderSrc(galleryImages[selected].src) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selected].src}
                  alt={galleryImages[selected].alt}
                  className="w-full rounded-md object-cover"
                />
                {galleryImages[selected].caption && (
                  <p className="text-sm text-white/70 text-center mt-2 font-instrumentsans">
                    {galleryImages[selected].caption}
                  </p>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X size={16} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
