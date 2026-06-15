export const summary =
  "Systems Administrator with 5+ years of experience automating and securing Linux infrastructure in enterprise environments. Strong background in RHEL/Debian administration, configuration management (Ansible, Puppet), and Kubernetes-based platforms. Currently pursuing a Master of Science focused on enterprise security and IT compliance.";

export const location = "Greenville, NC";
export const email = "cayce@caycehouse.com";

export const skills = [
  { label: "Automation & IaC", items: ["Ansible", "Puppet", "Terraform"] },
  {
    label: "Cloud",
    items: ["Amazon Web Services (AWS)", "Azure", "Oracle Cloud Infrastructure (OCI)"],
  },
  { label: "Containerization", items: ["Kubernetes", "Docker", "Helm"] },
  { label: "Monitoring", items: ["Prometheus", "Grafana"] },
  { label: "Networking", items: ["LAN/WAN Troubleshooting", "DNS", "DHCP"] },
  {
    label: "Operating Systems",
    items: ["Red Hat Enterprise Linux (RHEL)", "Debian", "Ubuntu", "macOS", "Windows Server"],
  },
  { label: "Scripting", items: ["Bash", "Python"] },
];

export const certifications = [
  { name: "Jamf Certified Associate", date: "Nov 2022" },
  { name: "Cisco Certified Network Associate (CCNA)", date: "May 2020" },
];

export const education = [
  {
    school: "East Carolina University",
    location: "Greenville, NC",
    degree: "Master of Science in Information and Cybersecurity Technology",
    detail:
      "Concentration in Cybersecurity. Related coursework: Enterprise Security Architecture, Information Technology Compliance & Security Management.",
    date: "Expected Dec 2028",
  },
  {
    school: "East Carolina University",
    location: "Greenville, NC",
    degree: "Bachelor of Science in Information and Computer Technology",
    detail: "Concentration in Information Security",
    date: "Dec 2021",
  },
];

export const experience = [
  {
    org: "East Carolina University",
    title: "Systems Administrator – ITCS Linux Team",
    location: "Greenville, NC",
    start: "May 2023",
    end: "Present",
    highlights: [
      "Enhanced operational efficiency by automating system provisioning and configuration management for RHEL and Debian servers using Ansible and Puppet.",
      "Administered, secured, and provisioned Linux servers for critical university services, ensuring high availability and reliable operation.",
      "Served as a key escalation point for on-call technical support, rapidly troubleshooting and resolving complex system failures and security events.",
      "Participated in security audits and applied patches to maintain system compliance and security.",
      "Architected an OKD (OpenShift) Single Node instance for departmental testing, including a dedicated services node configured with HAProxy, BIND (DNS), and OKD Assisted-Installer.",
      "Integrated GitHub Actions self-hosted runners within the OKD environment to automate internal development workflows and CI/CD testing.",
    ],
  },
  {
    org: "East Carolina University, School of Dental Medicine",
    title: "Technical Support Technician",
    location: "Greenville, NC",
    start: "Dec 2021",
    end: "May 2023",
    highlights: [
      "Administered a comprehensive technology bundle for over 220 students and residents, providing primary technical support for Apple hardware, clinical software, and Citrix environments.",
      "Provisioned and managed Linux-based infrastructure including the deployment and maintenance of Jamf for mobile device management and Snipe-IT for enterprise asset tracking.",
      "Executed large-scale deployment projects, overseeing the setup and lifecycle management of over 1,000 macOS and iOS devices tailored to clinical security standards.",
      "Applied scripting and remote management techniques to automate software delivery and maintain system integrity across the Apple device fleet.",
      "Minimized clinical downtime by troubleshooting mission-critical hardware including smart card readers, signature pads, and high-availability clinical applications.",
    ],
  },
  {
    org: "East Carolina University, ITCS Labs & Advanced Technologies",
    title: "Computer Lab Support Technician",
    location: "Greenville, NC",
    start: "Nov 2017",
    end: "Dec 2021",
    highlights: [
      "Facilitated the large-scale deployment and lifecycle maintenance of macOS, Windows, and Linux workstations across multiple campus labs.",
      "Developed an automated monitoring and ticketing dashboard providing real-time alerts for new incidents, printer hardware failures, and resolution status.",
      "Optimized software delivery by transitioning the macOS infrastructure from manual Munki packaging to an automated Jamf and Installomator workflow.",
      "Mentored and onboarded incoming student technicians, establishing clear documentation and standardized troubleshooting protocols.",
      "Coordinated large-scale lab maintenance, directing student coworkers in the deployment of system images, hardware diagnostics, and software updates.",
    ],
  },
  {
    org: "East Carolina University, School of Dental Medicine",
    title: "Help Desk Support Technician",
    location: "Greenville, NC",
    start: "June 2016",
    end: "Nov 2017",
    highlights: [
      "Executed the enterprise-scale deployment of over 1,000 macOS and iOS devices meeting the School of Dental Medicine's clinical and security configurations.",
      "Provisioned and maintained Apple Xserve clusters, providing hardware support and configuration for specialized departmental computing workloads.",
      "Resolved complex hardware and software incidents escalated through enterprise ticketing systems, serving as a primary point of contact for clinical staff, faculty, and students.",
      "Validated system compliance across a large device fleet through manual audits and troubleshooting.",
    ],
  },
];
