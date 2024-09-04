import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { TrashIcon } from "lucide-react";

import { useUpdateWorkspace } from "@/features/workspaces/api/use-update-workspace";
import { useRemoveWorkspace } from "@/features/workspaces/api/use-remove-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useConfirm } from "@/hooks/use-confirm";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PreferencesModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  initialValue: string;
}

export const PreferencesModal = ({
  open,
  setOpen,
  initialValue,
}: PreferencesModalProps) => {
  const [value, setValue] = useState(initialValue);
  const [editOpen, setEditOpen] = useState(false);
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const { mutate: updateWorkspace, isPending: isUpdatingWorkspace } =
    useUpdateWorkspace();
  const { mutate: removeWorkspace, isPending: isRemovingWorkspace } =
    useRemoveWorkspace();
  const [ConfirmDialog, confirm] = useConfirm(
    "Êtes-vous sur?",
    "Cette action est irréversible."
  );

  const handleRemove = async () => {
    const ok = await confirm();

    if (!ok) return;

    removeWorkspace(
      {
        id: workspaceId,
      },
      {
        onSuccess: () => {
          toast.success("Espace supprimé");
          router.replace("/");
        },
        onError: () => {
          toast.error("Echec de la suppression de l'espace");
        },
      }
    );
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateWorkspace(
      {
        id: workspaceId,
        name: value,
      },
      {
        onSuccess: () => {
          toast.success("Espace mis à jour");
          setEditOpen(false);
        },
        onError: () => {
          toast.error("Echec de la mise à jour de l'espace");
        },
      }
    );
  };

  return (
    <>
      <ConfirmDialog />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 bg-gray-50 overflow-hidden">
          <DialogHeader className="p-4 border-b bg-white">
            <DialogTitle>{value}</DialogTitle>
          </DialogHeader>
          <div className="px-4 pb-4 flex flex-col gap-y-2">
            <Dialog open={editOpen} onOpenChange={setEditOpen}>
              <DialogTrigger asChild>
                <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">
                      Nom de l&apos;espace
                    </p>
                    <p className="text-sm text-[#1264A3] hover:underline font-semibold">
                      Modifier
                    </p>
                  </div>
                  <p className="text-sm">{value}</p>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Renommer cet espace</DialogTitle>
                </DialogHeader>
                <form className="space-y-4" onSubmit={handleEdit}>
                  <Input
                    value={value}
                    disabled={isUpdatingWorkspace}
                    onChange={(e) => setValue(e.target.value)}
                    required
                    autoFocus
                    minLength={3}
                    maxLength={80}
                    placeholder="Nom de l'espace de travail ex: 'Travail', 'Personnel', 'Maison'"
                  />
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline" disabled={isUpdatingWorkspace}>
                        Annuler
                      </Button>
                    </DialogClose>
                    <Button disabled={isUpdatingWorkspace}>Enregistrer</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            <button
              disabled={isRemovingWorkspace}
              onClick={handleRemove}
              className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50 text-rose-600"
            >
              <TrashIcon className="size-4" />
              <p className="text-sm font-semibold">Supprimer l&apos;espace</p>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
