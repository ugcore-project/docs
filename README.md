# UgCore documentation

Public documentation for [UgCore](https://github.com/ugcore-project), the secure, headless and modular FiveM framework. Built with [Mintlify](https://mintlify.com).

## Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mint):

```bash
npm i -g mint
```

Run it at the root of this repository, where `docs.json` is:

```bash
mint dev
```

The preview runs at `http://localhost:3000`.

Check for broken links before you push:

```bash
mint broken-links
```

## Layout

| Path | Content |
| --- | --- |
| `index.mdx` | Landing page |
| `owners/` | Guides for server owners |
| `developers/` | Guides for resource developers |
| `concepts/` | Security model and death system |
| `api/` | One page per `UgCore` namespace |
| `reference/` | Error codes, events, hooks, statebags, convars, config files |
| `contributing/` | How to contribute to ug-core |
| `snippets/` | React components, such as the animated boot console |
| `style.css` | Custom styles |

Writing rules for people and AI tools are in [AGENTS.md](AGENTS.md).

## Publishing

Changes pushed to the default branch deploy automatically through the Mintlify GitHub app.

## License

See [LICENSE](LICENSE).
