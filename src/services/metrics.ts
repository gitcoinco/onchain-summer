


 const metricMap: Record<string, string> = {
    'address_count': 'Address Count',
    'days_since_first_transaction': 'Days Since First Transaction',
    'gas_fees_sum': 'Gas Fees Sum',
    'gas_fees_sum_6_months': 'Gas Fees Sum 6 Months',
    'medium_activity_address_count_90_days': '90 Day Medium Activity Address Count',
    'multi_project_address_count_90_days': ' 90 Day Multi Project Address Count',
    'new_address_count_90_days': 'New Address Count 90 Days',
    'returning_address_count_90_days': 'Returning Address Count 90 Days',
    'transaction_count': 'Transaction Count',
    'transaction_count_6_months': 'Transaction Count 6 Months'
}

export function getDisplayName(metric: string) {
    return metricMap[metric] || metric;
}

export function getMetrics() {
    return Object.keys(metricMap);



}

