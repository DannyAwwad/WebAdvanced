import { useState } from "react";
import {
  ClipboardList,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

import AssignmentCard from "../components/common/AssignmentCard";
import assignmentsData from "../data/assignments.json";

function Assignments() {
  const [activeFilter, setActiveFilter] = useState("All");

  const assignments = assignmentsData.assignments;

  // Get today's date in local YYYY-MM-DD format
  const today = new Date();
  const todayString = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  // Determine each assignment's current status
  const getStatus = (assignment) => {
    if (assignment.status === "Submitted") return "Submitted";

    if (assignment.dueDate < todayString) return "Overdue";

    return "Pending";
  };

  const pendingCount = assignments.filter(
    assignment => getStatus(assignment) === "Pending"
  ).length;

  const submittedCount = assignments.filter(
    assignment => getStatus(assignment) === "Submitted"
  ).length;

  const overdueCount = assignments.filter(
    assignment => getStatus(assignment) === "Overdue"
  ).length;

  const filters = ["All", "Pending", "Submitted", "Overdue"];

  const filteredAssignments = assignments
    .filter(assignment =>
      activeFilter === "All" || getStatus(assignment) === activeFilter
    )
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate));

  const stats = [
    {
      title: "Total Assignments",
      value: assignments.length,
      icon: ClipboardList
    },
    {
      title: "Pending",
      value: pendingCount,
      icon: Clock
    },
    {
      title: "Submitted",
      value: submittedCount,
      icon: CheckCircle2
    },
    {
      title: "Overdue",
      value: overdueCount,
      icon: AlertCircle
    }
  ];

  return (
    <div className="p-6 space-y-8">

      {/* Page Heading */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-100">
          Assignments
        </h1>

        <p className="text-sm text-muted mt-1">
          Keep track of your coursework and upcoming deadlines.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map(({ title, value, icon: Icon }) => (
          <div
            key={title}
            className="bg-surface border border-white/5 rounded-xl p-5"
          >
            <Icon size={20} className="text-accent mb-3" />

            <p className="text-sm text-muted">{title}</p>

            <p className="text-2xl font-semibold text-gray-100 mt-1">
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Assignment List */}
      <div className="space-y-5">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-gray-100">
            Your Assignments
          </h2>

          {/* Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs px-3 py-2 rounded-lg transition-colors ${
                  activeFilter === filter
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:text-gray-100 hover:bg-white/5"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Assignments */}
        <div className="space-y-3">
          {filteredAssignments.length > 0 ? (
            filteredAssignments.map(assignment => (
              <AssignmentCard
                key={assignment.id}
                assignment={assignment}
                status={getStatus(assignment)}
              />
            ))
          ) : (
            <div className="bg-surface border border-white/5 rounded-xl p-8 text-center">
              <p className="text-sm text-muted">
                No {activeFilter.toLowerCase()} assignments found.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Assignments;