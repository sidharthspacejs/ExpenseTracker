import LoginForm from "./LoginForm";
import Footer from "./Footer";

const LeftPanel = () => {
    return (
        <div className="flex flex-col justify-center px-16">
            
            <div>
                Logo
            </div>

            <div>
                <h1>Welcome back.</h1>
                <p>Sign in to manage receipts, approvals, and team spend across N3 GlobalTech.</p>
            </div>

            <LoginForm />

            <Footer />

            
        </div>
    );
};

export default LeftPanel;