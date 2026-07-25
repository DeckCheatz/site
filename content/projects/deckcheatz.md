---
title: "DeckCheatz"
eyebrow: "// core app · steam play compatibility tool"
tagline: "A new, native implementation for running trainers on SteamOS and Linux."
repo: "https://github.com/DeckCheatz/DeckCheatz"
tag: "CORE APP"
weight: 2
---

DeckCheatz the app is a from-scratch rebuild of what [wand-launcher](/projects/wand-launcher/) used to do by hand. Rather than a script that shells out to Wand, it's a native implementation of trainer support for SteamOS and Linux, built to register as a Steam Play compatibility tool — the same slot Proton and Proton-GE sit in. Assign it to a game and Steam launches it alongside that game automatically.

Once it's running, DeckCheatz knows which trainers you've got configured for that title, matches them to the game's own Proton prefix, and launches the one you pick — in the background, alongside your game, with nothing to alt-tab to or window to manage.

Two things are planned on top of that: a [Decky Loader](https://github.com/SteamDeckHomebrew/decky-loader) plugin, so you can pick and toggle trainers from the Quick Access Menu instead of a separate app, and tighter integration between the running trainer and that same overlay, so flipping a cheat on or off doesn't need anything more than a button press mid-game.

It targets SteamOS on Steam Deck, but isn't limited to it — Bazzite, CachyOS, and NixOS are all supported too, since none of this depends on anything Valve-specific beyond Proton itself.

Worth being upfront about: DeckCheatz isn't supported by, affiliated with, or endorsed by any trainer developer or company. It's an independent project figuring out compatibility from the outside, not an official integration.

It's the actively developed core of the org: everything named DeckCheatz — the umbrella project, the org, the toolchain — exists to get this app running well on your Deck.
