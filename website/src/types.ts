export type StatBlock = {
  hp: number
  atk: number
  def: number
  spd: number
  agi: number
}

export type Ability = {
  name: string
  type: 'basic' | 'passive' | 'signature'
  description: string
  cooldown?: string
}

export type Character = {
  id: string
  name: string
  role: string
  tagline: string
  factionKey: 'shadow' | 'infernal' | 'arcane' | 'classified'
  revealed: boolean
  appearance: string
  playstyle: string
  stats: StatBlock
  abilities: Ability[]
  combatNotes: string[]
  /** Drop files in `public/` and set e.g. `/art/dark-fae-portrait.png` */
  portraitImage?: string
  cardImage?: string
}
