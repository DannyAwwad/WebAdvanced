import { Book, Calendar, GraduationCap } from "lucide-react";
import CourseCard from "../components/common/CourseCard";
import SemesterCourseStatsCard from "../components/common/SemesterCourseStatsCard";
import coursesData from "../data/courses.json";

function Courses() {
    const courses = coursesData.courses;

    return (
        <div className="p-6 space-y-8">

            {/* Page heading */}
            <div>
                <h1 className="text-2xl font-semibold text-gray-100">
                    My Courses
                </h1>
                <p className="text-sm text-muted mt-1">
                    Manage and view your enrolled courses.
                </p>
            </div>

            {/* Semester statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                <SemesterCourseStatsCard
                    icon={Book}
                    title="Enrolled Courses"
                    val={courses.length}
                />

                <SemesterCourseStatsCard
                    icon={GraduationCap}
                    title="Registered Credits"
                    val={courses.reduce((total, course) => total + course.credits, 0)}
                />

                <SemesterCourseStatsCard
                    icon={Calendar}
                    title="Current Semester"
                    val={coursesData.semester}
                />

            </div>

            {/* Course cards */}
            <div>
                <h2 className="text-lg font-semibold text-gray-100 mb-4">
                    Enrolled Courses
                </h2>

                <div className="grid grid-cols-1 gap-4">
                    {courses.map(course => (
                        <CourseCard
                            key={course.id}
                            course={course}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Courses;