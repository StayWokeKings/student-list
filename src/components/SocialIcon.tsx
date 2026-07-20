const paths: Record<'facebook' | 'instagram' | 'linkedin', string> = {
  facebook:
    'M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.24 4.32 15.36 4.25 14.32 4.25c-2.16 0-3.64 1.32-3.64 3.75V10.5H8.17v3H10.68V21h2.82Z',
  instagram:
    'M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm0 5.94a2.34 2.34 0 1 1 0-4.68 2.34 2.34 0 0 1 0 4.68ZM16.9 4H7.1A3.1 3.1 0 0 0 4 7.1v9.8A3.1 3.1 0 0 0 7.1 20h9.8a3.1 3.1 0 0 0 3.1-3.1V7.1A3.1 3.1 0 0 0 16.9 4Zm1.85 12.9a1.85 1.85 0 0 1-1.85 1.85H7.1a1.85 1.85 0 0 1-1.85-1.85V7.1c0-1.02.83-1.85 1.85-1.85h9.8c1.02 0 1.85.83 1.85 1.85v9.8ZM16.65 7.94a.86.86 0 1 1 0-1.72.86.86 0 0 1 0 1.72Z',
  linkedin:
    'M6.94 8.5H4.56V19h2.38V8.5ZM5.75 4.4a1.38 1.38 0 1 0 0 2.76 1.38 1.38 0 0 0 0-2.76ZM19 12.9c0-2.6-1.39-3.8-3.24-3.8a2.8 2.8 0 0 0-2.53 1.4V8.5h-2.4c.03.68 0 10.5 0 10.5h2.4v-5.87c0-.31.02-.62.11-.84.25-.62.81-1.26 1.75-1.26 1.24 0 1.73.94 1.73 2.32V19H19v-6.1Z',
}

export default function SocialIcon({ name, className }: { name: keyof typeof paths; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}
