import Background from "./Background.jsx";
import TopBar from "./TopBar.jsx";
import MonthlyCard from "./MonthlyCard.jsx";
import ExpenseCard from "./ExpenseCard.jsx";
import SecurityBadge from "./SecurityBadge.jsx";
import Testimonial from "./Testimonial.jsx";

const RightPanel = () => {
  return (
    <div className="relative h-full overflow-hidden rounded-3xl">
      <Background />

      <TopBar />

      <MonthlyCard />

      <ExpenseCard />

      <SecurityBadge />

      <Testimonial />
    </div>
  );
};

export default RightPanel;
