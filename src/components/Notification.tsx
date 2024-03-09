import React, { useState, useEffect } from 'react';

const Notification: React.FC<{ message: string, onClose: () => void }> = ({ message, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`notification ${visible ? 'show' : 'hide'}`}>
            <p>{message}</p>
        </div>
    );
};

export default Notification;
