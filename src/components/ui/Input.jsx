
const Input = ({
    label,
    type = "text",
    placeholder,
    error,
    icon,
    ...props
}) => {
    return (
        <div className="flex flex-col gap-1.5 w-full">

            {label && (
                <label className="text-sm font-medium text-slate-700 ml-0.5">
                    {label}
                </label>
            )}

            <div className="relative">

                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        {icon}
                    </div>
                )}


                <input
                    type={type}
                    placeholder={placeholder}
                    className={`
            w-full px-4 py-2.5 bg-white border rounded-xl transition-all duration-200 outline-none
            text-slate-900 placeholder:text-slate-400
            ${icon ? 'pl-10' : 'pl-4'}
            ${error
                            ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10'
                            : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm'
                        }
            hover:border-slate-300
          `}
                    {...props}
                />
            </div>


            {error && (
                <p className="text-xs font-medium text-red-500 mt-1 ml-0.5">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;