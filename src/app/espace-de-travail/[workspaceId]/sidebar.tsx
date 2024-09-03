import { usePathname } from "next/navigation";
import { Bell, Home, MessagesSquareIcon, MoreHorizontal } from "lucide-react";

import { UserButton } from "@/features/auth/components/user-button";

import { SidebarButton } from "./sidebar-button";
import { WorkspaceSwitcher } from "./workspace-switcher";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[9px] pb-4">
      <WorkspaceSwitcher />
      <SidebarButton
        icon={Home}
        label="Accueil"
        isActive={pathname.includes("/espace-de-travail")}
      />
      <SidebarButton icon={MessagesSquareIcon} label="MPs" />
      <SidebarButton icon={Bell} label="Activité" />
      <SidebarButton icon={MoreHorizontal} label="Plus" />
      <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};
