"use client";

import { useState, useMemo, useEffect } from "react";

import Layout from "../components/Layout"; // Layout.jsx
import FiltersBar from "../components/FiltersBar"; // FiltersBar.jsx
import ExperienceCard from "../components/ExperienceCard"; // ExperienceCard.jsx

// Step 0: Define TypeScript type for your data
type Property = {
  property: string;
  role: string;
  propertyType: string;
  isFlagship: boolean;
};

export default function Home() {
  // Step 1: State for data with type
  const [data, setData] = useState<Property[]>([]);

  // Step 2: Fetch data from public/hospitality.json
  useEffect(() => {
    fetch("/hospitality.json")
      .then((res) => res.json())
      .then((json: Property[]) => setData(json))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Step 3: State for filters
  const [filters, setFilters] = useState({
    propertyType: "",
    search: "",
    flagshipOnly: false,
  });

  // Step 4: Filter data based on filters
  const filtered = useMemo(() => {
    return data.filter((exp) => {
      if (filters.propertyType && exp.propertyType !== filters.propertyType)
        return false;
      if (filters.flagshipOnly && !exp.isFlagship) return false;
      if (filters.search) {
        const q = filters.search.toLowerCase();
        return (
          exp.property.toLowerCase().includes(q) ||
          exp.role.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [data, filters]);

  // Step 5: Render
  return (
    <Layout>
      <FiltersBar filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((exp, i) => (
          <ExperienceCard
            key={i}
            exp={exp}
            onClick={() => alert("Details view here")}
          />
        ))}
      </div>
    </Layout>
  );
}
