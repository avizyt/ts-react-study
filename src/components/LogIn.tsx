import { useState } from "react";

type UserProp = {
    name: string;
    sessionId: number;
};

const LogIn = () => {
    const [username, setUserName] = useState("");
    const [user, setUser] = useState<UserProp | null>(null);
    const [signInHead, setSignInHead] = useState("Sign In");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const buttonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault;
        setUser({
            name: username,
            sessionId: Math.random(),
        });
        setSignInHead("Welcome! You are Here.");
    };
    return (
        <div className='p-4 flex justify-center bg-slate-200 border rounded-lg'>
            <div className='w-50 h-100 flex flex-col text-slate-700  border rounded-md shadow-lg shadow-slate-500 justify-center items-start m-4 p-4 bg-slate-100'>
                <h2 className='text-2xl text-orange-500 my-4 py-4'>
                    {signInHead}
                </h2>
                {user ? (
                    `${user.name} logged in`
                ) : (
                    <form action=''>
                        <div className='flex flex-col mb-4 items-start'>
                            <label
                                htmlFor='username'
                                className='block text-slate-700'>
                                Username:
                            </label>
                            <input
                                type='text'
                                placeholder='Username'
                                onChange={handleChange}
                                className='w-full px-3 py-2 border text-slate-700 bg-slate-200 border-slate-300 shadow-sm rounded-lg focus:outline-none focus:border-blue-500'
                                required
                            />
                            <label
                                htmlFor='password'
                                className='block text-slate-700'>
                                Password:
                            </label>
                            <input
                                type='password'
                                placeholder='Password'
                                className='w-full px-3 py-2 text-slate-700 bg-slate-200 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500'
                                required
                            />
                            <div className='flex flex-row space-x-4'>
                                <input
                                    type='checkbox'
                                    className='bg-slate-300'
                                />
                                <p>Remember me?</p>
                            </div>
                        </div>

                        <button
                            className='text-center bg-slate-300 w-full'
                            onClick={buttonClick}>
                            SignIn
                        </button>

                        <div className='flex flex-col items-end text-center'>
                            <h4 className='text-slate-400'>Forgot Password?</h4>
                            <p>
                                Don't have an account?{" "}
                                <a
                                    className='text-blue-500 hover:underline'
                                    href='#'>
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LogIn;
