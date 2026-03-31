import { motion } from 'framer-motion'
import type { Character } from '../types'
import { CharacterCard } from './CharacterCard'
import { RpgPanel } from './RpgPanel'
import { fadeUp } from '../motion/variants'

function PdfIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 2v6h6M8 14h8M8 18h6M8 10h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CodexPage({ characters }: { characters: Character[] }) {
  return (
    <div className="relative mx-auto max-w-6xl px-3 py-8 pb-16 sm:px-5 lg:px-8">
      <motion.header className="relative mb-10" initial="hidden" animate="visible" variants={fadeUp}>
        <RpgPanel tone="brown">
          <p className="text-center font-pixel-title text-[0.55rem] uppercase leading-relaxed text-rpg-bracket sm:text-[0.6rem]">
            AR card game · work in progress
          </p>
          <h1 className="mt-4 text-center font-pixel-title text-[0.7rem] leading-snug text-rpg-text sm:text-xs md:text-sm">
            CHARACTER SHEET
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center font-pixel text-xl leading-snug text-rpg-text sm:text-2xl">
            Local multiplayer AR for phones. Each player uses a physical card; the app tracks the art
            and shows the hero on the table. Three or four players, free-for-all, last standing wins.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center font-pixel text-lg leading-snug text-rpg-muted sm:text-xl">
            Join with a QR code on the same Wi‑Fi. Turn order uses Speed. Signatures go on cooldown
            for a few turns after use.
          </p>

          <div className="mx-auto mt-8 max-w-xl border-t-2 border-dashed border-rpg-ink/35 pt-6">
            <p className="text-center font-pixel text-lg text-rpg-text sm:text-xl">
              A <strong className="text-rpg-hp">how to play</strong> PDF guide is coming soon — not
              ready yet.
            </p>
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                disabled
                aria-disabled="true"
                title="Coming soon"
                className="inline-flex cursor-not-allowed items-center gap-3 border-2 border-rpg-ink/50 bg-black/25 px-4 py-3 font-pixel text-lg text-rpg-muted opacity-70"
              >
                <PdfIcon className="h-7 w-7 shrink-0 text-rpg-muted" />
                <span className="text-left">
                  <span className="block font-pixel-title text-[0.5rem] uppercase">How to play.pdf</span>
                  <span className="text-base text-rpg-muted/80">Download unavailable</span>
                </span>
              </button>
            </div>
          </div>
        </RpgPanel>
      </motion.header>

      <RpgPanel tone="brown" className="mb-8">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-pixel-title text-[0.55rem] uppercase text-rpg-bracket">
            Party
          </span>
          <span className="flex gap-2">
            {[1, 2, 3, 4].map((n) => (
              <span
                key={n}
                className={
                  n <= 2
                    ? 'flex h-9 w-9 items-center justify-center border-2 border-rpg-ink bg-[#22c55e]/30 font-pixel text-xl text-rpg-text'
                    : 'flex h-9 w-9 items-center justify-center border-2 border-rpg-ink/60 bg-black/20 font-pixel text-xl text-rpg-muted'
                }
              >
                {n}
              </span>
            ))}
          </span>
          <span className="font-pixel text-lg text-rpg-muted sm:ml-auto">2 ready · 2 TBD</span>
        </div>
      </RpgPanel>

      <div className="grid gap-8 lg:grid-cols-2">
        {characters.map((c) => (
          <CharacterCard key={c.id} c={c} />
        ))}
      </div>

      <motion.section
        className="relative mt-12"
        aria-label="Status effects"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45 }}
      >
        <RpgPanel tone="brown">
          <h2 className="text-center font-pixel-title text-[0.65rem] uppercase leading-snug text-rpg-bracket sm:text-xs">
            Status effects
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="border-2 border-rpg-ink/40 bg-rpg-panel-dark/50 p-4">
              <h3 className="font-pixel-title text-[0.55rem] uppercase text-[#f9a8d4]">Stunned</h3>
              <p className="mt-2 font-pixel text-lg leading-snug text-rpg-text">
                Target skips their next turn. Demon Warrior signature can apply this.
              </p>
            </div>
            <div className="border-2 border-rpg-ink/40 bg-rpg-panel-dark/50 p-4">
              <h3 className="font-pixel-title text-[0.55rem] uppercase text-[#5eead4]">Dodged</h3>
              <p className="mt-2 font-pixel text-lg leading-snug text-rpg-text">
                Attack deals no damage. Dark Fae Agility can trigger when she is attacked.
              </p>
            </div>
          </div>
        </RpgPanel>
      </motion.section>

      <footer className="mt-10">
        <RpgPanel tone="brown">
          <p className="text-center font-pixel text-lg text-rpg-muted">
            Reference page for the AR card game (not the app build).
          </p>
        </RpgPanel>
      </footer>
    </div>
  )
}
