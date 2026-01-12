import React from "react";

export default function Button({ icon: Icon, text, className, transitionClassName }: { icon?: React.ElementType, text: string, className?: string, transitionClassName?: string }) {
    return (
        <button className={`relative group flex items-center gap-2 overflow-hidden rounded-xl border border-white/50 px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_25px_-5px_#ef4444] active:scale-95 cursor-pointer ${className}`}>
            <div className={`absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-red-500/30 to-transparent skew-x-12 ${transitionClassName}`} />

            {
                Icon && <Icon className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:text-white group-hover:fill-white" />
            }
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white tracking-wide text-md">{text}</span>
        </button>
    )
}
