
type Metric = {
    name: string;
    displayName: string;
    description: string;
}

const metrics: Metric[] = [


    { name: 'active_addresses_90D', displayName: '90d Users', description: 'The number of unique addresses that have interacted in the last 90 days.' },
    { name: 'active_addresses_180D', displayName: '180d Users', description: 'The number of unique addresses that have interacted in the last 180 days.' },
    { name: 'transactions_90D', displayName: '90d Tx', description: 'The number of transactions in the last 90 days.' },
    { name: 'transactions_180D', displayName: '180d Tx', description: 'The number of transactions in the last 180 days.' },
    { name: 'daily_active_addresses_90D', displayName: '90d DAU', description: 'The number of addresses that have interacted repeatedly in the last 90 days.' },
    { name: 'daily_active_addresses_180D', displayName: '180d DAU', description: 'The number of addresses that have interacted repeatedly in the last 180 days.' },
    { name: 'farcaster_users_90D', displayName: '90d Farcaster', description: 'The number of farcaster users who have interacted in the last 90 days.' },
    { name: 'farcaster_users_180D', displayName: '180d Farcaster', description: 'The number of farcaster users who have interacted in the last 180 days.' },

]

export const info = "Metrics are updated weekly and compiled based on open datasets sourced from Dune, Flipside, Goldsky, and Open Source Observer."

export function getDisplayName(metric: string) {
    return metrics.find(m => m.name === metric)?.displayName || metric;
}

export function getDescription(metric: string) {
    return metrics.find(m => m.name === metric)?.description || '';
}


export function getMetrics() {
    return metrics.map(m => m.name);
}
