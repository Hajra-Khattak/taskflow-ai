import { useUserCollection } from './useUserCollection'
import {
  subscribeToTasks,
  addTask,
  updateTask,
  deleteTask,
  reorderTasks,
} from '../services/taskService'

export function useTasks() {
  const { uid, items, loading, error } = useUserCollection(
    subscribeToTasks,
    'Could not load your tasks. Please refresh the page.'
  )

  return {
    tasks: items,
    loading,
    error,
    createTask: (task) => addTask(uid, task),
    editTask: updateTask,
    removeTask: deleteTask,
    moveTasks: reorderTasks,
  }
}
