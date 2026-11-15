
import { Calendar, Clock, BookOpen } from "lucide-react";
import coursesData from "../data/courses.json";

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
];

const sessions = [
    "08:00 - 09:15",
    "09:30 - 10:45",
    "11:00 - 12:15",
    "12:30 - 13:45",
    "14:00 - 15:15"
];

function Schedule() {
    const courses = coursesData.courses;

    return (
        <div className="p-6 space-y-8">

            {/* Heading */}
            <div>
                <h1 className="text-2xl font-semibold text-gray-100">
                    My Schedule
                </h1>
                <p className="text-sm text-muted mt-1">
                    Your weekly class timetable.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <div className="bg-surface border border-white/5 rounded-xl p-5">
                    <Calendar size={20} className="text-accent" />
                    <p className="text-sm text-muted mt-2">Semester</p>
                    <p className="text-lg font-semibold text-gray-100">
                        {coursesData.semester}
                    </p>
                </div>

                <div className="bg-surface border border-white/5 rounded-xl p-5">
                    <BookOpen size={20} className="text-accent" />
                    <p className="text-sm text-muted mt-2">Enrolled Courses</p>
                    <p className="text-lg font-semibold text-gray-100">
                        {courses.length}
                    </p>
                </div>

                <div className="bg-surface border border-white/5 rounded-xl p-5">
                    <Clock size={20} className="text-accent" />
                    <p className="text-sm text-muted mt-2">Class Duration</p>
                    <p className="text-lg font-semibold text-gray-100">
                        1h 15m
                    </p>
                </div>

            </div>

            {/* Weekly timetable */}
            <div className="bg-surface rounded-xl p-5">

                <h2 className="text-lg font-semibold text-gray-100 mb-6">
                    Weekly Timetable
                </h2>

                <div className="overflow-x-auto">
                    <div className="min-w-[700px]">

                        {/* Day headings */}
                        <div className="grid grid-cols-[90px_repeat(5,minmax(0,1fr))] gap-3 mb-5">
                            <div />

                            {days.map(day => (
                                <div
                                    key={day}
                                    className="text-center text-xs font-medium text-muted"
                                >
                                    {day.slice(0, 3)}
                                </div>
                            ))}
                        </div>

                        {/* Sessions */}
                        {sessions.map((time, index) => (
                            <div
                                key={time}
                                className="grid grid-cols-[90px_repeat(5,minmax(0,1fr))] gap-3 mb-5"
                            >

                                {/* Time */}
                                <div className="text-xs text-muted pt-2">
                                    {time.split(" - ")[0]}
                                </div>

                                {days.map(day => {
                                    const course = courses.find(course =>
                                        course.session === index + 1 &&
                                        course.days.includes(day)
                                    );

                                    return (
                                        <div key={day} className="min-h-[75px]">

                                            {course && (
                                                <div className="h-full rounded-lg bg-accent/10 border-l-2 border-accent/60 p-3">
                                                    <p className="text-xs font-semibold text-gray-100">
                                                        {course.courseCode}
                                                    </p>

                                                    <p className="text-xs text-muted mt-1">
                                                        {course.room}
                                                    </p>

                                                    <p className="text-[10px] text-accent mt-2">
                                                        {course.title}
                                                    </p>
                                                </div>
                                            )}

                                        </div>
                                    );
                                })}

                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Schedule;
