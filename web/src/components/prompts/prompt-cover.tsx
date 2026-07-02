"use client";

import { ImageOff } from "lucide-react";
import { useState } from "react";

export function PromptCover({ src, title, className = "" }: { src?: string; title: string; className?: string }) {
    const [failed, setFailed] = useState(false);
    const canLoad = Boolean(src) && !failed;
    const baseClassName = `aspect-[4/3] w-full ${className}`;

    if (canLoad) {
        return <img src={src} alt={title} className={`${baseClassName} object-cover`} loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} />;
    }

    return (
        <div className={`${baseClassName} flex flex-col items-center justify-center gap-2 bg-stone-100 text-stone-400 dark:bg-stone-900 dark:text-stone-500`}>
            <ImageOff className="size-7" />
            <span className="px-3 text-center text-xs">暂无预览图</span>
        </div>
    );
}
