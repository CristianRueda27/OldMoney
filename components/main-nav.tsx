"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeID}`,
      label: "Overview",
      active: pathname === `/${params.storeID}`,
    },
    {
      href: `/${params.storeID}/billboards`,
      label: "Billboards",
      active: pathname === `/${params.storeID}/billboards`,
    },
    {
      href: `/${params.storeID}/categories`,
      label: "Categorias",
      active: pathname === `/${params.storeID}/categories`,
    },
    {
      href: `/${params.storeID}/settings`,
      label: "Ajustes",
      active: pathname === `/${params.storeID}/settings`,
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}

export default MainNav;
