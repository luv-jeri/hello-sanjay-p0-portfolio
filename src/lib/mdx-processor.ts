type CodeBlockMeta = {
  filename?: string;
  highlights?: number[];
  collapsed?: boolean;
};

export const parseCodeMeta = (metaString: string): CodeBlockMeta => {
  const meta: CodeBlockMeta = {};

  // Extract filename: filename="app/page.tsx" or filename=app/page.tsx
  const filenameMatch = metaString.match(/filename=["']?([^"'\s]+)["']?/);
  if (filenameMatch) {
    meta.filename = filenameMatch[1];
  }

  // Extract highlights: {1,3-5,7}
  const highlightMatch = metaString.match(/\{([\d,-]+)\}/);
  if (highlightMatch) {
    const ranges = highlightMatch[1].split(',');
    const highlights: number[] = [];

    ranges.forEach((range) => {
      if (range.includes('-')) {
        const [start, end] = range.split('-').map(Number);
        for (let i = start; i <= end; i++) {
          highlights.push(i);
        }
      } else {
        highlights.push(Number(range));
      }
    });

    meta.highlights = highlights;
  }

  // Extract collapsed flag
  if (metaString.includes('collapsed')) {
    meta.collapsed = true;
  }

  return meta;
};

export const convertMarkdownToComponents = (markdown: string): string => {
  // Split into lines for processing
  const lines = markdown.split('\n');
  const result: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Detect code block start
    if (line.startsWith('```')) {
      const codeBlockStart = i;
      const languageMatch = line.match(/^```(\w+)?\s*(.*)/);
      const language = languageMatch?.[1] || 'text';
      const metaString = languageMatch?.[2] || '';
      const meta = parseCodeMeta(metaString);

      // Collect code lines
      i++;
      const codeLines: string[] = [];
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }

      const code = codeLines.join('\n');

      // Generate CodeBlock component
      const props = [
        `code={\`${code.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`}`,
        `language="${language}"`,
        meta.filename ? `filename="${meta.filename}"` : '',
        meta.highlights ? `highlights={[${meta.highlights.join(',')}]}` : '',
        meta.collapsed ? 'collapsed' : '',
      ].filter(Boolean);

      result.push(`<CodeBlock ${props.join(' ')} />`);
      i++; // Skip closing ```
    } else {
      result.push(line);
      i++;
    }
  }

  return result.join('\n');
};
