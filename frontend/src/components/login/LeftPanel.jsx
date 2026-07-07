import LoginForm from "./LoginForm";
import Footer from "./Footer";
import logo from "../../assets/logo/n3logo.png";

const LeftPanel = () => {
  return (
    <div className="flex flex-col justify-center px-16 max-w-xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-10">
        <div className=" border rounded-xl border-gray-200 shadow-sm bg-white p-2">
          <img src={logo} alt="n3globaltech" className="h-14 w-auto" />
        </div>
        <div>
          <h2 className="text-xl font-bold">N3 Global Tech</h2>

          <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
            Expense Tracker
          </p>
        </div>
      </div>

      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-700">Secure Sign In</span>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Welcome back.</h1>
        <p className="mt-3 text-gray-600 leading-7">
          Sign in to manage receipts, approvals, and team spend across N3 Global
          Tech.
        </p>
      </div>

      <LoginForm />

      <Footer />
    </div>
  );
};

export default LeftPanel;
