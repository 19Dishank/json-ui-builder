import { useEffect } from "react";

export const ScrollSpy = ({ children, setIsActiveTab }) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries.filter((entry) => entry.isIntersecting);
                if (visibleSections.length === 0) return;

                const sorted = visibleSections.sort(
                    (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
                );

                const topSection = sorted[0];

                setIsActiveTab(topSection.target.id);
            },
            {
                rootMargin: "-80px 0px -60% 0px",
                threshold: 0.1,
            }
        );

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [setIsActiveTab]);

    return children;
};