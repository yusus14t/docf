import { Line, Doughnut } from 'react-chartjs-2';
import {  Chart as ChartJS, CategoryScale, LinearScale, PointElement,  LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);


const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        
    },
};


export const LineChart = ({ filterType, labelName, chartData }) => {
    const weekLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const data = {
        labels: filterType === 'week' ? weekLabels : monthLabels,
        datasets: [
            {
                label: labelName,
                data: filterType === 'week' ?  chartData.week || [] : chartData.month || [],
                borderColor: '#112C2F',
                backgroundColor: '#112C2F',
                pointRadius: 3,
                borderWidth: 2,
            },
        ],
    };
    return(
        <Line options={chartOptions} data={data} />
    )
}


export const DoughnutChart = () => {

    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'Totals',
            data: [2478,5267,734],
            backgroundColor: ["#0B2447", "#8D72E1","#A5D7E8"],
            borderColor: '#fff',
            borderWidth: 3,
          },
        ],
    }

    return(
        <Doughnut
            options={chartOptions}
            data={data}
        />
    )
}