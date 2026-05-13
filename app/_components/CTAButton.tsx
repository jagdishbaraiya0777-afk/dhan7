import { DOWNLOAD_LINK } from '@/app/_lib/constants'

interface CTAButtonProps {
  label?: string
}

export default function CTAButton({ label = 'Download Dhan7 APK' }: CTAButtonProps) {
  return (
    <a
      href={DOWNLOAD_LINK}
      target="_blank"
      rel="nofollow sponsored"
      className="inline-block rounded-lg px-8 py-3 font-bold text-lg text-(--color-bg-base) bg-(--color-accent-gold) border-2 border-(--color-accent-red) hover:bg-(--color-accent-red) hover:text-(--color-text-primary) transition-colors"
    >
      {label}
    </a>
  )
}
