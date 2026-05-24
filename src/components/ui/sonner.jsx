import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-slate-950 group-[.toaster]:text-slate-50 group-[.toaster]:border-slate-800 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-slate-400",
          actionButton:
            "group-[.toast]:bg-slate-50 group-[.toast]:text-slate-900",
          cancelButton:
            "group-[.toast]:bg-slate-800 group-[.toast]:text-slate-400",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
