
"use client" 

import * as React from "react"
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/components/ui/button";
import { Star } from "lucide-react";

function SuccessParticles({
    buttonRef,
}: {
    buttonRef: React.RefObject<HTMLButtonElement>;
}) {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return null;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    return (
        <AnimatePresence>
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="fixed w-1 h-1 bg-yellow-400 rounded-full"
                    style={{ left: centerX, top: centerY, zIndex: 9999 }}
                    initial={{
                        scale: 0,
                        x: 0,
                        y: 0,
                    }}
                    animate={{
                        scale: [0, 1, 0],
                        x: [0, (i % 2 ? 1 : -1) * (Math.random() * 60 + 30)],
                        y: [0, -Math.random() * 60 - 30],
                    }}
                    transition={{
                        duration: 0.7,
                        delay: i * 0.08,
                        ease: "easeOut",
                    }}
                />
            ))}
        </AnimatePresence>
    );
}

interface ParticleButtonProps extends ButtonProps {
    href: string;
}

function ParticleButton({
    children,
    onClick,
    href,
    className,
    ...props
}: ParticleButtonProps) {
    const [showParticles, setShowParticles] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(e);
        }

        setShowParticles(true);

        setTimeout(() => {
            setShowParticles(false);
            if (href) {
                window.open(href, '_blank', 'noopener,noreferrer');
            }
        }, 700);
    };

    return (
        <>
            {showParticles && <SuccessParticles buttonRef={buttonRef} />}
            <Button
                ref={buttonRef}
                onClick={handleClick}
                className={cn(
                    "relative transition-transform duration-100",
                    showParticles && "scale-95",
                    className
                )}
                {...props}
            >
                {children}
            </Button>
        </>
    );
}

export { ParticleButton }
