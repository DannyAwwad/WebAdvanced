
import {
  GraduationCap,
  Target,
  Eye,
  Lightbulb,
  Users,
  BookOpen,
  Globe,
  Award
} from 'lucide-react'

const values = [
  {
    title: 'Excellence',
    description: 'Encouraging academic achievement and continuous improvement.',
    icon: Award,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    title: 'Innovation',
    description: 'Promoting creativity, research and modern learning.',
    icon: Lightbulb,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    title: 'Community',
    description: 'Building an inclusive environment that values collaboration.',
    icon: Users,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    title: 'Knowledge',
    description: 'Making education and lifelong learning accessible.',
    icon: BookOpen,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
]

function About() {
  return (
    <div className="space-y-8 p-6">

      {/* Page Header */}
      <div>
        <p className="text-sm text-gray-400 mb-1">
          Student Portal / About
        </p>
        <h1 className="text-3xl font-bold text-gray-100">
          About Our University
        </h1>
        <p className="text-gray-400 mt-2">
          Discover our institution, our purpose, and the values that
          shape our academic community.
        </p>
      </div>

      {/* Introduction */}
      <section className="bg-[#1e1e2d] rounded-2xl border border-gray-700/50 p-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="bg-blue-500/10 p-3 rounded-xl">
          <GraduationCap className="text-blue-500" size={26} />
        </div>

        <h2 className="text-xl font-semibold text-gray-100">
          Welcome to LIU
        </h2>
      </div>

      <p className="text-gray-400 leading-7">
          Through academic programs, practical learning experiences,
          and a diverse educational environment, LIU aims to empower
          students with the knowledge and skills needed to contribute
          positively to society.
        </p>
      </section>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <section className="bg-[#1e1e2d] rounded-2xl border border-gray-700/50 p-6">
          <div className="bg-blue-500/10 p-3 rounded-xl w-fit mb-4">
            <Target className="text-blue-400" size={24} />
          </div>

          <h2 className="text-lg font-semibold mb-3">
            Our Mission
          </h2>

          <p className="text-gray-400 leading-7">
            To provide quality higher education, foster critical
            thinking, and equip students with the skills and
            knowledge necessary to succeed in their professional
            and personal lives.
          </p>
        </section>

        <section className="bg-[#1e1e2d] rounded-2xl border border-gray-700/50 p-6">
          <div className="bg-purple-500/10 p-3 rounded-xl w-fit mb-4">
            <Eye className="text-purple-400" size={24} />
          </div>

          <h2 className="text-lg font-semibold mb-3">
            Our Vision
          </h2>

          <p className="text-gray-400 leading-7">
            To be a leading institution recognized for academic
            excellence, innovation, inclusivity, and its positive
            impact on local and global communities.
          </p>
        </section>

      </div>

      {/* Core Values */}
      <section>
        <div className="mb-5">
          <h2 className="text-xl font-bold text-gray-100">
            Our Core Values
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            The principles that guide our academic community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {values.map((value) => {
            const Icon = value.icon

            return (
              <div
                key={value.title}
                className="bg-[#1e1e2d] rounded-2xl border border-gray-700/50 p-5"
              >
                <div className={`${value.bg} p-3 rounded-xl w-fit mb-4`}>
                  <Icon className={value.color} size={22} />
                </div>

                <h3 className="font-semibold text-gray-100 mb-2">
                  {value.title}
                </h3>

                <p className="text-sm text-gray-400 leading-6">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-blue-600 rounded-2xl p-8 text-white">
        <div className="flex items-center gap-4 mb-3">
          <Globe size={28} />
          <h2 className="text-xl font-semibold">
            Learning Without Boundaries
          </h2>
        </div>

        <p className="text-blue-100 leading-7 max-w-3xl">
          Education is more than acquiring knowledge. It is about
          developing perspectives, discovering opportunities, and
          building the foundations for a better future.
        </p>
      </section>

    </div>
  )
}

export default About
