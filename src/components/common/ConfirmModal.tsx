import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  
  interface ConfirmModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
  }
  
  export const ConfirmModal = ({
    open,
    onClose,
    onConfirm,
    title = "Are you sure?",
    description = "Do you really want to proceed? This action cannot be undone.",
    confirmText = "Confirm",
    cancelText = "Cancel",
  }: ConfirmModalProps) => {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
          </DialogHeader>
  
          <div className="text-sm text-muted-foreground">{description}</div>
  
          <DialogFooter className="mt-4">
            <Button variant="outline"onClick={onClose}>
              {cancelText}
            </Button>
            <Button  className= "bg-primary hover:bg-secondary" onClick={onConfirm}>{confirmText}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };
  