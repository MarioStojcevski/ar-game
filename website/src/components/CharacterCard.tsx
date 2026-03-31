import { motion } from 'framer-motion'
import type { Character } from '../types'
import {
  accentByTone,
  panelToneForCharacter,
  type PanelTone,
} from '../theme/characterTones'
import { ImageSlot } from './ImageSlot'
import { RpgPanel } from './RpgPanel'

const typeLabels: Record<string, string> = {
  basic: 'Basic',
  passive: 'Passive',
  signature: 'Signature',
}

const typeInitial: Record<string, string> = {
  basic: 'B',
  passive: 'P',
  signature: 'S',
}

function ChunkyBar({
  label,
  value,
  max,
  fillClass,
}: {
  label: string
  value: number
  max: number
  fillClass: string
}) {
  const pct = Math.min(100, Math.round((value / max) * 100))
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-baseline justify-between font-pixel text-lg text-rpg-text">
        <span>{label}</span>
        <span className="tabular-nums text-rpg-muted">{value}</span>
      </div>
      <div className="h-4 border-2 border-rpg-ink bg-black/45 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
        <motion.div
          className={`h-full ${fillClass} shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

function ThinSkillBar({ pct, barClass }: { pct: number; barClass: string }) {
  return (
    <div className="mt-1.5 h-2 border border-rpg-ink bg-black/40">
      <motion.div
        className={`h-full ${barClass}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
    </div>
  )
}

const statRows: [string, keyof Character['stats']][] = [
  ['HP', 'hp'],
  ['ATK', 'atk'],
  ['DEF', 'def'],
  ['SPD', 'spd'],
  ['AGI', 'agi'],
]

function abilityPowerPct(type: string): number {
  if (type === 'signature') return 100
  if (type === 'passive') return 85
  return 70
}

function sectionTitleClass(tone: PanelTone): string {
  return tone === 'brown' ? 'text-rpg-bracket' : 'text-white/75'
}

export function CharacterCard({ c }: { c: Character }) {
  const classified = !c.revealed
  const tone = panelToneForCharacter(c.id)
  const accent = accentByTone[tone]
  const sec = sectionTitleClass(tone)

  return (
    <motion.article
      data-unit={c.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -2 }}
      className={classified ? 'opacity-90 saturate-[0.85]' : ''}
    >
      <RpgPanel tone={tone}>
        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="mx-auto flex w-full max-w-[200px] shrink-0 flex-col gap-3 sm:mx-0">
            <div>
              <p
                className={`mb-1 font-pixel-title text-[0.5rem] uppercase leading-tight sm:text-[0.55rem] ${sec}`}
              >
                Portrait
              </p>
              <div
                className={`aspect-square overflow-hidden border-[3px] border-rpg-ink shadow-[inset_0_0_12px_rgba(0,0,0,0.4)] ${accent.imageWell}`}
              >
                <ImageSlot
                  src={c.portraitImage}
                  alt={`${c.name} portrait`}
                  classified={classified}
                />
              </div>
            </div>
            <div>
              <p
                className={`mb-1 font-pixel-title text-[0.5rem] uppercase leading-tight sm:text-[0.55rem] ${sec}`}
              >
                Card
              </p>
              <div
                className={`aspect-[200/260] overflow-hidden border-2 border-rpg-ink ${accent.imageWell}`}
              >
                <ImageSlot
                  src={c.cardImage}
                  alt={`${c.name} card art`}
                  classified={classified}
                />
              </div>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="font-pixel-title text-[0.65rem] font-normal leading-snug text-rpg-text sm:text-xs md:text-sm">
              {c.name}
            </h2>
            <p className={`mt-2 font-pixel text-2xl ${accent.roleText}`}>{c.role}</p>
            <p className="mt-2 font-pixel text-lg italic text-rpg-muted">{c.tagline}</p>
            <p className="mt-3 font-pixel text-lg leading-snug text-rpg-text/95">
              {c.appearance}
            </p>

            <div className="mt-4">
              <ChunkyBar label="HP" value={c.stats.hp} max={130} fillClass={accent.hpBar} />
              <ChunkyBar label="ATK" value={c.stats.atk} max={130} fillClass={accent.atkBar} />
            </div>

            <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 font-pixel text-lg">
              <dt className="text-rpg-muted">CLASS</dt>
              <dd>{c.role}</dd>
              <dt className="text-rpg-muted">ARCHETYPE</dt>
              <dd className="capitalize">{c.factionKey}</dd>
            </dl>
          </div>
        </div>

        <div className="mt-5 border-t-2 border-dashed border-rpg-ink/40 pt-4">
          <p className={`font-pixel-title mb-2 text-[0.55rem] uppercase ${sec}`}>Playstyle</p>
          <p className="font-pixel text-lg leading-snug text-rpg-text">{c.playstyle}</p>
        </div>

        <div className="mt-5 border-t-2 border-dashed border-rpg-ink/40 pt-4">
          <p className={`font-pixel-title mb-3 text-[0.55rem] uppercase ${sec}`}>Stats</p>
          <div className="space-y-2">
            {statRows.map(([label, key], i) => (
              <div key={key}>
                <div className="flex justify-between font-pixel text-base text-rpg-muted">
                  <span>{label}</span>
                  <span className="tabular-nums text-rpg-text">{c.stats[key]}</span>
                </div>
                <ThinSkillBar
                  pct={Math.min(100, (c.stats[key] / 120) * 100)}
                  barClass={accent.skillBars[i % accent.skillBars.length]}
                />
              </div>
            ))}
          </div>
          <p className="mt-3 font-pixel text-base leading-snug text-rpg-muted">
            Damage = Attack − half of target Defense (min 1), unless an ability ignores Defense.
          </p>
        </div>

        <div className="mt-5 border-t-2 border-dashed border-rpg-ink/40 pt-4">
          <p className={`font-pixel-title mb-3 text-[0.55rem] uppercase ${sec}`}>Abilities</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {c.abilities.map((a, idx) => (
              <div key={a.name} className="flex gap-3">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center border-2 border-rpg-ink font-pixel-title text-[0.55rem] shadow-[inset_0_2px_0_rgba(255,255,255,0.06)] ${accent.imageWell} ${sec}`}
                >
                  {typeInitial[a.type]}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-pixel text-xl text-rpg-text">{a.name}</span>
                    <span
                      className={`font-pixel-title text-[0.45rem] uppercase ${accent.abilityType}`}
                    >
                      {typeLabels[a.type]}
                    </span>
                  </div>
                  <ThinSkillBar
                    pct={abilityPowerPct(a.type)}
                    barClass={accent.skillBars[idx % accent.skillBars.length]}
                  />
                  <p className="mt-2 font-pixel text-base leading-snug text-rpg-muted">
                    {a.description}
                  </p>
                  {a.cooldown ? (
                    <p className="mt-1 font-pixel text-base text-[#fbbf24]">
                      CD: {a.cooldown}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 border-t-2 border-dashed border-rpg-ink/40 pt-4">
          <p className={`font-pixel-title mb-3 text-[0.55rem] uppercase ${sec}`}>Combat log</p>
          <ul className={`relative space-y-4 border-l-[3px] pl-6 ${accent.timeline}`}>
            {c.combatNotes.map((n) => (
              <li key={n} className="relative font-pixel text-lg leading-snug text-rpg-text">
                <span
                  className="absolute -left-[1.4rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-rpg-ink bg-[#22c55e] font-pixel-title text-[0.35rem] text-rpg-ink"
                  aria-hidden
                >
                  ✓
                </span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </RpgPanel>
    </motion.article>
  )
}
