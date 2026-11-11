import { useUserCollection } from './useUserCollection'
import {
  subscribeToHabits,
  addHabit,
  updateHabit,
  deleteHabit,
  setHabitDay,
} from '../services/habitService'

export function useHabits() {
  const { uid, items, loading, error } = useUserCollection(
    subscribeToHabits,
    'Could not load your habits. Please refresh the page.'
  )

  return {
    habits: items,
    loading,
    error,
    createHabit: (habit) => addHabit(uid, habit),
    editHabit: updateHabit,
    removeHabit: deleteHabit,
    setDay: setHabitDay,
  }
}
