
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
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
  "use server";
  await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/quote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      idea: formData.get("idea"),
    }),
  });
}

export default function Home() {
  return (
    <main className="flex flex-col font-sans"><<<<<<< fix-and-enhance-landing-page-design
      <section className="relative overflow-hidden py-24 text-center space-y-6 bg-secondary">
        <i className="fa-solid fa-ticket text-primary absolute left-10 top-10 text-3xl animate-ticket1" />
        <i className="fa-solid fa-ticket text-accent absolute right-1/4 top-20 text-2xl animate-ticket2" />
        <i className="fa-solid fa-ticket text-primary absolute left-1/3 bottom-10 text-4xl animate-ticket3" />
        <h1 className="text-6xl font-bold tracking-tight">Evenza</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          All-in-one platform created by expert organizers to make every live
          event unforgettable
        </p>
        <Button className="mt-4" asChild>
          <a href="#quote">Plan your event</a>
        </Button>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto overflow-x-auto flex gap-6 snap-x snap-mandatory pb-4">
          <div className="shrink-0 snap-center text-center space-y-2">
            <Image
              src="https://cdn.evenza.com/images/concert.jpg"
              alt="Concerts"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
            <h3 className="font-semibold">Concerts</h3>
          </div>
          <div className="shrink-0 snap-center text-center space-y-2">
            <Image
              src="https://cdn.evenza.com/images/training.jpg"
              alt="Trainings"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
            <h3 className="font-semibold">Trainings</h3>
          </div>
          <div className="shrink-0 snap-center text-center space-y-2">
            <Image
              src="https://cdn.evenza.com/images/conference.jpg"
              alt="Conferences"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
            <h3 className="font-semibold">Conferences</h3>
          </div>
          <div className="shrink-0 snap-center text-center space-y-2">
            <Image
              src="https://cdn.evenza.com/images/tour.jpg"
              alt="Tours"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
            <h3 className="font-semibold">Tours</h3>
          </div>
          <div className="shrink-0 snap-center text-center space-y-2">
            <Image
              src="https://cdn.evenza.com/images/vacation.jpg"
              alt="Organized Vacations"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
            <h3 className="font-semibold">Organized Vacations</h3>
          </div>
        </div>
      </section>


      <section className="py-12 bg-background">
        <Tabs defaultValue="organizers" className="w-full">
          <TabsList className="mx-auto mb-8">
            <TabsTrigger value="organizers">For Organizers</TabsTrigger>
            <TabsTrigger value="goers">For Event Goers</TabsTrigger>
          </TabsList>
          <TabsContent value="organizers">
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto text-left">
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-user-tie text-primary text-2xl" />
                <p>Professional guidance from veteran event organizers</p>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-ticket text-primary text-2xl" />
                <p>Sell tickets, manage schedules and resources in one place</p>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-bullhorn text-primary text-2xl" />
                <p>Integrated marketing tools and volunteer coordination</p>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-robot text-primary text-2xl" />
                <p>AI-powered responses for attendee questions</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="goers">
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto text-left">
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-map-location-dot text-accent text-2xl" />
                <p>Discover nearby events and purchase tickets effortlessly</p>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-comments text-accent text-2xl" />
                <p>Chat with organizers and fellow attendees</p>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-bolt text-accent text-2xl" />
                <p>Receive real-time updates, schedules and materials</p>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-star text-accent text-2xl" />
                <p>Leave reviews and build your event network</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

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

      <footer className="py-10 text-center text-sm text-muted-foreground space-y-2">
        <p>© {new Date().getFullYear()} Evenza. All rights reserved.</p>
        <p>
          Phone:{" "}
          <a href="tel:0896604041" className="underline">
            0896604041
          </a>{" "}
          | Email:{" "}
          <a href="mailto:contact@evenza.bg" className="underline">
            contact@evenza.bg
          </a>
        </p>

      </footer>
    </main>
  );
}
