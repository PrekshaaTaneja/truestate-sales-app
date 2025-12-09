const Sales = require("../models/Sales");

exports.buildQuery = (queryParams) => {
  const mongoQuery = {};

  // ---------------------------
  // SEARCH LOGIC
  // ---------------------------
  if (queryParams.search && queryParams.search.trim() !== "") {
    const search = queryParams.search.trim();

    mongoQuery.$or = [
      { customerName: { $regex: search, $options: "i" } },
      { phoneNumber: { $regex: search, $options: "i" } }
    ];
  }

  // ---------------------------
  // FILTERS LOGIC
  // ---------------------------

  // CUSTOMER REGION (multi-select)
  if (queryParams.region) {
    const regions = queryParams.region.split(",");
    mongoQuery.customerRegion = { $in: regions };
  }

  // GENDER (multi-select)
  if (queryParams.gender) {
    const genders = queryParams.gender.split(",");
    mongoQuery.gender = { $in: genders };
  }

  // PRODUCT CATEGORY (multi-select)
  if (queryParams.category) {
    const categories = queryParams.category.split(",");
    mongoQuery.productCategory = { $in: categories };
  }

  // TAGS (multi-select)
  if (queryParams.tags) {
    const tagList = queryParams.tags.split(",");
    mongoQuery.tags = { $all: tagList };
  }

  // PAYMENT METHOD (multi-select)
  if (queryParams.payment) {
    const methods = queryParams.payment.split(",");
    mongoQuery.paymentMethod = { $in: methods };
  }

  // ---------------------------
  // RANGE FILTERS
  // ---------------------------

  // AGE RANGE FILTER
  if (queryParams.ageMin || queryParams.ageMax) {
    mongoQuery.age = {};
    if (queryParams.ageMin) mongoQuery.age.$gte = Number(queryParams.ageMin);
    if (queryParams.ageMax) mongoQuery.age.$lte = Number(queryParams.ageMax);
  }

  // DATE RANGE FILTER
  if (queryParams.startDate || queryParams.endDate) {
    mongoQuery.date = {};
    if (queryParams.startDate)
      mongoQuery.date.$gte = new Date(queryParams.startDate);
    if (queryParams.endDate)
      mongoQuery.date.$lte = new Date(queryParams.endDate);
  }

  return mongoQuery;
};

exports.getSalesData = async (queryParams, sort, skip, limit) => {
  const query = this.buildQuery(queryParams);

  const results = await Sales.find(query)
    .sort(sort)
    .skip(skip)
    .limit(limit);

  const total = await Sales.countDocuments(query);

  return { results, total };
};