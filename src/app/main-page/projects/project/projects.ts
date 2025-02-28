export interface Technology {
  technology: string;
  technologyImg: string;
}
export interface Projects {
  projectName: string;
  technologyUsed: Technology[];
  hover: boolean;
  imgProject: string;
}
