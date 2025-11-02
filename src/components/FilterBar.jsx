import { useState, useEffect } from "react";

export default function FilterBar({ products, setFiltered }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const categories = ["all", ...new Set(products.map(p => p.category))];

  useEffect(() => {
    let temp = [...products];

    if (search) temp = temp.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
    if (category !== "all") temp = temp.filter(p => p.category === category);
    if (sort === "low") temp.sort((a, b) => a.price - b.price);
    if (sort === "high") temp.sort((a, b) => b.price - a.price);

    setFiltered(temp);
  }, [search, category, sort, products, setFiltered]);

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <input
        type="text"
        placeholder="Search by name..."
        className="border border-gray-300 p-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select className="border border-gray-300 p-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
      </select>
      <select className="border border-gray-300 p-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
      </select>
    </div>
  );
}
