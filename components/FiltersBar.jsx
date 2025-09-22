export default function FiltersBar({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <select
        value={filters.propertyType}
        onChange={(e) =>
          setFilters({ ...filters, propertyType: e.target.value })
        }
        className="border p-2 rounded"
      >
        <option value="">All Property Types</option>
        <option value="Business">Business</option>
        <option value="Heritage">Heritage</option>
        <option value="Resort">Resort</option>
      </select>

      <input
        type="text"
        placeholder="Search property or role"
        className="border p-2 rounded"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={filters.flagshipOnly}
          onChange={(e) =>
            setFilters({ ...filters, flagshipOnly: e.target.checked })
          }
        />
        Flagship only
      </label>
    </div>
  );
}
