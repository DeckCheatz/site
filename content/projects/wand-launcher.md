---
title: "wand-launcher"
eyebrow: "// legacy · formerly wemod-launcher"
tagline: "The original approach: a script that ran Wand inside your game's own Steam Play prefix."
repo: "https://github.com/DeckCheatz/wand-launcher"
tag: "LEGACY"
weight: 1
---

Before DeckCheatz existed as its own app, this is how it was done. Wand expects to see your game: its process, its window, its memory. Steam Play doesn't make that easy — every game Proton runs gets its own isolated Wine prefix, its own environment variables, its own sandboxed world under `compatdata/`. Launch Wand on its own and it's looking in the wrong place entirely.

wand-launcher was a small script built to close that gap: it started Wand inside the *exact* prefix your currently-running game was using, with the same environment Proton set up for it. No hunting through `compatdata` for the right numeric ID, no manually exporting `WINEPREFIX`, no editing shortcuts by hand.

It was originally called wemod-launcher, back when it only knew how to launch WeMod. The rename came alongside Wand's own rebrand.

This was the first approach, and it's since been superseded by [DeckCheatz](/projects/deckcheatz/) itself — a native implementation rather than a script wrapped around Wand. wand-launcher still lives in the org for reference, and still works if you just want Wand running against a single game with nothing else involved.
