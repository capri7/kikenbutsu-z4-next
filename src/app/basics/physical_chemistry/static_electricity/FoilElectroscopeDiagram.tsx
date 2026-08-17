// src/app/basics/physical_chemistry/static_electricity/FoilElectroscopeDiagram.tsx
'use client'

import { useState } from 'react'
import styles from './FoilElectroscopeDiagram.module.css'

type Sign = 1 | -1

const POSITIVE_COLOR = '#D85A30'
const NEGATIVE_COLOR = '#378ADD'

export default function FoilElectroscopeDiagram() {
  const [charged, setCharged] = useState(false)
  const [sign, setSign] = useState<Sign>(1)

  const rodColor = sign === 1 ? POSITIVE_COLOR : NEGATIVE_COLOR
  const rodSymbol = sign === 1 ? '＋' : '－'
  const nearSymbol = sign === 1 ? '－' : '＋'
  const farSymbol = sign === 1 ? '＋' : '－'
  const nearColor = sign === 1 ? NEGATIVE_COLOR : POSITIVE_COLOR
  const farColor = rodColor

  const statusText = charged
    ? `帯電体（${rodSymbol}）が近づくと、集電板の近い側に${nearSymbol}、遠い側の箔に${farSymbol}の電荷が現れ、箔どうしが反発して開く。`
    : 'トグルをオンにすると、帯電体が集電板に近づく。'

  return (
    <div className={styles.wrapper}>
      <p className={styles.srOnly}>
        帯電体を箔検電器の集電板に近づけると静電誘導が起こり、箔が同符号に帯電して反発し開く様子を示す図。
      </p>

      <svg width="100%" viewBox="0 0 680 500" role="img" className={styles.svg}>
        <title>箔検電器の静電誘導</title>
        <desc>
          帯電体を集電板に近づけると、集電板の近い側に反対符号の電荷が、遠い側の金属箔には帯電体と同じ符号の電荷が現れ、箔どうしが反発して開く。
        </desc>

        <rect className={styles.case} x={175} y={230} width={330} height={210} rx={16} />
        <rect className={styles.jar} x={215} y={170} width={250} height={280} rx={24} />
        <rect className={styles.stem} x={333} y={84} width={14} height={266} rx={3} />
        <ellipse className={styles.plate} cx={340} cy={70} rx={70} ry={14} />

        <text
          className={styles.chargeSym}
          x={288}
          y={67}
          style={{ opacity: charged ? 1 : 0, fill: nearColor }}
        >
          {nearSymbol}
        </text>
        <text
          className={styles.chargeSym}
          x={288}
          y={82}
          style={{ opacity: charged ? 1 : 0, fill: nearColor }}
        >
          {nearSymbol}
        </text>

        <g className={`${styles.leaf} ${styles.leafLeft} ${charged ? styles.open : ''}`}>
          <polygon points="336,350 340,350 330,428 326,428" />
          <text
            className={styles.chargeSym}
            x={332}
            y={378}
            style={{ opacity: charged ? 1 : 0, fill: farColor }}
          >
            {farSymbol}
          </text>
        </g>
        <g className={`${styles.leaf} ${styles.leafRight} ${charged ? styles.open : ''}`}>
          <polygon points="340,350 344,350 354,428 358,428" />
          <text
            className={styles.chargeSym}
            x={348}
            y={378}
            style={{ opacity: charged ? 1 : 0, fill: farColor }}
          >
            {farSymbol}
          </text>
        </g>

        <rect className={styles.base} x={250} y={452} width={180} height={18} rx={4} />

        <g className={`${styles.rod} ${charged ? styles.rodNear : ''}`}>
          <rect x={40} y={61} width={90} height={18} rx={9} fill={rodColor} />
          <text x={65} y={74} textAnchor="middle" className={styles.rodSymbol}>
            {rodSymbol}
          </text>
          <text x={105} y={74} textAnchor="middle" className={styles.rodSymbol}>
            {rodSymbol}
          </text>
        </g>

        <line className={styles.leaderLine} x1={405} y1={66} x2={500} y2={74} />
        <circle cx={405} cy={66} r={2} className={styles.leaderDot} />
        <text className={styles.label} x={515} y={78}>金属板（集電板）</text>

        <line className={styles.leaderLine} x1={455} y1={190} x2={500} y2={150} />
        <circle cx={455} cy={190} r={2} className={styles.leaderDot} />
        <text className={styles.label} x={515} y={154}>ガラス瓶</text>

        <line className={styles.leaderLine} x1={347} y1={220} x2={500} y2={224} />
        <circle cx={347} cy={220} r={2} className={styles.leaderDot} />
        <text className={styles.label} x={515} y={228}>金属棒</text>

        <line className={styles.leaderLine} x1={455} y1={320} x2={500} y2={320} />
        <circle cx={455} cy={320} r={2} className={styles.leaderDot} />
        <text className={styles.label} x={515} y={324}>金属ケース</text>

        <line className={styles.leaderLine} x1={356} y1={424} x2={500} y2={420} />
        <circle cx={356} cy={424} r={2} className={styles.leaderDot} />
        <text className={styles.label} x={515} y={424}>金属箔（2枚）</text>
      </svg>

      <div className={styles.controls}>
        <label className={styles.toggleLabel}>
          <span className={styles.toggleTrack}>
            <input
              type="checkbox"
              checked={charged}
              onChange={(e) => setCharged(e.target.checked)}
              className={styles.toggleInput}
            />
            <span className={`${styles.toggleKnob} ${charged ? styles.toggleKnobOn : ''}`} />
          </span>
          帯電体を近づける
        </label>

        <span>帯電体の符号：</span>
        <button
          type="button"
          className={`${styles.signBtn} ${sign === 1 ? styles.signBtnActive : ''}`}
          onClick={() => setSign(1)}
          aria-pressed={sign === 1}
        >
          ＋
        </button>
        <button
          type="button"
          className={`${styles.signBtn} ${sign === -1 ? styles.signBtnActive : ''}`}
          onClick={() => setSign(-1)}
          aria-pressed={sign === -1}
        >
          －
        </button>
      </div>

      <p className={styles.status} aria-live="polite">
        {statusText}
      </p>
    </div>
  )
}