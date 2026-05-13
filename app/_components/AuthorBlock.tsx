interface AuthorBlockProps {
  name: string
  bio: string
  date: string
  updatedDate?: string
}

export function AuthorBlock({
  name,
  bio,
  date,
  updatedDate,
}: AuthorBlockProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-(--color-accent-gold) p-4 bg-(--color-bg-base)">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-(--color-accent-gold) flex items-center justify-center text-(--color-text-primary) font-bold">
          {name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <strong className="text-(--color-accent-gold)">{name}</strong>
          <p className="text-(--color-text-muted) text-sm">{bio}</p>
        </div>
      </div>
      <p className="text-(--color-text-muted) text-xs">
        Published: {date}
        {updatedDate && ` · Updated: ${updatedDate}`}
      </p>
    </div>
  )
}
