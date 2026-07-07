import { ArrowRight } from 'lucide-react'

const LoginForm = () => {
    return (
        <form className="flex flex-col gap-5">

            <div>

                <label 
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-700"
                >
                    Username
                </label>
                
                <input
                
                 id="username"
                 name="username"
                 type="text"
                 placeholder="Enter your username"
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

                />

            </div>

            <div>
                <label 
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
                >
                    Password
                </label>
                
                <input 
                
                 id="password"
                 name="password"
                 type="password"
                 placeholder="Enter your password"
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex items-center gap-2">
                <input 
                type="checkbox"
                id="remember"
                />

                <label
                htmlFor="remember"
                className="text-sm text-gray-700"
                >
                    Keep me signed in on this device
                </label>
            </div>

            <button 
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
                Sign In <ArrowRight size={18}/>
            </button>

        </form>
    );
};

export default LoginForm;