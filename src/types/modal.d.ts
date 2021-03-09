type Actions = { okAction?: () => void; cancelAction?: () => void };
type Buttons = {
  okButtonText?: string;
  cancelButtonText?: string;
};
export type ModalTypes = 'Warn' | 'Action';
export type OpenModal = () => void;
export type SetActions = ({}: Actions) => void;
export type SetButtons = ({}: Buttons) => void;

interface CreateModalParams extends Actions {
  message: string;
}
interface CreateModalParams extends Buttons {}

export type CreateModalMethods = ({
  message,
  okAction,
  okButtonText,
  cancelAction,
  cancelButtonText,
}: CreateModalParams) => void;

export type CreateModal = Record<string, CreateModalMethods>;

export type Provider = [CreateModal, OpenModal];