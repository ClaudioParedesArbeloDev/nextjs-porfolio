
interface HtmlContentProps {
  html: string | null | undefined;
  className?: string;
}

export default function HtmlContent({ html, className = "" }: HtmlContentProps) {
  if (!html) return null;

  return (
    <div 
      className={`prose prose-lg dark:prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}