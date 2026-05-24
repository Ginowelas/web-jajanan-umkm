"use client";

import { useMemo, useState } from "react";
import { CartDrawer, type CartLine } from "@/components/CartDrawer";
import { CustomOrderSection } from "@/components/CustomOrderSection";
import { FAQ } from "@/components/FAQ";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Navbar } from "@/components/Navbar";
import { Packages } from "@/components/Packages";
import { Reasons } from "@/components/Reasons";
import { Testimonials } from "@/components/Testimonials";
import { menuItems } from "@/data/menu";

export type CartState = Record<string, number>;

export function HomeClient() {
  const [cart, setCart] = useState<CartState>({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartLines = useMemo<CartLine[]>(() => {
    return menuItems
      .map((item) => ({
        item,
        quantity: cart[item.id] ?? 0
      }))
      .filter((line) => line.quantity > 0);
  }, [cart]);

  const totalQuantity = cartLines.reduce((total, line) => total + line.quantity, 0);

  function addItem(productId: string) {
    setCart((current) => ({
      ...current,
      [productId]: (current[productId] ?? 0) + 1
    }));
  }

  function decreaseItem(productId: string) {
    setCart((current) => {
      const nextQuantity = (current[productId] ?? 0) - 1;
      const next = { ...current };

      if (nextQuantity <= 0) {
        delete next[productId];
      } else {
        next[productId] = nextQuantity;
      }

      return next;
    });
  }

  function setItemQuantity(productId: string, quantity: number) {
    setCart((current) => {
      const next = { ...current };
      const normalizedQuantity = Number.isFinite(quantity) ? Math.max(0, Math.floor(quantity)) : 0;

      if (normalizedQuantity <= 0) {
        delete next[productId];
      } else {
        next[productId] = normalizedQuantity;
      }

      return next;
    });
  }

  function removeItem(productId: string) {
    setCart((current) => {
      const next = { ...current };
      delete next[productId];
      return next;
    });
  }

  return (
    <>
      <Navbar cartCount={totalQuantity} onCartOpen={() => setIsCartOpen(true)} />
      <main>
        <Hero onCartOpen={() => setIsCartOpen(true)} />
        <MenuSection
          cart={cart}
          onAddItem={addItem}
          onDecreaseItem={decreaseItem}
          onSetItemQuantity={setItemQuantity}
          onOpenCart={() => setIsCartOpen(true)}
        />
        <CustomOrderSection />
        <Packages />
        <Reasons />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CartDrawer
        cartLines={cartLines}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onAddItem={addItem}
        onDecreaseItem={decreaseItem}
        onSetItemQuantity={setItemQuantity}
        onRemoveItem={removeItem}
      />
    </>
  );
}
