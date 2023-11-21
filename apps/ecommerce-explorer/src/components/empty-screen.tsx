import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
import { UseChatHelpers } from 'ai/react'

const exampleMessages = [
  {
    heading: 'How do I setup tax in Shopify?',
    message: `How do I setup tax within Shopify?`
  },
  {
    heading: 'How do I setup shipping in Shopify?',
    message: 'How do I setup weight based shipping within shopify?'
  },
  {
    heading: 'How do I create a high converting product page?',
    message: `How do I create a high converting product page within shopify?`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">Welcome to EcomAI</h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This is an open-source chatbot that uses AI to help you with your
          E-commerce journey.
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
