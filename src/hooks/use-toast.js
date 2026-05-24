import { toast as sonnerToast } from "sonner"

export function useToast() {
  const toast = ({ title, description, variant, ...props }) => {
    sonnerToast(title, {
      description: description,
      ...props
    })
  }

  return {
    toast
  }
}
