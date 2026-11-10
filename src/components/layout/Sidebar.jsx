
import { NavLink } from 'react-router-dom'
import {
  Home,
  BookOpen,
  GraduationCap,
  CalendarDays,
  ClipboardList,
  Info,
  Mail,
  Settings,
} from 'lucide-react'

const navigation = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: Info },
  { name: 'Courses', path: '/courses', icon: BookOpen },
  { name: 'Grades', path: '/grades', icon: GraduationCap },
  { name: 'Schedule', path: '/schedule', icon: CalendarDays },
  { name: 'Assignments', path: '/assignments', icon: ClipboardList },
  { name: 'Contact', path: '/contact', icon: Mail },
]

function Sidebar() {
  return (
    <aside className="w-20 min-h-screen bg-surface border-r border-white/5 py-6 flex flex-col items-center">

      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          L<span className="text-accent">I</span>U
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col items-center gap-3">
        {navigation.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end
              title={item.name}
              className={({ isActive }) =>
                `group relative flex items-center justify-center
                 w-12 h-12 rounded-xl transition-colors ${
                  isActive
                    ? 'bg-accent/15 text-accent'
                    : 'text-muted hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <Icon size={21} />

              {/* Tooltip */}
              <span
                className="absolute left-16 z-50
                           px-3 py-2 rounded-lg
                           bg-gray-800 text-white text-sm
                           whitespace-nowrap shadow-lg
                           opacity-0 invisible
                           group-hover:opacity-100
                           group-hover:visible
                           transition-all duration-200"
              >
                {item.name}
              </span>
            </NavLink>
          )
        })}
      </nav>

      {/* Settings */}
      <div className="border-t border-white/5 pt-4">
        <button
          title="Settings"
          className="group relative flex items-center justify-center
                     w-12 h-12 rounded-xl text-muted
                     hover:bg-white/5 hover:text-white transition-colors"
        >
          <Settings size={21} />

          <span
            className="absolute left-16 z-50
                       px-3 py-2 rounded-lg
                       bg-gray-800 text-white text-sm
                       whitespace-nowrap shadow-lg
                       opacity-0 invisible
                       group-hover:opacity-100
                       group-hover:visible
                       transition-all duration-200"
          >
            Settings
          </span>
        </button>
      </div>

    </aside>
  )
}

export default Sidebar
