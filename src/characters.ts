import type { Character } from './types'

export const characters: Character[] = [
  {
    id: 'dark-fae',
    name: 'Dark Fae',
    role: 'Rogue',
    tagline: 'Velvet blade — defense means nothing.',
    factionKey: 'shadow',
    revealed: true,
    appearance:
      'Dark skin, black hair with pink streaks, red eyes, small fangs. Gothic-cute silhouette built for speed.',
    playstyle:
      'Fast and evasive. Strikes twice per turn and has a passive chance to dodge incoming hits completely.',
    stats: { hp: 72, atk: 58, def: 28, spd: 92, agi: 38 },
    abilities: [
      {
        name: 'Twin Fang Strikes',
        type: 'basic',
        description: 'Perform two basic attacks in one turn against your chosen target.',
      },
      {
        name: 'Veil Step',
        type: 'passive',
        description:
          'Each time you are targeted, roll Agility — on success the attack is Dodged (no damage).',
      },
      {
        name: 'Piercing Oath',
        type: 'signature',
        description:
          "Ignores the target's Defense entirely — deal full unmitigated damage. Goes on cooldown after use.",
        cooldown: '2–3 turns',
      },
    ],
    combatNotes: [
      'Damage formula: Attacker ATK − (½ Defender DEF), minimum 1 — Piercing Oath bypasses this reduction.',
      'Synergy: Punish heavily armored foes that rely on Defense.',
    ],
    portraitImage: '/darkfae/1.png',
    cardImage: '/darkfae/2.png',
  },
  {
    id: 'demon-warrior',
    name: 'Demon Warrior',
    role: 'Tank / Bruiser',
    tagline: 'Iron and ember — she does not yield.',
    factionKey: 'infernal',
    revealed: true,
    appearance:
      'Light skin, curly hair, freckles, small horns and a devil tail. Heavy armor beneath a long coat.',
    playstyle:
      'Tough and grounded. Very high Health and Defense — a wall that answers with crushing control.',
    stats: { hp: 118, atk: 52, def: 78, spd: 44, agi: 12 },
    abilities: [
      {
        name: 'Crushing Rebuke',
        type: 'basic',
        description: 'A weighted melee strike using high ATK against a single chosen rival.',
      },
      {
        name: 'Bulwark Ember',
        type: 'passive',
        description: 'Incoming damage is reduced by Defense before it touches your Health pool.',
      },
      {
        name: 'Infernal Shackle',
        type: 'signature',
        description:
          'Deal damage and apply Stunned — target skips their next turn entirely. Goes on cooldown after use.',
        cooldown: '2–3 turns',
      },
    ],
    combatNotes: [
      'Stunned — skip next turn. Your signature is the primary source of hard crowd control.',
      'Low Speed — plan openings; once you lock someone down, the table shifts.',
    ],
    portraitImage: '/demonwarrior/1.png',
    cardImage: '/demonwarrior/2.png',
  },
  {
    id: 'arcane-mage',
    name: 'Classified Operative',
    role: 'Mage (TBD)',
    tagline: 'High yield. Glass cannon. Details redacted.',
    factionKey: 'arcane',
    revealed: false,
    appearance: 'To be determined — visually distinct card art required for AR tracking.',
    playstyle:
      'Highest damage output in the roster, very low Health. Hits hard; eliminated fast if focused.',
    stats: { hp: 48, atk: 95, def: 22, spd: 68, agi: 8 },
    abilities: [
      {
        name: 'Basic Channel',
        type: 'basic',
        description: 'TBD — ranged arcane strike; values subject to balance pass.',
      },
      {
        name: 'Volatile Core',
        type: 'passive',
        description: 'TBD — may interact with cooldowns or crit windows.',
      },
      {
        name: 'Cataclysmic Focus',
        type: 'signature',
        description:
          'Massive single-target damage. Can only be used once every 3 turns. Final name & VFX TBD.',
        cooldown: '3 turns',
      },
    ],
    combatNotes: [
      'Prototype scope: 3 illustrated cards; Mage slot still in design.',
      'AR Tracked Image Manager requires bold contrast & detail on the final card print (63×88 mm).',
    ],
  },
  {
    id: 'fourth-slot',
    name: 'Fourth Unit',
    role: 'Healer or second Tank (optional)',
    tagline: 'Reserved for future deployment.',
    factionKey: 'classified',
    revealed: false,
    appearance: 'To be determined — optional for early prototype.',
    playstyle:
      'Could anchor sustain for the table or double down on frontline control. Design pending.',
    stats: { hp: 80, atk: 40, def: 50, spd: 55, agi: 15 },
    abilities: [
      {
        name: 'Protocol Alpha',
        type: 'basic',
        description: 'TBD',
      },
      {
        name: 'Field Doctrine',
        type: 'passive',
        description: 'TBD',
      },
      {
        name: 'Omega Maneuver',
        type: 'signature',
        description: 'TBD — cooldown 2–3 turns when implemented.',
        cooldown: 'TBD',
      },
    ],
    combatNotes: [
      'Free-for-all, turn-based: on your turn pick any surviving rival and Basic or Signature.',
      'QR session join · local Wi-Fi · up to 4 pilots · no dedicated server.',
    ],
  },
]
