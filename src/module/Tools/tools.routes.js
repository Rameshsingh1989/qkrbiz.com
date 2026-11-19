// see src/routes/routeManifest.js.
export default {
  basePath: "/free-tools",
  routes: [
    { path: "hra-calculator",         page: () => import("@/module/Tools/HraCalculator/HraCalculator.jsx") },
    { path: "gratuity-calculator",    page: () => import("@/module/Tools/GratuityCalculator/GratuityCalculator.jsx") },
    { path: "salary-hike-calculator", page: () => import("@/module/Tools/SalaryHikeCalculator/SalaryHikeCalculator.jsx") },
    { path: "salary-slip-generator",  page: () => import("@/module/Tools/SalarySlipGenerator/SalarySlipGenerator.jsx") },
  ],
};
