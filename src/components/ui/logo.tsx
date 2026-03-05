import { Layers } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface LogoProps {
    className?: string;
    withText?: boolean;
}

export function Logo({ className, withText = true }: LogoProps) {
    return (
        <Link to="/" className={cn("flex items-center gap-2.5 group", className)}>
            <div className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300 group-hover:scale-105 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-blue-500 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center w-full h-full bg-slate-950 rounded-xl border border-white/20 shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <Layers className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                </div>
            </div>
            {withText && (
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-50 to-emerald-200 tracking-tight hidden sm:block">
                    KigaliFutureStack
                </span>
            )}
        </Link>
    );
}
