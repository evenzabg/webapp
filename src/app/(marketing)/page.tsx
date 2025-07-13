import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

async function requestQuote(formData: FormData) {
  'use server'
  await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/quote`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: formData.get('name'),
      email: formData.get('email'),
      idea: formData.get('idea'),
    }),
  })
}

export default function Home() {
  return (
    <main className="flex flex-col font-sans">
      <section className="py-20 text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">Evenza</h1>
        <p className="text-xl text-muted-foreground">
          All-in-one platform for unforgettable live events
        </p>
        <Button className="mt-4" asChild>
          <a href="#quote">Plan your event</a>
        </Button>
      </section>

      <section className="py-12">
        <Tabs defaultValue="organizers" className="w-full">
          <TabsList className="mx-auto mb-8">
            <TabsTrigger value="organizers">For Organizers</TabsTrigger>
            <TabsTrigger value="goers">For Event Goers</TabsTrigger>
          </TabsList>
          <TabsContent value="organizers">
            <ul className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto text-left">
              <li>Professional help with event organization</li>
              <li>Sell tickets and manage schedules in one place</li>
              <li>Marketing tools and volunteer coordination</li>
              <li>AI-powered responses to attendee questions</li>
            </ul>
          </TabsContent>
          <TabsContent value="goers">
            <ul className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto text-left">
              <li>Discover events near you and buy tickets</li>
              <li>Chat with organizers and other attendees</li>
              <li>Real-time updates and materials during events</li>
              <li>Leave reviews and connect with the community</li>
            </ul>
          </TabsContent>
        </Tabs>
      </section>

      <section id="quote" className="py-16 bg-muted">
        <div className="container max-w-xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-center">
            Get a personalized organization quote
          </h2>
          <form action={requestQuote} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="idea">Event idea</Label>
              <Textarea id="idea" name="idea" rows={4} required />
            </div>
            <Button type="submit" className="w-full">
              Request Quote
            </Button>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-muted-foreground">
        Developed by Interact Presidents
      </footer>
    </main>
  )
}
