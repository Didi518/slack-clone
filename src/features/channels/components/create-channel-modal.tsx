import { useState } from "react";

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
          // TODO: redirect vers new channel
          handleClose();
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
