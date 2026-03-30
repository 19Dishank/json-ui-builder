import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navItems = [
        { name: 'Builder', path: '/' },
        { name: 'Docs', path: '/docs' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

                <div
                    className="flex items-center gap-3  group"
                // onClick={() => navigate('/')}
                >
                    <div className="flex w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 items-center justify-center p-1 sm:p-1.5 rounded-lg sm:rounded-xl bg-indigo-600 text-white shadow-indigo-200 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="8 4 5 4 5 10 2 12 5 14 5 20 8 20" />
                            <polyline points="15 4 19 4 19 10 22 12 19 14 19 20 15 20" />
                        </svg>
                    </div>

                    <span className="text-xs sm:text-sm md:text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-900 to-slate-600 tracking-tight">
                        JSON UI Builder
                    </span>
                </div>

                <nav className="flex items-center bg-slate-100/50 p-1 rounded-xl border border-slate-200/50">
                    {navItems.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className={`
                                px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200
                                ${isActive(item.path)
                                    ? 'bg-white text-indigo-600 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                                }
                            `}
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

