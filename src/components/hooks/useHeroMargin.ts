import { useLayoutEffect } from 'react';

const useHeroMargin = () => {
    useLayoutEffect(() => {
        const adjustHeroMargin = () => {
            const nav = document.querySelector('.nav') as HTMLElement;
            const carousel = document.querySelector('.headerTitle') as HTMLElement;
            if (nav && carousel) {
                const navHeight = nav.offsetHeight;
                carousel.style.marginTop = `${navHeight}px`;
            }
        };

        adjustHeroMargin();
        window.addEventListener('resize', adjustHeroMargin);

        return () => {
            window.removeEventListener('resize', adjustHeroMargin);
        };
    }, []);
};

export default useHeroMargin;
