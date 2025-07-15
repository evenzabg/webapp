import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  CalendarCheck,
  CreditCard,
  Lightbulb,
  MapPin,
  Megaphone,
  MessageSquare,
  Bot,
  BarChart,
  Ticket,
} from 'lucide-react'

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
      <section className="relative py-24 text-center overflow-hidden">
        <div className="relative z-10 space-y-4">
          <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-sky-500 to-green-400 bg-clip-text text-transparent">
            Evenza
          </h1>
          <p className="text-xl text-muted-foreground">
            All-in-one platform for unforgettable live events
          </p>
          <Button className="mt-4" asChild>
            <a href="#quote">Plan your event</a>
          </Button>
        </div>
        <Ticket className="absolute left-10 top-1/3 size-12 text-sky-300 opacity-30 animate-float1" />
        <Ticket className="absolute right-10 top-1/4 size-10 text-green-300 opacity-30 animate-float2" />
        <Ticket className="absolute left-1/2 bottom-8 size-8 text-sky-200 opacity-30 animate-float3" />
      </section>

      <section className="py-12 bg-secondary">
        <h2 className="text-center text-3xl font-semibold mb-6">
          Events We Handle
        </h2>
        <div className="flex overflow-x-auto gap-6 px-6 scroll-smooth snap-x snap-mandatory">
          <div className="snap-center shrink-0 w-64 text-center">
            <Image
              src="https://images.unsplash.com/photo-1464375117522-1311d0299063?auto=format&fit=crop&w=640&q=60"
              alt="Concerts"
              width={256}
              height={160}
              className="rounded-lg object-cover"
              unoptimized
            />
            <p className="mt-2 font-medium">Concerts</p>
          </div>
          <div className="snap-center shrink-0 w-64 text-center">
            <Image
              src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=640&q=60"
              alt="Trainings"
              width={256}
              height={160}
              className="rounded-lg object-cover"
              unoptimized
            />
            <p className="mt-2 font-medium">Trainings</p>
          </div>
          <div className="snap-center shrink-0 w-64 text-center">
            <Image
              src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=640&q=60"
              alt="Conferences"
              width={256}
              height={160}
              className="rounded-lg object-cover"
              unoptimized
            />
            <p className="mt-2 font-medium">Conferences</p>
          </div>
          <div className="snap-center shrink-0 w-64 text-center">
            <Image
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=640&q=60"
              alt="Tours"
              width={256}
              height={160}
              className="rounded-lg object-cover"
              unoptimized
            />
            <p className="mt-2 font-medium">Tours</p>
          </div>
          <div className="snap-center shrink-0 w-64 text-center">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=640&q=60"
              alt="Organized Vacations"
              width={256}
              height={160}
              className="rounded-lg object-cover"
              unoptimized
            />
            <p className="mt-2 font-medium">Organized Vacations</p>
          </div>
        </div>
      </section>

      <section className="py-16" id="goers">
        <h2 className="text-center text-3xl font-semibold mb-10">
          For Event Goers
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-6">
          <div className="text-center space-y-2">
            <MapPin className="mx-auto text-primary size-8" />
            <h3 className="font-medium">Find events near you</h3>
            <p className="text-sm text-muted-foreground">
              Explore concerts, trainings and more around your location.
            </p>
          </div>
          <div className="text-center space-y-2">
            <CreditCard className="mx-auto text-primary size-8" />
            <h3 className="font-medium">Buy tickets effortlessly</h3>
            <p className="text-sm text-muted-foreground">
              Secure checkout and instant access to your passes.
            </p>
          </div>
          <div className="text-center space-y-2">
            <CalendarCheck className="mx-auto text-primary size-8" />
            <h3 className="font-medium">Real-time schedules</h3>
            <p className="text-sm text-muted-foreground">
              Stay updated as organizers publish changes live.
            </p>
          </div>
          <div className="text-center space-y-2">
            <MessageSquare className="mx-auto text-primary size-8" />
            <h3 className="font-medium">Chat with organizers</h3>
            <p className="text-sm text-muted-foreground">
              Ask questions or connect with fellow attendees.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted" id="organizers">
        <h2 className="text-center text-3xl font-semibold mb-4">
          For Organizers
        </h2>
        <p className="text-center max-w-2xl mx-auto text-muted-foreground mb-10">
          Created by veteran event professionals, Evenza streamlines every step of organizing live experiences.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-6">
          <div className="text-center space-y-2">
            <Lightbulb className="mx-auto text-primary size-8" />
            <h3 className="font-medium">Expert assistance</h3>
            <p className="text-sm text-muted-foreground">
              Our team guides you from planning to execution.
            </p>
          </div>
          <div className="text-center space-y-2">
            <BarChart className="mx-auto text-primary size-8" />
            <h3 className="font-medium">All-in-one ticketing</h3>
            <p className="text-sm text-muted-foreground">
              Sell tickets, track attendance and view stats in one place.
            </p>
          </div>
          <div className="text-center space-y-2">
            <Megaphone className="mx-auto text-primary size-8" />
            <h3 className="font-medium">Marketing & volunteers</h3>
            <p className="text-sm text-muted-foreground">
              Promote your event and manage helpers effortlessly.
            </p>
          </div>
          <div className="text-center space-y-2">
            <Bot className="mx-auto text-primary size-8" />
            <h3 className="font-medium">Automated support</h3>
            <p className="text-sm text-muted-foreground">
              Use AI to answer attendee questions around the clock.
            </p>
          </div>
        </div>
      </section>

      <section id="quote" className="py-16 bg-secondary">
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
        All rights reserved – contact@evenza.bg · 0896604041
      </footer>
    </main>
  )
}
