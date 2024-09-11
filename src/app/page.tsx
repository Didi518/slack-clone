"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useGetWorkspaces();
  const [open, setOpen] = useCreateWorkspaceModal();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceId) {
      router.replace(`/espace-de-travail/${workspaceId}`);
    } else if (!open) {
      setOpen(true);
    }
  }, [isLoading, open, setOpen, router, workspaceId]);

  return (
    <div className="h-full flex items-center justify-center flex-col gap-2">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
}
