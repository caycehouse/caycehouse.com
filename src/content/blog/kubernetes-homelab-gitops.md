---
title: "Running a multi-node Kubernetes homelab with GitOps"
description: "How I run a multi-node Kubernetes cluster at home with declarative GitOps workflows, Helm and Kustomize, and Prometheus/Grafana for observability."
pubDate: 2026-05-20
tags: ["kubernetes", "homelab", "gitops"]
---

I run a multi-node Kubernetes cluster at home. Not because I need that much
compute, but because it's the best lab I've found for practicing the patterns I
care about professionally: declarative infrastructure, repeatable deploys, and
real observability.

> Note: this is a starter post — I'll expand each section with the actual
> manifests and gotchas over time.

## The GitOps loop

Everything that runs in the cluster is described in Git. I lean on **Helm** for
packaged applications and **Kustomize** for environment-specific overlays, so a
change is a commit and a deploy is a merge. The cluster converges to whatever
the repository says it should be — no manual `kubectl apply` drift.

## CI/CD with GitHub Actions

Container images are built, tested, and deployed through **GitHub Actions**
pipelines. The same workflow that lints and tests an app also publishes the
image and bumps the manifest, which keeps the path from commit to running
workload short and auditable.

## Observability

I monitor cluster health and workloads with **Prometheus** for metrics and
**Grafana** for dashboards. Having real graphs of resource usage and app
behavior turns "is it slow?" into "here's exactly what changed at 2am."

## Why bother

The homelab is where I get to break things safely and internalize the workflow
before it matters in production. Most of what I write here will trace back to
something I first tried on these nodes.
