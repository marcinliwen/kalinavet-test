export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      custom_role: {
        Row: {
          created_at: string
          id: number
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          role: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: number
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "custom_role_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "person"
            referencedColumns: ["id"]
          },
        ]
      }
      person: {
        Row: {
          address: string | null
          city: string | null
          country: string | null
          created_at: string
          email: string | null
          id: string
          name: string | null
          phone: string | null
          post_code: string | null
          surname: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          id: string
          name?: string | null
          phone?: string | null
          post_code?: string | null
          surname?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          phone?: string | null
          post_code?: string | null
          surname?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "person_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      pets: {
        Row: {
          birth_date: string | null
          breed: string | null
          created_at: string
          gender: Database["public"]["Enums"]["gender"] | null
          id: number
          name: string | null
          owner_id: string | null
          species: Database["public"]["Enums"]["species"] | null
        }
        Insert: {
          birth_date?: string | null
          breed?: string | null
          created_at?: string
          gender?: Database["public"]["Enums"]["gender"] | null
          id?: number
          name?: string | null
          owner_id?: string | null
          species?: Database["public"]["Enums"]["species"] | null
        }
        Update: {
          birth_date?: string | null
          breed?: string | null
          created_at?: string
          gender?: Database["public"]["Enums"]["gender"] | null
          id?: number
          name?: string | null
          owner_id?: string | null
          species?: Database["public"]["Enums"]["species"] | null
        }
        Relationships: [
          {
            foreignKeyName: "pets_owner_id_fkey1"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "person"
            referencedColumns: ["id"]
          },
        ]
      }
      results: {
        Row: {
          added_date: string | null
          created_at: string
          id: number
          pet_id: number | null
          title: string | null
          url: string | null
        }
        Insert: {
          added_date?: string | null
          created_at?: string
          id?: number
          pet_id?: number | null
          title?: string | null
          url?: string | null
        }
        Update: {
          added_date?: string | null
          created_at?: string
          id?: number
          pet_id?: number | null
          title?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "results_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: true
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
        ]
      }
      visits: {
        Row: {
          created_at: string
          id: number
          pet_id: number | null
          subject: string | null
          visit_date: string | null
          visit_time: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          pet_id?: number | null
          subject?: string | null
          visit_date?: string | null
          visit_time?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          pet_id?: number | null
          subject?: string | null
          visit_date?: string | null
          visit_time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "visits_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: true
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_persons_and_pets: {
        Args: Record<PropertyKey, never>
        Returns: {
          person_name: string
          person_surname: string
          person_email: string
          person_phone: string
          person_id: string
          pets_name: string
          pets_species: Database["public"]["Enums"]["species"]
          pets_id: number
        }[]
      }
      selectonlyusers: {
        Args: Record<PropertyKey, never>
        Returns: {
          address: string | null
          city: string | null
          country: string | null
          created_at: string
          email: string | null
          id: string
          name: string | null
          phone: string | null
          post_code: string | null
          surname: string | null
        }[]
      }
      selectusers: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
    }
    Enums: {
      app_role: "admin" | "user"
      gender: "male" | "female"
      species: "dog" | "cat"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
