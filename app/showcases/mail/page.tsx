"use client";

import * as React from "react";
import {
  ArchiveIcon,
  FileTextIcon,
  InboxIcon,
  PencilIcon,
  ReplyIcon,
  SendIcon,
  Trash2Icon,
} from "lucide-react";

import { ShowcaseFrame } from "@/components/site/showcase-frame";
import { Avatar, AvatarFallback } from "@/registry/cupertino-ui/avatar";
import { Button } from "@/registry/cupertino-ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/cupertino-ui/resizable";
import { ScrollArea } from "@/registry/cupertino-ui/scroll-area";
import {
  Sidebar,
  SidebarItem,
  SidebarProvider,
  SidebarSection,
  SidebarToggle,
} from "@/registry/cupertino-ui/sidebar";
import { toast, Toaster } from "@/registry/cupertino-ui/toast";
import {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarSpacer,
} from "@/registry/cupertino-ui/toolbar";

const messages = [
  {
    from: "Yuki Tanaka",
    subject: "Design review — Thursday?",
    preview: "Hey! Would Thursday afternoon work for the design review? I've attached the latest…",
    time: "09:41",
    unread: true,
    body: "Hey!\n\nWould Thursday afternoon work for the design review? I've attached the latest mockups — the settings screen finally uses the new grouped list style, and I think the sidebar behavior feels much more native now.\n\nA couple of things I'd love your eyes on:\n\n1. The toolbar spacing at narrow widths\n2. Whether the accent color should follow the system or stay blue\n\nTalk soon,\nYuki",
  },
  {
    from: "Fig Tree Café",
    subject: "Your order is ready for pickup",
    preview: "Order #2481 — one flat white, one almond croissant. Ready at the counter.",
    time: "08:56",
    unread: true,
    body: "Order #2481\n\nOne flat white and one almond croissant, ready at the counter.\n\nThanks for supporting your neighborhood café!",
  },
  {
    from: "Marcus Webb",
    subject: "Re: Q3 roadmap draft",
    preview: "This looks solid. One thought on the migration timeline — could we…",
    time: "Yesterday",
    unread: false,
    body: "This looks solid.\n\nOne thought on the migration timeline — could we move the registry work up a sprint? It unblocks the docs team, and the risk feels low.\n\nOtherwise, ship it.\n\n— M",
  },
  {
    from: "Aerial Weekly",
    subject: "Issue 128: The grid returns",
    preview: "This week: why layout grids are back, a love letter to hairline borders, and…",
    time: "Yesterday",
    unread: false,
    body: "Issue 128\n\nThis week: why layout grids are back, a love letter to hairline borders, and an interview about designing for translucency.\n\nRead it in your browser.",
  },
  {
    from: "Cloud Storage",
    subject: "Your storage is almost full",
    preview: "You've used 94% of your storage. Upgrade or free up space to keep syncing.",
    time: "Tuesday",
    unread: false,
    body: "You've used 94% of your 200 GB plan.\n\nUpgrade or free up space to keep syncing photos and documents across your devices.",
  },
];

export default function MailShowcase() {
  const [mailbox, setMailbox] = React.useState("inbox");
  const [selected, setSelected] = React.useState(0);
  const message = messages[selected];

  return (
    <ShowcaseFrame title="Mail">
      <Toaster />
      <SidebarProvider selected={mailbox} onSelect={setMailbox}>
        <div className="flex h-[620px] flex-col overflow-hidden rounded-[12px] bg-background shadow-[var(--shadow-window)]">
          <Toolbar className="shrink-0">
            <SidebarToggle />
            <ToolbarSpacer />
            <ToolbarButton
              aria-label="New message"
              onClick={() =>
                toast({ title: "New Message", description: "A compose window would open here.", icon: <PencilIcon />, iconColor: "var(--system-blue)" })
              }
            >
              <PencilIcon />
            </ToolbarButton>
            <ToolbarSeparator />
            <ToolbarButton
              aria-label="Archive"
              onClick={() => toast({ title: "Archived", description: message.subject, icon: <ArchiveIcon />, iconColor: "var(--system-indigo)" })}
            >
              <ArchiveIcon />
            </ToolbarButton>
            <ToolbarButton
              aria-label="Delete"
              onClick={() => toast({ title: "Moved to Trash", description: message.subject, icon: <Trash2Icon />, iconColor: "var(--system-red)" })}
            >
              <Trash2Icon />
            </ToolbarButton>
            <ToolbarButton
              aria-label="Reply"
              onClick={() => toast({ title: "Reply", description: `Replying to ${message.from}`, icon: <ReplyIcon /> })}
            >
              <ReplyIcon />
            </ToolbarButton>
          </Toolbar>

          <div className="flex min-h-0 flex-1">
            <Sidebar>
              <SidebarSection title="Mailboxes">
                <SidebarItem value="inbox" icon={<InboxIcon />} badge="2">
                  Inbox
                </SidebarItem>
                <SidebarItem value="sent" icon={<SendIcon />}>
                  Sent
                </SidebarItem>
                <SidebarItem value="drafts" icon={<FileTextIcon />} badge="1">
                  Drafts
                </SidebarItem>
                <SidebarItem value="archive" icon={<ArchiveIcon />}>
                  Archive
                </SidebarItem>
                <SidebarItem value="trash" icon={<Trash2Icon />}>
                  Trash
                </SidebarItem>
              </SidebarSection>
            </Sidebar>

            <ResizablePanelGroup orientation="horizontal" className="min-w-0 flex-1">
              {/* Message list */}
              <ResizablePanel defaultSize="38" minSize="25">
                <ScrollArea className="h-full">
                  {messages.map((m, i) => (
                    <button
                      key={m.subject}
                      type="button"
                      onClick={() => setSelected(i)}
                      className={`flex w-full cursor-default flex-col gap-0.5 px-4 py-3 text-left shadow-[0_-0.5px_0_0_var(--separator)] outline-none first:shadow-none ${
                        i === selected ? "bg-blue text-white" : "hover:bg-fill-quaternary"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {m.unread ? (
                          <span
                            className={`size-2 shrink-0 rounded-full ${i === selected ? "bg-white" : "bg-blue"}`}
                          />
                        ) : null}
                        <span className="min-w-0 flex-1 truncate text-subheadline font-semibold">
                          {m.from}
                        </span>
                        <span
                          className={`shrink-0 text-caption-1 ${i === selected ? "text-white/70" : "text-tertiary-label"}`}
                        >
                          {m.time}
                        </span>
                      </span>
                      <span className="truncate text-footnote">{m.subject}</span>
                      <span
                        className={`line-clamp-2 text-footnote ${i === selected ? "text-white/70" : "text-secondary-label"}`}
                      >
                        {m.preview}
                      </span>
                    </button>
                  ))}
                </ScrollArea>
              </ResizablePanel>
              <ResizableHandle />
              {/* Reading pane */}
              <ResizablePanel defaultSize="62">
                <ScrollArea className="h-full">
                  <article className="flex flex-col gap-4 p-6">
                    <header className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {message.from.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <p className="text-headline">{message.from}</p>
                        <p className="text-footnote text-secondary-label">
                          To: you · {message.time}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="tinted"
                        onClick={() => toast({ title: "Reply", description: `Replying to ${message.from}`, icon: <ReplyIcon /> })}
                      >
                        Reply
                      </Button>
                    </header>
                    <h1 className="text-title-3">{message.subject}</h1>
                    <div className="whitespace-pre-line text-callout leading-relaxed text-label">
                      {message.body}
                    </div>
                  </article>
                </ScrollArea>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </SidebarProvider>
    </ShowcaseFrame>
  );
}
