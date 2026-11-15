import { useState } from "react";
import { ChevronDown } from "lucide-react";

function GradeCard({ course }) {
    const [expanded, setExpanded] = useState(false);

    const { title, courseCode, credits, grade, letterGrade, assessments } = course;

    return (
        <div className="bg-surface border border-white/5 rounded-xl p-4">

            {/* Main row */}
            <div
                className="flex items-center justify-between cursor-pointer gap-3"
                onClick={() => setExpanded(!expanded)}
            >
                <div>
                    <p className="text-sm font-semibold text-gray-100">
                        {title}
                    </p>

                    <p className="text-xs text-muted mt-1">
                        {courseCode} · {credits} CreGradedits
                    </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right">
                        <p className="text-sm font-semibold text-gray-100">
                            {grade}/100
                        </p>
                        <p className="text-xs text-accent">
                            {letterGrade}
                        </p>
                    </div>

                    <ChevronDown
                        size={18}
                        className={`text-muted transition-transform duration-200 ${
                            expanded ? "rotate-180" : ""
                        }`}
                    />
                </div>
            </div>
Grade
            {/* Expanded assessments */}
            {expanded && (
                <div className="border-t border-white/5 mt-4 pt-4 space-y-4">

                    <div className="flex justify-between items-center">
                        <p className="text-sm font-medium text-gray-100">
                            Assessment Breakdown
                        </p>
                        <p className="text-xs text-muted">
                            Weighted grades
                        </p>
                    </div>

                    {assessments.map((assessment, index) => (
                        <div key={index} className="space-y-2">

                            <div className="flex justify-between text-sm">
                                <span className="text-muted">
                                    {assessment.name}
                                </span>

                                <span className="text-gray-200">
                                    {assessment.grade}% · {assessment.weight}%
                                </span>
                            </div>

                            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-accent rounded-full"
                                    style={{ width: `${assessment.grade}%` }}
                                />
                            </div>

                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}

export default GradeCard;