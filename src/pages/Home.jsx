import student from '../data/student.json'
import academic from '../data/academic.json'
import exams from '../data/exams.json'

import { BookOpen, GraduationCap } from 'lucide-react'

import StudentProfile from '../components/dashboard/StudentProfile'
import CreditCard from '../components/dashboard/CreditCard'
import ExamAgenda from '../components/dashboard/ExamAgenda'

function Home() {
  return (
    <div className="space-y-6">

      <StudentProfile
        student={student}
        academic={academic}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <CreditCard
          title="Registered Credits"
          value={academic.registeredCredits}
          subtitle="Current semester"
          icon={BookOpen}
        />

        <CreditCard
          title="Completed Credits"
          value={academic.completedCredits}
          subtitle="Total accumulated"
          icon={GraduationCap}
        />

      </div>
		<ExamAgenda exams={exams} />
    </div>
  )
}

export default Home