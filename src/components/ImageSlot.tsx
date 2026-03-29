import { motion } from 'framer-motion'

type ImageSlotProps = {
  src?: string
  alt: string
  classified?: boolean
}

export function ImageSlot({ src, alt, classified }: ImageSlotProps) {
  return (
    <div className="h-full w-full min-h-0">
      {src ? (
        <motion.img
          className="h-full w-full object-cover object-top"
          src={src}
          alt={alt}
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        />
      ) : (
        <div
          className="flex h-full min-h-[120px] flex-col items-center justify-center gap-2 bg-rpg-panel-dark px-2"
          role="img"
          aria-label={alt}
        >
          <span
            className={`font-pixel-title text-2xl sm:text-3xl ${
              classified ? 'text-rpg-muted' : 'text-rpg-muted/60'
            }`}
          >
            ?
          </span>
          <span className="text-center font-pixel-title text-[0.45rem] uppercase leading-tight text-rpg-muted">
            {classified ? 'Locked' : 'Empty slot'}
          </span>
        </div>
      )}
    </div>
  )
}
