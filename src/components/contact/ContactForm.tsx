import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-line bg-cream p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold text-ink">
          This form does not send a lead
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          This page is part of a speculative website concept. It is not Foley
          Construction’s live site, and the form is not connected to their
          office. To reach the company, call{" "}
          <a className="font-medium text-ink underline" href={site.phoneTel}>
            {site.phoneDisplay}
          </a>
          .
        </p>
        <Button className="mt-6" asChild>
          <a href={site.phoneTel}>Call {site.phoneDisplay}</a>
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-xl border border-line bg-cream p-6 sm:p-8"
    >
      <p className="rounded-md border border-line bg-paper px-3 py-2 text-xs leading-relaxed text-ink-soft">
        Demo form only. Submitting does not email Foley Construction. Use the
        phone number to reach the real office.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" autoComplete="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="project">Project type</Label>
        <Input
          id="project"
          name="project"
          placeholder="Kitchen, bath, addition…"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">What are you thinking about?</Label>
        <Textarea id="message" name="message" rows={5} />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Preview this message
      </Button>
    </form>
  );
}
