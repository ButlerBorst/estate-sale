import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { createBrowserClient } from '@supabase/ssr';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export type TypedSupabaseClient = SupabaseClient<any> 
let client: TypedSupabaseClient | undefined

export const getSupabaseBrowserClient = () => {
    if (client) {
        return client
    }

    client = createBrowserClient<any>(
        supabaseUrl,
        supabaseKey
    )
    return client

}

export const getSupabaseServerClient = () => {
    if (client) {
        return client
    }

    client = createClient<any>(
        supabaseUrl,
        supabaseKey
    )
    return client
}


export const supabaseClient = createClient(supabaseUrl, supabaseKey)