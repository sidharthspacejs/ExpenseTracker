const Footer = () => {
  return (
    <footer>
      <div className="flex items-center my-8">
        <div className="h-px flex-1 bg-gray-200"></div>
        <span className="px-4 text-xs uppercase tracking-[0.3em] text-gray-400">
          Trusted by N3 Team
        </span>
        <div className="h-px flex-1 bg-gray-200"></div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <p className="text-xs text-gray-500">
          © 2026 N3 Global Tech. All Right Reserved
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-gray-500 hover: text-gray-700 transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-xs text-gray-500 hover: text-gray-700 transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-xs text-gray-500 hover: text-gray-700 transition-colors"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
