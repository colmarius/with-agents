declare module 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs' {
  const mermaid: {
    initialize: (config: {
      startOnLoad: boolean;
      securityLevel: string;
    }) => void;
    run: (options: {
      nodes?: Element[];
      querySelector?: string;
    }) => Promise<void>;
  };
  export default mermaid;
}
