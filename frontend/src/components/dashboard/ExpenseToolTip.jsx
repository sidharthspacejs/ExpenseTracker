const ExpenseToolTip = ({ active, payload, label, coordinate }) => {
  if (!active || !payload || payload.length === 0 || !coordinate) {
    return null;
  }
  const amount = payload[0].value;
  const { x, y } = coordinate;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y - 60,
        transform: "translate(-50%, -100%)",
      }}
    >
      <div className="bg-red-500 text-white text-lg font-semibold px-5 py-2 rounded-xl shadow-lg">
        ₹{payload[0].value}
      </div>
    </div>
  );
};

export default ExpenseToolTip;
