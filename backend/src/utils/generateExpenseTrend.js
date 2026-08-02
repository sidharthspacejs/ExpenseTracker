export const generateExpenseTrend = (expenses, period) => {
  let expenseTrend = [];
  if (period === "today") {
    expenseTrend = Array.from({ length: 24 }, (_, hour) => ({
      label: `${hour.toString().padStart(2, "0")}:00`,
      total: 0,
    }));

    for (const expense of expenses) {
      const hour = expense.createdAt.getHours();

      expenseTrend[hour].total += expense.amount;
    }
  }

  return expenseTrend;
};

export const generateCumulativeTrend = (rawTrend) => {
  let runningTotal = 0;

  return rawTrend.map((point) => {
    runningTotal += point.total;

    return {
      ...point,
      total: runningTotal,
    };
  });
};
