--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

-- `supportsForward` decides if the service should attempt to forward payments to the user's wallet
ALTER TABLE user ADD COLUMN supportsForward BOOLEAN NOT NULL DEFAULT 1 CHECK (supportsForward IN (0, 1));
