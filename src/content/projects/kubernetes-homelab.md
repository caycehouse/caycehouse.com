---
title: "Kubernetes Homelab"
summary: "A multi-node Kubernetes cluster run with GitOps workflows — Helm and Kustomize for deploys, GitHub Actions for CI/CD, and Prometheus/Grafana for observability."
tech: ["Kubernetes", "Helm", "Kustomize", "GitHub Actions", "Prometheus", "Grafana"]
featured: true
order: 1
---

A multi-node Kubernetes cluster I operate at home as a hands-on lab for the
infrastructure patterns I use professionally.

- Declarative **GitOps** workflows using Helm and Kustomize, so the cluster
  state always tracks Git.
- **CI/CD pipelines** built with GitHub Actions to build, test, and deploy
  containerized applications.
- **Observability** with Prometheus and Grafana to monitor cluster health and
  workloads.
