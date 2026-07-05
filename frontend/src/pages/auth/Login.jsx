import LeftPanel from "../../components/login/LeftPanel";
import RightPanel from "../../components/login/RightPanel";

const Login = () => {

    return (
        <div className="min-h-screen grid grid-cols-2 ">
            <LeftPanel />
            <RightPanel />
        </div>
    );
};

export default Login;