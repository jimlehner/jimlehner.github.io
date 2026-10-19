document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(
        ".improvements-results [data-count]"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const counter = entry.target;
            observer.unobserve(counter);

            const target = Number(counter.dataset.count);
            const prefix = counter.dataset.prefix || "";
            const suffix = counter.dataset.suffix || "";
            const duration = 1800;
            const startTime = performance.now();

            function animate(now) {
                const progress = Math.min(
                    (now - startTime) / duration, 1
                );

                const eased = 1 - Math.pow(1 - progress, 3);
                const value = Math.round(target * eased);

                counter.textContent =
                    prefix + value.toLocaleString("en-US") + suffix;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }

            requestAnimationFrame(animate);
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
});
