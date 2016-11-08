export interface IPSResponse {
    message: string;
    type: Status;
    body?: string;
    read?: boolean;
}

export type Status = "success" | "fault";