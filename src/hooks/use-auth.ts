import { api } from "@/convex/_generated/api";
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth, useQuery } from "convex/react";

export function useAuth() {
  try {
    const { isLoading: isAuthLoading, isAuthenticated } = useConvexAuth();
    const user = useQuery(api.users.currentUser);
    const { signIn, signOut } = useAuthActions();

    // Derive isLoading directly from the dependencies instead of managing separate state
    const isLoading = isAuthLoading || user === undefined;

    return {
      isLoading,
      isAuthenticated,
      user,
      signIn,
      signOut,
    };
  } catch {
    // Convex not configured - return unauthenticated state
    return {
      isLoading: false,
      isAuthenticated: false,
      user: null,
      signIn: async () => {},
      signOut: async () => {},
    };
  }
}
