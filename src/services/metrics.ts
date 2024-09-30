
type Metric = {
    name: string;
    displayName: string;
    description: string;
}

export const APP_METRICS_TYPE = 0;
export const CREATOR_METRICS_TYPE = 1;

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

const creatorMetrics: Metric[] = [

    { name: 'num_drops', displayName: 'Drops', description: 'The number of drops for this creator.' },
    { name: 'num_unique_minters', displayName: 'Minters', description: 'The number of unique minters for this creator.' },
    { name: 'num_transactions', displayName: 'Tx', description: 'The number of transactions for this creator.' },
    { name: 'usd_value_of_transactions', displayName: 'USD Value', description: 'The USD value of the tx for this creator.' },
    { name: 'num_farcaster_minters', displayName: 'Farcaster Minters', description: 'The number of Farcaster Minters for this creator.' },
    { name: 'num_farcaster_transactions', displayName: 'Farcaster TX', description: 'The number of Farcaster Transactions for this creator.' },
    
]

export const info = "Metrics are updated weekly and compiled based on open datasets sourced from Dune, Flipside, Goldsky, and Open Source Observer."

export function getDisplayName(metric: string) {
    return [...metrics, ...creatorMetrics].find(m => m.name === metric)?.displayName || metric;
}

export function getDescription(metric: string) {
    return [...metrics, ...creatorMetrics].find(m => m.name === metric)?.description || '';
}


export function getMetrics(type: number) {
    if (type === APP_METRICS_TYPE) {
        return metrics.map(m => m.name);
    } else {
        return creatorMetrics.map(m => m.name);
    }
}
