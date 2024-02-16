export interface GenerativeTextInterface {
    generate(query?: string): Promise<string>;
}