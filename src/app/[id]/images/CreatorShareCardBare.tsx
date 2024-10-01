import { NEXT_PUBLIC_URL } from "@/services/ezrfApi/config";
import { ProjectWithRank } from "@/services/ezrfApi/types";

interface ShareCardProps {
  project: ProjectWithRank | undefined;
}

export default function CreatorShareCardBare({
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
        backgroundImage: `url("${NEXT_PUBLIC_URL}/slidebg.png")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        
      }}
    >

      <img
        src={project?.metadata.sunnyAwards.avatarUrl}
        height={120}
        style={{
          position: 'absolute',
          top: '50',
          left: '450',
          borderRadius: "9999px",
          aspectRatio: "80/80",
          objectFit: "cover",
        }}
      />

      <p
        style={{
          position: 'absolute',
          top: '30',
          left: '600',
          color: 'white',
          fontSize: '42px',
          textAlign: 'left',
          textWrap: 'wrap',
          maxWidth: "500px",
          maxLines: "2",
          blockOverflow: 'ellipsis',
        }}
      >{project?.metadata.name}</p>


      {/* --------- ROW 1 --------- */}

      <p
        style={{
          position: 'absolute',
          top: '255',
          left: '400',
          color: 'white',
          fontSize: '24px',
          textAlign: 'left',
        }}
      >Drops</p>

      <p
        style={{
          position: 'absolute',
          top: '250',
          left: '900',
          color: 'white',
          fontSize: '32px',
          textAlign: 'left',
          maxWidth: "300px",
          fontWeight: 'bold'
        }}
      >{getMetric("num_drops")}</p>



      {/* --------- ROW 3 --------- */}

      <p
        style={{
          position: 'absolute',
          top: '305',
          left: '400',
          color: 'white',
          fontSize: '24px',
          textAlign: 'left',
        }}
      >Minters</p>

      <p
        style={{
          position: 'absolute',
          top: '300',
          left: '900',
          color: 'white',
          fontSize: '32px',
          textAlign: 'left',
          maxWidth: "300px",
          fontWeight: 'bold'
        }}
      >{getMetric("num_unique_minters")}</p>


      {/* --------- ROW 4 --------- */}

      <p
        style={{
          position: 'absolute',
          top: '355',
          left: '400',
          color: 'white',
          fontSize: '24px',
          textAlign: 'left',
        }}
      >Tx</p>

      <p
        style={{
          position: 'absolute',
          top: '350',
          left: '900',
          color: 'white',
          fontSize: '32px',
          textAlign: 'left',
          maxWidth: "300px",
          fontWeight: 'bold'
        }}
      >{getMetric("num_transactions")}</p>


      {/* --------- ROW 5 --------- */}

      <p
        style={{
          position: 'absolute',
          top: '405',
          left: '400',
          color: 'white',
          fontSize: '24px',
          textAlign: 'left',
        }}
      >USD Value</p>

      <p
        style={{
          position: 'absolute',
          top: '405',
          left: '900',
          color: 'white',
          fontSize: '32px',
          textAlign: 'left',
          maxWidth: "300px",
          fontWeight: 'bold'
        }}
      >{getMetric("usd_value_of_transactions")}</p>

            {/* --------- ROW 5 --------- */}

            <p
        style={{
          position: 'absolute',
          top: '455',
          left: '400',
          color: 'white',
          fontSize: '24px',
          textAlign: 'left',
        }}
      >Farcaster Minters</p>

      <p
        style={{
          position: 'absolute',
          top: '450',
          left: '900',
          color: 'white',
          fontSize: '32px',
          textAlign: 'left',
          maxWidth: "300px",
          fontWeight: 'bold'
        }}
      >{getMetric("num_farcaster_minters")}</p>

            {/* --------- ROW 5 --------- */}

            <p
        style={{
          position: 'absolute',
          top: '505',
          left: '400',
          color: 'white',
          fontSize: '24px',
          textAlign: 'left',
        }}
      >Farcaster Tx</p>

      <p
        style={{
          position: 'absolute',
          top: '500',
          left: '900',
          color: 'white',
          fontSize: '32px',
          textAlign: 'left',
          maxWidth: "300px",
          fontWeight: 'bold'
        }}
      >{getMetric("num_farcaster_transactions")}</p>




      <img
        src={NEXT_PUBLIC_URL + "/logo.png"}
        height={40}
        style={{
          position: 'absolute',
          bottom: '10',
          right: '10'
        }}
      />

    </div>

  )
}
