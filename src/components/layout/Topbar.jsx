import { Search, Bell } from 'lucide-react'

function Topbar() {
  return (
    <header className="h-16 border-b border-white/5 px-4 md:px-8 flex items-center gap-5">

      {/* Search bar - medium screens and larger */}
      <div className="hidden md:flex flex-1 items-center gap-2 bg-surface border border-white/5 rounded-lg px-3 py-2">
        <Search size={18} className="text-muted" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent outline-none text-sm text-gray-100 placeholder:text-muted"
        />
      </div>

      {/* Search button - small screens */}
      <button className="md:hidden text-muted hover:text-white">
        <Search size={20} />
      </button>

      {/* Right-side controls */}
      <div className="ml-auto flex items-center gap-5 shrink-0">

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