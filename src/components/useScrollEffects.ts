import { useEffect, useState } from "react";

export function useScrollEffects() {
    const [snapElements, setSnapElements] = useState<HTMLElement[]>([]);
    let ticking = false;

    useEffect(() => {
        const findSnapElements = () => {
            const elements = Array.from(document.querySelectorAll('*'))
                .filter((el): el is HTMLElement => el instanceof HTMLElement && el.offsetHeight === window.innerHeight)
                .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)
                .filter((el, _, arr) =>
                    !arr.some(parent =>
                        parent !== el &&
                        parent.contains(el) &&
                        parent.getBoundingClientRect().top <= el.getBoundingClientRect().top
                    )
                ).slice(1);

            setSnapElements(elements);
        };

        findSnapElements();
        window.addEventListener("resize", findSnapElements);

        return () => {
            window.removeEventListener("resize", findSnapElements);
        };
    }, []);

    useEffect(() => {
        const heroElement = document.querySelector(".hero") as HTMLElement | null;
        let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
        const isMobile = window.innerWidth <= 1024 || window.innerHeight <= 600;
        let lastViewportHeight = window.visualViewport.height;

        const snapToClosestElement = () => {
            const viewportHeight = window.innerHeight;
            const snapRange = viewportHeight * 0.2;
            let closestElement: HTMLElement | null = null;
            let closestDistance = Infinity;

            snapElements.forEach(el => {
                const elTop = el.getBoundingClientRect().top + window.scrollY;
                const distance = Math.abs(window.scrollY - elTop);
                if (distance < closestDistance && distance < snapRange) {
                    closestDistance = distance;
                    closestElement = el;
                }
            });

            if (closestElement) {
                requestAnimationFrame(() => {
                    window.scrollTo({ 
                        top: closestElement.getBoundingClientRect().top + window.scrollY, 
                        behavior: isMobile ? "auto" : "smooth" 
                    });
                });
            }
        };

        const applyParallaxEffect = () => {
            const lastSnapElement = snapElements[snapElements.length - 1];
            const lastSnapBottom = lastSnapElement ? lastSnapElement.getBoundingClientRect().bottom + window.scrollY : 0;
            const scrollY = window.scrollY;
            
            snapElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top >= window.innerHeight * 1.5 || rect.bottom <= -window.innerHeight * 0.5) return;

                const backgroundElement = Array.from(el.children).find(
                    child => (child as HTMLElement).style.backgroundImage !== ""
                ) as HTMLElement | undefined;
        
                if (backgroundElement) {
                    let speedFactor = 0.9;
                    if (scrollY > lastSnapBottom - window.innerHeight) {
                        const distancePast = scrollY - (lastSnapBottom - window.innerHeight);
                        speedFactor *= Math.max(1 - distancePast / window.innerHeight, 0);
                    }
        
                    let offset = Math.max(rect.top * 0.9, 0);
                    if (isMobile) {
                        if (!backgroundElement.dataset.initialOffset) {
                            backgroundElement.dataset.initialOffset = offset.toString();
                        }
                        if (offset === 0) {
                            backgroundElement.dataset.locked = "true";
                        }
                        if (backgroundElement.dataset.locked === "true" && el.getBoundingClientRect().top >= window.visualViewport.height) {
                            backgroundElement.dataset.locked = "false";
                            offset = parseFloat(backgroundElement.dataset.initialOffset);
                        }
                        if (backgroundElement.dataset.locked === "true") return;
                    }
                    backgroundElement.style.backgroundPositionY = `${offset}px`;
                }
            });
        
            if (heroElement) {
                let heroSpeed = -0.3;
                if (scrollY > lastSnapBottom - window.innerHeight) {
                    const distancePast = scrollY - (lastSnapBottom - window.innerHeight);
                    heroSpeed *= Math.max(1 - distancePast / window.innerHeight, 0);
                }
                heroElement.style.transform = `translateY(${scrollY * heroSpeed}px)`;
            }
        
            ticking = false;
        };

        const handleScroll = () => {
            if (isMobile && Math.abs(window.visualViewport.height - lastViewportHeight) > 10) return;
            lastViewportHeight = window.visualViewport.height;
            if (!ticking) {
                requestAnimationFrame(applyParallaxEffect);
                ticking = true;
            }
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => snapToClosestElement(), 200);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [snapElements]);
}
