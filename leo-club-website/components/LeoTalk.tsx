"use client";
import { useEffect, useState, useRef } from "react";
import { Volume2, Square, Ear } from "lucide-react";

export default function LeoTalk() {
    const [enabled, setEnabled] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        if (!enabled) return;

        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target || target.closest(".leo-talk-ignore")) return;

            const clone = target.cloneNode(true) as HTMLElement;
            Array.from(clone.children).forEach((child) => child.remove());
            const ownText = clone.innerText.trim();
            if (!ownText) return;

            speechSynthesis.cancel();
            if (activeElement) activeElement.classList.remove("leo-highlight");

            const utterance = new SpeechSynthesisUtterance(ownText);
            utterance.lang = "en-IN";
            utterance.rate = 1;
            utterance.onend = () => {
                target.classList.remove("leo-highlight");
                setIsSpeaking(false);
                setActiveElement(null);
            };

            target.classList.add("leo-highlight");
            setActiveElement(target);
            utteranceRef.current = utterance;
            speechSynthesis.speak(utterance);
            setIsSpeaking(true);
        };

        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [enabled, activeElement]);

    const stopSpeaking = () => {
        speechSynthesis.cancel();
        if (activeElement) activeElement.classList.remove("leo-highlight");
        setIsSpeaking(false);
        setActiveElement(null);
    };

    const toggleEnabled = () => {
        stopSpeaking();
        setEnabled((prev) => !prev);
    };

    return (
        <>
            {/* Floating Controls */}
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

            {/* Highlight Style */}
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
