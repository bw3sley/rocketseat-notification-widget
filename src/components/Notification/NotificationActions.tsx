import { ReactNode } from "react";

interface NotificationProps {
    children: ReactNode
}

export function NotificationActions({ children }: NotificationProps) {
    return (
        <div className="flex gap-2 self-center">
            {children}
        </div>
    )
}