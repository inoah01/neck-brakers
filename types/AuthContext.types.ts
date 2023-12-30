// AuthContext.types.ts
import { Session, User, AuthError } from '@supabase/supabase-js';

export interface AuthContextType {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  loading: boolean;
  error: AuthError | null;
  session: Session | null;
  user: User | null;
  handleSignIn: () => Promise<void>;
  handleSignUp: () => Promise<void>;
  handleSignOut: () => Promise<void>;
}
