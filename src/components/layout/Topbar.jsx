
import { Search, Bell } from 'lucide-react'

function Topbar() {
  return (
    <header className="h-16 border-b border-white/5 px-8 flex items-center justify-between">

      <div>
        <h2 className="text-lg font-semibold">
          Welcome to CampusHub
        </h2>
      </div>

      <div className="flex items-center gap-5">

        <button className="text-muted hover:text-white">
          <Search size={20} />
        </button>

        <button className="text-muted hover:text-white">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center font-semibold">
            DA
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-medium">Danny Awwad</p>
            <p className="text-xs text-muted">Computer Science</p>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Topbar
