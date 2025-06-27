import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

type DialogProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    children?: ReactNode;
    footer?: ReactNode;
};

export const Dialog: React.FC<DialogProps> = ({ open, onClose, title, children, footer }) => {
    if (!open) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg max-w-md w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
                >
                    &times;
                </button>
                {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
                <div className="mb-4">{children}</div>
                {footer && <div className="flex justify-end gap-2">{footer}</div>}
            </div>
        </div>,
        document.body
    );
};