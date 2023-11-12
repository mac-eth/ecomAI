'use client'

import * as React from 'react'
import { signIn } from 'next-auth/react'

import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconGitHub, IconSpinner } from '@/components/ui/icons'

interface LoginButtonProps extends ButtonProps {
  auth: string
  showIcon?: boolean
  text?: string
  icon?: React.ComponentType<React.ComponentProps<'svg'>>
}

export function LoginButton({
  text = 'Login with GitHub',
  auth = 'github',
  showIcon = true,
  icon: Icon = IconGitHub,
  className,
  ...props
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <Button
      variant="outline"
      onClick={() => {
        setIsLoading(true)
        // next-auth signIn() function doesn't work yet at Edge Runtime due to usage of BroadcastChannel
        signIn(auth, { callbackUrl: `/` })
      }}
      disabled={isLoading}
      className={cn('h-10', className)}
      {...props}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 h-4 w-4 animate-spin" />
      ) : showIcon ? (
        <Icon className="mr-2 h-4 w-4" />
      ) : null}
      {text}
    </Button>
  )
}
