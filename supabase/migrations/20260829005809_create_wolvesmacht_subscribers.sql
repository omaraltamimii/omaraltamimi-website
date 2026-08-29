/*
# WolvesMacht newsletter subscribers

1. New Tables
- `wolvesmacht_subscribers`
  - `id` (uuid, primary key)
  - `email` (text, unique, not null) — the subscriber's email address
  - `owner_email` (text, not null) — the brand owner's contact address (wolvesmacht@gmail.com)
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `wolvesmacht_subscribers`.
- This is a no-sign-in public newsletter form, so the anon-key frontend must be
  able to INSERT new subscribers. Reads/updates/deletes are intentionally NOT
  exposed to anon — only the project owner (via the service role / dashboard)
  can view or manage the list.
- INSERT policy is open to anon, authenticated so anyone can subscribe.
  SELECT/UPDATE/DELETE are NOT granted to anon to protect the subscriber list.

3. Important notes
- The form stores each submitted email along with owner_email = 'wolvesmacht@gmail.com'
  so the list is associated with the brand owner's address.
- Duplicate emails are rejected by the UNIQUE constraint; the frontend treats
  that as a "already subscribed" success state.
*/

CREATE TABLE IF NOT EXISTS wolvesmacht_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  owner_email text NOT NULL DEFAULT 'wolvesmacht@gmail.com',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE wolvesmacht_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_subscribers" ON wolvesmacht_subscribers;
CREATE POLICY "anon_insert_subscribers" ON wolvesmacht_subscribers
  FOR INSERT TO anon, authenticated WITH CHECK (true);