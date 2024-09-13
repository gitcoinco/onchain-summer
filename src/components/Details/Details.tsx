import { ProjectWithRank } from "../../services/ezrfApi/types";
import DetailCard from "./DetailCard";

type DetailsProps = {
  onClick: () => void;
  project: ProjectWithRank | undefined;
};

export default function Details({ onClick, project }: DetailsProps) {
  return (
    <div className="fixed z-40 left-1/2 top-1/2">
      <div
        className="fixed inset-0 bg-black opacity-80 navbar-backdrop"
        onClick={onClick}
      ></div>
      <DetailCard project={project} showClose={true}  onClick={onClick}/>
   
    </div>
  );
}
