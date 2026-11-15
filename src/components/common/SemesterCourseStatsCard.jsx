function SemesterCourseStatsCard ({title, val, icon : Icon})
{
	return (
		<div className="bg-surface border border-white/5 rounded-xl p-5">
			{Icon && <Icon size={20} className="text-accent" />}
			<p className="text-sm text-muted">
				{title}
			</p>
			{val !== undefined && val !== null && (
				<p className="text-xs text-muted mt-1">
					{val}
				</p>
			)}
		</div>
	);
}

export default SemesterCourseStatsCard;