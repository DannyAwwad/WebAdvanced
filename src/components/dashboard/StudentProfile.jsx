
function StudentProfile({ student, academic }) {
  const gpaPercentage = (academic.gpa / academic.maxGpa) * 100

  const creditsPercentage =
    (academic.completedCredits / academic.totalCredits) * 100

  return (
    <section className="bg-surface border border-white/5 rounded-2xl p-8">

      {/* Profile Information */}
      <div className="flex flex-col items-center text-center">

        <img
          src={student.profilePicture}
          alt={`${student.firstName} ${student.lastName}`}
          className="w-28 h-28 rounded-full object-cover
                     border-4 border-accent/30 mb-4"
        />

        <h1 className="text-2xl font-bold">
          {student.firstName} {student.lastName}
        </h1>

        <p className="text-muted text-sm mt-1">
          {student.campus}
        </p>

      </div>

      {/* Academic Progress */}
      <div className="mt-8 space-y-6">

        {/* GPA */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted font-medium">
              GPA
            </span>

            <span className="text-sm font-semibold">
              {academic.gpa.toFixed(2)} / {academic.maxGpa.toFixed(2)}
            </span>
          </div>

          <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all"
              style={{ width: `${gpaPercentage}%` }}
            />
          </div>
        </div>

        {/* Completed Credits */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted font-medium">
              Credits Completed
            </span>

            <span className="text-sm font-semibold">
              {academic.completedCredits} / {academic.totalCredits}
            </span>
          </div>

          <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-sky-400 rounded-full transition-all"
              style={{ width: `${creditsPercentage}%` }}
            />
          </div>

          <p className="text-xs text-muted mt-2">
            {creditsPercentage.toFixed(0)}% of degree requirements completed
          </p>
        </div>

      </div>
    </section>
  )
}

export default StudentProfile
