import { NextRequest, NextResponse } from 'next/server';

import { ImageResponse } from 'next/og';
import LandingImage from '../LandingImage';
import ModulesImage from '../ModulesImage';
import StepsImage from '../StepsImage';
import CTAImage from '../CTAImage';
import NameImage from '../NameImage';
import { fetchApplications } from '@/services/ezrfApi';
import ShareCard from '@/components/Details/ShareCard';
import { ProjectWithMetrics, ProjectWithRank } from '@/services/ezrfApi/types';
import ShareCardBare from './ShareCardBare';


async function getProject(id: string) {
    try {
        const projects = await fetchApplications(0, id);
        if (projects.length > 0) {
            return projects[0];
        }
    } catch (error) {
        console.error(error);
    }
}

export async function GET(request: NextRequest,  { params }: { params: { id: string } }) {
    // const currentId = request.nextUrl.searchParams.get('id');
    // if (!currentId) {
    //     return new NextResponse('Pass in an id as a parameter', { status: 400 });
    // }

    const project = await getProject(params.id);

    if (project) {

        return new ImageResponse((
            <ShareCardBare
                project={project}
                
                />),
            { width: 1200, height: 630 });

    }

    return new NextResponse(null, { status: 204, statusText: 'Page does not exist' });
}