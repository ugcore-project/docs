# UgCore documentation instructions

## About this project

- Public documentation for UgCore, a server-authoritative, headless, modular FiveM framework in Lua 5.4.
- Built on [Mintlify](https://mintlify.com). Pages are MDX files with YAML frontmatter. Configuration lives in `docs.json`.
- The framework source is the `ug-core` repository. The code is the source of truth. When a page and the code disagree, the code wins and the page is fixed.
- Custom styles live in `style.css` (classes prefixed `ug-`). React snippets live in `snippets/`.

## Structure

Navigation uses Mintlify `products`: a dropdown at the top of the sidebar picks the product, and each product has its own tabs.

- **ug-core**: tabs Guides, API and Reference.
  - `index.mdx` (landing page in custom mode), `introduction`, `installation`, `quickstart`, `architecture`: Getting started.
  - `owners/`: server owners. Configuration, modules, database, permissions, Guard, console, troubleshooting.
  - `developers/`: resource developers. Guides with examples, grouped into Networking and Events and state.
  - `concepts/`: security model and death system.
  - `api/`: one page per `UgCore.<Namespace>`. Signatures, parameters with `ResponseField`, one example. Grouped by area: Core, Networking and security, Players and characters, Economy and items, Roles and world, Tools.
  - `reference/`: exhaustive tables. Error codes, events, hooks, statebags, convars, config files.
- **ug-lib**: tabs Guides and API. `ug-lib/`, flat: guides and one page per `UgLib.<Namespace>`. The `ug-lib` repository is its source of truth.
- **Contributing**: `contributing/`, workflow, conventions and testing.

Rules:

- Folders stay one level deep (`api/players.mdx`). The link checker does not resolve deeper folders. Nesting lives in `docs.json` groups, never in folders.
- A page past about 150 lines is split into subpages named `<page>-<part>.mdx` (`api/inventory-containers`). The parent keeps the overview and links its subpages with a `Columns` of `Card`s. In `docs.json` they form a group whose `root` is the parent page, so the group header opens it.
- Subpages start with the side badge and `Part of [Parent](/api/parent).`. Their title is `<Parent>: <part>`, their `sidebarTitle` the part alone.
- Every page on disk MUST be in the navigation.

## Terminology

- "ug-core" is the resource. "UgCore" is the framework and the Lua global.
- "Server owner" for people running a server. "Resource developer" or "you" for people writing resources.
- "Module" for ug-core features enabled in `config/modules.lua`. "Resource" for FiveM resources.
- Events cannot block. Hooks can cancel. Never mix the two words.
- Error codes are written in code style: `invalid_args`, `not_found`.
- Use "client" and "server", never "frontend" and "backend".

## Style preferences

- Active voice and second person.
- Short sentences, one idea per sentence. RFC 2119 keywords (MUST, SHOULD, MAY) for obligations.
- Sentence case for headings.
- Code formatting for file names, commands, paths, config keys, convars and code references.
- Lua examples use 4 spaces, single quotes, and the real API. Every example MUST run against the current ug-core.
- Side badges at the top of API pages: `<Badge color="blue">Server</Badge>`, `<Badge color="green">Client</Badge>`, `<Badge color="purple">Shared</Badge>`.
- Use `Columns` instead of `CardGroup`. Use `bash` for `server.cfg` code fences.

## Content boundaries

- Document the public `UgCore.*` API only. Never document `UgCore.Internal`, wire event names (`__ugcb:*`) or internal net events.
- Never document UI in ug-core pages. ug-core is headless. UI is documented in the `ug-lib/` pages only.
- In `ug-lib/` pages, document the public `UgLib.*` API only. Never document `UgLib.Internal`, the UI exports (`UiOpen`, `RadialAddItem`, ...), the NUI protocol or the `__uglib:*` events.
- Never reveal which Guard check triggers a kick or ban beyond the public weights table.
