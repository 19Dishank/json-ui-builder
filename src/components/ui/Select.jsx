const Select = ({
    label,
    options = [],
    error,
    placeholder = "Select an option",
    ...props
}) => {
    return (
        <div className="flex flex-col gap-1.5 w-100">
            {/* Label */}
            {label && (
                <label className="text-sm font-medium text-slate-700 ml-0.5">
                    {label}
                </label>
            )}

            <div className="relative w-full">
                {/* Custom Select Element */}
                <select
                    className={`
            w-full appearance-none px-4 py-2.5 bg-white border rounded-xl 
            transition-all duration-200 outline-none cursor-pointer
            text-slate-900 shadow-sm
            ${error
                            ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10'
                            : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                        }
            hover:border-slate-300
          `}
                    {...props}
                >
                    {placeholder && (
                        <option value="" disabled selected hidden>
                            {placeholder}
                        </option>
                    )}
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>

                {/* Custom Chevron Arrow */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <p className="text-xs font-medium text-red-500 mt-1 ml-0.5">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Select;