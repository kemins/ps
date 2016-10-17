export interface IPSResponse {
    message: string;
    type: Status;
    body?: string;
}

export type Status = "success" | "fault";