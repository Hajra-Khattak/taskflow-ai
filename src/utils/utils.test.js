import { test } from 'node:test'
import assert from 'node:assert/strict'
import { addDays, daysBetween, toKey, getWeekDays } from './dates.js'
import { currentStreak, bestStreak, buildCounts } from './activity.js'

test('addDays crosses month, year and leap day', () => {
  assert.equal(addDays('2026-01-31', 1), '2026-02-01')
  assert.equal(addDays('2026-12-31', 1), '2027-01-01')
  assert.equal(addDays('2028-02-28', 1), '2028-02-29')
  assert.equal(daysBetween('2026-03-01', '2026-03-31'), 30)
})

test('toKey uses the given time zone, not the machine one', () => {
  const lateUtc = new Date('2026-11-10T22:00:00Z')
  assert.equal(toKey(lateUtc, 'UTC'), '2026-11-10')
  assert.equal(toKey(lateUtc, 'Asia/Karachi'), '2026-11-11')
})

test('getWeekDays starts on Monday', () => {
  const week = getWeekDays('2026-11-11') // a Wednesday
  assert.equal(week[0].key, '2026-11-09')
  assert.equal(week[6].key, '2026-11-15')
  assert.equal(week.find((d) => d.isToday).name, 'WED')
})

test('currentStreak counts from yesterday when today is not done yet', () => {
  const days = ['2026-11-08', '2026-11-09', '2026-11-10']
  assert.equal(currentStreak(days, '2026-11-10'), 3)
  assert.equal(currentStreak(days, '2026-11-11'), 3)
  assert.equal(currentStreak(days, '2026-11-12'), 0)
})

test('bestStreak finds the longest run and ignores duplicates', () => {
  assert.equal(bestStreak([]), 0)
  assert.equal(bestStreak(['2026-11-01', '2026-11-02', '2026-11-02', '2026-11-05', '2026-11-06', '2026-11-07']), 3)
})

test('buildCounts adds completed tasks and habit check-ins per day', () => {
  const at = (iso) => ({ completedAt: { toDate: () => new Date(iso) } })
  const tasks = [at('2026-11-10T10:00:00Z'), at('2026-11-10T11:00:00Z'), { completedAt: null }]
  const habits = [{ completedDates: ['2026-11-10', '2026-11-09'] }, {}]
  assert.deepEqual(buildCounts(tasks, habits, 'UTC'), { '2026-11-10': 3, '2026-11-09': 1 })
})
