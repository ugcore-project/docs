export const BootConsole = () => {
  const tones = {
    banner: "#9F8BFF",
    meta: "#A5A3B8",
    info: "#22D3EE",
    ok: "#4ADE80",
    command: "#FFFFFF",
    muted: "#6B6884",
  };

  const lines = [
    { text: "  _   _  ____    ____", tone: "banner", delay: 60 },
    { text: " | | | |/ ___|  / ___|___  _ __ ___", tone: "banner", delay: 60 },
    { text: " | | | | |  _  | |   / _ \\| '__/ _ \\", tone: "banner", delay: 60 },
    { text: " | |_| | |_| | | |__| (_) | | |  __/", tone: "banner", delay: 60 },
    { text: "  \\___/ \\____|  \\____\\___/|_|  \\___|", tone: "banner", delay: 300 },
    { text: "", tone: "meta", delay: 60 },
    { text: " ug-core v1.0.0 · LuaGLM 5.4 · OneSync on", tone: "meta", delay: 350 },
    { text: " Up to date.", tone: "ok", delay: 500 },
    { text: "", tone: "meta", delay: 80 },
    { tag: "[INFO]", text: " Lifecycle: Configured (14 ms)", tone: "info", delay: 220 },
    { tag: "[INFO]", text: " Lifecycle: Initializing (1 ms)", tone: "info", delay: 220 },
    { tag: "[INFO]", text: " Database: connected to MariaDB 10.11.6.", tone: "info", delay: 420 },
    { tag: "[INFO]", text: " Lifecycle: Starting (38 ms)", tone: "info", delay: 220 },
    { tag: "[INFO]", text: " Lifecycle: Ready (2 ms)", tone: "info", delay: 220 },
    { tag: "[INFO]", text: " ug-core v1.0.0 ready in 61 ms. 14 modules enabled.", tone: "ok", delay: 900 },
    { text: "> ug modules", tone: "command", delay: 500 },
    { text: "  identity       enabled   required", tone: "muted", delay: 70 },
    { text: "  players        enabled   required", tone: "muted", delay: 70 },
    { text: "  permissions    enabled   required", tone: "muted", delay: 70 },
    { text: "  characters     enabled   enabled in config/modules.lua", tone: "muted", delay: 70 },
    { text: "  accounts       enabled   enabled in config/modules.lua", tone: "muted", delay: 70 },
    { text: "  jobs           enabled   enabled in config/modules.lua", tone: "muted", delay: 70 },
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    const finished = count >= lines.length;
    const timer = setTimeout(() => setCount(finished ? 0 : count + 1), finished ? 5000 : lines[count].delay);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="ug-console w-full overflow-hidden text-left">
      <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(159, 139, 255, 0.15)" }}>
        <span className="h-3 w-3 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#FEBC2E" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
        <span className="ml-3 text-xs" style={{ color: tones.muted }}>FXServer · script:ug-core</span>
      </div>
      <div className="overflow-x-auto px-5 py-4 text-xs leading-6 sm:text-sm" style={{ minHeight: "37rem" }}>
        {lines.slice(0, count).map((line, index) => (
          <div key={index} className="ug-console-line" style={{ color: tones[line.tone] }}>
            {line.tag ? <span style={{ color: tones.info, fontWeight: 600 }}>{line.tag}</span> : null}
            <span style={{ color: line.tag ? (line.tone === "ok" ? tones.ok : "#E7E5F4") : undefined }}>{line.text || " "}</span>
          </div>
        ))}
        <span className="ug-caret" />
      </div>
    </div>
  );
};
