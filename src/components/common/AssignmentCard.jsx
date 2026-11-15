import { useState } from "react";
import { ChevronDown, CalendarDays, BookOpen } from "lucide-react";

function AssignmentCard({ assignment, status }) {
  const [expanded, setExpanded] = useState(false);

  const dueDate = new Date(`${assignment.dueDate}T00:00:00`);

  const formattedDate = dueDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  const statusStyles = {
    Pending: "bg-blue-500/10 text-blue-400",
    Submitted: "bg-green-500/10 text-green-400",
    Overdue: "bg-red-500/10 text-red-400"
  };

  return (
    <div className="bg-surface border border-white/5 rounded-xl">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center justify-between text-left gap-4"
      >
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-accent font-medium">
              {assignment.courseCode}
            </span>

            <span className="text-xs text-muted">•</span>

            <span className="text-xs text-muted">
              {assignment.courseTitle}
            </span>
          </div>

          <h3 className="text-sm font-semibold text-gray-100">
            {assignment.title}
          </h3>

          <div className="flex items-center gap-2 mt-2 text-xs text-muted">
            <CalendarDays size={14} />
            <span>Due {formattedDate}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className={`text-xs px-2.5 py-1 rounded-full ${statusStyles[status]}`}>
            {status}
          </span>

          <ChevronDown
            size={18}
            className={`text-muted transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 pt-2 border-t border-white/5">
          <p className="text-sm text-gray-400 leading-relaxed">
            {assignment.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default AssignmentCard;