"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/ApiFunctions/userServer";
import { useActionState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function SingUpForm() {
  const [state, formAction, isLoading] = useActionState(signUp, {});

  // Use useEffect to show toast when there is an error message
  useEffect(() => {
    if (state?.error?.message) {
      toast.error(state.error.message);
    }
  }, [state?.error?.message]);

  return (
    <form action={formAction}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="name">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            type="text"
            autoCapitalize="words"
            autoComplete="name"
            autoCorrect="off"
            disabled={isLoading}
          />
        </div>
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="name@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
          />
        </div>
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="password">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            autoCapitalize="none"
            autoComplete="new-password"
            autoCorrect="off"
            disabled={isLoading}
          />
        </div>
        <Button disabled={isLoading}>
          {isLoading && <span className="mr-2 h-4 w-4 animate-spin">...</span>}
          Create Account
        </Button>
      </div>
    </form>
  );
}
