"use client";

import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs";
import { Logo } from "./logo";
import { ModeToggle } from "../themeToggle";
import { Button } from "../ui/button";
import { Searchbar } from "./searchbar";

export const Navbar = () => {
  const { userId } = useAuth();
  return (
    <nav className="bg-secondary border border-b-primary/10 sticky top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-20 flex justify-between">
        <Logo />
        <Searchbar />
        <div className="flex space-x-4 items-center">
          <ModeToggle />
          {userId ? (
            <UserButton />
          ) : (
            <>
              <SignUpButton>
                <Button>Sign Up</Button>
              </SignUpButton>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
