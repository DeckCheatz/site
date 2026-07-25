---
title: "OMMXP"
eyebrow: "// protocol · experimental, not yet in use"
tagline: "An in-progress memory-modification protocol — not yet wired into DeckCheatz."
repo: "https://github.com/DeckCheatz/OMMXP"
tag: "EXPERIMENTAL"
weight: 3
contributorURL: "https://github.com/shymega"
contributorLabel: "shymega on GitHub"
---

Every trainer's actual cheat — infinite health, unlimited ammo, unlocked items — comes down to reading and writing a handful of bytes inside a running process. On Windows that's a solved problem. On Linux, across a Wine/Proton boundary, it isn't: address spaces, module bases, and pointer chains don't line up the way trainer authors expect.

OMMXP (Open Memory-Modification Exchange Protocol) is a proposed answer: a shared format for describing memory reads, writes, and pointer chains, with a backend that executes them against a Proton-hosted process, so trainer engines don't each reimplement process-memory access from scratch.

It's early — still being designed, and not yet integrated into [DeckCheatz](/projects/deckcheatz/) or any of its trainers. If reverse engineering, Wine internals, or memory-access protocols are your kind of thing, shymega is driving the design work — their GitHub is a good place to start if you want to help shape it before it's load-bearing.
