declare module 'remark-gfm' {
  const plugin: any;
  export default plugin;
}

declare module 'remark-external-links' {
  export type RemarkExternalLinksOptions = {
    target?: string;
    rel?: string[];
  };
  const plugin: (options?: RemarkExternalLinksOptions) => any;
  export default plugin;
}
