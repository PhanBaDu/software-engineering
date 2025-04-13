'use client';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { lists } from '@/features/shop/utils/items';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';

export function GroupSidebar({ id: idShop }: { id: number }) {
  const pathname = usePathname();

  return (
    <>
      {lists.map((item, index) => (
        <Collapsible key={index} defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center justify-between w-full cursor-pointer">
                <span className="text-xs text-primary font-semibold uppercase">{item.label}</span>
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem className="ml-4 pl-2 border-l border-dashed border-muted-foreground">
                    {item.items.map((it, id) => (
                      <SidebarMenuButton
                        isActive={pathname === `/shop/dashboard/${idShop}${it.url}`}
                        key={id}
                        asChild
                        className={`text-xs flex justify items-center hover:bg-primary-foreground ${
                          pathname === `/shop/dashboard/${idShop}${it.url}`
                            ? '!bg-primary-foreground'
                            : ''
                        }`}
                      >
                        <Link
                          href={`/shop/dashboard/${idShop}${it.url}`}
                          className="flex gap-2 items-center"
                        >
                          <it.icon />
                          {it.title}
                        </Link>
                      </SidebarMenuButton>
                    ))}
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      ))}
    </>
  );
}
