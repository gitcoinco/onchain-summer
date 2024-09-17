
type Metric = {
    name: string;
    displayName: string;
}

const metrics: Metric[] = [


{ name: 'active_addresses_90D', displayName: '90d Users'},
{ name: 'transactions_90D', displayName: '90d Tx'},
{ name: 'active_addresses_180D', displayName: '180d Users'},
{ name: 'daily_active_addresses_180D', displayName: '180d DAU'},
{ name: 'daily_active_addresses_90D', displayName: '90d DAU'},
{ name: 'farcaster_users_180D', displayName: '180d Farcaster'},
{ name: 'farcaster_users_90D', displayName: '90d Farcaster'},
{ name: 'transactions_180D', displayName: '180d Tx'},

]

export function getDisplayName(metric: string) {
    return metrics.find(m => m.name === metric)?.displayName || metric;
}

export function getMetrics() {
    return metrics.map(m => m.name);
}
