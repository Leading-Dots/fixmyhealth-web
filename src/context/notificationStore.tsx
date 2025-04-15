import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import client from "@/lib/apiClient";
import { Notification } from "@/API";
import { useNavigate } from "react-router-dom";
import { onCreateNotification } from "@/graphql/subscriptions";
import { notificationsByExpertID, notificationsByUserID } from "@/graphql/queries";

interface NotificationContextType {
  notificationCount: number;

  setNotificationCount: (count: number) => void;
  notifications: Notification[];
  setNotifications: (notifications: Notification[]) => void;
  fetchNotifications: () => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notificationCount, setNotificationCount] = useState(0);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { user } = useAuth();
  const router = useNavigate();
  const userRole = user?.role;

  const fetchNotifications = async () => {
    try {
      if (userRole === "patient") {
        const { data } = await client.graphql({
          query: notificationsByUserID,
          variables: {
            userID: user.id,
          },
        });
        //sort in latest first
        data.notificationsByUserID.items.sort(
          (a: Notification, b: Notification) => {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          }
        );
        setNotifications(data.notificationsByUserID.items);

        //filter the notification count to show only unread notifications
        const unreadNotifications = data.notificationsByUserID.items.filter(
          (notification: Notification) => !notification.isRead
        );
        setNotificationCount(unreadNotifications.length);
      } else {
        const { data } = await client.graphql({
          query: notificationsByExpertID,
          variables: {
            expertID: user.id,
          },
        });
        //sort in latest first
        data.notificationsByExpertID.items.sort(
          (a: Notification, b: Notification) => {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          }
        );

        setNotifications(data.notificationsByExpertID.items);

        //filter the notification count to show only unread notifications
        const unreadNotifications = data.notificationsByExpertID.items.filter(
          (notification: Notification) => !notification.isRead
        );
        setNotificationCount(unreadNotifications.length);
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    console.log("fetching notifications in notification store");
    fetchNotifications();
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        notificationCount,
        setNotificationCount,
        notifications,
        fetchNotifications,
        setNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotifications must be used within a NotificationProvider"
    );
  }
  return context;
};
