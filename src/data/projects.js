import { Github, ExternalLink } from "lucide-react";

export const PROJECTS = [
  {
    title: "Infertility Clinic",
    summary:
      "Admin and patient-facing apps for clinic operations, focusing on accessibility, forms, and clear data views.",
    stack: ["React", "Tailwind", "Charting", "i18n"],
    links: [
      { label: "GitHub", href: "https://github.com/AbdallahZagh/infertility.git", icon: Github },
      { label: "Demo – Admin", href: "https://infertility-dashboard.netlify.app/", icon: ExternalLink },
      { label: "Demo – User", href: "https://infertility-user.netlify.app/", icon: ExternalLink },
    ],
  },
  {
    title: "E-commerce Store (EleganceHub)",
    summary:
      "Full admin and storefront flows with product management, orders, and responsive UI.",
    stack: ["React", "Tailwind", "State Mgmt", "Routing"],
    links: [
      { label: "GitHub", href: "https://github.com/AbdallahZagh/E-commerce.git", icon: Github },
      { label: "Demo – Admin", href: "https://elegancehub-store-dashboard.netlify.app/", icon: ExternalLink },
      { label: "Demo – User", href: "https://elegeancehub-store.netlify.app/", icon: ExternalLink },
    ],
  },
  {
    title: "EleganceHub Clinic (Senior Project)",
    summary:
      "End-to-end clinic system integrated with server APIs. Focus on information architecture, security, and DX.",
    stack: ["React", "Tailwind", "API Integrations", "Auth"],
    links: [
      { label: "GitHub", href: "https://github.com/AbdallahZagh/elegance-hub.git", icon: Github },
      { label: "Figma", href: "https://www.figma.com/design/UdECEw7eLqkKRfm89yHhzP/elegance-hub", icon: ExternalLink },
    ],
  },
  {
    title: "HR System (CRM System)",
    summary:
      "Comprehensive HR/CRM dashboards: employee profiles, attendance, leave requests, with scalable component design.",
    stack: ["React", "Tailwind", "Data Viz", "API"],
    links: [
      { label: "GitHub", href: "https://github.com/AbdallahZagh/hr-system.git", icon: Github },
      { label: "Figma", href: "https://www.figma.com/design/NIWco7wUeg0n5KuG5CcPjP/HR-system", icon: ExternalLink },
    ],
  },
];
