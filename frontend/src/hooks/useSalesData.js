import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://truestate-backend-0ate.onrender.com"; // change when deployed

function useSalesData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalUnits, setTotalUnits] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  // STATE FOR ALL FILTERS
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [gender, setGender] = useState("");
  const [ageRange, setAgeRange] = useState(""); // "18-25"
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [payment, setPayment] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [sortBy, setSortBy] = useState("date");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // -----------------------------
  // BUILD QUERY STRING
  // -----------------------------
  const buildQuery = () => {
    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (region) params.append("region", region);
    if (gender) params.append("gender", gender);

    if (ageRange) {
      const [min, max] = ageRange.split("-");
      params.append("ageMin", min);
      params.append("ageMax", max);
    }

    if (category) params.append("category", category);
    if (tags) params.append("tags", tags);
    if (payment) params.append("payment", payment);

    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate", endDate);

    params.append("sortBy", sortBy);
    params.append("page", page);

    return params.toString();
  };

  // -----------------------------
  // FETCH API DATA
  // -----------------------------
 const fetchData = async () => {
  try {
    setLoading(true);  // start loading

    const queryString = buildQuery();
    const res = await axios.get(`${API_URL}?${queryString}`);

    setData(res.data.data);
    setTotalPages(res.data.totalPages);

    // Stats calculation
    let units = 0, amount = 0, discount = 0;

    res.data.data.forEach((item) => {
      units += item.quantity;
      amount += item.finalAmount;
      discount += item.discountPercentage;
    });

    setTotalUnits(units);
    setTotalAmount(amount);
    setTotalDiscount(discount);

  } catch (err) {
    console.error("Error fetching data:", err);
  } finally {
    setLoading(true);
    setTimeout(() => setLoading(false), 300); // smoother UX
  }
 };


  // -----------------------------
  // FETCH WHEN STATE CHANGES
  // -----------------------------
  useEffect(() => {
    fetchData();
  }, [
    search,
    region,
    gender,
    ageRange,
    category,
    tags,
    payment,
    startDate,
    endDate,
    sortBy,
    page,
  ]);

  // -----------------------------
  // RETURN PUBLIC API
  // -----------------------------
  return {
    data,
    totalUnits,
    totalAmount,
    totalDiscount,

    page,
    totalPages,
    setPage,

    setSearch,
    setRegion,
    setGender,
    setAgeRange,
    setCategory,
    setTags,
    setPayment,
    setStartDate,
    setEndDate,
    setSortBy,

    loading,
  };
}

export default useSalesData;
