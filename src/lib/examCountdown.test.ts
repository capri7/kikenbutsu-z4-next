import { afterEach, describe, expect, it, vi } from 'vitest'
import { daysLeftJST, formatDisplay, jstTodayYMD, msUntilNextJSTMidnight } from './examCountdown'

// 「今」を日本時間の日時で固定する（テストを動かす環境の時間帯に左右されないよう、+09:00 で指定する）
function setNowJST(isoWithOffset: string) {
  vi.useFakeTimers()
  vi.setSystemTime(new Date(isoWithOffset))
}

afterEach(() => {
  vi.useRealTimers()
})

describe('formatDisplay（試験日カウントダウンの表示の文）', () => {
  it('試験日の前は「本番まで残り ○日」', () => {
    setNowJST('2026-10-09T12:00:00+09:00')
    expect(formatDisplay('2026-10-19')).toBe('本番まで残り 10日')
  })

  it('前日は「本番まで残り 1日」', () => {
    setNowJST('2026-10-09T12:00:00+09:00')
    expect(formatDisplay('2026-10-10')).toBe('本番まで残り 1日')
  })

  it('当日は「今日が試験日！」', () => {
    setNowJST('2026-10-09T12:00:00+09:00')
    expect(formatDisplay('2026-10-09')).toBe('今日が試験日！')
  })

  it('過ぎると「試験日から ○日経過」', () => {
    setNowJST('2026-10-09T12:00:00+09:00')
    expect(formatDisplay('2026-10-06')).toBe('試験日から 3日経過')
  })

  it('試験日が未設定なら「受験日を設定してください」（消したあとも同じ）', () => {
    setNowJST('2026-10-09T12:00:00+09:00')
    expect(formatDisplay(null)).toBe('受験日を設定してください')
  })
})

describe('日本時間の日付の境目', () => {
  it('日本時間の0時30分（世界標準時ではまだ前日）は、日本時間の日付で数える', () => {
    // 2026-10-09T15:30:00Z ＝ 日本時間 10月10日 0時30分
    setNowJST('2026-10-10T00:30:00+09:00')
    expect(jstTodayYMD()).toBe('2026-10-10')
    expect(daysLeftJST('2026-10-10')).toBe(0)
    expect(formatDisplay('2026-10-10')).toBe('今日が試験日！')
  })

  it('日本時間の23時59分は、まだその日として数える', () => {
    setNowJST('2026-10-09T23:59:00+09:00')
    expect(jstTodayYMD()).toBe('2026-10-09')
    expect(formatDisplay('2026-10-10')).toBe('本番まで残り 1日')
  })

  it('月と年をまたいでも、日数を正しく数える', () => {
    setNowJST('2026-12-30T12:00:00+09:00')
    expect(daysLeftJST('2027-01-02')).toBe(3)
  })

  it('表示を切り替える時刻（日本時間の次の0時）までの時間を返す', () => {
    setNowJST('2026-10-09T23:59:00+09:00')
    expect(msUntilNextJSTMidnight()).toBe(60 * 1000)
  })
})
