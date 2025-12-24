export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      about_content: {
        Row: {
          created_at: string
          hero_description: string | null
          hero_image_url: string | null
          hero_title: string | null
          history_description: string | null
          history_title: string | null
          id: string
          mission_description: string | null
          mission_title: string | null
          updated_at: string
          values_description: string | null
          values_title: string | null
          vision_description: string | null
          vision_title: string | null
        }
        Insert: {
          created_at?: string
          hero_description?: string | null
          hero_image_url?: string | null
          hero_title?: string | null
          history_description?: string | null
          history_title?: string | null
          id?: string
          mission_description?: string | null
          mission_title?: string | null
          updated_at?: string
          values_description?: string | null
          values_title?: string | null
          vision_description?: string | null
          vision_title?: string | null
        }
        Update: {
          created_at?: string
          hero_description?: string | null
          hero_image_url?: string | null
          hero_title?: string | null
          history_description?: string | null
          history_title?: string | null
          id?: string
          mission_description?: string | null
          mission_title?: string | null
          updated_at?: string
          values_description?: string | null
          values_title?: string | null
          vision_description?: string | null
          vision_title?: string | null
        }
        Relationships: []
      }
      academic_programs: {
        Row: {
          created_at: string
          description: string | null
          display_order: number
          icon: string | null
          id: string
          is_visible: boolean
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number
          icon?: string | null
          id?: string
          is_visible?: boolean
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number
          icon?: string | null
          id?: string
          is_visible?: boolean
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      academics_content: {
        Row: {
          calendar_events: Json | null
          calendar_title: string | null
          created_at: string
          hero_description: string | null
          hero_title: string | null
          id: string
          programs_description: string | null
          programs_title: string | null
          updated_at: string
        }
        Insert: {
          calendar_events?: Json | null
          calendar_title?: string | null
          created_at?: string
          hero_description?: string | null
          hero_title?: string | null
          id?: string
          programs_description?: string | null
          programs_title?: string | null
          updated_at?: string
        }
        Update: {
          calendar_events?: Json | null
          calendar_title?: string | null
          created_at?: string
          hero_description?: string | null
          hero_title?: string | null
          id?: string
          programs_description?: string | null
          programs_title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      admission_rate_limits: {
        Row: {
          academic_year: string
          created_at: string
          filled_seats: number | null
          id: string
          is_active: boolean | null
          stream: string
          total_seats: number
          updated_at: string
        }
        Insert: {
          academic_year: string
          created_at?: string
          filled_seats?: number | null
          id?: string
          is_active?: boolean | null
          stream: string
          total_seats: number
          updated_at?: string
        }
        Update: {
          academic_year?: string
          created_at?: string
          filled_seats?: number | null
          id?: string
          is_active?: boolean | null
          stream?: string
          total_seats?: number
          updated_at?: string
        }
        Relationships: []
      }
      admission_submissions: {
        Row: {
          address: string
          admin_notes: string | null
          date_of_birth: string
          documents: Json | null
          email: string
          full_name: string
          gender: string
          guardian_email: string | null
          guardian_name: string
          guardian_phone: string
          id: string
          marks_percentage: number
          phone: string
          previous_school: string
          reviewed_at: string | null
          reviewed_by: string | null
          status: string | null
          stream: string
          submitted_at: string
          user_id: string | null
        }
        Insert: {
          address: string
          admin_notes?: string | null
          date_of_birth: string
          documents?: Json | null
          email: string
          full_name: string
          gender: string
          guardian_email?: string | null
          guardian_name: string
          guardian_phone: string
          id?: string
          marks_percentage: number
          phone: string
          previous_school: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          stream: string
          submitted_at?: string
          user_id?: string | null
        }
        Update: {
          address?: string
          admin_notes?: string | null
          date_of_birth?: string
          documents?: Json | null
          email?: string
          full_name?: string
          gender?: string
          guardian_email?: string | null
          guardian_name?: string
          guardian_phone?: string
          id?: string
          marks_percentage?: number
          phone?: string
          previous_school?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          stream?: string
          submitted_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      campus_activities: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          display_order: number
          id: string
          image_url: string | null
          is_visible: boolean
          title: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          image_url?: string | null
          is_visible?: boolean
          title: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          image_url?: string | null
          is_visible?: boolean
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      campus_life_content: {
        Row: {
          activities_description: string | null
          activities_title: string | null
          created_at: string
          hero_description: string | null
          hero_title: string | null
          id: string
          updated_at: string
        }
        Insert: {
          activities_description?: string | null
          activities_title?: string | null
          created_at?: string
          hero_description?: string | null
          hero_title?: string | null
          id?: string
          updated_at?: string
        }
        Update: {
          activities_description?: string | null
          activities_title?: string | null
          created_at?: string
          hero_description?: string | null
          hero_title?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      facilities: {
        Row: {
          created_at: string
          description: string | null
          display_order: number
          icon: string | null
          id: string
          image_url: string | null
          is_visible: boolean
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number
          icon?: string | null
          id?: string
          image_url?: string | null
          is_visible?: boolean
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number
          icon?: string | null
          id?: string
          image_url?: string | null
          is_visible?: boolean
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      footer_content: {
        Row: {
          about_text: string | null
          contact_address: string | null
          contact_email: string | null
          contact_phone: string | null
          created_at: string
          facebook_url: string | null
          id: string
          instagram_url: string | null
          twitter_url: string | null
          updated_at: string
          youtube_url: string | null
        }
        Insert: {
          about_text?: string | null
          contact_address?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          facebook_url?: string | null
          id?: string
          instagram_url?: string | null
          twitter_url?: string | null
          updated_at?: string
          youtube_url?: string | null
        }
        Update: {
          about_text?: string | null
          contact_address?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          facebook_url?: string | null
          id?: string
          instagram_url?: string | null
          twitter_url?: string | null
          updated_at?: string
          youtube_url?: string | null
        }
        Relationships: []
      }
      gallery_images: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          display_order: number
          id: string
          image_url: string
          is_visible: boolean
          title: string | null
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          image_url: string
          is_visible?: boolean
          title?: string | null
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          image_url?: string
          is_visible?: boolean
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      home_content: {
        Row: {
          about_description: string | null
          blessings_description: string | null
          blessings_image_url: string | null
          blessings_name: string | null
          created_at: string
          founder_description: string | null
          founder_image_url: string | null
          founder_name: string | null
          hero_video_enabled: boolean
          hero_video_id: string | null
          id: string
          updated_at: string
        }
        Insert: {
          about_description?: string | null
          blessings_description?: string | null
          blessings_image_url?: string | null
          blessings_name?: string | null
          created_at?: string
          founder_description?: string | null
          founder_image_url?: string | null
          founder_name?: string | null
          hero_video_enabled?: boolean
          hero_video_id?: string | null
          id?: string
          updated_at?: string
        }
        Update: {
          about_description?: string | null
          blessings_description?: string | null
          blessings_image_url?: string | null
          blessings_name?: string | null
          created_at?: string
          founder_description?: string | null
          founder_image_url?: string | null
          founder_name?: string | null
          hero_video_enabled?: boolean
          hero_video_id?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      nav_items: {
        Row: {
          created_at: string
          display_order: number
          id: string
          is_visible: boolean
          label: string
          path: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_order?: number
          id?: string
          is_visible?: boolean
          label: string
          path: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_order?: number
          id?: string
          is_visible?: boolean
          label?: string
          path?: string
          updated_at?: string
        }
        Relationships: []
      }
      portal_users: {
        Row: {
          admission_date: string | null
          class: string | null
          created_at: string
          department: string | null
          email: string | null
          full_name: string | null
          id: string
          is_active: boolean | null
          password_hash: string | null
          roll_number: string | null
          section: string | null
          student_id: string | null
          updated_at: string
          user_id: string
          user_type: string | null
          username: string | null
        }
        Insert: {
          admission_date?: string | null
          class?: string | null
          created_at?: string
          department?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          is_active?: boolean | null
          password_hash?: string | null
          roll_number?: string | null
          section?: string | null
          student_id?: string | null
          updated_at?: string
          user_id?: string
          user_type?: string | null
          username?: string | null
        }
        Update: {
          admission_date?: string | null
          class?: string | null
          created_at?: string
          department?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          is_active?: boolean | null
          password_hash?: string | null
          roll_number?: string | null
          section?: string | null
          student_id?: string | null
          updated_at?: string
          user_id?: string
          user_type?: string | null
          username?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      site_content: {
        Row: {
          created_at: string
          data: Json
          key: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          data?: Json
          key: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          data?: Json
          key?: string
          updated_at?: string
        }
        Relationships: []
      }
      site_content_revisions: {
        Row: {
          created_at: string
          data: Json
          id: string
          key: string
        }
        Insert: {
          created_at?: string
          data: Json
          id?: string
          key: string
        }
        Update: {
          created_at?: string
          data?: Json
          id?: string
          key?: string
        }
        Relationships: []
      }
      staff: {
        Row: {
          created_at: string
          department: string | null
          designation: string
          display_order: number | null
          email: string
          experience_years: number | null
          full_name: string
          id: string
          is_active: boolean | null
          joining_date: string | null
          phone: string | null
          photo_url: string | null
          qualifications: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          department?: string | null
          designation: string
          display_order?: number | null
          email: string
          experience_years?: number | null
          full_name: string
          id?: string
          is_active?: boolean | null
          joining_date?: string | null
          phone?: string | null
          photo_url?: string | null
          qualifications?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          department?: string | null
          designation?: string
          display_order?: number | null
          email?: string
          experience_years?: number | null
          full_name?: string
          id?: string
          is_active?: boolean | null
          joining_date?: string | null
          phone?: string | null
          photo_url?: string | null
          qualifications?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      updates: {
        Row: {
          category: string
          created_at: string
          created_by: string | null
          date: string
          description: string
          display_order: number | null
          id: string
          is_published: boolean | null
          thumbnail_url: string | null
          title: string
          updated_at: string
          video_url: string | null
        }
        Insert: {
          category: string
          created_at?: string
          created_by?: string | null
          date?: string
          description: string
          display_order?: number | null
          id?: string
          is_published?: boolean | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          category?: string
          created_at?: string
          created_by?: string | null
          date?: string
          description?: string
          display_order?: number | null
          id?: string
          is_published?: boolean | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
          video_url?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
