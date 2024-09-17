import { NEXT_PUBLIC_URL } from "@/services/ezrfApi/config";
import { ProjectWithRank } from "@/services/ezrfApi/types";

interface ShareCardProps {
  project: ProjectWithRank | undefined;
}

export default function ShareCardBare({
  project
}: ShareCardProps) {


  function getMetric(metric: string) {
    return project?.metrics?.[metric]
      ? project?.metrics[metric].toLocaleString('en-US', { maximumFractionDigits: 2 })
      : "0"
  }

  return (

    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: 'black',
        // backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
        backgroundSize: '100px 100px',
      }}
    >

      <img
        src={project?.metadata.sunnyAwards.avatarUrl}
        height={120}
        style={{
          position: 'absolute',
          top: '100',
          left: '150'
        }}
      />

      <p
        style={{
          position: 'absolute',
          top: '100',
          left: '350',
          color: 'white',
          fontSize: '56px',
          textAlign: 'left',
        }}
      >{project?.name}</p>

      {/* --------- ROW 1 --------- */}

      <p
        style={{
          position: 'absolute',
          top: '250',
          left: '400',
          color: 'white',
          fontSize: '24px',
          textAlign: 'left',
          maxWidth: "300px",
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'

        }}
      >90d</p>
      <p
        style={{
          position: 'absolute',
          top: '250',
          left: '700',
          color: 'white',
          fontSize: '24px',
          textAlign: 'left',
          maxWidth: "300px",
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'

        }}
      >180d</p>


      {/* --------- ROW 2 --------- */}

      <p
        style={{
          position: 'absolute',
          top: '305',
          left: '250',
          color: 'white',
          fontSize: '24px',
          textAlign: 'left',
        }}
      >Users</p>
      <p
        style={{
          position: 'absolute',
          top: '300',
          left: '400',
          color: 'white',
          fontSize: '32px',
          textAlign: 'left',
          maxWidth: "300px",
          fontWeight: 'bold'

        }}
      >{getMetric("active_addresses_90D")}</p>
      <p
        style={{
          position: 'absolute',
          top: '300',
          left: '700',
          color: 'white',
          fontSize: '32px',
          textAlign: 'left',
          maxWidth: "300px",
          fontWeight: 'bold'
        }}
      >{getMetric("active_addresses_180D")}</p>



      {/* --------- ROW 3 --------- */}

      <p
        style={{
          position: 'absolute',
          top: '355',
          left: '250',
          color: 'white',
          fontSize: '24px',
          textAlign: 'left',
        }}
      >Tx</p>
      <p
        style={{
          position: 'absolute',
          top: '350',
          left: '400',
          color: 'white',
          fontSize: '32px',
          textAlign: 'left',
          maxWidth: "300px",
          fontWeight: 'bold'

        }}
      >{getMetric("transactions_90D")}</p>
      <p
        style={{
          position: 'absolute',
          top: '350',
          left: '700',
          color: 'white',
          fontSize: '32px',
          textAlign: 'left',
          maxWidth: "300px",
          fontWeight: 'bold'
        }}
      >{getMetric("transactions_180D")}</p>


      {/* --------- ROW 4 --------- */}

      <p
        style={{
          position: 'absolute',
          top: '405',
          left: '250',
          color: 'white',
          fontSize: '24px',
          textAlign: 'left',
        }}
      >DAU</p>
      <p
        style={{
          position: 'absolute',
          top: '400',
          left: '400',
          color: 'white',
          fontSize: '32px',
          textAlign: 'left',
          maxWidth: "300px",
          fontWeight: 'bold'

        }}
      >{getMetric("daily_active_addresses_90D")}</p>
      <p
        style={{
          position: 'absolute',
          top: '400',
          left: '700',
          color: 'white',
          fontSize: '32px',
          textAlign: 'left',
          maxWidth: "300px",
          fontWeight: 'bold'
        }}
      >{getMetric("daily_active_addresses_180D")}</p>


      {/* --------- ROW 5 --------- */}

      <p
        style={{
          position: 'absolute',
          top: '455',
          left: '250',
          color: 'white',
          fontSize: '24px',
          textAlign: 'left',
        }}
      >Farcaster</p>
      <p
        style={{
          position: 'absolute',
          top: '450',
          left: '400',
          color: 'white',
          fontSize: '32px',
          textAlign: 'left',
          maxWidth: "300px",
          fontWeight: 'bold'

        }}
      >{getMetric("farcaster_users_90D")}</p>
      <p
        style={{
          position: 'absolute',
          top: '450',
          left: '700',
          color: 'white',
          fontSize: '32px',
          textAlign: 'left',
          maxWidth: "300px",
          fontWeight: 'bold'
        }}
      >{getMetric("farcaster_users_180D")}</p>
      <img
        src={NEXT_PUBLIC_URL + "/logo.png"}
        height={80}
        style={{
          position: 'absolute',
          bottom: '10',
          right: '10'
        }}
      />

    </div>

  )
}