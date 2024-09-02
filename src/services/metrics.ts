


 const metricMap: Record<string, string> = {
    'address_count': 'Users',
    'days_since_first_transaction': 'Age',
    'gas_fees_sum': 'Gas Fees',
    'gas_fees_sum_6_months': '6mo Gas Fees',
    // 'medium_activity_address_count_90_days': '90d Medium Activity Address Count',
    // 'multi_project_address_count_90_days': ' 90d Multi Project Address Count',
    'new_address_count_90_days': '90d User Acquisition',
    'returning_address_count_90_days': '90d Retention',
    'transaction_count': 'Total Tx',
    'transaction_count_6_months': '6m Tx Count'
}

export function getDisplayName(metric: string) {
    return metricMap[metric] || metric;
}

export function getMetrics() {
    return Object.keys(metricMap);



}

