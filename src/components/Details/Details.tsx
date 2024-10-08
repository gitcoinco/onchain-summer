import { ProjectWithRank } from "../../services/ezrfApi/types";
import ShareCard from "./ShareCard";

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
      <div className="w-screen px-4 px-12 -translate-x-1/2 -translate-y-1/2 sm:w-auto">
        <ShareCard
          project={project}
          showClose={true}
          onClick={onClick} />
      </div>

    </div>
  );
}
