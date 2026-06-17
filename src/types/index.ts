export type ApplicationState =
  | 'cv_sent'
  | 'cv_read'
  | 'cv_downloaded'
  | 'first_interview'
  | 'technical_interview'
  | 'technical_test'
  | 'waiting_offer'
  | 'hired'
  | 'discarded'
  | 'not_selected'
  | 'position_cancelled'
  | 'process_closed'

export type ApplicationPhase = 'sent' | 'in_progress' | 'positive' | 'closed'

export type Modality = 'remote' | 'hybrid' | 'on_site'

export interface Application {
  id: string
  position: string
  company: string
  date: string
  main_technologies: string[]
  platform: string
  state: ApplicationState
  modality: Modality
  location: string | null
  salary: number | null
  notes: string | null
  user_id: string
  created_at: string
}

export type ApplicationInsert = Omit<Application, 'id' | 'user_id' | 'created_at'>
export type ApplicationUpdate = Partial<ApplicationInsert>
