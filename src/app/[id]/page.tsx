import ShareCardLoader from "@/components/Details/ShareCardLoader";
import { fetchApplications } from "@/services/ezrfApi";
import { NEXT_PUBLIC_URL, OG_DESCRIPTION, OG_IMAGES, OG_TITLE } from "@/services/ezrfApi/config";
import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';



interface Params {
    id: string;
}




export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {

    const imageUrl = `${NEXT_PUBLIC_URL}/${params.id}/images`;

    const frameMetadata = getFrameMetadata({
        image: `${imageUrl}`,
        // image: OG_IMAGES[0],
    });

    return {
        title: OG_TITLE,
        description: OG_DESCRIPTION,
        openGraph: {
            title: OG_TITLE,
            description: OG_DESCRIPTION,
            images: OG_IMAGES,
        },
        other: {
            ...frameMetadata,
        },
    };
}


export default function Project({ params }: { params: { id: string } }) {


    return (
        <ShareCardLoader
            id={params.id}
        />
    );

}
