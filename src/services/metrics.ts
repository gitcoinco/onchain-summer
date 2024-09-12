
type Metric = {
    name: string;
    displayName: string;
    round: number;
}


const metrics: Metric[] = [
    // {
    //     name: 'address_count',
    //     displayName: 'Users',
    //     round: 0
    // },
    // {
    //     name: 'days_since_first_transaction',
    //     displayName: 'Age',
    //     round: 0
    // },
    // {
    //     name: 'gas_fees_sum',
    //     displayName: 'Gas Fees',
    //     round: 2
    // },
    // {
    //     name: 'gas_fees_sum_6_months',
    //     displayName: '6mo Gas Fees',
    //     round: 2
    // },
    // {
    //     name: 'new_address_count_90_days',
    //     displayName: '90d Acquisition',
    //     round: 0
    // },
    // {
    //     name: 'returning_address_count_90_days',
    //     displayName: '90d Retention',
    //     round: 0
    // },
    // {
    //     name: 'transaction_count',
    //     displayName: 'Total Tx',
    //     round: 0
    // },
    // {
    //     name: 'transaction_count_6_months',
    //     displayName: '6m Tx Count',
    //     round: 0
    // }


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

