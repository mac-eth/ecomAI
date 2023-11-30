"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function RegistrationPanel() {
  return (
    <Card className="h-full w-full ">
      <CardHeader>
        <CardTitle>Register A Free Account</CardTitle>
        <CardDescription>
          Ecommerce Explorer uses an advanced AI, please make sure your details
          are correct as possible so that our AI can learn more about you.
        </CardDescription>
      </CardHeader>
      <CardContent className="gap-x-8 space-y-6 md:grid md:grid-cols-2 md:space-y-2">
        <h2 className="text-text col-start-1 text-base font-semibold leading-7">
          Personal Information
        </h2>
        <div className="col-span-1 col-start-1 space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="John Doe" />
        </div>
        <div className="col-span-1 col-start-2 space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="Phone" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input id="country" placeholder="Country" />
        </div>
        <div className="col-span-2 border-b border-border py-2" />
        <h2 className="text-text col-start-1 text-base font-semibold leading-7">
          Business Information
        </h2>
        <div className="col-span-1 col-start-1 space-y-2">
          <Label htmlFor="name">Business Name</Label>
          <Input id="name" placeholder="John Doe" />
        </div>
        <div className="col-span-1 col-start-2 space-y-2">
          <Label htmlFor="email">Website URL</Label>
          <Input id="email" placeholder="Email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Monthly Revenue</Label>
          <Input id="phone" placeholder="Phone" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ads">Advertising Platforms</Label>
          <Input id="ad-platform" placeholder="Google Ads, Meta, Tiktok, etc" />
        </div>
        <div className="col-span-2 space-y-2">
          <Label htmlFor="challenges">Business Challenges</Label>
          <Textarea
            placeholder="Does your ecommerce business face any challenges? If so, what are they?"
            className="resize-none"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button size={"lg"} className="text-md font-semibold">
          Sign Up
        </Button>
      </CardFooter>
    </Card>
  );
}
