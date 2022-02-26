export interface IForm {
    questions: QuestionsEntity[];
}

export interface QuestionsEntity {
    title: string;
    scopes: ScopesEntity[];
}

export interface ScopesEntity {
    id?: number;
    title: string;
    options: OptionsEntity[];
}

export interface OptionsEntity {
    title: string;
}

export interface IFormikRadioEntity {
    name: string;
    label: string;
    options: string[];
}

export interface IFormState {
    baseApiUrl: string | null;
    submission: { status: boolean; message: string };
    receiverEmail: string | null;
}
