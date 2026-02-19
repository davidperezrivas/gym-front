export interface UpsertModalProps {
  open: boolean;
  onClick: () => void;
  type: 'create' | 'edit';
}
