'use client';

import { useEffect, useState, useRef } from "react";
import { Volume2, Square, Ear } from "lucide-react";

export default function LeoTalk() {
    const [enabled, setEnabled] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    // Load saved state
    useEffect(() => {
        const stored = localStorage.getItem("leoTalkEnabled");
        if (stored === "true") setEnabled(true);
    }, []);

    // Listen for clicks when enabled
    useEffect(() => {
        if (!enabled) return;

        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target) return;

            // If ignored
            if (target.closest(".leo-talk-ignore")) return;

            // Custom text via data-leo-speak or aria-label
            const customText =
                target.getAttribute("data-leo-speak") ||
                target.getAttribute("aria-label");

            if (customText) {
                speak(customText);
                return;
            }

            // Read only direct text (not children)
            const clone = target.cloneNode(true) as HTMLElement;
            Array.from(clone.children).forEach((child) => child.remove());
            const ownText = clone.innerText ? clone.innerText.trim() : "";
            if (!ownText) return;

            speak(ownText, target);
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [enabled, activeElement]);

    // Speak something
    const speak = (text: string, el?: HTMLElement) => {
        if (!text) return;
        speechSynthesis.cancel();

        if (activeElement) activeElement.classList.remove("leo-highlight");

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-IN";
        utterance.rate = 1;

        utterance.onend = () => {
            el?.classList.remove("leo-highlight");
            setIsSpeaking(false);
            setActiveElement(null);
        };

        if (el) {
            el.classList.add("leo-highlight");
            setActiveElement(el);
        }

        utteranceRef.current = utterance;
        speechSynthesis.speak(utterance);
        setIsSpeaking(true);
    };

    const stopSpeaking = () => {
        speechSynthesis.cancel();
        if (activeElement) activeElement.classList.remove("leo-highlight");
        setIsSpeaking(false);
        setActiveElement(null);
    };

    const toggleEnabled = () => {
        const newState = !enabled;
        setEnabled(newState);
        localStorage.setItem("leoTalkEnabled", newState.toString());
        if (!newState) stopSpeaking();
    };

    return (
        <>
            <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 items-end">
                {isSpeaking && (
                    <button
                        onClick={stopSpeaking}
                        className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm leo-talk-ignore hover:bg-red-700"
                        aria-label="Stop speaking"
                    >
                        <Square size={18} />
                        Stop
                    </button>
                )}

                <button
                    onClick={toggleEnabled}
                    className={`${enabled ? "bg-leoBlue" : "bg-gray-400"
                        } text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm leo-talk-ignore hover:opacity-90`}
                    aria-label="Toggle Leo Talk"
                >
                    <Ear size={18} />
                    Leo Talk: {enabled ? "On – Tap to Disable" : "Off – Tap to Enable"}
                </button>
            </div>

            {/* Highlight styles */}
            <style jsx global>{`
        .leo-highlight {
          outline: 3px solid #facc15;
          border-radius: 0.5rem;
          transition: outline 0.2s ease-in-out;
        }
      `}</style>
        </>
    );
}
