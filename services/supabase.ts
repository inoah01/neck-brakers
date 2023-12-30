import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/database.types';

const supabaseURL = 'https://hzsiommimhziqaesykca.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6c2lvbW1pbWh6aXFhZXN5a2NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM3NzczNjMsImV4cCI6MjAxOTM1MzM2M30.YgzSQ9oyhMg8SVtYJvx-x0aoHH3NBnR-HRCB8LUoAy0';

export const supabase = createClient<Database>(supabaseURL, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false
    },
})