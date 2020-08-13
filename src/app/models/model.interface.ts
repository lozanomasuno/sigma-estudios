export interface DepartmentI {
    id: number;
    name: string;
}
export interface CitiesI{
    id: number;
    depId?: number;
    name: string;
}
