
type Metric = {
    name: string;
    displayName: string;
    round: number;
}


// active_addresses_180D: number;
// active_addresses_90D: number;
// daily_active_addresses_180D: number;
// daily_active_addresses_90D: number;
// farcaster_users_180D: number;
// farcaster_users_90D: number;
// transactions_180D: number;
// transactions_90D: number;

const metrics: Metric[] = [


{ name: 'active_addresses_90D', displayName: '90d Users', round: 0 },
{ name: 'transactions_90D', displayName: '90d Tx', round: 0 },
{ name: 'active_addresses_180D', displayName: '180d Users', round: 0 },
{ name: 'daily_active_addresses_180D', displayName: '180d DAU', round: 0 },
{ name: 'daily_active_addresses_90D', displayName: '90d DAU', round: 0 },
{ name: 'farcaster_users_180D', displayName: '180d Farcaster', round: 0 },
{ name: 'farcaster_users_90D', displayName: '90d Farcaster', round: 0 },
{ name: 'transactions_180D', displayName: '180d Tx', round: 0 },




  


]

export function getDisplayName(metric: string) {
    return metrics.find(m => m.name === metric)?.displayName || metric;
}

export function getRound(metric: string) {
    return metrics.find(m => m.name === metric)?.round || 0;
}

export function getMetrics() {
    return metrics.map(m => m.name);
}

