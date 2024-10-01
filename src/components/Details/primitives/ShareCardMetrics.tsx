import { ProjectWithRank } from "@/services/ezrfApi/types";
import { APP_METRICS_TYPE } from "@/services/metrics";
import {
  Users,
  ArrowRightLeft,
  Activity,
  MessageSquare,
  DollarSign,
  Droplet,
  ActivitySquareIcon,
  ArrowDownSquare,
} from "lucide-react";

interface Props {
  project: ProjectWithRank;
}

export default function ShareCardMetrics({ project }: Props) {
  return (
    <>
      {project.metrics?.metrics_type === APP_METRICS_TYPE ? (
        <AppMetrics project={project} />
      ) : (
        <CreatorMetrics project={project} />
      )}
    </>
  );
}

function getMetric(project: ProjectWithRank | undefined, metric: string) {
  return project?.metrics?.[metric]
    ? project?.metrics[metric].toLocaleString("en-US", {
        maximumFractionDigits: 2,
      })
    : "0";
}

function AppMetrics({ project }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="space-y-2"></div>
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground">90 Days</h4>
      </div>
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground">180 Days</h4>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Users</span>
        </div>
        <div className="flex items-center gap-2">
          <ArrowRightLeft className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Tx</span>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">DAU</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Farcaster</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-semibold">
          {getMetric(project, "active_addresses_90D")}
        </div>
        <div className="text-sm font-semibold">
          {getMetric(project, "transactions_90D")}
        </div>
        <div className="text-sm font-semibold">
          {getMetric(project, "daily_active_addresses_90D")}
        </div>
        <div className="text-sm font-semibold">
          {getMetric(project, "farcaster_users_90D")}
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-semibold">
          {getMetric(project, "active_addresses_180D")}
        </div>
        <div className="text-sm font-semibold">
          {getMetric(project, "transactions_180D")}
        </div>
        <div className="text-sm font-semibold">
          {getMetric(project, "daily_active_addresses_180D")}
        </div>
        <div className="text-sm font-semibold">
          {getMetric(project, "farcaster_users_180D")}
        </div>
      </div>
    </div>
  );
}

function CreatorMetrics({ project }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Droplet className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Drops</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Minters</span>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Tx</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Tx Value</span>
        </div>
        <div className="flex items-center gap-2">
          <ArrowDownSquare className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Farcaster Mints</span>
        </div>
        <div className="flex items-center gap-2">
          <ActivitySquareIcon className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Farcaster Tx</span>
        </div>
      </div>

      <div>{/* empty for spacing */}</div>

      {/* <div className="space-y-2">
          <div className="text-sm font-semibold">{getMetric(project, "active_addresses_90D")}</div>
          <div className="text-sm font-semibold">{getMetric(project, "transactions_90D")}</div>
          <div className="text-sm font-semibold">{getMetric(project, "daily_active_addresses_90D")}</div>
          <div className="text-sm font-semibold">{getMetric(project, "farcaster_users_90D")}</div>

        </div> */}

      <div className="space-y-2">
        <div className="text-sm font-semibold">
          {getMetric(project, "num_drops")}
        </div>
        <div className="text-sm font-semibold">
          {getMetric(project, "num_unique_minters")}
        </div>
        <div className="text-sm font-semibold">
          {getMetric(project, "num_transactions")}
        </div>
        <div className="text-sm font-semibold">
          {getMetric(project, "usd_value_of_transactions")}
        </div>
        <div className="text-sm font-semibold">
          {getMetric(project, "num_farcaster_minters")}
        </div>
        <div className="text-sm font-semibold">
          {getMetric(project, "num_farcaster_transactions")}
        </div>
      </div>
    </div>
  );
}
