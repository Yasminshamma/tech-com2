import { useEffect } from "react";

const legacyModules = [
  () => import("../legacy/i18n.js"),
  () => import("../legacy/scenes.js"),
  () => import("../legacy/ribbon.js"),
  () => import("../legacy/demos.js"),
  () => import("../legacy/main.js"),
];

export function useLegacySite() {
  useEffect(() => {
    let mounted = true;

    async function initialize() {
      try {
        for (const loadModule of legacyModules) {
          await loadModule();
          if (!mounted) return;
        }

        // The original page used a window "load" listener to build this SVG.
        // React's deferred module loading can happen after that event has fired.
        if (document.readyState === "complete") {
          const rebuildRibbon = () => {
            const ribbon = window.Northstar?.ribbon;
            if (!ribbon?.build) return;
            ribbon.build();
            ribbon.update(
              window.scrollY,
              window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            );
          };

          window.requestAnimationFrame(rebuildRibbon);
          window.setTimeout(rebuildRibbon, 1800);
        }
      } catch (error) {
        console.error("Northstar page initialization failed.", error);
      }
    }

    initialize();
    return () => {
      mounted = false;
    };
  }, []);
}
