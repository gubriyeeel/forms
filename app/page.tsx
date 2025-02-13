import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Link
          className={cn("", buttonVariants({ variant: "outline" }))}
          href="/sign-in"
        >
          Sign-in Form
        </Link>
        <Link
          className={cn("", buttonVariants({ variant: "outline" }))}
          href="/sign-up"
        >
          Sign-up Form
        </Link>
        <Link
          className={cn("", buttonVariants({ variant: "outline" }))}
          href="/profile"
        >
          Profile Form
        </Link>
      </div>
    </main>
  );
}
