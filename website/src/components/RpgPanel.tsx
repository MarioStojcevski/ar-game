import type { ReactNode } from 'react'
import type { PanelTone } from '../theme/characterTones'
import { panelToneStyles } from '../theme/characterTones'

type RpgPanelProps = {
  children: ReactNode
  className?: string
  /** `brown` = default RPG sheet (header, party, status, footer). */
  tone?: PanelTone
}

/** Thick carved-frame panel with corner brackets (retro RPG sheet look). */
export function RpgPanel({ children, className = '', tone = 'brown' }: RpgPanelProps) {
  const s = panelToneStyles[tone]

  return (
    <div className={`relative ${className}`}>
      <div
        className={`pointer-events-none absolute -left-0.5 -top-0.5 z-10 h-5 w-5 border-l-[3px] border-t-[3px] ${s.bracket}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -right-0.5 -top-0.5 z-10 h-5 w-5 border-r-[3px] border-t-[3px] ${s.bracket}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -bottom-0.5 -left-0.5 z-10 h-5 w-5 border-b-[3px] border-l-[3px] ${s.bracket}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -bottom-0.5 -right-0.5 z-10 h-5 w-5 border-b-[3px] border-r-[3px] ${s.bracket}`}
        aria-hidden
      />

      <div
        className={`border-[3px] p-[3px] shadow-[4px_4px_0_rgba(0,0,0,0.35)] ${s.outerRim}`}
      >
        <div className={`relative p-4 sm:p-5 ${s.inner}`}>
          <div
            className="pointer-events-none absolute inset-2 border border-[#ffffff0a]"
            aria-hidden
          />
          <div className="relative z-[1]">{children}</div>
        </div>
      </div>
    </div>
  )
}
