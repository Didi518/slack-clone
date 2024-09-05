import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

import { useCreateChannel } from "../api/use-create-channel";
import { useCreateChannelModal } from "../store/use-create-channel-modal";

export const CreateChannelModal = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [open, setOpen] = useCreateChannelModal();
  const { mutate, isPending } = useCreateChannel();
  const workspaceId = useWorkspaceId();

  const handleClose = () => {
    setName("");
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, "-").toLowerCase();
    setName(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(
      {
        name,
        workspaceId,
      },
      {
        onSuccess: (id) => {
          toast.success("Canal créé");
          router.push(`/espace-de-travail/${workspaceId}/canal/${id}`);
          handleClose();
        },
        onError: () => {
          toast.error("Echec de la création du canal");
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajouter un canal</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={name}
            disabled={isPending}
            onChange={handleChange}
            required
            autoFocus
            minLength={3}
            maxLength={80}
            placeholder="ex: plan-budgétaire"
          />
          <div className="flex justify-end">
            <Button disabled={isPending}>Créer</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
