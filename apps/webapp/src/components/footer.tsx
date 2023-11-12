import { ExternalLink } from '@/components/external-link'
import React from 'react'
import { cn } from '@/lib/utils'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Welcome to EcomAI, an open-source AI chatbot designed to help you with
      your E-commerce business. This project is built by{' '}
      <ExternalLink href="">Mac Sweeny</ExternalLink>
    </p>
  )
}
