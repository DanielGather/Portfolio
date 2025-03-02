export interface Technology {
  technology: string;
  technologyImg: string;
}
export interface Projects {
  projectNumber: string;
  projectName: string;
  technologyUsed: Technology[];
  hover: boolean;
  imgProject: string;
}
