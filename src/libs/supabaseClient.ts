import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dgofdfcslvfuaogizpxx.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnb2ZkZmNzbHZmdWFvZ2l6cHh4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjY4MDk3OSwiZXhwIjoyMDEyMjU2OTc5fQ.rjIHktR0CdZNUKbjnbiOmrBPMvFmNPPUgG7yksJOV2g"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)