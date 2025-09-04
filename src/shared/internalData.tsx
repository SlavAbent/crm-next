import { icons } from '@/icons/'
const { DashboardIcon, SettingsIcon, ProfileIcon, TasksIcon } = icons

export const linkData = [
  {
    id: 1,
    href: '/dashboard',
    text: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    id: 1,
    href: '/tasks',
    text: 'Tasks',
    icon: <TasksIcon />,
  },
  {
    id: 2,
    href: '/profile',
    text: 'Profile',
    icon: <ProfileIcon />,
  },
]
