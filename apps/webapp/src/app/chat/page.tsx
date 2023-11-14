import { Chat } from "@/components/chat";
import { nanoid } from "@/lib/utils";

export const runtime = "edge";

export default function ChatPage() {
  const id = nanoid();

  return <Chat id={id} />;
}
