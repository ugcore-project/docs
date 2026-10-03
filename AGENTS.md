# UgCore documentation instructions

## About this project

- Public documentation for UgCore, a server-authoritative, headless, modular FiveM framework in Lua 5.4.
- Built on [Mintlify](https://mintlify.com). Pages are MDX files with YAML frontmatter. Configuration lives in `docs.json`.
- The framework source is the `ug-core` repository. The code is the source of truth. When a page and the code disagree, the code wins and the page is fixed.
- Custom styles live in `style.css` (classes prefixed `ug-`). React snippets live in `snippets/`.

## Structure

- `index.mdx`: landing page in custom mode.
- Getting started: `introduction`, `installation`, `quickstart`, `architecture`.
- `owners/`: server owners. Configuration, modules, database, permissions, Guard, console, troubleshooting.
- `developers/`: resource developers. Guides with examples.
- `concepts/`: security model and death system.
- `api/`: one page per `UgCore.<Namespace>`. Signatures, parameters with `ResponseField`, one example.
- `reference/`: exhaustive tables. Error codes, events, hooks, statebags, convars, config files.
- `contributing/`: contribution workflow, conventions, testing.

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
- Never document UI. ug-core is headless. UI belongs to other resources such as ug-lib.
- Never reveal which Guard check triggers a kick or ban beyond the public weights table.
