"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IconSpinner } from "@/components/ui/icons";
import type { ServerActionResult } from "@/lib/types";
import { toast } from "react-hot-toast";

interface ClearHistoryProps {
  clearChats: () => ServerActionResult<void>;
}

export function ClearHistory({ clearChats }: ClearHistoryProps) {
  const [open, setOpen] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" disabled={isPending}>
          {isPending && <IconSpinner className="mr-2" />}
          Clear history
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This will permanently delete your chat history and remove your data
            from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button disabled={isPending}>Cancel</Button>
          <Button
            disabled={isPending}
            onClick={(event) => {
              event.preventDefault();
              startTransition(async () => {
                const result = await clearChats();

                if (result && "error" in result) {
                  toast.error(result.error);
                  return;
                }

                setOpen(false);
                router.push("/");
              });
            }}
          >
            {isPending && <IconSpinner className="mr-2 animate-spin" />}
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
