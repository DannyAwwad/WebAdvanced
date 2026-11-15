import { GraduationCap, BookOpen, Award } from "lucide-react";

import GradeCard from "../components/common/GradeCard";
import SemesterCourseStatsCard from "../components/common/SemesterCourseStatsCard";

import gradesData from "../data/grades.json";

function Grades() {
    const courses = gradesData.courses;

    const completedCredits = courses.reduce(
        (total, course) => total + course.credits,
        0
    );

    return (
        <div className="p-6 space-y-8">

            {/* Page heading */}
            <div>
                <h1 className="text-2xl font-semibold text-gray-100">
                    My Grades
                </h1>

                <p className="text-sm text-muted mt-1">
                    Track your academic performance and assessment results.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                <SemesterCourseStatsCard
                    icon={GraduationCap}
                    title="Semester GPA"
                    val={gradesData.gpa}
                />

                <SemesterCourseStatsCard
                    icon={BookOpen}
                    title="Completed Courses"
                    val={courses.length}
                />

                <SemesterCourseStatsCard
                    icon={Award}
                    title="Earned Credits"
                    val={completedCredits}
                />

            </div>

            {/* Course grades */}
            <div className="space-y-4">

                <div>
                    <h2 className="text-lg font-semibold text-gray-100">
                        Course Grades
                    </h2>

                    <p className="text-sm text-muted mt-1">
                        {gradesData.semester}
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    {courses.map(course => (
                        <GradeCard
                            key={course.id}
                            course={course}
                        />
                    ))}
                </div>

            </div>

        </div>
    );
}

export default Grades;