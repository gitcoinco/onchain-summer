import { NextRequest, NextResponse } from 'next/server';

import { ImageResponse } from 'next/og';
import { fetchApplications } from '@/services/ezrfApi';
import ShareCardBare from './ShareCardBare';


async function getProject(id: string) {
    try {
        const projects = await fetchApplications(0, id);
        if (projects.length > 0) {
            console.log("loading metadata for: " + projects[0].name);
            console.log("loading metadata for: " + projects[0].id);
            return projects[0];
        }
    } catch (error) {
        console.error(error);
    }
}

export async function GET(request: NextRequest,  { params }: { params: { id: string } }) {
    const project = await getProject(params.id);

    if (project) {

        return new ImageResponse((
            <ShareCardBare
                project={project}/>),
            { width: 1200, height: 630 });
    }
    return new NextResponse(null, { status: 204, statusText: 'Page does not exist' });
}
