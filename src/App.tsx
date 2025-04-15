import "@aws-amplify/ui-react/styles.css";
import { requestFCMToken } from "./lib/firebase/notifications";
import { RouterProvider } from "react-router-dom";
import router from "./navigation/routes";
import { AuthProvider } from "./hooks/useAuth";
import { showToast } from "./lib/toast";
import { useEffect } from "react";
import { onMessage } from "firebase/messaging";
import { cloudMessaging } from "./lib/firebase/app";

export default function App() {
  useEffect(() => {
    requestFCMToken();  
    onMessage(cloudMessaging, (payload) => {
      const notification = payload.notification;
      if (notification && notification.title && notification.body) {
        showToast(notification.title, "info", notification.body);
      }
    });
  }, []);
  
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
