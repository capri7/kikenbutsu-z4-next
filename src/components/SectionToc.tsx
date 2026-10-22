import styles from './SectionToc.module.css'

export type TocItem = { id: string; label: string }

// 節のページの目次。ページの h2 を、すべて同じ順番・同じ文言で並べる（sectionHeadings.test.tsx が確かめる）。
// 見出しの題名は p にして、h2 の一覧と重複の検査に混ぜない。
export default function SectionToc({ items }: { items: TocItem[] }) {
  return (
    <nav className={styles.toc} aria-labelledby="toc-title">
      <p id="toc-title" className={styles.title}>
        このページの内容
      </p>
      <ol className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
