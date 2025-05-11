declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module "*resume.yaml" {
  const content: IResume;
  export default content;
}
