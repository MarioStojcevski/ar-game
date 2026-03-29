/** Per-character panel + accent colors (header/footer stay `brown`). */

export type PanelTone = 'brown' | 'plum' | 'ember' | 'violet' | 'slate'

export const toneByCharacterId: Record<string, PanelTone> = {
  'dark-fae': 'plum',
  'demon-warrior': 'ember',
  'arcane-mage': 'violet',
  'fourth-slot': 'slate',
}

export function panelToneForCharacter(id: string): PanelTone {
  return toneByCharacterId[id] ?? 'slate'
}

export const panelToneStyles: Record<
  PanelTone,
  {
    inner: string
    outerRim: string
    bracket: string
  }
> = {
  brown: {
    inner: 'border-[#3d332d] bg-[#5c4a43]',
    outerRim: 'border-[#1a1512] bg-[#2a231f]',
    bracket: 'border-[#d4a84b]',
  },
  plum: {
    inner: 'border-[#8b3d6f] bg-[#4a3048]',
    outerRim: 'border-[#1a0f18] bg-[#2d1828]',
    bracket: 'border-[#f472b6]',
  },
  ember: {
    inner: 'border-[#8b4a28] bg-[#523228]',
    outerRim: 'border-[#1a0f08] bg-[#2d1810]',
    bracket: 'border-[#fb923c]',
  },
  violet: {
    inner: 'border-[#6b5a9e] bg-[#3a3048]',
    outerRim: 'border-[#120a1a] bg-[#221830]',
    bracket: 'border-[#c4b5fd]',
  },
  slate: {
    inner: 'border-[#4a6b6b] bg-[#2d3e40]',
    outerRim: 'border-[#0a1214] bg-[#1a2628]',
    bracket: 'border-[#5eead4]',
  },
}

export type CharacterAccent = {
  imageWell: string
  roleText: string
  hpBar: string
  atkBar: string
  abilityType: string
  timeline: string
  skillBars: readonly [string, string, string]
}

export const accentByTone: Record<PanelTone, CharacterAccent> = {
  brown: {
    imageWell: 'bg-[#3d332d]',
    roleText: 'text-[#5eead4]',
    hpBar: 'bg-[#5eead4]',
    atkBar: 'bg-[#f9a8d4]',
    abilityType: 'text-[#5eead4]',
    timeline: 'border-l-[#2dd4bf]/60',
    skillBars: ['bg-[#60a5fa]', 'bg-[#fb923c]', 'bg-[#5eead4]'],
  },
  plum: {
    imageWell: 'bg-[#2d1825]',
    roleText: 'text-[#f9a8d4]',
    hpBar: 'bg-[#f472b6]',
    atkBar: 'bg-[#e879f9]',
    abilityType: 'text-[#fbcfe8]',
    timeline: 'border-l-[#f472b6]/70',
    skillBars: ['bg-[#f472b6]', 'bg-[#c084fc]', 'bg-[#fb7185]'],
  },
  ember: {
    imageWell: 'bg-[#2d1810]',
    roleText: 'text-[#fdba74]',
    hpBar: 'bg-[#fb923c]',
    atkBar: 'bg-[#ef4444]',
    abilityType: 'text-[#fed7aa]',
    timeline: 'border-l-[#fb923c]/70',
    skillBars: ['bg-[#fb923c]', 'bg-[#f97316]', 'bg-[#fcd34d]'],
  },
  violet: {
    imageWell: 'bg-[#221830]',
    roleText: 'text-[#c4b5fd]',
    hpBar: 'bg-[#a78bfa]',
    atkBar: 'bg-[#818cf8]',
    abilityType: 'text-[#ddd6fe]',
    timeline: 'border-l-[#a78bfa]/70',
    skillBars: ['bg-[#a78bfa]', 'bg-[#818cf8]', 'bg-[#22d3ee]'],
  },
  slate: {
    imageWell: 'bg-[#1a2628]',
    roleText: 'text-[#5eead4]',
    hpBar: 'bg-[#2dd4bf]',
    atkBar: 'bg-[#38bdf8]',
    abilityType: 'text-[#99f6e4]',
    timeline: 'border-l-[#2dd4bf]/70',
    skillBars: ['bg-[#2dd4bf]', 'bg-[#38bdf8]', 'bg-[#94a3b8]'],
  },
}
