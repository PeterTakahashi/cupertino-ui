"use client";

import * as React from "react";
import { ShoppingBagIcon, SparklesIcon } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";

import { ShowcaseFrame } from "@/components/site/showcase-frame";
import { Badge } from "@/registry/cupertino-ui/badge";
import { Button } from "@/registry/cupertino-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/cupertino-ui/card";
import { Carousel, CarouselItem } from "@/registry/cupertino-ui/carousel";
import { List, ListItem } from "@/registry/cupertino-ui/list";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/cupertino-ui/sheet";
import { Stepper } from "@/registry/cupertino-ui/stepper";
import { toast, Toaster } from "@/registry/cupertino-ui/toast";

const products = [
  { id: "case", name: "Woven Phone Case", price: 49, tag: "New", hue: 210 },
  { id: "stand", name: "Aluminum Desk Stand", price: 89, hue: 30 },
  { id: "band", name: "Trail Loop Band", price: 59, tag: "Popular", hue: 150 },
  { id: "charger", name: "Dual Charging Pad", price: 129, hue: 270 },
  { id: "keys", name: "Low-Profile Keyboard", price: 179, hue: 200 },
  { id: "sleeve", name: "Felt Laptop Sleeve", price: 69, hue: 20 },
];

const heroes = [
  { title: "Summer Collection", subtitle: "Woven textures in six new colors", hue: 200 },
  { title: "Desk Setup Week", subtitle: "Stands, pads, and boards — together at last", hue: 280 },
  { title: "Carry Light", subtitle: "Sleeves and cases under 200 g", hue: 150 },
];

export default function StoreShowcase() {
  const [cart, setCart] = React.useState<Record<string, number>>({ stand: 1 });

  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const total = Object.entries(cart).reduce(
    (sum, [id, qty]) => sum + (products.find((p) => p.id === id)?.price ?? 0) * qty,
    0
  );

  const add = (id: string) => {
    const p = products.find((x) => x.id === id)!;
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
    toast({
      title: "Added to Bag",
      description: p.name,
      icon: <ShoppingBagIcon />,
      iconColor: "var(--system-green)",
    });
  };

  const setQty = (id: string, qty: number) => {
    setCart((c) => {
      const next = { ...c };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  };

  return (
    <ShowcaseFrame title="Store">
      <Toaster />
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <header className="flex items-center justify-between px-1">
          <div>
            <h1 className="text-large-title tracking-tight">Store</h1>
            <p className="text-footnote text-secondary-label">
              Accessories for people who alphabetize their cables.
            </p>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <GlassButton>
                <ShoppingBagIcon className="size-4" /> Bag
                {count > 0 ? <Badge variant="red">{count}</Badge> : null}
              </GlassButton>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Your Bag</SheetTitle>
                <SheetDescription>
                  {count > 0 ? `${count} item${count > 1 ? "s" : ""}` : "Empty"}
                </SheetDescription>
              </SheetHeader>
              <div className="px-4">
                <List>
                  {Object.entries(cart).map(([id, qty]) => {
                    const p = products.find((x) => x.id === id)!;
                    return (
                      <ListItem
                        key={id}
                        icon={<SparklesIcon />}
                        iconColor={`hsl(${p.hue} 70% 50%)`}
                        detail={
                          <span className="flex items-center gap-3">
                            <span className="tabular-nums">${p.price * qty}</span>
                            <Stepper
                              value={qty}
                              onValueChange={(v) => setQty(id, v)}
                              min={0}
                              max={9}
                              className="scale-90"
                            />
                          </span>
                        }
                      >
                        {p.name}
                      </ListItem>
                    );
                  })}
                  {count === 0 ? (
                    <ListItem className="text-secondary-label">
                      Your bag is empty.
                    </ListItem>
                  ) : null}
                </List>
              </div>
              <SheetFooter>
                <div className="flex items-center justify-between px-1 text-headline">
                  <span>Total</span>
                  <span className="tabular-nums">${total}</span>
                </div>
                <SheetClose asChild>
                  <Button
                    size="lg"
                    disabled={count === 0}
                    onClick={() =>
                      toast({ title: "Order Placed", description: `$${total} — thank you!`, icon: <SparklesIcon />, iconColor: "var(--system-green)" })
                    }
                  >
                    Check Out
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </header>

        <Carousel>
          {heroes.map((h) => (
            <CarouselItem key={h.title}>
              <div
                className="relative flex h-44 flex-col items-start justify-end gap-1 p-6 text-white"
                style={{
                  background: `linear-gradient(140deg, hsl(${h.hue} 75% 55%), hsl(${h.hue + 50} 75% 40%))`,
                }}
              >
                <h2 className="text-title-2">{h.title}</h2>
                <p className="text-subheadline text-white/80">{h.subtitle}</p>
                <GlassButton
                  variant="clear"
                  size="sm"
                  className="absolute bottom-5 right-5 text-white"
                >
                  Shop Now
                </GlassButton>
              </div>
            </CarouselItem>
          ))}
        </Carousel>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card key={p.id} className="gap-3 p-4">
              <div
                aria-hidden
                className="flex h-28 items-center justify-center rounded-[10px] text-4xl text-white/80"
                style={{
                  background: `linear-gradient(140deg, hsl(${p.hue} 70% 58%), hsl(${p.hue + 45} 70% 42%))`,
                }}
              >
                <SparklesIcon className="size-8" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-subheadline font-semibold">
                  {p.name}
                  {p.tag ? <Badge variant="tinted">{p.tag}</Badge> : null}
                </CardTitle>
                <CardDescription>${p.price}</CardDescription>
              </CardHeader>
              <CardFooter>
                <GlassButton size="sm" tint="var(--system-blue)" onClick={() => add(p.id)}>
                  Add to Bag
                </GlassButton>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </ShowcaseFrame>
  );
}
