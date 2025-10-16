import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

export default function Footer() {
  return (
    <footer className="text-muted-foreground my-2 text-sm">
      © {new Date().getFullYear()}{' '}

      . All rights reserved.
    </footer>
  )
}
