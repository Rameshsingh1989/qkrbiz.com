import toolsRoutes from "./tools.routes.js";

export const freeTools = [
  {
    id: 1,
    urls: `${toolsRoutes.basePath}/hra-calculator`,
    title: "HRA Calculator",
  },
  {
    id: 2,
    urls: `${toolsRoutes.basePath}/gratuity-calculator`,
    title: "Gratuity Calculator",
  },
  {
    id: 3,
    urls: `${toolsRoutes.basePath}/salary-hike-calculator`,
    title: "Salary Hike Calculator",
  },
  {
    id: 4,
    urls: `${toolsRoutes.basePath}/salary-slip-generator`,
    title: "Salary Slip Generator",
  },
];
