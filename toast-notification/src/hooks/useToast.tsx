import { useCallback, useState, useRef } from "react"
import Notification from "../components/ui/notification";

type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
    type: ToastType;
    message: string;
    duration?: number;
    sticky?: boolean;
}

const useToast = (position: ToastPosition = 'bottom-right') => {
    const [notification, setNotification] = useState<ToastProps | null>(null);
    const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

    const trigger = useCallback((props: ToastProps) => {
        clearTimeout(timerRef.current);
        setNotification(props);

        if (!props.sticky) {
            timerRef.current = setTimeout(() => {
                setNotification(null);
            }, props.duration || 5000);
        }
    }, [])

    const NotificationComponents = notification ? (
        <div
            className={`toast-container ${position}`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <Notification {...notification} onClose={() => setNotification(null)} />
        </div>
    ) : null;

    return {
        trigger,
        NotificationComponents
    }
}

export default useToast;