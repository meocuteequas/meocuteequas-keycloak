import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dgofdfcslvfuaogizpxx.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnb2ZkZmNzbHZmdWFvZ2l6cHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2ODA5NzksImV4cCI6MjAxMjI1Njk3OX0.9ZfNgAfSTQVw0RPdYRWZcEjugqPOPAMouTRzgF47scU"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)