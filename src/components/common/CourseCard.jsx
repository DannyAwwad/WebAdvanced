import { useState } from "react";
import { ChevronDown } from "lucide-react";

function CourseCard({ course }) {
    const [expanded, setExpanded] = useState(false);

    const {
        title,
        major,
        credits,
        status,
        instructor,
        sched,
        room,
        section
    } = course;

    return (
        <div className="bg-surface border border-white/5 rounded-xl p-4">

            {/* Main row */}
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setExpanded(!expanded)}
            >
                <div>
                    <p className="text-sm font-semibold text-gray-100">
                        {title}
                    </p>

                    <p className="text-xs text-muted mt-1">
                        {major} · {sched} · Section {section}
                    </p>
                </div>

                <ChevronDown
                    size={18}
                    className={`text-muted transition-transform duration-200 ${
                        expanded ? "rotate-180" : ""
                    }`}
                />
            </div>

            {/* Expanded details */}
            {expanded && (
                <div className="border-t border-white/5 mt-4 pt-4 grid grid-cols-2 gap-4">

                    <div>
                        <p className="text-xs text-muted">Status</p>
                        <p className="text-sm text-gray-200 mt-1">{status}</p>
                    </div>

                    <div>
                        <p className="text-xs text-muted">Instructor</p>
                        <p className="text-sm text-gray-200 mt-1">{instructor}</p>
                    </div>

                    <div>
                        <p className="text-xs text-muted">Schedule</p>
                        <p className="text-sm text-gray-200 mt-1">{sched}</p>
                    </div>

                    <div>
                        <p className="text-xs text-muted">Room</p>
                        <p className="text-sm text-gray-200 mt-1">{room}</p>
                    </div>

                </div>
            )}
        </div>
    );
}

export default CourseCard;