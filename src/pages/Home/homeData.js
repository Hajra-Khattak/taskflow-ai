// Static preview content for the landing page

export const stats = [
  { title: "Total tasks", value: "24", detail: "Across your workspace", icon: "calendar", color: "blue" },
  { title: "Completed", value: "18", detail: "Tasks finished", icon: "check", color: "green" },
  { title: "In progress", value: "04", detail: "Keep moving forward", icon: "clock", color: "orange" },
  { title: "Productivity", value: "86%", detail: "Your weekly progress", icon: "chart", color: "purple" },
];

export const taskColumns = [
  {
    title: "To Do",
    count: "03",
    color: "blue",
    tasks: [
      { title: "Design landing page", category: "Design", date: "Today" },
      { title: "Read React documentation", category: "Learning", date: "Tomorrow" },
      { title: "Plan weekly goals", category: "Personal", date: "Friday" },
    ],
  },
  {
    title: "Doing",
    count: "02",
    color: "orange",
    tasks: [
      { title: "Build dashboard UI", category: "Development", date: "Today" },
      { title: "Create habit tracker", category: "Development", date: "Today" },
    ],
  },
  {
    title: "Done",
    count: "07",
    color: "green",
    tasks: [
      { title: "Create authentication", category: "Development", date: "Done" },
      { title: "Setup project structure", category: "Setup", date: "Done" },
      { title: "Create navbar", category: "Design", date: "Done" },
    ],
  },
];

export const habits = [
  { name: "Reading Book", current: 12, best: 18, progress: 75, color: "orange" },
  { name: "Code for 1 hour", current: 8, best: 14, progress: 60, color: "blue" },
  { name: "Anime Time", current: 5, best: 9, progress: 45, color: "pink" },
];

export const features = [
  {
    title: "Drag-and-drop task board",
    description: "Move tasks between To Do, Doing and Done. Your order and status are saved instantly.",
    icon: "calendar",
    color: "blue",
  },
  {
    title: "Habit streaks and weekly goals",
    description: "Check in every day, watch your streak grow and hit your weekly target for each habit.",
    icon: "flame",
    color: "orange",
  },
  {
    title: "AI task breakdown",
    description: "Turn a big task into small, ordered subtasks with one click, then add the ones you like.",
    icon: "sparkles",
    color: "purple",
  },
  {
    title: "Stats and charts",
    description: "See what you finished each day and how your tasks are spread across your board.",
    icon: "chart",
    color: "green",
  },
  {
    title: "Yearly activity heatmap",
    description: "A GitHub-style calendar shows every day you completed a task or a habit.",
    icon: "target",
    color: "pink",
  },
  {
    title: "Dark mode, on every device",
    description: "A clean layout that adapts from phone to desktop, in light or dark.",
    icon: "moon",
    color: "indigo",
  },
];

export const colorStyles = {
  blue: "bg-blue-500/10 text-blue-500",
  green: "bg-emerald-500/10 text-emerald-500",
  orange: "bg-orange-500/10 text-orange-500",
  purple: "bg-violet-500/10 text-violet-500",
  pink: "bg-pink-500/10 text-pink-500",
  indigo: "bg-indigo-500/10 text-indigo-500",
};

export const taskColors = {
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  green: "bg-emerald-500",
};
