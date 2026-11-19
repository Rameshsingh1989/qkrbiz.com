import { Security as ImagesUrl_Security } from "../../assets/images";

export const SecurityMeta = {
  title: "Security — Protecting Your Business Data | Qkrbiz",
  description: "Learn about Qkrbiz's comprehensive security measures to protect your business and employee data at every level.",
};

export const SecuritiesData = [
    {
        provider: "CtrlS Datacenters (India)",
        description:"We host our mobile and web APIs on CtrlS Datacenters (India), which offer multilayer physical security, redundant power and cooling, and strict access controls. On top of that, we apply our own application safeguards, encryption, and continuous monitoring to keep your data safe.",
        features: [
            {
            imgUrls:ImagesUrl_Security.RestrictedAccess,    
            title: "Hosting",
            description: "CtrlS Datacenters (India)",
            },
            {
            imgUrls:ImagesUrl_Security.AuthorizedPersonnel,
            title: "Encryption",
            description: "TLS 1.2+ in transit, AES-256 at rest",
            },
            {
             imgUrls:ImagesUrl_Security.DataPrivacy,
            title: "Access Controls",
            description: "SSO + MFA, role-based access",
            },
            {
            imgUrls:ImagesUrl_Security.DataSegregation,
            title: "Backups",
            description: "Encrypted, scheduled, and restore-tested",
            },
            {
            imgUrls:ImagesUrl_Security.PhysicalMonitoring,
            title: "Monitoring",
            description: "24×7 logging, alerts, and audits",
            },
            {
            imgUrls:ImagesUrl_Security.DisasterRisk,
            title: "Compliance",
            description: "Relevant CtrlS facility certifications available on request",
            },
        ],
  }
]
