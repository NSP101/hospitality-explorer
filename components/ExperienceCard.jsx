export default function ExperienceCard({ exp, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border rounded-lg p-4 bg-white hover:shadow"
    >
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">{exp.property}</h2>
        {exp.isFlagship && <span className="text-yellow-500">★</span>}
      </div>
      <p className="text-sm text-gray-500">
        {exp.role} • {exp.location}
      </p>
      <p className="text-sm">
        {exp.propertyType} • {exp.duration}
      </p>
      <p className="mt-2 text-xs text-gray-400">
        {exp.projects?.length ?? 0} projects
      </p>
    </div>
  );
}
