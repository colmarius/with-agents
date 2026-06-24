/**
 * Shared Mermaid theme configuration
 * Matches website's indigo color scheme with light backgrounds and dark text
 */
export const mermaidConfig = {
  startOnLoad: false,
  securityLevel: 'strict',
  theme: 'default',
  themeVariables: {
    primaryColor: '#eef2ff',
    primaryTextColor: '#1e1b4b',
    primaryBorderColor: '#a5b4fc',
    secondaryColor: '#f8fafc',
    secondaryTextColor: '#0f172a',
    secondaryBorderColor: '#e2e8f0',
    tertiaryColor: '#ffffff',
    tertiaryTextColor: '#0f172a',
    tertiaryBorderColor: '#cbd5e1',
    noteBkgColor: '#ffffff',
    noteTextColor: '#0f172a',
    noteBorderColor: '#e2e8f0',
    lineColor: '#64748b',
    textColor: '#0f172a',
    mainBkg: '#ffffff',
    secondBkg: '#f8fafc',
    border1: '#e2e8f0',
    border2: '#cbd5e1',
    arrowheadColor: '#64748b',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
} as const;
