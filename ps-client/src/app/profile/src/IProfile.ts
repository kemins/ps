export interface IProfile {
  active?: boolean;
  picture?: {
    s: string,
    m: string,
    l: string
  };
  displayName?: string;
  email?: string;
  gender?: string;
}