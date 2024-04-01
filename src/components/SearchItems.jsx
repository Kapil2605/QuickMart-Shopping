import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Products from "./Products";

const SearchItems = () => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilterData(data);
    };
    filteredData();
  }, [term]);
  return (
    <div>
      <Products items={filterData} />
    </div>
  );
};

export default SearchItems;
