# sts2Showcase

Portfolio site for **sts2Player**, a distributed PPO agent that learns Slay the Spire 2 combat from scratch.

Live: https://cmcour.github.io/sts2Showcase/

## What's here

I built this as a portfolio piece to document the sts2Player project. The site has three tabs:

- **About** — one-pager on what the agent is, how the training pipeline is wired together, and the 13-stage curriculum.
- **What I Learned** — lessons-learned blog. Six posts covering reward shaping, curriculum design, distributed deployment on Windows, input-vector design, a monitoring dashboard that quietly lied to me for 47 minutes, and a silently-miscomputed choice-head log-prob that rode to production for months.
- **Deep Dives** — six technical write-ups: Slay the Spire 2 as an RL environment, the reinforcement-learning pipeline (policy + reward + PPO), the neural network (embeddings + trunk + heads), the input vector (what the policy actually sees), the distributed compute fleet (actor-learner across a LAN worker fleet), and the card-choice head (the fourth head, trained outside the PPO loss).

The blog posts reference real code — file paths, function names, constants — pulled from the training repo rather than reconstructed from memory.

## Tech

- Astro 6 static site generator
- Plain CSS, dark theme, system font stack — no framework
- Deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`
- Requires Node ≥ 22.12

## About the training project

The reinforcement-learning implementation — the PyTorch policy network, the PPO learner, the C# Harmony mod, the distributed actor proxy — lives in a separate, private repo called `sts2Player`. This site is the portfolio narrative for that work. I reference code paths, function names, and constants from `sts2Player` throughout the posts; the source itself isn't public here.

## Local development

```sh
npm install
npm run dev
```

Dev server runs at `localhost:4321`. `npm run build` writes the static site to `dist/`.

## Slay the Spire 2 / Mega Crit

Slay the Spire 2 is a trademark of Mega Crit Games. This project is not affiliated with or endorsed by Mega Crit.
