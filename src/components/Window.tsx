// Window.tsx
interface ExternalWebsiteEmbedProps {
  src?: string;
}

export default function ExternalWebsiteEmbed({ src }: ExternalWebsiteEmbedProps) {
  return (
    <div className="relative h-[313px] w-[666px] overflow-hidden rounded-lg shadow-xl bg-gray-100">
      <iframe
        src={src || "https://www.example.com"}
        className="absolute top-0 left-0 border-0"
        style={{
          transform: 'scale(0.6)',
          transformOrigin: '0 0',
          width: '166.67%',
          height: '166.67%',
          overflow: 'hidden',
          // Nuclear scrollbar removal
          scrollbarWidth: 'none',  // Firefox
          msOverflowStyle: 'none', // IE/Edge
          // @ts-expect-error (for webkit prefix)
          '::-webkit-scrollbar': {
            display: 'none',
            width: 0,
            height: 0,
            background: 'transparent'
          }
        }}
        title="External Website"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        allow="fullscreen"
        loading="lazy"
      />
    </div>
  );
}