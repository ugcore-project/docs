export const ModuleInfo = ({ name, required = false, deps = [], server, client, clientFunctions }) => {
  const rows = [
    ["Module", <code>{name}</code>],
    ["Status", required ? "Required. Always enabled." : <span>Optional. Enabled by default, can be disabled in <code>config/modules.lua</code>.</span>],
    ["Depends on", deps.length ? deps.map((dep, index) => <span key={dep}>{index > 0 ? ", " : ""}<code>{dep}</code></span>) : "Nothing"],
    ["Server", server ? <code>{`UgCore.${server}`}</code> : "Nothing"],
    ["Client", client ? <span><code>{`UgCore.${client}`}</code>{clientFunctions ? <span>: {clientFunctions}</span> : null}</span> : "Nothing"],
  ];

  if (!required) {
    rows.push(["Check", <code>{`UgCore.Modules.IsEnabled('${name}')`}</code>]);
  }

  return (
    <div className="ug-module-info not-prose my-6 overflow-hidden rounded-2xl">
      {rows.map(([label, value]) => (
        <div key={label} className="flex gap-4 px-4 py-2 text-sm">
          <span className="w-28 shrink-0 font-semibold">{label}</span>
          <span className="min-w-0">{value}</span>
        </div>
      ))}
    </div>
  );
};
