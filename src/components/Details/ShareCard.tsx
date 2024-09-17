import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ProjectWithRank } from "@/services/ezrfApi/types";
import { Users, ArrowRightLeft, Activity, MessageSquare, X, Share2Icon } from "lucide-react"
import { Button } from "../ui/button";
import logo from "@/images/logopng.png"
// import Image from "next/image";
import { NEXT_PUBLIC_URL, SHARE_URL } from "@/services/ezrfApi/config";
import { toast } from "react-toastify";
import Image from "next/image";

interface ShareCardProps {
  project: ProjectWithRank | undefined;
  showClose: boolean;
  onClick: () => void;
}


function getMetric(project: ProjectWithRank | undefined, metric: string) {
  return project?.metrics?.[metric]
    ? project?.metrics[metric].toLocaleString('en-US', { maximumFractionDigits: 2 })
    : "0"
}

export default function ShareCard({
  project,
  showClose,
  onClick
}: ShareCardProps) {

  function share() {
    navigator.clipboard.writeText(SHARE_URL + project?.id)
    toast.success("Copied to clipboard")
  }


  return (
    <Card className="w-full max-w-md overflow-hidden text-white bg-black">

      {showClose ? (
        <div className="float-right p-1">

        <Button
          variant="ghost"
          size="icon"
          className=""
          onClick={share}
          aria-label="Share"
        >
          <Share2Icon className="w-4 h-4" />

        </Button>
        <Button
          variant="ghost"
          size="icon"
          className=""
          onClick={onClick}
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </Button>
        </div>

      ) : null
      }

      <CardHeader className="flex flex-row items-center gap-4 p-6">

        <img
          alt={`logo`}
          className="rounded-full"
          height="80"
          src={project?.metadata.sunnyAwards.avatarUrl}
          style={{
            aspectRatio: "80/80",
            objectFit: "cover",
          }}
          width="80"
        />
        <div className="grid gap-1">
          <h3 className="text-2xl font-bold leading-none">{project?.name}</h3>
        </div>

      </CardHeader>
      <CardContent className="grid gap-4 p-6">
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
            <div className="text-sm font-semibold">{getMetric(project, "active_addresses_90D")}</div>
            <div className="text-sm font-semibold">{getMetric(project, "transactions_90D")}</div>
            <div className="text-sm font-semibold">{getMetric(project, "daily_active_addresses_90D")}</div>
            <div className="text-sm font-semibold">{getMetric(project, "farcaster_users_90D")}</div>

          </div>

          <div className="space-y-2">
            <div className="text-sm font-semibold">{getMetric(project, "active_addresses_180D")}</div>
            <div className="text-sm font-semibold">{getMetric(project, "transactions_180D")}</div>
            <div className="text-sm font-semibold">{getMetric(project, "daily_active_addresses_180D")}</div>
            <div className="text-sm font-semibold">{getMetric(project, "farcaster_users_180D")}</div>

          </div>
        </div>
      </CardContent>
      <Image src={logo} alt="Logo" width={100} className="float-right pb-2 pr-2" />
      
    </Card>
  )
}
