import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ProjectWithRank } from "@/services/ezrfApi/types";
import { Users, ArrowRightLeft, Activity, MessageSquare, X, Share2Icon } from "lucide-react"
import { Button } from "../ui/button";
import logo from "@/images/logopng.png"
import { SHARE_URL } from "@/services/ezrfApi/config";
import { toast } from "react-toastify";
import Image from "next/image";
import bg from "@/images/slidebg.png"
import Link from "next/link";

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

    const firstApplicationId = project?.applicationIds && project.applicationIds.length > 0 ? project.applicationIds[0] : ""

    // if recipient is 0x0 and if app id exists, use app id
    // if recipient is 0x0 and app id doesn't exist then we can't have a project
    // if recipient is not 0x0, use recipient


    const shareId = (project?.recipient === "0x0000000000000000000000000000000000000000" ? firstApplicationId : project?.recipient)
    navigator.clipboard.writeText(SHARE_URL + shareId)
    toast.success("Copied to clipboard")
  }

  console.log(JSON.stringify(project))

  return (
    <Card className="w-full max-w-md overflow-hidden text-white bg-black">

      {showClose ? (
        <div className="absolute top-2 right-6">

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
        <Image
          src={bg}
          alt="Logo"
          width={100}
          className="-mt-6 -ml-6"
        />
        <img
          alt={`logo`}
          className="-ml-12 rounded-full"
          height="80"
          src={project?.metadata.sunnyAwards.avatarUrl}
          style={{
            aspectRatio: "80/80",
            objectFit: "cover",
          }}
          width="80"
        />
        <div className="w-full">
          {project?.metadata?.websiteUrl ? (
            <Link href={project.metadata.websiteUrl}>
            <h3 className="flex text-2xl font-bold leading-none">{project?.name}</h3>
          </Link>
        ) : (
            <h3 className="flex text-2xl font-bold leading-none">{project?.name}</h3>
        )}

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
