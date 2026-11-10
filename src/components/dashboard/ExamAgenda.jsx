
import { CalendarDays, Clock3, MapPin } from 'lucide-react'

function ExamAgenda({ exams }) {
  // Sort exams by date and time
  const sortedExams = [...exams].sort((a, b) => {
    return `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`)
  })

  // Format the date for display
  function formatDate(date) {
    return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <section className="bg-surface border border-white/5 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <CalendarDays size={22} className="text-accent" />
        <h2 className="text-xl font-bold">Exam Agenda</h2>
      </div>

      <div className="space-y-3">
        {sortedExams.length === 0 ? (
          <p className="text-sm text-muted">
            No upcoming exams.
          </p>
        ) : (
          sortedExams.map((exam) => (
            <div
              key={exam.id}
              className="flex flex-col sm:flex-row sm:items-center
                         justify-between gap-4 p-4 rounded-xl
                         bg-white/5 border border-white/5"
            >
              <div>
                <h3 className="font-semibold">{exam.courseCode}</h3>
                <p className="text-sm text-muted mt-1">
                  {formatDate(exam.date)}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <Clock3 size={16} className="text-accent" />
                  {exam.time}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent" />
                  Room {exam.room}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default ExamAgenda
