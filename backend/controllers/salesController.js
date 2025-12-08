const { getSalesData } = require("../services/salesService");

exports.getSales = async (req, res) => {
  try {
    const queryParams = req.query;

    // -------------------------
    // SORTING LOGIC
    // -------------------------
    let sort = {};

    switch (queryParams.sortBy) {
      case "date":
        sort.date = -1; // newest first
        break;

      case "quantity":
        sort.quantity = 1; // ascending
        break;

      case "name":
        sort.customerName = 1; // A → Z
        break;

      default:
        sort.date = -1; // default sorting
    }

    // Pagination placeholder (we do in next step)
    const page = Number(queryParams.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const { results, total } = await getSalesData(queryParams, sort, skip, limit);

    res.json({
      page,
      total,
      totalPages: Math.ceil(total / limit),
      data: results
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
